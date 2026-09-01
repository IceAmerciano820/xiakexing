/**
 * 霞客行 Service Worker — PWA 离线缓存
 * 策略：
 *  - 核心静态资源（HTML/CSS/JS）：Stale-While-Revalidate
 *  - 路线数据（data/）：Cache First，后台更新
 *  - 图标/字体：Cache First
 *  - CDN 外部资源（ECharts/Leaflet）：Network First，回退缓存
 *  - 天气 API / AI API：Network Only（不缓存实时数据）
 *  - 图片：Stale-While-Revalidate，限制缓存数量
 */

const CACHE_VERSION = 'xiake-v2';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DATA_CACHE = `${CACHE_VERSION}-data`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const CDN_CACHE = `${CACHE_VERSION}-cdn`;

const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './data/routes.js',
  './data/routebooks/yubeng.js',
  './data/routebooks/core.js',
  './data/routebooks/generated.js',
  './images/icons/icon-192.png',
  './images/icons/icon-512.png',
  './images/icons/icon-maskable-192.png',
  './images/icons/icon-maskable-512.png',
  './images/icons/apple-touch-icon.png',
  './images/icons/icon.svg'
];

// Max images to cache (LRU eviction)
const MAX_IMAGE_CACHE = 60;
// Max CDN resources to cache
const MAX_CDN_CACHE = 20;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|gif|svg|avif)(\?|$)/i.test(url) ||
    url.includes('images.unsplash.com');
}

function isDataFile(url) {
  return url.pathname.includes('/data/') && url.pathname.endsWith('.js');
}

function isCdnResource(url) {
  const cdnHosts = [
    'cdn.jsdelivr.net',
    'unpkg.com',
    'cdnjs.cloudflare.com',
    'cdn.bootcdn.net',
    'unpkg.zhimg.com'
  ];
  return cdnHosts.some((host) => url.hostname === host);
}

function isGeoJson(url) {
  return url.hostname.includes('datav.aliyun.com') ||
    url.hostname.includes('geojson.cn') ||
    url.hostname.includes('raw.githubusercontent.com');
}

function isApiCall(url) {
  return url.hostname.includes('open-meteo.com') ||
    url.pathname.includes('/api/ai') ||
    url.hostname.includes('api.');
}

/** Trim cache to max entries, deleting oldest first */
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxItems) return;
  const toDelete = keys.slice(0, keys.length - maxItems);
  await Promise.all(toDelete.map((req) => cache.delete(req)));
}

/** Stale-While-Revalidate: return cache immediately, update cache in background */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then((response) => {
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);
  return cached || fetchPromise;
}

/** Cache First: return cache if available, otherwise fetch and cache */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

/** Network First: try network, fall back to cache */
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // API calls: network only, don't cache
  if (isApiCall(url)) return;

  // Same-origin static assets (HTML, CSS, JS app code)
  if (url.origin === self.location.origin) {
    if (isDataFile(url)) {
      event.respondWith(cacheFirst(request, DATA_CACHE));
      return;
    }
    if (isImage(url)) {
      event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
      event.waitUntil(trimCache(IMAGE_CACHE, MAX_IMAGE_CACHE));
      return;
    }
    // HTML/CSS/JS and other same-origin: SWR
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }

  // CDN resources (ECharts, Leaflet): network first
  if (isCdnResource(url)) {
    event.respondWith(networkFirst(request, CDN_CACHE));
    event.waitUntil(trimCache(CDN_CACHE, MAX_CDN_CACHE));
    return;
  }

  // GeoJSON data: cache first (rarely changes)
  if (isGeoJson(url)) {
    event.respondWith(cacheFirst(request, CDN_CACHE));
    return;
  }

  // External images (Unsplash etc.): SWR with cap
  if (isImage(url)) {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
    event.waitUntil(trimCache(IMAGE_CACHE, MAX_IMAGE_CACHE));
    return;
  }
});

// Listen for skip waiting message from app
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
