// GET /api/ai/health —— 「AI 设置」里的测试连接按钮用的健康检查
import { CORS_HEADERS, jsonResponse, healthPayload } from './_shared.js';

export async function onRequest(context) {
  const method = context.request.method.toUpperCase();
  if (method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS_HEADERS });
  if (method !== 'GET') return jsonResponse({ error: 'Method Not Allowed' }, 405);
  return jsonResponse(healthPayload(context.env));
}
