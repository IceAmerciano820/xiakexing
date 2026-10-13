# 部署到 Cloudflare Pages（免费、免实名）

Netlify 免费额度用尽后，改用 Cloudflare Pages 托管。代码侧已经准备好：

- 静态站点：`public/`（和 Netlify 用的是同一份，无需改动）
- AI 代理：`functions/api/ai/index.js`（`POST /api/ai`）、`functions/api/ai/health.js`（`GET /api/ai/health`）、公共逻辑 `functions/api/ai/_shared.js`
- 原来的 Netlify 配置（`netlify.toml`、`netlify/functions/ai.js`）保留不动，随时可以回退

## 你要做的（大约 5 分钟）

1. 注册：打开 https://dash.cloudflare.com/sign-up ，用邮箱注册即可（不需要实名、不需要绑卡）。
2. 新建项目：左侧 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**，授权 GitHub 后选择仓库 `IceAmerciano820/xiakexing`。
3. 填构建设置：
   - Production branch：`mobile-ux-optimization`
   - Framework preset：`None`
   - Build command：**留空**
   - Build output directory：`public`
4. 点 **Save and Deploy**，等 1 分钟左右拿到 `xxx.pages.dev` 地址。
5. 配 AI 密钥：项目 → **Settings → Variables and Secrets → Add**，名称填 `DEEPSEEK_API_KEY`，值填本地 `D:\HuaweiMoveData\Users\MR.Lee\Documents\ChatGPT\内容选题\.env` 里那一行的值（**不要截图或发到聊天里**）。可选再加 `AI_MODEL`（默认 `deepseek-chat`）、`AI_API_BASE`（默认 `https://api.deepseek.com/v1`）。
6. 加完变量再 **Deployments → Retry deployment** 一次，让变量生效。

## 验收

- 打开 `https://<你的项目>.pages.dev/api/ai/health`，应返回 `{"ok":true,"hasKey":true,...}`；`hasKey` 为 `false` 说明环境变量没生效或没重新部署。
- 首页随便筛一下，点「AI 帮我推荐」能出推荐就通了；出不来会退回本地匹配引擎，不影响其它功能。
- 打开 `?route=yubeng` 看轨迹地图、`?route=qilian` 看冰沟河的数据是否为新版。

## 说明

- 生成的图文里的二维码用的是当前域名，换域名后自动指向新地址，不用改代码。
- Service Worker 缓存按域名独立，新域名首次访问会重新建缓存，属正常。
- 若以后想回 Netlify：额度恢复后直接推 GitHub 或手动重试部署即可，两边互不影响。
