# 部署到腾讯云 EdgeOne Pages（免费、国内访问好）

## 为什么走这条路

- Netlify 免费额度已把部署冻结半个多月，新版本一直上不去；
- EdgeOne Pages 免费版够用，国内访问比 netlify.app / pages.dev 都稳；
- **EdgeOne 上只需要做静态托管**：AI 代理继续复用现有 Netlify 函数（实测函数调用不受部署冻结影响，`/api/ai/health` 仍返回 `hasKey: true`，且 CORS 允许跨域），所以不用在 EdgeOne 上重写函数。

## 前提

需要一个**已实名认证**的腾讯云账号（个人认证：身份证 + 人脸识别）。这是 EdgeOne 的硬要求，绕不过。

## 操作步骤

1. 注册/登录腾讯云 → 完成实名认证。
2. 进入 EdgeOne Pages 控制台（腾讯云控制台搜索「EdgeOne」，或 EdgeOne 官网的 Pages / Makers 入口）。
3. 新建项目 → **从 Git 导入** → 授权 GitHub → 选择仓库 `IceAmerciano820/xiakexing`。
4. 构建配置照这样填（界面文案各版本略有差别，认关键词即可）：
   - 生产分支 / Production branch：`mobile-ux-optimization`
   - 框架预设：其他 / 静态站点（不要选 Next.js 之类）
   - 构建命令 / Build command：**留空**（若必须填，写 `echo skip`）
   - 输出目录 / 发布目录 / Output directory：`public`
5. 点部署，等 1–2 分钟，拿到 `xxx.edgeone.app` 域名（也可以后面绑自己的域名）。

## 验收清单

- 首页显示「共 52 条路线」，中国地图正常渲染，没有「地图初始化失败」。
- `?route=qilian` 显示「冰沟河穿越」（甘肃），`?route=qinghai-lake` 显示「青海湖环湖骑行」，`?route=yubeng` 轨迹地图正常。
- AI 向导：默认会自动跨域调用现有 Netlify 代理，点「AI 帮我推荐」应能出结果；若报跨域或超时，打开「AI 设置」把服务地址填成 `https://dapper-kitten-989542.netlify.app/api/ai` 再试。
- 生成图文里的二维码会自动指向新域名，无需改代码。

## 说明与后续

- **AI 的跨域依赖**：EdgeOne 上的 AI 依赖现有 Netlify 函数。这算过渡方案——如果哪天要彻底独立，有两条路：① 在 EdgeOne 上写边缘函数（代码已放在 `dev/cloudflare-functions/`，改成 EdgeOne 的函数格式即可）；② 给「AI 设置」加一个「自带 Key 浏览器直连」选项。
- Netlify 的配置（`netlify.toml`、`netlify/functions/ai.js`）原样保留，随时可以回退；每天 10:15 的自动发布任务也还在盯着，额度一旦恢复它会自动发版。
