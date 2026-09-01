const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#efe5d1"/><stop offset="1" stop-color="#d4c2a2"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/><text x="50%" y="50%" fill="#81251d" font-size="64" font-family="STKaiti, KaiTi, serif" text-anchor="middle">霞客</text></svg>'
    );

    

    const WEATHER_CODES = {
      0: ["晴", "☀️"], 1: ["基本晴朗", "🌤️"], 2: ["局部多云", "⛅"], 3: ["阴", "☁️"],
      45: ["雾", "🌫️"], 48: ["雾凇", "🌫️"], 51: ["小毛毛雨", "🌦️"], 53: ["毛毛雨", "🌦️"],
      55: ["浓毛毛雨", "🌦️"], 56: ["冻毛毛雨", "🌧️"], 57: ["强冻毛毛雨", "🌧️"],
      61: ["小雨", "🌦️"], 63: ["中雨", "🌧️"], 65: ["大雨", "🌧️"], 66: ["冻雨", "🌧️"],
      67: ["强冻雨", "🌧️"], 71: ["小雪", "🌨️"], 73: ["中雪", "🌨️"], 75: ["大雪", "❄️"],
      77: ["雪粒", "🌨️"], 80: ["阵雨", "🌦️"], 81: ["强阵雨", "🌧️"], 82: ["暴雨", "⛈️"],
      85: ["阵雪", "🌨️"], 86: ["强阵雪", "❄️"], 95: ["雷暴", "⛈️"], 96: ["雷暴伴冰雹", "⛈️"],
      99: ["强雷暴伴冰雹", "⛈️"]
    };

    const DIFFICULTY = { 1: "入门", 2: "休闲", 3: "进阶", 4: "挑战", 5: "极限" };
    const DIFF_STARS = { 1: "★", 2: "★★", 3: "★★★", 4: "★★★★", 5: "★★★★★" };
    const ROUTEBOOKS = window.ROUTEBOOKS || {};

    const state = {
      region: "",
      season: "",
      difficulty: "",
      search: "",
      favorites: new Set(JSON.parse(localStorage.getItem("xiake_favorites") || localStorage.getItem("shanye_favorites") || "[]")),
      wishlist: new Set(JSON.parse(localStorage.getItem("xiake_wishlist") || "[]")),
      completed: new Set(JSON.parse(localStorage.getItem("xiake_completed") || "[]")),
      favoritesOnly: false,
      statusFilter: "",
      weatherRouteId: null
    };

    let chinaMapInstance = null;
    let aiRequestController = null;
    const AI_DEFAULT_SYSTEM_PROMPT = "你是「霞客」徒步路线助手，像徐霞客一样专业地游历山水。请基于给定路线库，推荐适合用户偏好的路线。优先考虑季节适配、难度匹配和安全性，输出简洁、可执行的建议。不要虚构路线库之外的地点。";
    let weatherTimer = null;
    let weatherRequestController = null;
    let activeWeatherRoute = null;
    let lastWeatherUpdate = null;
    let searchDebounceTimer = null;
    let chinaMapStarted = false;
    const WEATHER_REFRESH_MS = 10 * 60 * 1000;

    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => Array.from(document.querySelectorAll(sel));

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    }

    function setFavCount() {
      $("#favCount").textContent = `收藏 ${state.favorites.size}`;
      const isActive = state.statusFilter === "saved";
      $("#favFilterBtn").classList.toggle("btn-primary", isActive);
      $("#favFilterBtn").textContent = isActive ? "查看全部路线" : "只看收藏";
    }

    function saveUserRouteState() {
      localStorage.setItem("xiake_favorites", JSON.stringify(Array.from(state.favorites)));
      localStorage.setItem("xiake_wishlist", JSON.stringify(Array.from(state.wishlist)));
      localStorage.setItem("xiake_completed", JSON.stringify(Array.from(state.completed)));
      localStorage.removeItem("shanye_favorites");
      setFavCount();
    }

    function setRouteStatus(id, status) {
      const sets = {
        saved: state.favorites,
        wishlist: state.wishlist,
        completed: state.completed
      };
      if (sets[status].has(id)) {
        sets[status].delete(id);
      } else {
        Object.values(sets).forEach((set) => set.delete(id));
        sets[status].add(id);
      }
      saveUserRouteState();
    }

    function hasRouteStatus(id, status) {
      if (status === "saved") return state.favorites.has(id);
      if (status === "wishlist") return state.wishlist.has(id);
      if (status === "completed") return state.completed.has(id);
      return false;
    }

    function toggleFavorite(id, event) {
      if (event) event.stopPropagation();
      setRouteStatus(id, "saved");
      renderRoutes();
    }

    function initSelectors() {
      const regions = Array.from(new Set(ROUTES.map((r) => r.region)));
      $("#regionFilter").innerHTML = '<option value="">全部地区</option>' +
        regions.map((r) => `<option value="${r}">${r}</option>`).join("");

      $("#routeStat").textContent = ROUTES.length;
      $("#regionStat").textContent = regions.length;
      $("#scoreStat").textContent = (ROUTES.reduce((s, r) => s + r.score, 0) / ROUTES.length).toFixed(1);
      setFavCount();
    }

    function getFilteredRoutes() {
      const q = state.search.trim().toLowerCase();
      return ROUTES.filter((route) => {
        const matchRegion = !state.region || route.region === state.region;
        const matchSeason = !state.season || route.bestSeasons.includes(state.season);
        const matchDifficulty = !state.difficulty || Number(route.difficulty) === Number(state.difficulty);
        const statusSets = {
          saved: state.favorites,
          wishlist: state.wishlist,
          completed: state.completed
        };
        const matchStatus = !state.statusFilter || (statusSets[state.statusFilter] && statusSets[state.statusFilter].has(route.id));
        const haystack = [route.name, route.subtitle, route.region, route.summary, route.tags.join(" "), route.highlights.join(" ")].join(" ").toLowerCase();
        const matchSearch = !q || haystack.includes(q) || route.id.includes(q);
        return matchRegion && matchSeason && matchDifficulty && matchStatus && matchSearch;
      });
    }

    function localRouteImage(route, index = 0) {
      const number = String(index + 1).padStart(2, "0");
      return `images/routes/${route.id}/${number}.jpg`;
    }

    // Number of real on-site photos bundled with the site (generated manifest)
    function routePhotoCount(route) {
      if (window.ROUTE_PHOTOS && window.ROUTE_PHOTOS[route.id]) return window.ROUTE_PHOTOS[route.id];
      return route.images ? route.images.length : 0;
    }

    // Themed gradient placeholder that evokes the region (always works, no network)
    const SCENE_THEMES = [
      { sky: ["#2b5876", "#4e8aa8"], far: "#3e6b54", mid: "#2d5040", ground: "#1f3829", emoji: "🏔️" },
      { sky: ["#c96f3a", "#f0b35e"], far: "#8a5a34", mid: "#6b4423", ground: "#4a2f18", emoji: "🌄" },
      { sky: ["#3a6ea5", "#a8d0e6"], far: "#5c8a7a", mid: "#3d6b5b", ground: "#2a4a3d", emoji: "⛰️" },
      { sky: ["#4b3f6b", "#8e7cc3"], far: "#5d6d7e", mid: "#3d4a5c", ground: "#283040", emoji: "🌃" },
      { sky: ["#1d5c63", "#5fa8a0"], far: "#3a7d6e", mid: "#27584d", ground: "#183d35", emoji: "🌲" },
      { sky: ["#8c3a3a", "#d98e6e"], far: "#9c5a4a", mid: "#724035", ground: "#4d2a22", emoji: "🍂" },
      { sky: ["#2a4d7a", "#9fc5e8"], far: "#44738f", mid: "#2e5268", ground: "#1d3645", emoji: "🌊" }
    ];
    function hashStr(s) {
      let h = 0;
      for (let i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; }
      return Math.abs(h);
    }
    function themedImage(route, index = 0) {
      const h = hashStr((route.id || "x") + index);
      const t = SCENE_THEMES[h % SCENE_THEMES.length];
      const peak1 = 150 + (h % 60), peak2 = 180 + ((h >> 3) % 50), peak3 = 130 + ((h >> 5) % 70);
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="${t.sky[0]}"/><stop offset="1" stop-color="${t.sky[1]}"/>
</linearGradient></defs>
<rect width="800" height="600" fill="url(#sky)"/>
<circle cx="${620 + (h % 80)}" cy="${90 + (h % 60)}" r="42" fill="rgba(255,255,255,0.35)"/>
<polygon points="0,${380} ${180 + (h % 90)},${peak1} ${360 + (h % 60)},${peak2} ${540},${peak3} 800,360 800,600 0,600" fill="${t.far}" opacity="0.75"/>
<polygon points="0,450 200,${peak2 + 40} 430,${peak1 + 60} 650,420 800,470 800,600 0,600" fill="${t.mid}"/>
<polygon points="0,520 260,470 520,530 800,490 800,600 0,600" fill="${t.ground}"/>
<text x="40" y="540" font-size="120" opacity="0.55">${t.emoji}</text>
<text x="400" y="88" font-size="46" font-family="STKaiti,KaiTi,serif" fill="rgba(255,255,255,0.92)" text-anchor="middle" letter-spacing="6">${escapeHtml(route.name || "霞客行")}</text>
</svg>`;
      return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    }

    // Real photo source reachable in China (deterministic per route), then themed SVG.
    function routeImageChain(route, index = 0) {
      const chain = [];
      const local = localRouteImage(route, index);
      if (local) chain.push(local);
      chain.push(`https://picsum.photos/seed/xiake-${encodeURIComponent(route.id || "route")}-${index}/800/600`);
      chain.push(themedImage(route, index));
      return chain;
    }

    // Global image fallback machinery (chains survive onerror without quote escaping)
    window.__imgChains = window.__imgChains || {};
    window.__armImage = (img) => {
      if (!img || !img.getAttribute("data-chain")) return;
      if (img.__armed) return;
      img.__armed = true;
      const start = () => {
        if (img.__watchdog) clearTimeout(img.__watchdog);
        // Guard against sources that hang without firing error (blocked CDNs)
        img.__watchdog = setTimeout(() => {
          if (!img.complete || img.naturalWidth === 0) { window.__imgFail(img); }
        }, 7000);
      };
      img.addEventListener("load", () => { if (img.__watchdog) clearTimeout(img.__watchdog); });
      img.addEventListener("error", () => {
        if (img.__watchdog) clearTimeout(img.__watchdog);
        window.__imgFail(img);
      });
      if (!img.complete) start();
    };
    window.__imgFail = (img) => {
      const chain = window.__imgChains[img.getAttribute("data-chain")];
      if (!chain) return;
      const idx = parseInt(img.dataset.fidx || "-1", 10) + 1;
      if (idx < chain.length) {
        img.dataset.fidx = String(idx);
        img.src = chain[idx];
        // re-arm watchdog for the next attempt
        if (img.__watchdog) clearTimeout(img.__watchdog);
        img.__watchdog = setTimeout(() => {
          if (!img.complete || img.naturalWidth === 0) { window.__imgFail(img); }
        }, 7000);
      }
    };
    let __chainSeq = 0;
    function imgWithChain(chain, alt) {
      const key = "c" + (++__chainSeq);
      window.__imgChains[key] = chain;
      const altText = escapeHtml(alt || "");
      return `<img src="${chain[0]}" alt="${altText}" loading="lazy" decoding="async" width="400" height="300" data-chain="${key}" data-fidx="-1" />`;
    }

    function imageWithFallback(route, index = 0, alt = "") {
      return imgWithChain(routeImageChain(route, index), alt || route.name);
    }

    function cardImage(route) {
      return imageWithFallback(route, 0);
    }

    // Watch for newly inserted images and arm their watchdogs
    document.addEventListener("DOMContentLoaded", () => {
      const scan = (root) => {
        root.querySelectorAll("img[data-chain]").forEach((img) => window.__armImage(img));
      };
      scan(document);
      new MutationObserver((muts) => {
        muts.forEach((m) => m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) {
            if (n.matches && n.matches("img[data-chain]")) window.__armImage(n);
            if (n.querySelectorAll) scan(n);
          }
        }));
      }).observe(document.body, { childList: true, subtree: true });
    });

    function renderRoutes() {
      const routes = getFilteredRoutes();
      const grid = $("#routeGrid");
      const empty = $("#emptyState");
      $("#resultCount").textContent = `共 ${routes.length} 条路线`;
      updateChinaMap(routes);
      if (!routes.length) {
        grid.innerHTML = "";
        empty.classList.add("visible");
        return;
      }
      empty.classList.remove("visible");
      grid.innerHTML = routes.map((route) => {
        const isFav = state.favorites.has(route.id);
        const isWish = state.wishlist.has(route.id);
        const isDone = state.completed.has(route.id);
        const credibility = ROUTEBOOKS[route.id]?.credibility;
        return `
          <article class="route-card" data-id="${route.id}" role="button" tabindex="0" aria-label="查看${escapeHtml(route.name)}攻略">
            <div class="card-img">
              <span class="region-pill">${route.region}</span>
              <button class="fav-btn ${isFav ? "active" : ""}" data-fav="${route.id}" type="button" aria-label="${isFav ? "取消收藏" : "收藏"}">${isFav ? "♥" : "♡"}</button>
              ${cardImage(route)}
            </div>
            <div class="card-body">
              <div class="card-title">
                <h3>${escapeHtml(route.name)}</h3>
                <span title="${route.score} 分">${route.score.toFixed(1)}</span>
              </div>
              <div class="card-subtitle">${escapeHtml(route.subtitle)}</div>
              <div class="badges">
                <span class="badge">${DIFFICULTY[route.difficulty]} · ${DIFF_STARS[route.difficulty]}</span>
                ${route.bestSeasons.map((s) => `<span class="badge warm">${s}季</span>`).join("")}
                ${credibility ? `<span class="badge credibility cred-${credibility}">可信度 ${credibility}</span>` : ""}
                ${isWish ? `<span class="badge status-wish">想去</span>` : ""}
                ${isDone ? `<span class="badge status-done">已走过</span>` : ""}
              </div>
              <div class="card-stats">
                <div><b>${route.days}</b><span>时长</span></div>
                <div><b>${route.distance}</b><span>公里</span></div>
                <div><b>${route.highest}</b><span>最高海拔</span></div>
                <div><b>${route.tags.length}</b><span>标签</span></div>
              </div>
            </div>
          </article>
        `;
      }).join("");

    }

    function renderWeather(route) {
      if (!route) return;
      state.weatherRouteId = route.id;
      activeWeatherRoute = route;
      $("#weatherLoc").textContent = `${route.region} · ${route.name}`;
      $("#weatherEmoji").textContent = "⛅";
      $("#weatherTemp").textContent = "--°";
      $("#weatherDesc").textContent = "正在获取天气…";
      $("#weatherMeta").textContent = "";
      $("#weatherUpdatedAt").textContent = "正在连接实时天气…";
      $("#weatherLiveDot").className = "live-dot";
      $("#weatherForecast").innerHTML = '<div class="weather-hint">天气数据来自 Open-Meteo 公开接口，按所选路线坐标获取。</div>';
      loadWeather(route);
      scheduleWeatherAutoRefresh();
    }

    async function loadWeather(route) {
      if (weatherRequestController) weatherRequestController.abort();
      weatherRequestController = new AbortController();
      try {
        const url = new URL("https://api.open-meteo.com/v1/forecast");
        url.searchParams.set("latitude", route.lat);
        url.searchParams.set("longitude", route.lon);
        url.searchParams.set("current", "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m");
        url.searchParams.set("daily", "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max");
        url.searchParams.set("timezone", "Asia/Shanghai");
        url.searchParams.set("forecast_days", "7");

        const res = await fetch(url.toString(), { signal: weatherRequestController.signal });
        if (!res.ok) throw new Error("天气请求失败");
        const data = await res.json();
        const current = data.current || {};
        const daily = data.daily || {};
        const [desc, emoji] = WEATHER_CODES[current.weather_code] || ["未知天气", "⛅"];
        $("#weatherEmoji").textContent = emoji;
        $("#weatherTemp").textContent = `${Math.round(current.temperature_2m)}°`;
        $("#weatherDesc").textContent = desc;
        $("#weatherMeta").textContent = `体感 ${Math.round(current.apparent_temperature)}° · 湿度 ${current.relative_humidity_2m}% · 风 ${Math.round(current.wind_speed_10m)} km/h · 降水 ${current.precipitation ?? 0} mm`;
        lastWeatherUpdate = new Date();
        updateWeatherStatus();

        const time = daily.time || [];
        $("#weatherForecast").innerHTML = time.slice(0, 7).map((date, index) => {
          const code = daily.weather_code?.[index] ?? 0;
          const [dayDesc, dayEmoji] = WEATHER_CODES[code] || ["未知", "⛅"];
          const dayLabel = new Date(date + "T00:00:00").toLocaleDateString("zh-CN", { month: "numeric", day: "numeric", weekday: "short" });
          return `
            <div class="day" title="${dayDesc}">
              <b>${dayLabel}</b>
              <div class="day-emoji">${dayEmoji}</div>
              <span>${Math.round(daily.temperature_2m_max?.[index] ?? 0)}° / ${Math.round(daily.temperature_2m_min?.[index] ?? 0)}°</span>
            </div>
          `;
        }).join("");

        // Update weather-aware gear recommendations if modal is open for this route
        const weatherData = {
          tempMax: daily.temperature_2m_max?.[0],
          tempMin: daily.temperature_2m_min?.[0],
          precip: daily.precipitation_sum?.[0],
          wind: current.wind_speed_10m
        };
        const gearSlot = document.getElementById("weatherGearSlot");
        if (gearSlot && state.weatherRouteId === activeWeatherRoute?.id) {
          gearSlot.innerHTML = renderWeatherGear(activeWeatherRoute, weatherData);
        }
      } catch (error) {
        if (error.name === "AbortError") return;
        console.warn(error);
        $("#weatherDesc").textContent = "天气服务暂不可用";
        $("#weatherMeta").textContent = "请检查网络连接，稍后重试。";
        $("#weatherForecast").innerHTML = '<div class="weather-hint">实时天气加载失败。路线攻略和筛选仍可正常使用。</div>';
        updateWeatherStatus(true);
      }
    }

    function updateWeatherStatus(isError = false) {
      const dot = $("#weatherLiveDot");
      const label = $("#weatherUpdatedAt");
      dot.className = `live-dot${isError ? " error" : ""}`;
      if (isError) {
        label.textContent = "实时更新失败";
        return;
      }
      if (!lastWeatherUpdate) {
        label.textContent = "等待实时更新";
        return;
      }
      const time = lastWeatherUpdate.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
      label.textContent = `最后更新 ${time} · 每 10 分钟自动更新`;
    }

    function scheduleWeatherAutoRefresh() {
      if (weatherTimer) clearInterval(weatherTimer);
      weatherTimer = setInterval(() => {
        if (activeWeatherRoute && !document.hidden) {
          loadWeather(activeWeatherRoute);
        }
      }, WEATHER_REFRESH_MS);
    }

    function refreshWeatherNow() {
      if (activeWeatherRoute) {
        $("#weatherUpdatedAt").textContent = "正在刷新…";
        loadWeather(activeWeatherRoute);
      }
    }

    function loadScript(srcs) {
      // srcs can be a string or an array of URLs (tried in order for CDN fallback)
      const list = Array.isArray(srcs) ? srcs : [srcs];
      return new Promise((resolve, reject) => {
        let idx = 0;
        const tryNext = () => {
          if (idx >= list.length) {
            reject(new Error(`Failed to load script from all sources: ${list.join(", ")}`));
            return;
          }
          const src = list[idx++];
          // Skip if already loaded
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          const timer = setTimeout(() => {
            script.remove();
            tryNext();
          }, 12000);
          script.onload = () => { clearTimeout(timer); resolve(); };
          script.onerror = () => { clearTimeout(timer); tryNext(); };
          document.head.appendChild(script);
        };
        tryNext();
      });
    }

    function loadStylesheet(href) {
      return new Promise((resolve) => {
        if (document.querySelector(`link[href="${href}"]`)) {
          resolve();
          return;
        }
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.onload = resolve;
        link.onerror = resolve; // Don't block on CSS failure
        document.head.appendChild(link);
      });
    }

    function loadLeaflet() {
      const leafletVersion = "1.9.4";
      const cssCDNs = [
        `https://cdn.bootcdn.net/ajax/libs/leaflet/${leafletVersion}/leaflet.css`,
        `https://cdn.staticfile.net/leaflet/${leafletVersion}/leaflet.css`,
        `https://cdn.jsdelivr.net/npm/leaflet@${leafletVersion}/dist/leaflet.css`
      ];
      const jsCDNs = [
        `https://cdn.bootcdn.net/ajax/libs/leaflet/${leafletVersion}/leaflet.js`,
        `https://cdn.staticfile.net/leaflet/${leafletVersion}/leaflet.js`,
        `https://cdn.jsdelivr.net/npm/leaflet@${leafletVersion}/dist/leaflet.js`
      ];
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        loadStylesheet(cssCDNs[0]);
      }
      if (window.L) return Promise.resolve(window.L);
      return loadScript(jsCDNs).then(() => window.L);
    }

    // ---------- Elevation Profile Generator ----------
    // Inspired by TrailScope & leaflet-elevation: generate synthetic elevation
    // profile from route data when no GPX track is available.
    function generateElevationProfile(route) {
      const dist = route.distance || 10;
      const gain = route.elevationGain || 500;
      const highest = route.highest || 2000;
      const lowest = Math.max(0, highest - gain * 1.2);
      const points = Math.max(20, Math.min(80, Math.round(dist * 2)));
      const profile = [];
      // Deterministic pseudo-random based on route id so profile is stable
      let seed = 0;
      for (let i = 0; i < route.id.length; i++) seed += route.id.charCodeAt(i);
      const rand = (i) => {
        const x = Math.sin(seed + i * 12.9898) * 43758.5453;
        return x - Math.floor(x);
      };
      // Build a realistic profile: start low, climb to highest near 60-75%, then descend
      const peakPos = 0.6 + rand(0) * 0.15;
      for (let i = 0; i <= points; i++) {
        const t = i / points;
        const distKm = +(t * dist).toFixed(1);
        let elev;
        if (t < peakPos) {
          const p = t / peakPos;
          elev = lowest + (highest - lowest) * Math.pow(p, 0.85);
        } else {
          const p = (t - peakPos) / (1 - peakPos);
          elev = highest - (highest - lowest * 0.9) * Math.pow(p, 0.75);
        }
        // Add terrain noise
        elev += (rand(i + 1) - 0.5) * gain * 0.06;
        elev = Math.round(Math.max(lowest * 0.8, elev));
        profile.push({ distance: distKm, elevation: elev });
      }
      return profile;
    }

    function renderElevationProfileForRoute(route) {
      const profile = generateElevationProfile(route);
      const width = 800;
      const height = 200;
      const pad = 36;
      const maxDist = profile[profile.length - 1].distance;
      const minEl = Math.min(...profile.map((p) => p.elevation));
      const maxEl = Math.max(...profile.map((p) => p.elevation));
      const range = Math.max(1, maxEl - minEl);
      const x = (d) => pad + (d / maxDist) * (width - pad * 2);
      const y = (e) => height - pad - ((e - minEl) / range) * (height - pad * 2);
      const pts = profile.map((p) => `${x(p.distance).toFixed(1)},${y(p.elevation).toFixed(1)}`).join(" ");
      const areaPath = `M${x(0).toFixed(1)},${height - pad} L${pts.split(" ").join(" L")} L${x(maxDist).toFixed(1)},${height - pad} Z`;
      // Find peak and label it
      const peak = profile.reduce((a, b) => (b.elevation > a.elevation ? b : a));
      // Grid lines
      const gridLines = [0.25, 0.5, 0.75].map((f) => {
        const ey = y(minEl + range * f);
        const ev = Math.round(minEl + range * f);
        return `<line x1="${pad}" y1="${ey}" x2="${width - pad}" y2="${ey}" stroke="#d4c2a2" stroke-width="0.5" stroke-dasharray="4,3"/>
                <text x="${pad - 6}" y="${ey + 4}" text-anchor="end" font-size="11" fill="#776b59">${ev}m</text>`;
      }).join("");
      return `
        <div class="elevation-profile">
          <div class="profile-header">
            <span>⛰️ 海拔剖面</span>
            <small>最高 ${maxEl}m · 累计爬升 ~${route.elevationGain}m · 全程 ${route.distance}km</small>
          </div>
          <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(route.name)}海拔剖面图" preserveAspectRatio="xMidYMid meet">
            ${gridLines}
            <path d="${areaPath}" fill="rgba(129,37,29,0.10)" stroke="none"/>
            <polyline points="${pts}" fill="none" stroke="#81251d" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="${x(peak.distance)}" cy="${y(peak.elevation)}" r="4" fill="#81251d"/>
            <text x="${x(peak.distance)}" y="${y(peak.elevation) - 10}" text-anchor="middle" font-size="12" font-weight="bold" fill="#81251d">▲ ${peak.elevation}m</text>
            <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#7a6b55" stroke-width="1"/>
            <text x="${pad}" y="${height - 10}" font-size="11" fill="#776b59">0km</text>
            <text x="${width - pad}" y="${height - 10}" text-anchor="end" font-size="11" fill="#776b59">${maxDist}km</text>
          </svg>
          <p class="profile-note">海拔剖面基于路线距离、累计爬升和最高海拔生成，实际地形可能有差异。</p>
        </div>
      `;
    }

    // ---------- Naismith's Rule Hiking Time Estimator ----------
    // Adapted from TrailScope: Naismith's Rule with steep terrain correction
    function estimateHikingTime(route) {
      const distKm = route.distance || 0;
      const gainM = route.elevationGain || 0;
      // Naismith: 5km/h base + 1 hour per 600m ascent
      const baseHours = distKm / 5;
      const climbHours = gainM / 600;
      // Difficulty modifier
      const diffMod = [1.0, 1.15, 1.3, 1.5, 1.8, 2.2][route.difficulty] || 1.3;
      const totalHours = (baseHours + climbHours) * diffMod;
      const hours = Math.floor(totalHours);
      const mins = Math.round((totalHours - hours) * 60);
      // Fitness level (1=easy 5=strenuous)
      const fitness = Math.min(5, Math.ceil(totalHours / 2.5));
      // Calorie estimate (kcal): ~0.6 kcal per kg per km hiking + ascent factor
      const weight = 70; // default hiker weight
      const kcal = Math.round((distKm * 0.6 * weight) + (gainM * 0.01 * weight));
      // Water estimate
      const water = Math.max(1.5, (totalHours / 2) * 0.75).toFixed(1);
      return {
        hours,
        mins,
        totalHours: totalHours.toFixed(1),
        fitness,
        kcal,
        water: `${water}L`,
        fitnessLabel: ["很轻松", "轻松", "适中", "较累", "很累", "极限"][fitness - 1] || "适中"
      };
    }

    function renderTimeEstimate(route) {
      const est = estimateHikingTime(route);
      const stars = "⚡".repeat(est.fitness) + "⚪".repeat(5 - est.fitness);
      return `
        <div class="time-estimate">
          <h4>⏱️ 徒步时间估算</h4>
          <div class="estimate-grid">
            <div class="estimate-box">
              <b>${est.hours}h${est.mins > 0 ? ` ${est.mins}min` : ""}</b>
              <span>预计总时长</span>
            </div>
            <div class="estimate-box">
              <b>${est.kcal}</b>
              <span>消耗热量(kcal)</span>
            </div>
            <div class="estimate-box">
              <b>${est.water}</b>
              <span>建议饮水量</span>
            </div>
          </div>
          <div class="fitness-bar">
            <span class="fitness-label">体能强度：${est.fitnessLabel}</span>
            <span class="fitness-stars">${stars}</span>
          </div>
          <p class="estimate-note">基于 Naismith 规则 + 难度系数估算（按70kg体重），实际时间受天气、负重、体能影响。</p>
        </div>
      `;
    }

    // ---------- Weather-Aware Gear Recommendations ----------
    // Adapted from TrailScope: adjust gear list based on route + weather
    function getWeatherAwareGear(route, weatherData) {
      const gear = buildDetailedGear(route).flatMap((g) => g.items || []);
      const extras = [];
      const temp = weatherData?.tempMax;
      const precip = weatherData?.precip;
      const wind = weatherData?.wind;

      if (route.highest >= 3500) {
        extras.push({ item: "羽绒服/厚抓绒", reason: "高海拔保暖", priority: "essential" });
        extras.push({ item: "高反药物（红景天/葡萄糖）", reason: "海拔3500m+", priority: "essential" });
        extras.push({ item: "防晒霜 SPF50+", reason: "高海拔紫外线强", priority: "recommended" });
      }
      if (route.highest >= 4500) {
        extras.push({ item: "备用氧气", reason: "极高海拔", priority: "essential" });
      }
      if (temp !== undefined) {
        if (temp >= 30) {
          extras.push({ item: "电解质泡腾片", reason: `高温${temp}°C防中暑`, priority: "essential" });
          extras.push({ item: "遮阳帽/冰袖", reason: "防暑防晒", priority: "recommended" });
        }
        if (temp <= 5) {
          extras.push({ item: "保暖帽+手套", reason: `低温${temp}°C`, priority: "essential" });
          extras.push({ item: "暖宝宝", reason: "低温保暖", priority: "recommended" });
        }
      }
      if (precip !== undefined && precip > 2) {
        extras.push({ item: "防水袋/背包防雨罩", reason: `预报降水${precip}mm`, priority: "essential" });
        extras.push({ item: "速干替换衣物", reason: "雨天保持干燥", priority: "recommended" });
      }
      if (wind !== undefined && wind >= 30) {
        extras.push({ item: "防风外套", reason: `风速${wind}km/h`, priority: "essential" });
      }
      if (route.difficulty >= 4) {
        extras.push({ item: "卫星通信设备/GPS", reason: "高难度路线安全保障", priority: "essential" });
        extras.push({ item: "急救包（含绷带/保温毯）", reason: "长距离荒野急救", priority: "essential" });
      }
      // Deduplicate
      const seen = new Set(gear.map((g) => g.item || g));
      const unique = extras.filter((e) => !seen.has(e.item));
      return { base: gear, extras: unique };
    }

    function renderWeatherGear(route, weatherData) {
      const { extras } = getWeatherAwareGear(route, weatherData);
      if (!extras.length) return "";
      const essential = extras.filter((e) => e.priority === "essential");
      const recommended = extras.filter((e) => e.priority === "recommended");
      return `
        <div class="weather-gear-alert">
          <h4>🌡️ 根据天气推荐额外装备</h4>
          ${essential.length ? `<div class="gear-alert-group essential">
            <b>必备：</b>
            <ul>${essential.map((e) => `<li><b>${escapeHtml(e.item)}</b> — ${escapeHtml(e.reason)}</li>`).join("")}</ul>
          </div>` : ""}
          ${recommended.length ? `<div class="gear-alert-group recommended">
            <b>建议：</b>
            <ul>${recommended.map((e) => `<li><b>${escapeHtml(e.item)}</b> — ${escapeHtml(e.reason)}</li>`).join("")}</ul>
          </div>` : ""}
        </div>
      `;
    }

    // ---------- Difficulty Color Coding for Tracks ----------
    const DIFFICULTY_COLORS = {
      1: "#22c55e", // easy - green
      2: "#84cc16", // casual - lime
      3: "#f59e0b", // moderate - amber
      4: "#f97316", // hard - orange
      5: "#ef4444"  // extreme - red
    };

    async function initTrackMap(geojsonPath, book) {
      const container = document.querySelector("#modalMain .track-map");
      if (!container || !geojsonPath) return;
      container.innerHTML = '<div class="weather-hint">轨迹地图加载中…</div>';
      try {
        const L = await loadLeaflet();
        const response = await fetch(geojsonPath);
        if (!response.ok) throw new Error("轨迹文件加载失败");
        const data = await response.json();
        container.innerHTML = "";
        const map = L.map(container, { zoomControl: true, attributionControl: true }).setView([35, 105], 5);

        // China-friendly basemap: Gaode (AMap) tiles are fast and stable in China.
        const gaodeLayer = L.tileLayer("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
          subdomains: ["1", "2", "3", "4"],
          maxZoom: 18,
          attribution: "&copy; 高德地图"
        });
        const topoLayer = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
          maxZoom: 17,
          attribution: "&copy; OpenTopoMap (CC-BY-SA)"
        });
        const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "&copy; OpenStreetMap contributors"
        });
        gaodeLayer.addTo(map);

        // Auto-fallback: if terrain tiles fail (often blocked in CN), use Gaode
        topoLayer.on("tileerror", () => {
          if (map.hasLayer(topoLayer)) { map.removeLayer(topoLayer); gaodeLayer.addTo(map); }
        });
        osmLayer.on("tileerror", () => {
          if (map.hasLayer(osmLayer)) { map.removeLayer(osmLayer); gaodeLayer.addTo(map); }
        });

        L.control.layers({
          "标准地图（高德）": gaodeLayer,
          "地形图": topoLayer,
          "OSM": osmLayer
        }, null, { position: "topright", collapsed: true }).addTo(map);

        const trackColor = DIFFICULTY_COLORS[book?.difficulty] || "#81251d";

        // WGS84 -> GCJ-02 conversion so tracks align with Gaode tiles
        const gcjLatlng = (lat, lng) => {
          const transformLat = (x, y) => {
            let r = -100 + 2 * x + 3 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
            r += (20 * Math.sin(6 * x * Math.PI) + 20 * Math.sin(2 * x * Math.PI)) * 2 / 3;
            r += (20 * Math.sin(y * Math.PI) + 40 * Math.sin(y / 3 * Math.PI)) * 2 / 3;
            r += (160 * Math.sin(y / 12 * Math.PI) + 320 * Math.sin(y * Math.PI / 30)) * 2 / 3;
            return r;
          };
          const transformLng = (x, y) => {
            let r = 300 + x + 2 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
            r += (20 * Math.sin(6 * x * Math.PI) + 20 * Math.sin(2 * x * Math.PI)) * 2 / 3;
            r += (20 * Math.sin(x * Math.PI) + 40 * Math.sin(x / 3 * Math.PI)) * 2 / 3;
            r += (150 * Math.sin(x / 12 * Math.PI) + 300 * Math.sin(x / 30 * Math.PI)) * 2 / 3;
            return r;
          };
          const a = 6378245, ee = 0.006693421622965943;
          let dLat = transformLat(lng - 105, lat - 35);
          let dLng = transformLng(lng - 105, lat - 35);
          const radLat = lat / 180 * Math.PI;
          let magic = Math.sin(radLat);
          magic = 1 - ee * magic * magic;
          const sqrtMagic = Math.sqrt(magic);
          dLat = (dLat * 180) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);
          dLng = (dLng * 180) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);
          return [lat + dLat, lng + dLng];
        };

        const trackStyle = { color: trackColor, weight: 4, opacity: 0.9 };
        const trackWgs = L.geoJSON(data, { style: trackStyle });
        const trackGcj = L.geoJSON(data, {
          style: trackStyle,
          coordsToLatLng: (coords) => {
            const p = gcjLatlng(coords[1], coords[0]);
            return L.latLng(p[0], p[1]);
          }
        });
        trackGcj.addTo(map);
        map.fitBounds(trackWgs.getBounds(), { padding: [26, 26] });

        // Checkpoint markers (build in both coordinate systems, toggle with basemap)
        const cpWgs = L.layerGroup();
        const cpGcj = L.layerGroup();
        if (Array.isArray(book.checkpoints)) {
          book.checkpoints.forEach((point) => {
            if (Number.isFinite(point.lat) && Number.isFinite(point.lon)) {
              const mkOpts = {
                radius: point.emergencyExit ? 6 : 5,
                color: "#2a2118",
                weight: 1,
                fillColor: point.emergencyExit ? "#c5962e" : trackColor,
                fillOpacity: 0.9
              };
              const popup = `<b>${point.name}</b><br/>${point.elevation}m · ${point.distance}km`;
              L.circleMarker([point.lat, point.lon], mkOpts).bindPopup(popup).addTo(cpWgs);
              const gcj = gcjLatlng(point.lat, point.lon);
              L.circleMarker(gcj, mkOpts).bindPopup(popup).addTo(cpGcj);
            }
          });
        }
        cpGcj.addTo(map);

        const useGc = () => {
          if (map.hasLayer(gaodeLayer)) {
            map.addLayer(cpGcj); map.removeLayer(cpWgs);
            map.addLayer(trackGcj); map.removeLayer(trackWgs);
          } else {
            map.addLayer(cpWgs); map.removeLayer(cpGcj);
            map.addLayer(trackWgs); map.removeLayer(trackGcj);
          }
        };
        gaodeLayer.on("add", () => { useGc(); });
        topoLayer.on("add", () => { map.addLayer(cpWgs); map.removeLayer(cpGcj); map.addLayer(trackWgs); map.removeLayer(trackGcj); });
        osmLayer.on("add", () => { map.addLayer(cpWgs); map.removeLayer(cpGcj); map.addLayer(trackWgs); map.removeLayer(trackGcj); });
        useGc();
      } catch (error) {
        console.warn(error);
        container.innerHTML = '<div class="weather-hint">轨迹地图加载失败，请检查网络或轨迹文件。</div>';
      }
    }

    // ---------- Map resilience helpers ----------
    const ECHARTS_CDNS = [
      "https://cdn.bootcdn.net/ajax/libs/echarts/5.5.0/echarts.min.js",
      "https://cdn.staticfile.net/echarts/5.5.0/echarts.min.js",
      "https://lib.baomitu.com/echarts/5.5.0/echarts.min.js",
      "https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js"
    ];

    const GEO_JSON_SOURCES = [
      "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json",
      "https://file.geojson.cn/china/1.6.3/china.json"
    ];

    async function fetchWithTimeout(url, timeoutMs = 8000) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      } finally {
        clearTimeout(timer);
      }
    }

    async function loadChinaGeoJSON() {
      let lastErr;
      for (const url of GEO_JSON_SOURCES) {
        try {
          const data = await fetchWithTimeout(url, 8000);
          if (data && (typeof data === "object") && (data.features || data.type || Array.isArray(data))) return data;
        } catch (e) {
          lastErr = e;
          console.warn(`地图数据源 ${url} 加载失败:`, e.message);
        }
      }
      throw lastErr || new Error("所有地图数据源均不可用");
    }

    function ensureContainerSize(container) {
      // ECharts requires non-zero container dimensions at init time.
      // On mobile, IntersectionObserver may fire before layout settles.
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        // Force a reflow-friendly minimum
        container.style.minHeight = container.style.minHeight || "320px";
      }
      return container.clientWidth > 0 && container.clientHeight > 0;
    }

    async function initChinaMap() {
      const container = $("#chinaMap");
      if (!container || chinaMapStarted) return;
      chinaMapStarted = true;

      // Show loading state
      container.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;color:var(--muted);">
          <div style="font-size:36px;animation:livePulse 1.5s ease-in-out infinite;">🗺️</div>
          <span style="font-size:13px;">正在加载地图…</span>
        </div>`;

      // Ensure container has dimensions before ECharts init
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      if (!ensureContainerSize(container)) {
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      // Load ECharts with CDN fallback
      try {
        if (!window.echarts) {
          await loadScript(ECHARTS_CDNS);
        }
      } catch (error) {
        console.warn("ECharts 加载失败:", error);
        container.innerHTML = `
          <div class="empty-state visible" style="margin:0;border-radius:0;">
            <span class="big">🗺️</span>
            地图组件加载失败，可能是网络问题。
            <button class="btn" style="margin-top:12px;" onclick="window.location.reload()">刷新重试</button>
          </div>`;
        chinaMapStarted = false;
        return;
      }

      try {
        chinaMapInstance = echarts.init(container, null, { renderer: "canvas" });
      } catch (e) {
        console.warn("ECharts 初始化失败:", e);
        container.innerHTML = '<div class="empty-state visible"><span class="big">🗺️</span>地图初始化失败，请刷新重试。</div>';
        chinaMapStarted = false;
        return;
      }

      // Load China geo JSON with multi-source fallback
      let chinaGeo;
      try {
        chinaGeo = await loadChinaGeoJSON();
        echarts.registerMap("china", chinaGeo);
      } catch (error) {
        console.warn("中国地图数据加载失败:", error);
        // Fall back to a province list (no map) so the section isn't blank
        container.innerHTML = `
          <div style="padding:20px;display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;height:100%;text-align:center;">
            <div style="font-size:40px;">🏔️</div>
            <p style="color:var(--muted);font-size:14px;max-width:340px;margin:0;">
              地图数据暂时无法加载，你仍然可以通过下方筛选栏浏览全部 <b>${ROUTES.length}</b> 条路线。
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;max-width:400px;">
              ${Array.from(new Set(ROUTES.map(r => r.region))).map(r =>
                `<button class="chip" onclick="document.querySelector('#regionFilter').value='${r}';document.querySelector('#regionFilter').dispatchEvent(new Event('change'));document.querySelector('#routeGrid').scrollIntoView({behavior:'smooth'});">${r}</button>`
              ).join("")}
            </div>
          </div>`;
        chinaMapInstance = null;
        chinaMapStarted = false;
        return;
      }

      const isMobile = window.innerWidth <= 700;
      const option = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(54, 40, 24, 0.94)",
          borderWidth: 0,
          textStyle: { color: "#f8f5ed", fontSize: isMobile ? 13 : 12 },
          confine: true,
          formatter(params) {
            if (params.componentType === "effectScatter") {
              const data = params.data || {};
              return `<b>${data.name || ""}</b><br/>难度：${DIFFICULTY[data.difficulty] || "-"}<br/>推荐：${data.score} 分`;
            }
            return params.name || "";
          }
        },
        geo: {
          map: "china",
          roam: true,
          scaleLimit: { min: 0.7, max: isMobile ? 6 : 12 },
          zoom: isMobile ? 1.15 : 1.05,
          center: [104.5, 36.5],
          label: { show: false },
          itemStyle: {
            areaColor: "#ded2ba",
            borderColor: "#9b8868",
            borderWidth: 0.6,
            shadowColor: "rgba(51, 39, 25, 0.12)",
            shadowBlur: 8
          },
          emphasis: {
            label: { show: false },
            itemStyle: { areaColor: "#cdbb9c" }
          }
        },
        series: [{
          name: "徒步路线",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: { period: 3.6, scale: isMobile ? 2.5 : 3, brushType: "stroke" },
          label: {
            show: !isMobile,
            position: "right",
            formatter: "{b}",
            color: "#4a3525",
            fontSize: 10,
            fontWeight: 500,
            distance: 4
          },
          labelLayout: { hideOverlap: true },
          symbolSize: (val) => (isMobile ? 6 : 7) + Math.max(0, Number(val?.[2] || 0)) * (isMobile ? 1.2 : 1.5),
          itemStyle: {
            color: (params) => Number(params.data?.difficulty) >= 4 ? "#a83d28" : "#8a6a2b",
            shadowBlur: 8,
            shadowColor: "rgba(129, 37, 29, 0.32)"
          },
          data: ROUTES.map((route) => ({
            name: route.name,
            value: [route.lon, route.lat, route.difficulty],
            routeId: route.id,
            difficulty: route.difficulty,
            score: route.score
          }))
        }]
      };
      chinaMapInstance.setOption(option);
      updateChinaMap(getFilteredRoutes());
      chinaMapInstance.on("click", (params) => {
        if (params.componentType === "effectScatter" && params.data?.routeId) {
          openModal(params.data.routeId);
          return;
        }
        if (params.componentType === "geo" && params.name) {
          handleProvinceMapClick(params.name);
        }
      });

      // Robust resize: window resize, orientation change, visual viewport (mobile address bar)
      let resizeTimer;
      const doResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (chinaMapInstance) {
            chinaMapInstance.resize();
          }
        }, 150);
      };
      window.addEventListener("resize", doResize, { passive: true });
      window.addEventListener("orientationchange", doResize, { passive: true });
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", doResize, { passive: true });
      }
    }

    function normalizeProvinceName(name) {
      return String(name || "")
        .replace(/(壮族自治区|回族自治区|维吾尔自治区|自治区|特别行政区|省|市)$/, "");
    }

    function handleProvinceMapClick(name) {
      const normalized = normalizeProvinceName(name);
      const matched = ROUTES.filter((route) => {
        const routeRegion = normalizeProvinceName(route.region);
        return routeRegion === normalized || route.region === normalized;
      });
      if (!matched.length) return;
      const targetRegion = matched[0].region;
      state.region = targetRegion;
      $("#regionFilter").value = targetRegion;
      renderRoutes();
      const routeGrid = $("#routeGrid");
      if (routeGrid) routeGrid.scrollIntoView({ behavior: "smooth", block: "start" });
      if (matched.length === 1) {
        openModal(matched[0].id);
      } else {
        $("#resultCount").textContent = `${targetRegion}共 ${matched.length} 条路线，请点击卡片查看详情`;
      }
    }

    function updateChinaMap(routes) {
      if (!chinaMapInstance) return;
      chinaMapInstance.setOption({
        series: [{
          data: routes.map((route) => ({
            name: route.name,
            value: [route.lon, route.lat, route.difficulty],
            routeId: route.id,
            difficulty: route.difficulty,
            score: route.score
          }))
        }]
      });
    }

    function difficultyLabel(value) {
      return DIFFICULTY[value] || "";
    }

    function routeMap(route) {
      const delta = 0.045;
      const bbox = `${route.lon - delta},${route.lat - delta * 0.65},${route.lon + delta},${route.lat + delta * 0.65}`;
      return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${route.lat},${route.lon}`;
    }

    const TRANSPORT_HUBS = {
      "云南": { air: "昆明长水机场、丽江三义机场、香格里拉机场", rail: "昆明站/昆明南站、丽江站、香格里拉站", note: "滇西北山路弯多，雨季注意塌方与落石。" },
      "四川": { air: "成都双流机场、成都天府机场、稻城亚丁机场", rail: "成都东站/成都南站、雅安站、康定站", note: "川西高海拔路段冬季可能积雪结冰，出发前确认垭口和景区道路。" },
      "西藏": { air: "拉萨贡嘎机场、林芝米林机场、日喀则和平机场", rail: "拉萨站、林芝站、日喀则站", note: "需提前办理边防相关手续，部分线路必须请当地向导并报备。" },
      "新疆": { air: "乌鲁木齐地窝堡机场、伊宁机场、喀什机场", rail: "乌鲁木齐站、伊宁站、库车站", note: "天山南北道路长，进山多为土路，需确认草场与保护区开放。" },
      "甘肃": { air: "兰州中川机场、甘南夏河机场", rail: "兰州站、合作站、天水站", note: "甘南高海拔地区天气变化快，部分垭口冬季封闭。" },
      "青海": { air: "西宁曹家堡机场、玉树机场、果洛机场", rail: "西宁站、格尔木站", note: "青海牧区信号弱，长途转山或穿越需携带卫星通信。" },
      "内蒙古": { air: "呼和浩特白塔机场、包头东河机场、鄂尔多斯机场", rail: "呼和浩特站、包头站、鄂尔多斯站", note: "沙漠地区昼夜温差大，进沙前确认补给车和撤出点。" },
      "北京": { air: "北京首都机场、北京大兴机场", rail: "北京站、北京北站、清河站", note: "京郊野线受防火和文物保护政策影响，出发前确认是否开放。" },
      "安徽": { air: "合肥新桥机场、黄山屯溪机场", rail: "合肥南站、黄山北站、绩溪北站", note: "皖南山路多弯，节假日景区周边容易拥堵。" },
      "江西": { air: "南昌昌北机场、上饶三清山机场", rail: "南昌站/南昌西站、上饶站、萍乡北站", note: "武功山、三清山等景区交通成熟，但节假日人流大。" },
      "山西": { air: "太原武宿机场、大同云冈机场", rail: "太原站/太原南站、忻州站、五台山站", note: "五台山山顶风大，冬季朝台路况复杂，谨慎前往。" },
      "广东": { air: "广州白云机场、韶关丹霞机场", rail: "广州南站、韶关站", note: "广东山地雨林潮湿，雨季溪谷可能涨水。" },
      "吉林": { air: "长春龙嘉机场、长白山机场", rail: "长春站、松江河站、长白山站", note: "长白山冬季路面冰雪，天池是否开放受天气影响。" },
      "陕西": { air: "西安咸阳机场", rail: "西安北站、宝鸡南站", note: "秦岭高海拔路段天气多变，穿越需提前报备并关注封山。" },
      "浙江": { air: "杭州萧山机场、宁波栎社机场", rail: "杭州东站、德清站、临安站", note: "浙江山区雨后石阶湿滑，节假日停车位紧张。" },
      "广西": { air: "桂林两江机场、南宁吴圩机场", rail: "桂林站/桂林北站、阳朔站", note: "漓江沿岸步道受涨水影响，暴雨后需绕行。" },
      "湖北": { air: "武汉天河机场、恩施许家坪机场", rail: "武汉站、恩施站、利川站", note: "恩施大峡谷台阶多，雨后地缝湿滑。" },
      "宁夏": { air: "银川河东机场", rail: "银川站、固原站", note: "贺兰山与六盘山夏秋较舒适，注意防晒补水。" },
      "福建": { air: "福州长乐机场、厦门高崎机场、武夷山机场", rail: "福州站、厦门北站、武夷山北站", note: "沿海线路受台风影响，海岛船班需提前确认。" },
      "湖南": { air: "长沙黄花机场、张家界荷花机场", rail: "长沙南站、张家界西站", note: "张家界景区台阶多，人流大，雨后湿滑。" },
      "河南": { air: "郑州新郑机场、洛阳北郊机场", rail: "郑州东站、洛阳龙门站", note: "老君山冬季雪景美，但需穿防滑鞋并关注索道。" }
    };

    function getHub(route) {
      return TRANSPORT_HUBS[route.region] || {
        air: "就近省会机场",
        rail: "就近高铁站或火车站",
        note: "出发前确认进山道路和当地天气。"
      };
    }

    function isRemoteRoute(route) {
      const remoteRegions = ["西藏", "新疆", "青海", "甘肃", "四川", "云南", "内蒙古"];
      return remoteRegions.includes(route.region) && (route.difficulty >= 4 || route.highest >= 4000 || Number(route.days.match(/\d+/)?.[0] || 1) >= 4);
    }

    function needsCamping(route) {
      const text = `${route.summary} ${(route.itinerary || []).map((item) => `${item.title}${item.desc}`).join(" ")}`;
      return route.tags.includes("露营") || route.tags.includes("重装") || /扎营|露营|营地/.test(text);
    }

    function hasHighAltitude(route) {
      return route.highest >= 3500 || route.tags.includes("雪山") || route.tags.includes("冰川") || route.tags.includes("高海拔");
    }

    function hasSnow(route) {
      return route.bestSeasons.includes("冬") || route.tags.includes("雪山") || route.tags.includes("冰川") || route.highest >= 3500;
    }

    function hasDesert(route) {
      return route.tags.includes("沙漠") || /沙漠/.test(route.summary);
    }

    function hasWaterCrossing(route) {
      return route.tags.includes("河流") || route.tags.includes("涉水") || /涉水|过河|河流/.test(route.summary);
    }

    function hasForest(route) {
      return route.tags.includes("森林") || route.tags.includes("竹林") || route.tags.includes("雨林") || /森林|竹林|丛林/.test(route.summary);
    }

    function buildDetailedGear(route) {
      const groups = [];
      if (route.gear && route.gear.length) {
        groups.push({ title: "路线专项建议", items: route.gear });
      }

      const clothing = ["速干内衣", "速干长裤或可拆卸裤", "保暖中间层", "冲锋衣", "冲锋裤", "备用袜子"];
      if (hasSnow(route)) clothing.push("羽绒服或厚抓绒", "保暖帽", "防风手套", "抓绒裤");
      if (hasDesert(route)) clothing.push("宽檐遮阳帽", "防沙面巾", "冰袖", "宽松透气长衣长裤");
      if (hasForest(route)) clothing.push("防刮长袖", "快干衣");
      groups.push({ title: "服装与保暖", items: clothing });

      const footwear = ["中高帮防水徒步鞋", "排汗徒步袜", "备用鞋带", "护踝（可选）"];
      if (hasSnow(route)) footwear.push("雪套", "简易冰爪");
      if (hasWaterCrossing(route)) footwear.push("涉水鞋或营地鞋", "防水袜");
      if (hasDesert(route)) footwear.push("防沙鞋套");
      groups.push({ title: "鞋类", items: footwear });

      const packItems = ["容量合适的登山包", "防雨罩", "防水袋或干湿分离袋", "压缩收纳袋"];
      if (needsCamping(route)) packItems.push("帐篷", "合适温标睡袋", "防潮垫或充气垫", "炉具与套锅", "气罐或燃料");
      if (hasWaterCrossing(route)) packItems.push("全防水内胆或大号防水袋");
      groups.push({ title: "背包与露营装备", items: packItems });

      const hydration = ["水袋或保温杯", "净水器或净水片", "高能量路餐", "电解质冲剂"];
      if (hasDesert(route)) hydration.push("每人每天至少 3L 饮用水", "额外备用水");
      if (route.difficulty >= 4 || route.distance >= 40) hydration.push("炉具与热饮（长线）");
      groups.push({ title: "饮水与饮食", items: hydration });

      const navigation = ["手机与离线地图", "GPS/轨迹导航", "充电宝与充电线", "头灯及备用电池", "哨子", "救生毯"];
      if (isRemoteRoute(route) || route.difficulty >= 4) navigation.push("卫星通信设备或对讲机");
      groups.push({ title: "导航与安全", items: navigation });

      if (hasHighAltitude(route)) {
        groups.push({ title: "高海拔专项", items: ["高倍防晒霜", "防紫外线墨镜", "润唇膏", "保暖保温杯", "高原反应药物", "备用氧气（长线或高海拔）"] });
      }

      if (hasDesert(route)) {
        groups.push({ title: "沙漠专项", items: ["防风镜", "防沙鞋套", "电解质", "足量饮水", "防晒面巾"] });
      }

      const medicine = ["急救包", "创可贴与水泡贴", "弹性绷带", "止泻药", "感冒药", "个人常用药"];
      if (hasForest(route) || route.bestSeasons.includes("夏")) medicine.push("驱蚊液", "蛇药（按地区）");
      groups.push({ title: "急救与药品", items: medicine });

      groups.push({
        title: "证件、电子与个人物品",
        items: ["身份证", "户外保险单", "必要边防证件或进山许可", "手机与充电器", "少量现金", "登山杖", "垃圾袋", "纸巾湿巾", "多功能刀", "洗漱用品"]
      });

      return groups;
    }

    function buildDetailedTransport(route) {
      const hub = getHub(route);
      const remote = isRemoteRoute(route);
      return [
        {
          title: "1. 城际大交通",
          detail: `机场：${hub.air}；铁路：${hub.rail}。`,
          note: "建议至少提前一天抵达集结点，适应海拔、采购补给并确认天气。"
        },
        {
          title: "2. 前往徒步起点",
          detail: route.transport || "建议联系当地司机、俱乐部或景区接驳车。",
          note: `${hub.note} 出发前请再次确认道路开放、防火封山和车辆接驳。`
        },
        {
          title: "3. 自驾与停车",
          detail: "导航至徒步起点或集结点；山区道路普遍弯多、路窄，部分为砂石路或土路。",
          note: remote
            ? "高海拔长线不建议单车自驾；部分垭口冬季封闭，建议包车或跟队。"
            : "停车后记录位置并留挪车电话；节假日车位紧张，建议早到。"
        },
        {
          title: "4. 返程与应急下撤",
          detail: route.lodging ? `住宿/补给：${route.lodging}` : "住宿与补给需提前确认。",
          note: `如遇天气恶化或身体不适，从最近下撤点返回，并优先联系向导、景区或救援。${remote ? "远程线路务必携带卫星通信，并购买含救援保障的户外保险。" : ""}`
        }
      ];
    }

    function getRoutebook(route) {
      return ROUTEBOOKS[route.id] || null;
    }

    function renderElevationProfile(profile) {
      if (!Array.isArray(profile) || profile.length < 2) return "";
      const width = 800;
      const height = 220;
      const padding = 26;
      const maxDistance = Math.max(...profile.map((point) => point.distance));
      const minElevation = Math.min(...profile.map((point) => point.elevation));
      const maxElevation = Math.max(...profile.map((point) => point.elevation));
      const range = Math.max(1, maxElevation - minElevation);
      const x = (distance) => padding + (distance / Math.max(1, maxDistance)) * (width - padding * 2);
      const y = (elevation) => height - padding - ((elevation - minElevation) / range) * (height - padding * 2);
      const line = profile.map((point) => `${x(point.distance).toFixed(1)},${y(point.elevation).toFixed(1)}`).join(" ");
      const area = `M${x(profile[0].distance).toFixed(1)},${height - padding} L${line.split(" ").join(" L")} L${x(profile[profile.length - 1].distance).toFixed(1)},${height - padding} Z`;
      const peakLabels = [profile[2], profile[4], profile[5]].filter(Boolean).map((point) => {
        const left = x(point.distance);
        return `<text x="${left}" y="${y(point.elevation) - 9}" text-anchor="middle" font-size="12" fill="#81251d">${point.elevation}m</text>`;
      }).join("");
      return `
        <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="雨崩海拔剖面图">
          <path d="${area}" fill="rgba(129,37,29,0.08)" stroke="none"/>
          <polyline points="${line}" fill="none" stroke="#81251d" stroke-width="3" stroke-linejoin="round"/>
          <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#7a6b55" stroke-width="1"/>
          <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#7a6b55" stroke-width="1"/>
          ${peakLabels}
          <text x="${padding}" y="${height - 8}" font-size="11" fill="#776b59">0km</text>
          <text x="${width - padding}" y="${height - 8}" text-anchor="end" font-size="11" fill="#776b59">${maxDistance}km</text>
        </svg>
      `;
    }

    function renderCheckpointMeta(point) {
      return `
        <div class="checkpoint-meta">
          <span>${point.distance}km</span>
          <span>${point.elevation}m</span>
          <span>${point.water ? "💧 补水" : "无水源"}</span>
          <span>${point.camp ? "⛺ 可扎营" : "不扎营"}</span>
          <span>${point.signal ? "📶 有信号" : "信号弱"}</span>
          <span>${point.emergencyExit ? "可下撤" : "无快速下撤点"}</span>
        </div>
      `;
    }

    function renderRoutebookSections(route, book) {
      if (!book) return "";
      const status = book.status || {};
      const services = book.services || {};
      return `
        <section class="guide-section">
          <div class="routebook-banner">
            <div>
              <h3>📖 ${escapeHtml(book.name)} · 完整路书</h3>
              <p>版本 v${book.version || 1} · 更新于 ${escapeHtml(book.updatedAt || "未标注")}。数据为示例路书，出发前请再次核实。</p>
            </div>
            <div class="routebook-actions">
              ${book.status?.officialUrl ? `<a class="btn" href="${escapeHtml(book.status.officialUrl)}" target="_blank" rel="noopener">官方信息</a>` : ""}
              <a class="btn" href="${escapeHtml(book.tracks?.gpx || "#")}" download>下载 GPX</a>
              <button class="btn" type="button" data-print-guide>打印攻略</button>
            </div>
          </div>
          <div class="status-line">
            ${book.credibility ? `<span class="status-pill credibility cred-${book.credibility}">内容可信度 ${book.credibility}</span>` : ""}
            <span class="status-pill ${status.open === true ? "open" : "warn"}">${status.open === true ? "当前示例：开放" : status.open === false ? "当前示例：关闭/待确认" : "开放状态待核实"}</span>
            <span class="status-pill ${status.ticketRequired ? "warn" : ""}">${status.ticketRequired ? "需购票" : "无需购票"}</span>
            <span class="status-pill ${status.permitRequired ? "warn" : ""}">${status.permitRequired ? "需许可证" : "无需特别许可证"}</span>
          </div>
        </section>
        <section class="guide-section">
          <h3>🗓️ 季节窗口</h3>
          <div class="season-grid">
            ${Object.entries(book.seasonDetail || {}).map(([season, detail]) => {
              const seasonLabel = detail.label || { spring: "春季", summer: "夏季", autumn: "秋季", winter: "冬季" }[season] || season;
              return `
              <div class="season-card ${detail.best ? "best" : ""}">
                <b>${escapeHtml(seasonLabel)} · ${(detail.months || []).join("、")}月</b>
                <p>${escapeHtml(detail.condition || "")}</p>
                <p style="margin-top:5px;color:var(--danger)">风险：${escapeHtml(detail.risk || "")}</p>
              </div>
              `;
            }).join("")}
          </div>
        </section>
        <section class="guide-section">
          <h3>📍 关键检查点</h3>
          <div class="checkpoint-timeline">
            ${(book.checkpoints || []).map((point) => `
              <div class="checkpoint-item">
                <div class="checkpoint-dot">${Number(point.distance).toFixed(1)}km</div>
                <div class="checkpoint-body">
                  <b>${escapeHtml(point.name)} · ${point.elevation}m</b>
                  <p>${escapeHtml(point.note || "")}</p>
                  ${renderCheckpointMeta(point)}
                </div>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="guide-section">
          <h3>⛰️ 海拔剖面</h3>
          <div class="elevation-wrap">
            ${renderElevationProfile(book.elevationProfile)}
            <div class="elevation-legend"><span>横轴：距离</span><span>纵轴：海拔</span></div>
          </div>
        </section>
        <section class="guide-section">
          <h3>🗺️ 轨迹地图</h3>
          <div class="track-map" data-geojson="${escapeHtml(book.tracks?.geojson || "")}"></div>
        </section>
        <section class="guide-section">
          <h3>💰 费用预算</h3>
          <div class="routebook-card">
            ${Object.entries(book.budget || {}).map(([key, value]) => `
              <div class="budget-row"><span>${escapeHtml(key)}</span><b>${escapeHtml(value)}</b></div>
            `).join("")}
          </div>
        </section>
        <section class="guide-section">
          <h3>🆘 服务与救援</h3>
          <div class="service-list">
            ${Object.entries(services).map(([key, value]) => `
              <div class="service-item"><b>${escapeHtml(key)}</b><p>${escapeHtml(value)}</p></div>
            `).join("")}
          </div>
        </section>
        <section class="guide-section">
          <h3>🖼️ 路书影像</h3>
          <div class="routebook-media">
            ${(book.media || []).map((item) => `
              <figure>
                ${(() => { const chain = [item.url, FALLBACK_IMG]; const k = "m" + (++window.__mediaSeq || (window.__mediaSeq = 1)); window.__imgChains[k] = chain; return `<img src="${escapeHtml(chain[0])}" alt="${escapeHtml(item.caption)}" loading="lazy" decoding="async" data-chain="${k}" data-fidx="-1" />`; })()}
                <figcaption>${escapeHtml(item.caption)} · ${escapeHtml(item.location)}</figcaption>
              </figure>
            `).join("")}
          </div>
        </section>
      `;
    }

    function renderRouteTabs(routebook) {
      const tabs = [
        { id: "section-overview", label: "概览" }
      ];
      if (routebook) tabs.push({ id: "section-routebook", label: "完整路书" });
      tabs.push(
        { id: "section-itinerary", label: "分段攻略" },
        { id: "section-elevation", label: "海拔剖面" },
        { id: "section-gear", label: "装备清单" },
        { id: "section-transport", label: "交通方案" },
        { id: "section-gallery", label: "沿途影像" }
      );
      return `
        <nav class="route-tabs" aria-label="路线详情导航">
          ${tabs.map((tab, index) => `<button class="${index === 0 ? "active" : ""}" type="button" data-target="${tab.id}">${tab.label}</button>`).join("")}
        </nav>
      `;
    }

    function openModal(id) {
      const route = ROUTES.find((r) => r.id === id);
      if (!route) return;
      const heroChain = routeImageChain(route, 0);
      const heroImg = $("#modalHeroImg");
      const heroKey = "hero-" + route.id;
      window.__imgChains[heroKey] = heroChain;
      heroImg.dataset.chain = heroKey;
      heroImg.dataset.fidx = "0";
      heroImg.src = heroChain[0];
      window.__armImage(heroImg);
      $("#modalRegion").textContent = `${route.region} · ${difficultyLabel(route.difficulty)} · ${route.days}`;
      $("#modalTitle").textContent = route.name;
      $("#modalStats").innerHTML = [
        ["距离", `${route.distance} km`],
        ["累计爬升", `${route.elevationGain} m`],
        ["最高海拔", `${route.highest} m`],
        ["推荐季节", route.bestSeasons.join(" / ")],
        ["难度", `${DIFFICULTY[route.difficulty]} ${DIFF_STARS[route.difficulty]}`],
        ["推荐指数", `${route.score.toFixed(1)} / 10`]
      ].map(([label, value]) => `<div class="stat-box"><b>${value}</b><span>${label}</span></div>`).join("");

      const routebook = getRoutebook(route);
      const routebookHTML = routebook ? renderRoutebookSections(route, routebook) : "";
      const routeTabsHTML = renderRouteTabs(routebook);
      $("#routeTabs").innerHTML = routeTabsHTML;

      $("#modalMain").innerHTML = `
        <section class="guide-section" id="section-overview">
          <h3>📍 路线概览</h3>
          <p>${escapeHtml(route.summary)}</p>
          <ul>${route.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}</ul>
          ${renderTimeEstimate(route)}
        </section>
        <div id="section-routebook">${routebookHTML}</div>
        <section class="guide-section" id="section-itinerary">
          <h3>🗺️ 分段攻略</h3>
          <div class="itinerary">
            ${route.itinerary.map((item) => `
              <div class="day-item">
                <div class="day-num">D${item.day}</div>
                <div class="day-body"><b>${escapeHtml(item.title)}</b><p>${escapeHtml(item.desc)}</p></div>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="guide-section" id="section-elevation">
          ${renderElevationProfileForRoute(route)}
        </section>
        <section class="guide-section" id="section-gear">
          <h3>🎒 完整装备清单</h3>
          <div class="gear-grid">
            ${buildDetailedGear(route).map((group) => `
              <div class="gear-group">
                <h4>${escapeHtml(group.title)}</h4>
                <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
              </div>
            `).join("")}
          </div>
          <div id="weatherGearSlot"></div>
        </section>
        <section class="guide-section" id="section-transport">
          <h3>🚌 详细交通方案</h3>
          <div class="transport-list">
            ${buildDetailedTransport(route).map((item) => `
              <div class="transport-item">
                <h4>${escapeHtml(item.title)}</h4>
                <p>${escapeHtml(item.detail)}</p>
                <p class="note">${escapeHtml(item.note)}</p>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="guide-section" id="section-gallery">
          <h3>🖼️ 沿途影像</h3>
          <div class="gallery">
            ${Array.from({ length: routePhotoCount(route) }, (_, index) =>
              imgWithChain(routeImageChain(route, index), `${route.name} ${index + 1}`)
            ).join("")}
          </div>
        </section>
      `;

      $("#modalSide").innerHTML = `
        <div class="side-card">
          <h4>⭐ 我的路线</h4>
          <div class="status-actions">
            <button class="${hasRouteStatus(route.id, "saved") ? "active" : ""}" type="button" data-route-status="saved">♥ 收藏</button>
            <button class="${hasRouteStatus(route.id, "wishlist") ? "active" : ""}" type="button" data-route-status="wishlist">★ 想去</button>
            <button class="${hasRouteStatus(route.id, "completed") ? "active" : ""}" type="button" data-route-status="completed">✓ 已走过</button>
          </div>
        </div>
        <div class="side-card">
          <h4>⚠️ 风险提示</h4>
          ${route.risks.map((risk) => `<div class="risk">${escapeHtml(risk)}</div>`).join("")}
          <p style="margin:10px 0 0"><b>Tips：</b>${escapeHtml(route.tips)}</p>
        </div>
        <div class="side-card">
          <h4>🧭 经纬度定位</h4>
          <p style="margin:0 0 8px">纬度 ${route.lat.toFixed(4)} · 经度 ${route.lon.toFixed(4)}</p>
          <div class="coordinate-actions">
            <a class="btn" target="_blank" rel="noopener" href="https://uri.amap.com/marker?position=${route.lon},${route.lat}&name=${encodeURIComponent(route.name)}">高德地图</a>
            <a class="btn" target="_blank" rel="noopener" href="https://map.baidu.com/?latlng=${route.lat},${route.lon}&title=${encodeURIComponent(route.name)}">百度地图</a>
            <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps?q=${route.lat},${route.lon}">Google Maps</a>
          </div>
        </div>
        <div class="side-card">
          <h4>🌍 位置地图</h4>
          <iframe class="map-frame" src="${routeMap(route)}" title="${escapeHtml(route.name)}地图" loading="lazy"></iframe>
        </div>
      `;

      $$(".gallery img").forEach((img) => {
        img.addEventListener("click", () => {
          $("#modalHeroImg").src = img.dataset.full;
        });
      });
      $$("#modalSide [data-route-status]").forEach((button) => {
        button.addEventListener("click", () => {
          setRouteStatus(route.id, button.dataset.routeStatus);
          renderRoutes();
          $$("#modalSide [data-route-status]").forEach((item) => {
            item.classList.toggle("active", hasRouteStatus(route.id, item.dataset.routeStatus));
          });
        });
      });
      const printGuideButton = document.querySelector("#modalMain [data-print-guide]");
      if (printGuideButton) {
        printGuideButton.addEventListener("click", () => window.print());
      }
      $$("#routeTabs [data-target]").forEach((button) => {
        button.addEventListener("click", () => {
          const target = document.getElementById(button.dataset.target);
          if (!target) return;
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          $$("#routeTabs [data-target]").forEach((tab) => tab.classList.toggle("active", tab === button));
        });
      });
      if (routebook?.tracks?.geojson) {
        initTrackMap(routebook.tracks.geojson, routebook);
      }

      $("#modalBackdrop").classList.add("open");
      document.body.style.overflow = "hidden";
      // Lock body scroll on iOS (position: fixed trick)
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
      renderWeather(route);
    }

    function closeModal() {
      $("#modalBackdrop").classList.remove("open");
      // Restore scroll position (iOS fix)
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }

    function parsePrompt(text) {
      const t = text || "";
      const parsed = { region: "", season: "", difficulty: "", days: 0, features: [] };
      const provinces = Array.from(new Set(ROUTES.map((r) => r.region)));
      for (const p of provinces) {
        if (t.includes(p)) { parsed.region = p; break; }
      }
      if (/(入门|简单|轻松|休闲|新手|低强度)/.test(t)) parsed.difficulty = 1;
      else if (/(中等|进阶|适中|中强度)/.test(t)) parsed.difficulty = 3;
      else if (/(挑战|困难|高强度|虐|极限)/.test(t)) parsed.difficulty = t.includes("极限") ? 5 : 4;
      if (/(川西|四川)/.test(t)) parsed.region = "四川";
      else if (/(甘南|甘肃)/.test(t)) parsed.region = "甘肃";
      else if (/(江南|浙江)/.test(t)) parsed.region = "浙江";
      else if (/(新疆|天山)/.test(t)) parsed.region = "新疆";
      else if (/(云南|滇)/.test(t)) parsed.region = "云南";
      else if (/(西藏|阿里|冈仁波齐)/.test(t)) parsed.region = "西藏";
      if (/(春天|春季|4月|5月|春)/.test(t)) parsed.season = "春";
      else if (/(夏天|夏季|6月|7月|8月|夏)/.test(t)) parsed.season = "夏";
      else if (/(秋天|秋季|9月|10月|11月|秋)/.test(t)) parsed.season = "秋";
      else if (/(冬天|冬季|12月|1月|2月|冬)/.test(t)) parsed.season = "冬";
      const dayMatch = t.match(/(\d+)\s*天/);
      if (dayMatch) parsed.days = Number(dayMatch[1]);
      const featureKeys = [
        ["雪山", "雪山"], ["冰川", "雪山"], ["森林", "森林"], ["湖泊", "湖泊"], ["海子", "湖泊"],
        ["草原", "草原"], ["草甸", "草原"], ["峡谷", "峡谷"], ["古道", "古道"], ["藏寨", "藏寨"],
        ["云海", "云海"], ["日出", "日出"], ["天池", "天池"], ["漓江", "喀斯特"], ["竹海", "竹林"],
        ["寺庙", "朝圣"], ["朝圣", "朝圣"], ["星空", "星空"], ["露营", "露营"], ["新手", "轻量"]
      ];
      featureKeys.forEach(([keyword, feature]) => {
        if (t.includes(keyword) && !parsed.features.includes(feature)) parsed.features.push(feature);
      });
      return parsed;
    }

    function scoreRoute(route, parsed) {
      let score = route.score * 10;
      const reasons = [];
      if (parsed.region && route.region === parsed.region) { score += 22; reasons.push("地区匹配"); }
      if (parsed.season && route.bestSeasons.includes(parsed.season)) { score += 18; reasons.push(`${parsed.season}季适走`); }
      if (parsed.difficulty) {
        const diff = Math.abs(route.difficulty - parsed.difficulty);
        score += Math.max(0, 16 - diff * 7);
        if (diff <= 1) reasons.push("难度接近你的要求");
      }
      if (parsed.days) {
        const nums = (route.days.match(/\d+/g) || []).map(Number);
        const min = nums[0] || 1;
        const max = nums[1] || nums[0] || 1;
        score += Math.max(0, 12 - Math.abs(parsed.days - ((min + max) / 2)) * 3);
        if (parsed.days >= min - 1 && parsed.days <= max + 1) reasons.push("时长匹配");
      }
      const routeText = [route.tags.join(" "), route.summary, route.highlights.join(" ")].join(" ").toLowerCase();
      parsed.features.forEach((feature) => {
        if (routeText.includes(feature.toLowerCase())) { score += 12; reasons.push(`含${feature}元素`); }
      });
      return { score, reasons };
    }

    function applyParsedFilters(parsed, text) {
      if (text && text.trim()) {
        if (parsed.region) { state.region = parsed.region; $("#regionFilter").value = parsed.region; }
        if (parsed.season) { state.season = parsed.season; $("#seasonFilter").value = parsed.season; }
        if (parsed.difficulty) {
          state.difficulty = String(parsed.difficulty);
          $$("#difficultyChips .chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.difficulty === String(parsed.difficulty)));
        }
      }
      renderRoutes();
    }

    function runLocalAI(text) {
      const parsed = parsePrompt(text);
      applyParsedFilters(parsed, text);
      const ranked = ROUTES.map((route) => ({ route, ...scoreRoute(route, parsed) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      $("#aiResults").innerHTML = ranked.map(({ route, reasons }) => `
        <article class="ai-result" data-id="${route.id}" role="button" tabindex="0">
          <h4>${escapeHtml(route.name)} <span class="match-score">${Math.min(99, Math.round(route.score))} 分</span></h4>
          <p class="reason">${reasons.length ? reasons.join(" · ") : "综合推荐指数较高，值得优先考虑。"}</p>
        </article>
      `).join("");
      const first = ranked[0]?.route;
      if (first) renderWeather(first);
    }

    function defaultAIServerUrl() {
      // On deployed site, use Netlify Function at /api/ai
      if (location.protocol === "http:" || location.protocol === "https:") return `${location.origin}/api/ai`;
      return "/api/ai";
    }

    function getAISettings() {
      return {
        serverUrl: localStorage.getItem("xiake_ai_server") || defaultAIServerUrl(),
        model: localStorage.getItem("xiake_ai_model") || "deepseek-chat",
        systemPrompt: localStorage.getItem("xiake_ai_prompt") || AI_DEFAULT_SYSTEM_PROMPT
      };
    }

    function openAISettings() {
      const cfg = getAISettings();
      $("#aiBaseUrl").value = cfg.serverUrl;
      $("#aiModel").value = cfg.model;
      $("#aiSystemPrompt").value = cfg.systemPrompt;
      $("#aiSettingsStatus").textContent = "";
      $("#settingsBackdrop").classList.add("open");
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    }

    function closeAISettings() {
      $("#settingsBackdrop").classList.remove("open");
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }

    function saveAISettings() {
      localStorage.setItem("xiake_ai_server", $("#aiBaseUrl").value.trim() || defaultAIServerUrl());
      localStorage.setItem("xiake_ai_model", $("#aiModel").value.trim() || "deepseek-chat");
      localStorage.setItem("xiake_ai_prompt", $("#aiSystemPrompt").value.trim() || AI_DEFAULT_SYSTEM_PROMPT);
      ["shanye_ai_base", "shanye_ai_key", "shanye_ai_model", "shanye_ai_prompt"].forEach((key) => localStorage.removeItem(key));
      $("#aiSettingsStatus").textContent = "已保存到本机浏览器。";
    }

    function clearAISettings() {
      ["xiake_ai_server", "xiake_ai_model", "xiake_ai_prompt", "shanye_ai_base", "shanye_ai_key", "shanye_ai_model", "shanye_ai_prompt"].forEach((key) => localStorage.removeItem(key));
      $("#aiBaseUrl").value = defaultAIServerUrl();
      $("#aiModel").value = "deepseek-chat";
      $("#aiSystemPrompt").value = AI_DEFAULT_SYSTEM_PROMPT;
      $("#aiSettingsStatus").textContent = "设置已清除，将使用本地匹配引擎。";
    }

    function buildRouteContext() {
      return ROUTES.map((route) => ({
        id: route.id,
        name: route.name,
        region: route.region,
        difficulty: DIFFICULTY[route.difficulty],
        bestSeasons: route.bestSeasons,
        days: route.days,
        distanceKm: route.distance,
        highestM: route.highest,
        tags: route.tags,
        summary: route.summary
      }));
    }

    async function callCloudAI(userPrompt, parsed) {
      const cfg = getAISettings();
      if (!cfg.serverUrl) return null;
      const instructions = `${cfg.systemPrompt}\n\n当前用户筛选条件：${JSON.stringify(parsed)}。\n请只返回 JSON 数组，不要 Markdown，格式为：[{"id":"路线id","reason":"推荐理由"}]。最多 3 项。`;
      const controller = new AbortController();
      aiRequestController = controller;
      const response = await fetch(cfg.serverUrl.replace(/\/+$/, ""), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: cfg.model,
          instructions,
          userPrompt: userPrompt || "请推荐 3 条适合当前季节和偏好的路线。",
          parsed,
          routes: buildRouteContext()
        }),
        signal: controller.signal
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API ${response.status}: ${errorText.slice(0, 220)}`);
      }
      const data = await response.json();
      if (Array.isArray(data.recommendations)) return data.recommendations;
      const text = data.output_text || "";
      const cleaned = String(text).replace(/```json|```/gi, "").trim();
      const jsonMatch = cleaned.match(/\[[\s\S]*\]/);
      const parsedData = JSON.parse(jsonMatch ? jsonMatch[0] : cleaned);
      return Array.isArray(parsedData) ? parsedData : [parsedData];
    }

    function renderCloudAIResults(recommendations) {
      const ranked = recommendations
        .map((item) => {
          const route = ROUTES.find((r) => r.id === item?.id);
          return route ? { route, reason: item?.reason || "AI 认为这条路线符合你的偏好。" } : null;
        })
        .filter(Boolean)
        .slice(0, 3);
      if (!ranked.length) return false;
      $("#aiResults").innerHTML = ranked.map(({ route, reason }) => `
        <article class="ai-result" data-id="${route.id}" role="button" tabindex="0">
          <h4>${escapeHtml(route.name)} <span class="match-score">AI 推荐</span></h4>
          <p class="reason">${escapeHtml(reason)}</p>
        </article>
      `).join("");
      if (ranked[0]) renderWeather(ranked[0].route);
      return true;
    }

    async function runAI(text) {
      const parsed = parsePrompt(text);
      applyParsedFilters(parsed, text);
      const cfg = getAISettings();
      if (!cfg.serverUrl) {
        runLocalAI(text);
        return;
      }
      $("#aiResults").innerHTML = '<div class="weather-hint" style="grid-column:1 / -1">AI 正在读取路线库并生成推荐…</div>';
      try {
        const recommendations = await callCloudAI(text, parsed);
        if (!recommendations || !renderCloudAIResults(recommendations)) {
          runLocalAI(text);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.warn(error);
          $("#aiResults").innerHTML = '<div class="weather-hint" style="grid-column:1 / -1">云端 AI 调用失败，已切换为本地智能推荐。</div>';
          runLocalAI(text);
        }
      } finally {
        aiRequestController = null;
      }
    }

    async function testAISettings() {
      saveAISettings();
      const cfg = getAISettings();
      const status = $("#aiSettingsStatus");
      status.textContent = "正在测试连接…";
      if (!cfg.serverUrl) {
        status.textContent = "请先填写代理服务地址。";
        return;
      }
      try {
        const response = await fetch(`${cfg.serverUrl.replace(/\/+$/, "")}/health`, {
          method: "GET"
        });
        if (!response.ok) {
          const text = await response.text();
          status.textContent = `连接失败：${response.status} ${text.slice(0, 160)}`;
          return;
        }
        status.textContent = "连接成功，可以开始使用云端 AI 推荐。";
      } catch (error) {
        status.textContent = `网络或接口错误：${error.message}`;
      }
    }

    function bindEvents() {
      $("#globalSearch").addEventListener("input", (event) => {
        state.search = event.target.value;
        if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => renderRoutes(), 250);
      });
      $("#regionFilter").addEventListener("change", (event) => {
        state.region = event.target.value;
        renderRoutes();
        const first = getFilteredRoutes()[0];
        if (first) renderWeather(first);
      });
      $("#seasonFilter").addEventListener("change", (event) => {
        state.season = event.target.value;
        renderRoutes();
        const first = getFilteredRoutes()[0];
        if (first) renderWeather(first);
      });
      $("#statusFilter").addEventListener("change", (event) => {
        state.statusFilter = event.target.value;
        setFavCount();
        renderRoutes();
      });
      $("#difficultyChips").addEventListener("click", (event) => {
        const chip = event.target.closest(".chip");
        if (!chip) return;
        state.difficulty = chip.dataset.difficulty;
        $$("#difficultyChips .chip").forEach((c) => c.classList.toggle("active", c === chip));
        renderRoutes();
        const first = getFilteredRoutes()[0];
        if (first) renderWeather(first);
      });
      $("#routeGrid").addEventListener("click", (event) => {
        const card = event.target.closest(".route-card");
        if (!card) return;
        const fav = event.target.closest("[data-fav]");
        if (fav) {
          toggleFavorite(fav.dataset.fav, event);
          return;
        }
        openModal(card.dataset.id);
      });
      $("#routeGrid").addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        const card = event.target.closest(".route-card");
        if (!card) return;
        event.preventDefault();
        openModal(card.dataset.id);
      });
      $("#aiResults").addEventListener("click", (event) => {
        const card = event.target.closest(".ai-result");
        if (card) openModal(card.dataset.id);
      });
      $("#aiResults").addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        const card = event.target.closest(".ai-result");
        if (!card) return;
        event.preventDefault();
        openModal(card.dataset.id);
      });
      $("#resetFilters").addEventListener("click", () => {
        state.region = "";
        state.season = "";
        state.difficulty = "";
        state.search = "";
        state.favoritesOnly = false;
        state.statusFilter = "";
        $("#globalSearch").value = "";
        $("#regionFilter").value = "";
        $("#seasonFilter").value = "";
        $("#statusFilter").value = "";
        $$("#difficultyChips .chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.difficulty === ""));
        renderRoutes();
        renderWeather(ROUTES[0]);
      });
      $("#favFilterBtn").addEventListener("click", () => {
        state.statusFilter = state.statusFilter === "saved" ? "" : "saved";
        $("#statusFilter").value = state.statusFilter;
        setFavCount();
        renderRoutes();
      });
      $("#smartRecommendBtn").addEventListener("click", () => {
        $("#assistantPanel").classList.add("open");
        $("#aiPrompt").focus();
      });
      $("#closeAssistant").addEventListener("click", () => {
        $("#assistantPanel").classList.remove("open");
      });
      $("#runAI").addEventListener("click", () => {
        runAI($("#aiPrompt").value);
      });
      $("#aiPrompt").addEventListener("keydown", (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") runAI(event.target.value);
      });
      $("#aiSurprise").addEventListener("click", () => {
        const random = ROUTES[Math.floor(Math.random() * ROUTES.length)];
        $("#aiPrompt").value = `推荐一条${random.region}的路线，${random.difficulty}难度，${random.bestSeasons[0]}季`;
        runAI($("#aiPrompt").value);
      });
      $$(".quick-tag").forEach((tag) => {
        tag.addEventListener("click", () => {
          $("#assistantPanel").classList.add("open");
          $("#aiPrompt").value = tag.dataset.q;
          runAI(tag.dataset.q);
          $("#assistantPanel").scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
      $("#aiSettingsBtn").addEventListener("click", openAISettings);
      $("#settingsClose").addEventListener("click", closeAISettings);
      $("#settingsBackdrop").addEventListener("click", (event) => {
        if (event.target === $("#settingsBackdrop")) closeAISettings();
      });
      $("#saveAiSettings").addEventListener("click", saveAISettings);
      $("#clearAiSettings").addEventListener("click", clearAISettings);
      $("#testAiSettings").addEventListener("click", testAISettings);
      $("#refreshWeatherBtn").addEventListener("click", refreshWeatherNow);
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden && activeWeatherRoute) {
          const staleMs = Date.now() - (lastWeatherUpdate ? lastWeatherUpdate.getTime() : 0);
          if (!lastWeatherUpdate || staleMs >= 5 * 60 * 1000) loadWeather(activeWeatherRoute);
        }
      });
      $("#modalClose").addEventListener("click", closeModal);
      $("#modalBackdrop").addEventListener("click", (event) => {
        if (event.target === $("#modalBackdrop")) closeModal();
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && $("#modalBackdrop").classList.contains("open")) closeModal();
      });
    }

    function observeOnce(selector, callback, rootMargin = "200px") {
      const element = $(selector);
      if (!element || !("IntersectionObserver" in window)) {
        callback();
        return;
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.disconnect();
          }
        });
      }, { rootMargin });
      observer.observe(element);
    }

    // ===== PWA Install & Online/Offline =====
    let deferredPrompt = null;
    const pwaBanner = document.getElementById("pwaInstallBanner");
    const offlineIndicator = document.getElementById("offlineIndicator");

    function isStandalone() {
      return window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true;
    }

    // Show offline indicator if needed
    function updateOnlineStatus() {
      if (!navigator.onLine) {
        offlineIndicator?.classList.add("show");
      } else {
        offlineIndicator?.classList.remove("show");
      }
    }
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    updateOnlineStatus();

    // PWA install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (isStandalone() || localStorage.getItem("xiake_pwa_dismissed")) return;
      pwaBanner?.classList.add("show");
    });

    document.getElementById("pwaInstallBtn")?.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      pwaBanner?.classList.remove("show");
    });

    document.getElementById("pwaDismissBtn")?.addEventListener("click", () => {
      pwaBanner?.classList.remove("show");
      localStorage.setItem("xiake_pwa_dismissed", "1");
    });

    function init() {
      initSelectors();
      bindEvents();
      renderRoutes();
      observeOnce("#weatherCard", () => renderWeather(ROUTES[0]), "350px");
      observeOnce(".map-section", () => initChinaMap(), "500px");
    }

    init();
