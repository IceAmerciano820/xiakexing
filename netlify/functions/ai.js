/**
 * 霞客行 AI 推荐代理 — Netlify Function
 * 代理 DeepSeek / OpenAI 兼容 API，避免在浏览器暴露 API Key。
 *
 * 环境变量（在 Netlify 后台配置）：
 *   DEEPSEEK_API_KEY  — DeepSeek API Key（必填）
 *   AI_API_BASE       — API 基础地址，默认 https://api.deepseek.com/v1
 *   AI_MODEL          — 模型名，默认 deepseek-chat
 *
 * 请求格式（前端 POST body）：
 *   { model?, instructions, userPrompt, parsed?, routes? }
 *
 * 响应格式：
 *   { recommendations: [{ id, reason }] }
 */

const AI_API_BASE = process.env.AI_API_BASE || 'https://api.deepseek.com/v1';
const AI_MODEL = process.env.AI_MODEL || 'deepseek-chat';
const API_KEY = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Content-Type': 'application/json; charset=utf-8'
  };

  // Health check
  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        model: AI_MODEL,
        hasKey: !!API_KEY,
        provider: AI_API_BASE
      })
    };
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  if (!API_KEY) {
    return {
      statusCode: 503,
      headers,
      body: JSON.stringify({
        error: 'AI 服务未配置 API Key，请在 Netlify 环境变量中设置 DEEPSEEK_API_KEY。'
      })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid JSON body' })
    };
  }

  const {
    instructions,
    userPrompt,
    parsed,
    routes
  } = body;

  const routeContext = Array.isArray(routes) && routes.length > 0
    ? routes.map((r) =>
        `[${r.id}] ${r.name} | ${r.region} | 难度:${r.difficulty} | ${r.days} | ${r.distanceKm}km | 最高${r.highestM}m | 标签:${(r.tags || []).join('/')} | ${r.summary || ''}`
      ).join('\n')
    : '';

  const systemContent =
    `${instructions || '你是「霞客」徒步路线助手，基于路线库推荐适合的路线。'}\n\n` +
    `当前可用路线库（格式：[id] 名称 | 地区 | 难度 | 天数 | 距离 | 最高海拔 | 标签 | 简介）：\n${routeContext}\n\n` +
    `用户筛选条件：${JSON.stringify(parsed || {})}\n\n` +
    `请从以上路线库中选择最多3条最匹配的路线。只返回 JSON 数组，不要 Markdown 代码块或任何额外文字，格式：[{"id":"路线id","reason":"30字以内推荐理由"}]`;

  try {
    const response = await fetch(`${AI_API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: body.model || AI_MODEL,
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
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: `AI 服务返回错误 ${response.status}`,
          detail: errorText.slice(0, 300)
        })
      };
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    // Parse JSON from response
    let recommendations;
    try {
      // Try direct parse first (for json_object mode)
      const parsed1 = JSON.parse(content);
      recommendations = Array.isArray(parsed1) ? parsed1 :
        Array.isArray(parsed1.recommendations) ? parsed1.recommendations :
        [parsed1].filter(Boolean);
    } catch {
      // Try extracting JSON array
      const match = content.match(/\[[\s\S]*\]/);
      if (match) {
        recommendations = JSON.parse(match[0]);
      } else {
        recommendations = [];
      }
    }

    // Validate and sanitize
    const valid = recommendations
      .filter((r) => r && r.id && typeof r.id === 'string')
      .slice(0, 3)
      .map((r) => ({
        id: r.id,
        reason: String(r.reason || 'AI 推荐').slice(0, 120)
      }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ recommendations: valid })
    };
  } catch (error) {
    console.error('AI function error:', error);
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({
        error: 'AI 服务调用失败',
        detail: error.message?.slice(0, 200) || 'Unknown error'
      })
    };
  }
};
