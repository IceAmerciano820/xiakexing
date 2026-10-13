/**
 * 霞客 · AI 推荐代理的公共逻辑（Cloudflare Pages Functions 版）
 * 与 netlify/functions/ai.js 行为一致，只是换成 Workers 运行时：
 * 环境变量通过 context.env 读取（在 Pages 后台 Variables and Secrets 里配置）。
 *
 * 需要配置的环境变量：
 *   DEEPSEEK_API_KEY — DeepSeek API Key（必填）
 *   AI_API_BASE      — 兼容 OpenAI 的接口地址，默认 https://api.deepseek.com/v1
 *   AI_MODEL         — 模型名，默认 deepseek-chat
 */

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8'
};

export const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: CORS_HEADERS });

export const aiConfig = (env) => ({
  base: env.AI_API_BASE || 'https://api.deepseek.com/v1',
  model: env.AI_MODEL || 'deepseek-chat',
  key: env.DEEPSEEK_API_KEY || env.OPENAI_API_KEY || ''
});

export const healthPayload = (env) => {
  const cfg = aiConfig(env);
  return { ok: true, model: cfg.model, hasKey: Boolean(cfg.key), provider: cfg.base };
};

export async function recommend(body, env) {
  const cfg = aiConfig(env);
  if (!cfg.key) {
    return jsonResponse(
      { error: 'AI 服务未配置 API Key，请在托管平台的环境变量里设置 DEEPSEEK_API_KEY。' },
      503
    );
  }

  const { instructions, userPrompt, parsed, routes } = body || {};
  const routeContext = Array.isArray(routes) && routes.length
    ? routes
        .map(
          (r) =>
            `[${r.id}] ${r.name} | ${r.region} | 难度:${r.difficulty} | ${r.days} | ${r.distanceKm}km | 最高${r.highestM}m | 标签:${(r.tags || []).join('/')} | ${r.summary || ''}`
        )
        .join('\n')
    : '';

  const systemContent =
    `${instructions || '你是「霞客」徒步路线助手，基于路线库推荐适合的路线。'}\n\n` +
    `当前可用路线库（格式：[id] 名称 | 地区 | 难度 | 天数 | 距离 | 最高海拔 | 标签 | 简介）：\n${routeContext}\n\n` +
    `用户筛选条件：${JSON.stringify(parsed || {})}\n\n` +
    `请从以上路线库中选择最多3条最匹配的路线。只返回 JSON 数组，不要 Markdown 代码块或任何额外文字，格式：[{"id":"路线id","reason":"30字以内推荐理由"}]`;

  try {
    const response = await fetch(`${cfg.base}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cfg.key}`
      },
      body: JSON.stringify({
        model: body.model || cfg.model,
        messages: [
          { role: 'system', content: systemContent },
          { role: 'user', content: userPrompt || '请推荐3条适合当前季节和偏好的路线。' }
        ],
        temperature: 0.7,
        max_tokens: 800,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      return jsonResponse(
        { error: `AI 服务返回错误 ${response.status}`, detail: errorText.slice(0, 300) },
        response.status
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    let recommendations;
    try {
      const parsedOnce = JSON.parse(content);
      recommendations = Array.isArray(parsedOnce)
        ? parsedOnce
        : Array.isArray(parsedOnce.recommendations)
          ? parsedOnce.recommendations
          : [parsedOnce].filter(Boolean);
    } catch {
      const match = content.match(/\[[\s\S]*\]/);
      recommendations = match ? JSON.parse(match[0]) : [];
    }

    const valid = recommendations
      .filter((r) => r && typeof r.id === 'string' && r.id)
      .slice(0, 3)
      .map((r) => ({ id: r.id, reason: String(r.reason || 'AI 推荐').slice(0, 120) }));

    return jsonResponse({ recommendations: valid });
  } catch (error) {
    console.error('AI function error:', error);
    return jsonResponse(
      { error: 'AI 服务调用失败', detail: (error && error.message ? error.message : 'Unknown error').slice(0, 200) },
      502
    );
  }
}
