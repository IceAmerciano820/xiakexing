/* 霞客 · 路线卡生成器：用 canvas 绘制可直接发小红书的封面卡 */
(function () {
  const W = 1080, H = 1440;
  const C = {
    paper: "#f2ece1", paper2: "#e7ddcc", ink: "#241f19",
    muted: "#5f5648", brand: "#81251d", line: "rgba(36,31,25,.20)"
  };
  const SERIF = '"Noto Serif SC","Songti SC","STSong","SimSun",serif';
  const MONO = '"IBM Plex Mono","SF Mono",Consolas,monospace';
  const SANS = '"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';

  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function label(ctx, str, x, y, o) {
    o = o || {};
    ctx.save();
    ctx.fillStyle = o.color || C.muted;
    ctx.font = (o.weight || 400) + " " + (o.size || 20) + "px " + (o.font || MONO);
    ctx.textAlign = o.align || "left";
    const sp = o.spacing === undefined ? 0 : o.spacing;
    if (sp && "letterSpacing" in ctx) ctx.letterSpacing = sp + "px";
    ctx.fillText(str, x, y);
    ctx.restore();
  }

  function loadImage(src) {
    return new Promise(function (resolve) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = function () { resolve(img); };
      img.onerror = function () { resolve(null); };
      img.src = src;
    });
  }

  function qrSvg(url, size) {
    if (typeof qrcode !== "function") return null;
    const qr = qrcode(0, "M");
    qr.addData(url);
    qr.make();
    const tag = qr.createSvgTag({ cellSize: 4, margin: 1 });
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(tag) +
      "#" + size;
  }

  function firstSentence(str, max) {
    const t = (str || "").split(/[。；;]/)[0] || "";
    return t.length > max ? t.slice(0, max) + "…" : t;
  }

  async function makeCard(route, opts) {
    opts = opts || {};
    const difficulty = ["", "入门", "轻松", "进阶", "困难", "挑战"][route.difficulty] || "进阶";
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const ctx = cv.getContext("2d");

    // 纸底 + 暖光 + 颗粒
    ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W, H);
    const g1 = ctx.createRadialGradient(180, 160, 0, 180, 160, 460);
    g1.addColorStop(0, "rgba(197,150,46,.10)"); g1.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);
    const g2 = ctx.createRadialGradient(960, 1300, 0, 960, 1300, 480);
    g2.addColorStop(0, "rgba(129,37,29,.08)"); g2.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "rgba(36,31,25,.035)";
    for (let i = 0; i < 5200; i++) ctx.fillRect(Math.random() * W, Math.random() * H, 1, 1);

    // 顶部信息行
    label(ctx, "霞客 · 户外路书", 88, 120, { spacing: 0.5 });
    ctx.save();
    ctx.fillStyle = C.brand;
    ctx.beginPath(); ctx.arc(232, 113, 4, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    label(ctx, route.region + " · " + route.name, 252, 120, { spacing: 0.5 });

    // 小标题（品牌色）
    label(ctx, "徒步路线 · " + route.days, 88, 200, { size: 21, color: C.brand, family: SANS, spacing: 1.6 });

    // 标题
    label(ctx, route.name, 86, 330, { size: 124, font: SERIF, weight: 500, color: C.ink, spacing: 4 });

    // 右侧季节
    label(ctx, "最佳季节", 992, 190, { size: 20, align: "right", spacing: 0.6 });
    label(ctx, route.bestSeasons.join(" · "), 992, 240, { size: 32, font: SERIF, weight: 500, color: C.ink, align: "right", spacing: 2 });

    // 副标题（真实路线副标题）
    label(ctx, route.subtitle, 88, 400, { size: 34, font: SERIF, color: C.muted, spacing: 1 });

    // 封面照片
    const PX = 88, PY = 450, PW = W - 176, PH = 507;
    // 优先用第二张（通常是场景大图，更适合宽幅裁切），失败再退回第一张
    let img = null;
    const photoList = opts.photo ? [opts.photo] : [
      "images/routes/" + route.id + "/02.jpg",
      "images/routes/" + route.id + "/01.jpg"
    ];
    for (const src of photoList) { img = await loadImage(src); if (img) break; }
    ctx.save();
    rr(ctx, PX, PY, PW, PH, 4);
    ctx.clip();
    if (img) {
      const s = Math.max(PW / img.width, PH / img.height);
      ctx.drawImage(img, PX + (PW - img.width * s) / 2, PY + (PH - img.height * s) / 2, img.width * s, img.height * s);
    } else {
      ctx.fillStyle = C.paper2; ctx.fillRect(PX, PY, PW, PH);
    }
    ctx.restore();

    // 照片说明
    label(ctx, route.region + " · " + route.name + " 沿途", 88, 995, { size: 20, spacing: 0.6 });

    // 正文（用路线摘要首句，真实内容）
    ctx.save();
    ctx.fillStyle = C.ink;
    ctx.font = "400 28px " + SERIF;
    ctx.fillText(firstSentence(route.summary, 34), 88, 1060);
    ctx.restore();

    // 数据条
    const facts = ["难度 " + route.difficulty + "/5", route.days, route.distance + " km",
      "爬升 " + route.elevationGain + " m", "最高 " + route.highest + " m"];
    ctx.save();
    ctx.strokeStyle = C.line; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(88, 1112); ctx.lineTo(W - 88, 1112); ctx.stroke();
    ctx.restore();
    const colW = (W - 176) / facts.length;
    facts.forEach(function (f, i) {
      label(ctx, f, 88 + colW * i + colW / 2, 1152, { size: 20, align: "center", spacing: 0.4 });
    });

    // 页脚：品牌 + 二维码
    label(ctx, "霞客 · 徒步路线助手", 88, 1330, { size: 36, font: SERIF, weight: 500, color: C.ink, spacing: 1.5 });
    label(ctx, "扫码打开完整攻略 · 实时天气 · 装备清单", 88, 1372, { size: 22, color: C.muted, family: SANS, spacing: 0.6 });

    const url = opts.url || (location.origin + location.pathname + "?route=" + route.id);
    if (typeof qrcode === "function") {
      const qr = qrcode(0, "M"); qr.addData(url); qr.make();
      const tag = qr.createSvgTag({ cellSize: 4, margin: 1 });
      const qrImg = await loadImage("data:image/svg+xml;charset=UTF-8," + encodeURIComponent(tag));
      if (qrImg) ctx.drawImage(qrImg, 862, 1230, 130, 130);
    }
    return cv.toDataURL("image/png");
  }

  /* ============ 通用页面元件（图文内页共用） ============ */

  function paperBg(ctx) {
    ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W, H);
    const g1 = ctx.createRadialGradient(180, 160, 0, 180, 160, 460);
    g1.addColorStop(0, "rgba(197,150,46,.10)"); g1.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);
    const g2 = ctx.createRadialGradient(960, 1300, 0, 960, 1300, 480);
    g2.addColorStop(0, "rgba(129,37,29,.08)"); g2.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "rgba(36,31,25,.035)";
    for (let i = 0; i < 4200; i++) ctx.fillRect(Math.random() * W, Math.random() * H, 1, 1);
  }

  function newPage() {
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const ctx = cv.getContext("2d");
    paperBg(ctx);
    return { cv: cv, ctx: ctx };
  }

  function brandDot(ctx, x, y) {
    ctx.save();
    ctx.fillStyle = C.brand;
    ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function header(ctx, route, section) {
    label(ctx, "霞客 · 户外路书", 88, 120, { spacing: 0.5 });
    brandDot(ctx, 232, 113);
    label(ctx, route.region + " · " + route.name + " · " + section, 252, 120, { spacing: 0.5 });
  }

  function headBlock(ctx, kicker, titleLines) {
    label(ctx, kicker, 88, 200, { size: 21, color: C.brand, family: SANS, spacing: 1.6 });
    let y = 300;
    titleLines.forEach(function (t, i) {
      label(ctx, t, 86, y + i * 112, { size: 88, font: SERIF, weight: 500, color: C.ink, spacing: 3 });
    });
    return y + titleLines.length * 112;
  }

  function hairline(ctx, y, x1, x2) {
    ctx.save();
    ctx.strokeStyle = C.line; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x1 === undefined ? 88 : x1, y); ctx.lineTo(x2 === undefined ? W - 88 : x2, y); ctx.stroke();
    ctx.restore();
  }

  function strip(ctx, parts) {
    hairline(ctx, 1288);
    label(ctx, parts.filter(Boolean).join("  —  "), 88, 1338, { size: 22, color: C.muted, spacing: 0.4 });
    label(ctx, "霞客 · 徒步路线助手", 992, 1338, { size: 20, align: "right", color: C.muted, spacing: 0.4 });
  }

  function wrapLines(ctx, text, maxWidth, maxLines) {
    const chars = String(text || "").replace(/\s+/g, " ").trim().split("");
    const lines = [];
    let line = "";
    for (let i = 0; i < chars.length; i++) {
      const test = line + chars[i];
      if (line && ctx.measureText(test).width > maxWidth) { lines.push(line); line = chars[i]; }
      else line = test;
    }
    if (line) lines.push(line);
    if (lines.length > maxLines) {
      const kept = lines.slice(0, maxLines);
      let last = kept[maxLines - 1];
      while (last.length > 1 && ctx.measureText(last + "…").width > maxWidth) last = last.slice(0, -1);
      kept[maxLines - 1] = last + "…";
      return kept;
    }
    return lines;
  }

  function paragraph(ctx, text, x, y, maxWidth, lineHeight, maxLines, style) {
    style = style || {};
    ctx.save();
    ctx.fillStyle = style.color || C.ink;
    ctx.font = (style.weight || 400) + " " + (style.size || 28) + "px " + (style.font || SERIF);
    if (style.spacing && "letterSpacing" in ctx) ctx.letterSpacing = style.spacing + "px";
    const lines = wrapLines(ctx, text, maxWidth, maxLines);
    lines.forEach(function (l, i) { ctx.fillText(l, x, y + i * lineHeight); });
    ctx.restore();
    return y + lines.length * lineHeight;
  }

  function ledgerRow(ctx, y, no, title, note, right) {
    label(ctx, no, 88, y, { size: 20, color: C.brand, spacing: 1 });
    ctx.save();
    ctx.fillStyle = C.ink;
    ctx.font = "500 33px " + SERIF;
    ctx.fillText(wrapLines(ctx, title || "", 540, 1)[0] || "", 152, y);
    ctx.restore();
    if (right) label(ctx, right, W - 88, y, { size: 20, align: "right", color: C.muted, spacing: 0.4 });
    if (note) paragraph(ctx, note, 152, y + 42, 720, 32, 1, { size: 22, color: C.muted, font: SANS });
    hairline(ctx, y + 76);
    return y + 116;
  }

  const SEASON_NAMES = [
    { keys: ["春", "spring"], name: "春" },
    { keys: ["夏", "summer"], name: "夏" },
    { keys: ["秋", "autumn", "fall"], name: "秋" },
    { keys: ["冬", "winter"], name: "冬" }
  ];

  function seasonName(key) {
    const k = String(key || "").toLowerCase();
    const hit = SEASON_NAMES.find(function (s) { return s.keys.some(function (x) { return k.indexOf(x) >= 0; }); });
    return hit ? hit.name : String(key || "");
  }

  function profilePoints(book) {
    if (book && Array.isArray(book.elevationProfile) && book.elevationProfile.length > 1) {
      return book.elevationProfile.map(function (p) { return { distance: Number(p.distance) || 0, elevation: Number(p.elevation) || 0, name: p.name || "" }; });
    }
    if (book && Array.isArray(book.checkpoints) && book.checkpoints.length > 1) {
      return book.checkpoints.map(function (p) { return { distance: Number(p.distance) || 0, elevation: Number(p.elevation) || 0, name: p.name || "" }; });
    }
    return [];
  }

  /* ============ P2 · 行程：每天走多少、住在哪 ============ */

  function makeItineraryPage(route, book) {
    const p = newPage(), ctx = p.ctx;
    header(ctx, route, "行程");
    const days = book && Array.isArray(book.itinerary) ? book.itinerary : [];
    headBlock(ctx, (days.length ? days.length + " 天怎么走" : "强度与节奏"), ["每天走多少", "住在哪"]);

    if (!days.length) {
      paragraph(ctx, "这条路线还没有分段行程数据。先按每天的爬升和检查点自己排节奏，拿到实测行程后我们会补在这里。", 88, 560, W - 176, 42, 4, { size: 30, color: C.muted });
    } else {
      const rows = days.slice(0, 5);
      const rowH = days.length > 5 ? 132 : 140;
      let y = 552;
      rows.forEach(function (d, i) {
        const no = String(Number.isFinite(d.day) ? d.day : i).padStart(2, "0");
        label(ctx, no, 88, y, { size: 20, color: C.brand, spacing: 1 });
        ctx.save();
        ctx.fillStyle = C.ink;
        ctx.font = "500 32px " + SERIF;
        ctx.fillText(wrapLines(ctx, d.title || "", 560, 1)[0] || "", 152, y);
        ctx.restore();
        if (d.overnight) label(ctx, "住 " + d.overnight, W - 88, y, { size: 20, align: "right", color: C.muted, spacing: 0.4 });
        if (d.desc) paragraph(ctx, d.desc, 152, y + 40, 700, 30, 2, { size: 21, color: C.muted, font: SANS });
        hairline(ctx, y + 108);
        y += rowH;
      });
      if (days.length > 5) {
        label(ctx, "另有 " + (days.length - 5) + " 天行程，见 App 内完整路书", 88, y + 4, { size: 20, color: C.muted, spacing: 0.4 });
      }
    }
    strip(ctx, ["全程 " + route.distance + " km", "累计爬升 " + route.elevationGain + " m", route.days]);
    return p.cv.toDataURL("image/png");
  }

  /* ============ P3 · 地形：海拔剖面 + 关键节点 ============ */

  function makeTerrainPage(route, book) {
    const p = newPage(), ctx = p.ctx;
    header(ctx, route, "地形");
    headBlock(ctx, "海拔剖面", ["先看爬升", "再看风景"]);

    const FX = 88, FY = 452, FW = W - 176, FH = 372;
    ctx.save();
    ctx.fillStyle = C.paper2;
    rr(ctx, FX, FY, FW, FH, 6); ctx.fill();
    ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.stroke();
    ctx.restore();

    const pts = profilePoints(book);
    if (pts.length > 1) {
      const maxD = Math.max.apply(null, pts.map(function (q) { return q.distance; })) || 1;
      const elevs = pts.map(function (q) { return q.elevation; });
      const minE = Math.min.apply(null, elevs), maxE = Math.max.apply(null, elevs);
      const span = Math.max(maxE - minE, 100);
      const padX = 34, padY = 46;
      const px = function (d) { return FX + padX + (FW - padX * 2) * (d / maxD); };
      const py = function (e) { return FY + FH - padY - (FH - padY * 2) * ((e - minE) / span); };

      ctx.save();
      ctx.beginPath();
      pts.forEach(function (q, i) { const x = px(q.distance), y = py(q.elevation); if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
      ctx.lineTo(px(maxD), FY + FH - padY); ctx.lineTo(px(0), FY + FH - padY); ctx.closePath();
      ctx.fillStyle = "rgba(129,37,29,.08)"; ctx.fill();
      ctx.beginPath();
      pts.forEach(function (q, i) { const x = px(q.distance), y = py(q.elevation); if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
      ctx.strokeStyle = C.brand; ctx.lineWidth = 4; ctx.lineJoin = "round"; ctx.stroke();
      ctx.restore();

      const peaks = [
        { d: pts[0].distance, e: pts[0].elevation, text: "起点 " + Math.round(pts[0].elevation) + "m", align: "left" },
        { d: maxD, e: pts[pts.length - 1].elevation, text: "终点 " + Math.round(pts[pts.length - 1].elevation) + "m", align: "right" }
      ];
      const hi = pts.reduce(function (a, b) { return b.elevation > a.elevation ? b : a; }, pts[0]);
      peaks.splice(1, 0, { d: hi.distance, e: hi.elevation, text: "最高 " + Math.round(hi.elevation) + "m" + (hi.name ? " · " + hi.name : ""), align: hi.distance > maxD * 0.6 ? "right" : "left" });
      peaks.forEach(function (m) {
        const x = px(m.d), y = py(m.e);
        ctx.save();
        ctx.fillStyle = C.brand;
        ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        label(ctx, m.text, m.align === "right" ? Math.min(x + 14, W - 120) : Math.max(x + 14, 110), y - 14, { size: 21, color: C.muted, spacing: 0.3, align: m.align === "right" ? "right" : "left" });
      });
    } else {
      label(ctx, "海拔数据待补充", FX + 34, FY + FH / 2, { size: 26, color: C.muted, font: SERIF });
    }
    label(ctx, "全程海拔曲线 · 数据取自路线检查点", 88, FY + FH + 36, { size: 20, color: C.muted, spacing: 0.4 });

    const cps = (book && Array.isArray(book.checkpoints) ? book.checkpoints : []).slice();
    let y = FY + FH + 96;
    if (cps.length) {
      const hi = cps.reduce(function (a, b) { return (b.elevation || 0) > (a.elevation || 0) ? b : a; }, cps[0]);
      const picked = [];
      [cps[0], hi, cps[cps.length - 1]].forEach(function (c) { if (c && !picked.some(function (x) { return x.name === c.name; })) picked.push(c); });
      picked.slice(0, 3).forEach(function (c, i) {
        const isHi = c === hi;
        y = ledgerRow(ctx, y, String(i + 1).padStart(2, "0"), c.name || "检查点",
          c.note || (isHi ? "全程最高点" : ""),
          Math.round(c.elevation || 0) + "m · " + (c.distance || 0) + "km");
      });
    } else {
      paragraph(ctx, "关键节点坐标待补充。", 88, y, W - 176, 36, 2, { size: 24, color: C.muted });
    }

    const top = cps.reduce(function (a, b) { return (b.elevation || 0) > (a.elevation || 0) ? b : a; }, cps[0] || {});
    strip(ctx, ["累计爬升 " + route.elevationGain + " m", "最高 " + (top.elevation || route.highest) + " m", "难度 " + route.difficulty + "/5"]);
    return p.cv.toDataURL("image/png");
  }

  /* ============ P4 · 时机：季节窗口 + 预算 ============ */

  function makeSeasonPage(route, book) {
    const p = newPage(), ctx = p.ctx;
    header(ctx, route, "时机");
    headBlock(ctx, "什么时候去", ["两个窗口", "其余时间缺点什么"]);

    const detail = (book && book.seasonDetail) || {};
    const entries = Object.entries(detail);
    let y = 566;
    if (entries.length) {
      entries.slice(0, 4).forEach(function (kv) {
        const key = kv[0], d = kv[1] || {};
        const name = d.label || seasonName(key);
        const months = Array.isArray(d.months) && d.months.length ? d.months.join("-") + " 月" : "";
        ctx.save();
        ctx.fillStyle = C.ink; ctx.font = "500 30px " + SERIF;
        ctx.fillText([name, months].filter(Boolean).join(" · "), 88, y);
        ctx.restore();
        if (d.best) label(ctx, "推荐", 700, y, { size: 19, color: C.brand, spacing: 0.6 });
        if (d.condition) paragraph(ctx, d.condition, 88, y + 36, 620, 28, 1, { size: 21, color: C.ink, font: SANS });
        if (d.risk) paragraph(ctx, "注意：" + d.risk, 88, y + 68, 620, 26, 1, { size: 19, color: C.muted, font: SANS });
        y += 104;
      });
    } else {
      paragraph(ctx, "季节窗口数据待补充，出发前请按当地气象和景区公告确认。", 88, y, 620, 40, 3, { size: 26, color: C.muted });
    }

    const best = entries.filter(function (kv) { return kv[1] && kv[1].best; });
    const rest = entries.filter(function (kv) { return !(kv[1] && kv[1].best); });
    let my = 566;
    [["最佳窗口", best], ["次选", rest]].forEach(function (grp) {
      if (!grp[1].length) return;
      label(ctx, grp[0], 820, my, { size: 19, color: C.brand, spacing: 0.8 });
      const text = grp[1].map(function (kv) { return (kv[1].label || seasonName(kv[0])) + (Array.isArray(kv[1].months) && kv[1].months.length ? " " + kv[1].months.join("-") : ""); }).join("\n");
      paragraph(ctx, text.replace(/\n/g, " / "), 820, my + 34, 172, 28, 3, { size: 20, color: C.muted, font: SANS });
      my += 124;
    });

    const b = (book && book.budget) || {};
    const callout = [b.ticket, b.transport].filter(Boolean).join(" ");
    const callout2 = [b.lodgingPerNight, b.mealsPerDay, b.emergencyReserve].filter(Boolean).join(" ");
    const CY = 1006, CH = 214;
    ctx.save();
    ctx.fillStyle = "rgba(197,150,46,.12)";
    rr(ctx, 88, CY, W - 176, CH, 10); ctx.fill();
    ctx.restore();
    label(ctx, "预算参考", 116, CY + 40, { size: 19, color: C.brand, spacing: 0.8 });
    let cy = CY + 76;
    if (callout) cy = paragraph(ctx, callout, 116, cy, W - 240, 30, 2, { size: 21, color: C.ink, font: SANS });
    if (callout2) paragraph(ctx, callout2, 116, cy + 6, W - 240, 28, 2, { size: 19, color: C.muted, font: SANS });
    if (!callout && !callout2) paragraph(ctx, "预算数据待补充。", 116, cy, W - 240, 30, 2, { size: 21, color: C.muted, font: SANS });

    strip(ctx, ["最佳季节 " + (route.bestSeasons || []).join(" / "), route.days, "票价与季节以官方为准"]);
    return p.cv.toDataURL("image/png");
  }

  /* ============ P5 · 安全：出发前把这四条存下来 ============ */

  function makeSafetyPage(route, book) {
    const p = newPage(), ctx = p.ctx;
    header(ctx, route, "安全");
    headBlock(ctx, "出发之前", ["把这四条存下来"]);

    const s = (book && book.services) || {};
    const exits = (book && Array.isArray(book.checkpoints) ? book.checkpoints : []).filter(function (c) { return c.emergencyExit; });
    const rows = [
      { title: "救援与咨询", note: s.rescue || "记录当地景区/救援电话，山里信号弱时优先卫星通信。", right: (route.region || "") + "属地" },
      { title: "最近医院", note: s.nearestHospital || "出发前查好最近医院和车程，高反严重立即下撤到低海拔。", right: "下撤优先" },
      { title: "向导与进出山交通", note: [s.guideContact, s.transportContact].filter(Boolean).join(" ") || "偏远路线建议提前联系向导与车辆。", right: "提前预约" },
      { title: "户外保险", note: s.insurance || "建议购买含高海拔徒步与紧急救援责任的户外保险。", right: "含救援" }
    ];
    if (exits.length) {
      rows.push({ title: "可下撤点", note: exits.slice(0, 4).map(function (c) { return c.name; }).join(" / "), right: exits.length + " 处" });
    }

    let y = 560;
    rows.slice(0, 5).forEach(function (r, i) {
      y = ledgerRow(ctx, y, String(i + 1).padStart(2, "0"), r.title, r.note, r.right);
    });
    if (y < 1180) {
      paragraph(ctx, "天气、封路、限流随时会变：出发前一天再打一次电话确认，把行程留给家里人。", 88, y + 26, W - 176, 34, 2, { size: 22, color: C.muted, font: SANS });
    }

    strip(ctx, ["内容可信度 " + (book && book.credibility ? book.credibility : "B"), "更新 " + ((book && book.updatedAt) || "未标注"), "出发前请核实官方信息"]);
    return p.cv.toDataURL("image/png");
  }

  /** 生成一套小红书图文：封面 + 行程 + 地形 + 时机 + 安全 */
  async function makePages(route, book, opts) {
    const pages = [];
    pages.push({ id: "cover", title: "封面", dataUrl: await makeCard(route, opts) });
    pages.push({ id: "itinerary", title: "行程", dataUrl: makeItineraryPage(route, book) });
    pages.push({ id: "terrain", title: "地形", dataUrl: makeTerrainPage(route, book) });
    pages.push({ id: "season", title: "时机与预算", dataUrl: makeSeasonPage(route, book) });
    pages.push({ id: "safety", title: "安全", dataUrl: makeSafetyPage(route, book) });
    return pages;
  }

  window.XIAKE_POSTER = { makeCard: makeCard, makePages: makePages };
})();
