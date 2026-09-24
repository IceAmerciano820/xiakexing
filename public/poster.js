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

  window.XIAKE_POSTER = { makeCard: makeCard };
})();
