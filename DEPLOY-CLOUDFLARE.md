# 部署到 Cloudflare（Workers 静态资源）

仓库根目录已经放了 `wrangler.jsonc`，作用只有一个：告诉 Cloudflare「把 `public/` 当作静态资源发布」。
有了它，Cloudflare 里那条默认的 `npx wrangler deploy` 就能正常工作，不需要构建命令、也不需要写 Worker 代码。

## 在 Cloudflare 控制台要做的

1. 打开 Workers & Pages → 应用 `xiakexing`。
2. 确认 **Build command 留空**、**Deploy command 是 `npx wrangler deploy`**（默认值即可）。
3. 到 **Deployments** 点一次 **Retry deployment / Create deployment**（因为要让它拉到新的 `wrangler.jsonc`）。
4. 部署成功后访问 `https://xiakexing.<你的账号子域>.workers.dev/`。如果仍显示 **No active routes**，去 **Settings → Domains & Routes** 启用 `workers.dev` 子域。

## 验收

- 首页显示「共 52 条路线」，中国地图正常；`?route=qilian` 是「冰沟河穿越」、`?route=qinghai-lake` 是「青海湖环湖骑行」。
- AI 向导：默认会跨域调用现有 Netlify 代理（`app.js` 里的回退逻辑），能出推荐即通。

## 注意

- `workers.dev`、`pages.dev` 这类公共子域在国内访问不稳定（有时被干扰），海外访问没问题。要稳定服务国内用户，还是需要**自己的域名 + 备案 + 国内节点（腾讯云 EdgeOne）**。
- Netlify 的配置（`netlify.toml`、`netlify/functions/ai.js`）保留不动，随时可回退。
