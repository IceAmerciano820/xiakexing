# 霞客行 · 徒步路线助手

把想去的地方，变成能走的路。

面向中国经典徒步路线的「路书型」工具：**52 条路线**，每条都配实测 GPX 轨迹、分段攻略、季节窗口、检查点坐标与海拔、费用预算、装备与风险提示、实时天气，还能一键生成可以直接发小红书的多页图文。

![霞客行](public/images/routes/yubeng/01.jpg)

## 在线访问

- **主站（Cloudflare Pages）**：https://xiakexing-pages.pages.dev
- 备用（Netlify，历史部署）：https://dapper-kitten-989542.netlify.app

深链接可直接分享某条路线，例如 `?route=yubeng`、`?route=qilian`。

## 功能

- **路线筛选**：按地区、季节、难度、我的收藏（♥ 收藏 / ★ 想去 / ✓ 已走过，存在浏览器本地）
- **真实轨迹地图**：Leaflet + 高德瓦片，WGS84 → GCJ-02 自动对齐；支持一条路线多段轨迹，不再把分段硬接成一条线
- **完整路书**：季节窗口、检查点（真实坐标/海拔/里程）、海拔剖面、费用预算、服务与救援、装备清单、交通方案
- **实时天气**：Open-Meteo 逐日预报 + 风力/降水提示，并根据天气给出额外装备建议
- **AI 向导**：DeepSeek 代理推荐路线；模型、服务地址、系统提示词都能在页面「AI 设置」里改；未配置时自动退回本地匹配引擎
- **一键生成小红书图文**：封面 / 行程 / 地形 / 时机与预算 / 安全，共 5 页，可一次保存或分享
- **夜间模式**：纸色反转为墨色，对比度与字号按可读性校验过
- **离线可用**：PWA + Service Worker（缓存版本 `xiake-v16`）

## 数据（真实优先）

这个项目对数据的态度是：能核实的才写，核实不了就标「待核实」。

- 52 条路线的 `GPX / GeoJSON` 全部是**实测轨迹**，其中 35 条来自两步路用户上传（2026-09 入库），其余为早期整理的实测数据
- **检查点与海拔剖面按真实轨迹重建**：沿轨迹按里程取点，坐标与海拔读自 GPX
- 轨迹里读不出来的信息（有无水源、可否扎营、信号、下撤点）统一显示「待核实」，不编造
- 路书里标注数据来源；票价、开放状态、预约限流这类动态信息一律提示「出发前核实」
- 已下架 12 条既无实测轨迹、也无实拍图与路书的半成品路线（路线总数 64 → 52）

数据有误或你想补充自己走过的轨迹，欢迎提 Issue。

## 技术

刻意保持简单：**没有框架、没有构建步骤**，克隆下来就能跑。

| 部分 | 方案 |
| --- | --- |
| 前端 | 原生 JS + CSS（单页应用，`public/app.js` + `styles.css`） |
| 地图 | Leaflet（轨迹）+ 高德瓦片；WGS84 ↔ GCJ-02 坐标转换 |
| 中国地图 | ECharts + 自建 `china-map.json`（压缩至约 469KB，避免第三方接口 403） |
| 图文生成 | Canvas 手绘：纸感底色、衬线标题、内嵌二维码 |
| 离线 | Service Worker 预缓存 + 分级缓存策略（静态/图片/数据/CDN） |
| AI 代理 | Netlify Function（`netlify/functions/ai.js`）；纯静态托管时通过跨域回退调用 |

## 目录结构

```
public/                     # 发布目录（Cloudflare Pages / Netlify 都用它）
  index.html  app.js  styles.css  sw.js  poster.js  manifest.json
  data/routes.js            # 52 条路线主数据（名称/难度/里程/装备/行程…）
  data/routebooks/*.js      # 路书：检查点、季节、预算、服务、海拔剖面
  data/tracks/*.gpx|.geojson# 52 条实测轨迹
  data/china-map.json       # 自建中国地图边界
  images/routes/<id>/*.jpg  # 每条路线 3–5 张实拍图
netlify/functions/ai.js     # AI 代理（Netlify 版）
wrangler.jsonc              # Cloudflare 部署配置（静态资源指向 public）
dev/                        # 本地工具与素材（不参与发布）
  tools/*.mjs               # 数据流水线脚本，见下
```

## 本地运行

不需要安装依赖，用任意静态服务器指向 `public/`：

```bash
npx serve public
# 或
python -m http.server 8899 --directory public
```

打开提示的地址即可（本地没有 AI 后端，AI 向导会退回本地匹配引擎，其余功能完整）。

## 部署

```bash
# Cloudflare（当前主站，纯静态资源）
npx wrangler deploy --assets ./public --name xiakexing

# Netlify（历史方式，函数目录 netlify/functions）
netlify deploy --prod --site <site_id>
```

AI 代理需要环境变量 `DEEPSEEK_API_KEY`（可选 `AI_MODEL`、`AI_API_BASE`）。页面「AI 设置」里也能指定代理地址，所以换托管商不用改代码。

## 数据流水线（dev/tools）

| 脚本 | 作用 |
| --- | --- |
| `gpx-to-geojson.mjs` | 两步路 GPX → 项目轨迹；自动按轨迹名匹配路线、按异常间距断段、抽稀到 2000 点以内 |
| `normalize-batch.mjs` | 批量规整一批 GPX（改名成路线 id、多文件合并、保留分段） |
| `rebuild-checkpoints.mjs` | 按真实轨迹重建检查点与海拔剖面；缺失信息写成「待核实」 |
| `list-missing-tracks.mjs` | 列出仍缺实测轨迹的路线 |
| `minify-china-map.mjs` | 压缩自建中国地图数据（坐标降精度 + 去空白，省 18%） |
| `bump-font-sizes.mjs` / `list-light-surfaces.mjs` | 字号与夜间模式可读性批处理 |
| `show-book.mjs` / `remove-routes.mjs` | 查看某条路书 / 安全地批量下架路线 |

## 已知限制与下一步

- `pages.dev` 国内可访问但速度一般；要更好的访问体验需要自有域名 + 备案 + 国内节点
- AI 目前复用现有 Netlify 代理（跨域调用），后续可以迁到 Cloudflare 上自建
- 检查点名称还是「起点 / 途中 x km / 最高点 / 终点」，计划用 OSM 真实 POI 换成地名
- 季节窗口目前是定性描述，计划用近十年气候数据生成有数字的版本

## 免责声明

路线里程、票价、开放状态随时可能变化，本站数据仅供规划参考，**出发前请向景区与当地核实**。轨迹来自用户上传与公开整理，请遵守当地法规、保护区与防火规定；户外有风险，请结伴出行并携带必要装备。

代码与数据版权归作者所有，未经许可请勿用于商业用途。
