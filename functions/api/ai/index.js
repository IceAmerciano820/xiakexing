// POST /api/ai —— 前端 AI 向导的推荐接口
import { CORS_HEADERS, jsonResponse, healthPayload, recommend } from './_shared.js';

export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method.toUpperCase();

  if (method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS_HEADERS });
  if (method === 'GET') return jsonResponse(healthPayload(env));
  if (method !== 'POST') return jsonResponse({ error: 'Method Not Allowed' }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }
  return recommend(body, env);
}
