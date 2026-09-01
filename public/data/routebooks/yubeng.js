window.ROUTEBOOKS = window.ROUTEBOOKS || {};
window.ROUTEBOOKS.yubeng = {
  id: "yubeng",
  name: "雨崩徒步",
  credibility: "A",
  version: 1,
  updatedAt: "2026-08-16",
  sources: [
    "梅里雪山/雨崩景区公开信息",
    "2026 年 10 月实地轨迹整理",
    "Open-Meteo 实时天气"
  ],
  status: {
    open: true,
    permitRequired: false,
    ticketRequired: true,
    closureRisk: "冬季大雪可能临时封路；尼农峡谷段天气差时建议改乘越野车。景区咨询：0887-8414949。",
    officialUrl: "https://www.diqing.gov.cn/"
  },
  seasonDetail: {
    spring: {
      months: [3, 4, 5],
      condition: "雪线较高，早晚温差大，森林开始返青。",
      risk: "垭口可能有残雪，天气不稳定。",
      best: false
    },
    summer: {
      months: [6, 7, 8],
      condition: "雨季，云雾多，植被茂密。",
      risk: "降水集中，尼农峡谷湿滑，日照金山概率低。",
      best: false
    },
    autumn: {
      months: [10, 11],
      condition: "秋色与日照金山最佳窗口，空气通透。",
      risk: "夜间温度低，需准备保暖层。",
      best: true
    },
    winter: {
      months: [12, 1, 2],
      condition: "雪景壮丽，游客少，天气相对稳定。",
      risk: "高海拔路段积雪结冰，部分客栈可能歇业。",
      best: true
    }
  },
  budget: {
    transport: "飞来寺至西当温泉包车约 150-300 元/车；西当至上雨崩越野车约 200 元/人，骑马约 300 元/人（按季节）。",
    ticket: "雨崩景区门票通常约 55 元/人，请以官方当日票价为准。",
    guide: "常规路线可不请向导；雪季、独行或走尼农峡谷建议请当地向导，约 300-600 元/天。",
    lodgingPerNight: "上下雨崩客栈床位约 60-150 元，标间约 200-400 元；节假日上浮。",
    mealsPerDay: "客栈简餐约 80-150 元/天；山上物价高于县城。",
    emergencyReserve: "建议另留 500-1000 元用于临时包车、改签或应急。"
  },
  checkpoints: [
    { name: "西当温泉", lat: 28.362, lon: 98.828, elevation: 2600, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "传统进山起点，可补给、骑马或乘越野车。" },
    { name: "南宗垭口", lat: 28.380, lon: 98.840, elevation: 3729, distance: 6.8, water: false, camp: false, signal: false, toilet: false, emergencyExit: false, note: "全程主要爬升段，翻垭口后开始下降。" },
    { name: "上雨崩", lat: 28.396, lon: 98.791, elevation: 3150, distance: 11.2, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "第一晚住宿点，看缅茨姆峰位置很好。" },
    { name: "冰湖", lat: 28.402, lon: 98.775, elevation: 3800, distance: 18.5, water: false, camp: false, signal: false, toilet: false, emergencyExit: false, note: "从上雨崩往返约 12-14 公里，垭口海拔高，需早出发。" },
    { name: "下雨崩", lat: 28.389, lon: 98.782, elevation: 3050, distance: 25.8, water: true, camp: true, signal: true, toilet: true, emergencyExit: true, note: "住宿和补给集中，前往神瀑更近。" },
    { name: "神瀑", lat: 28.383, lon: 98.768, elevation: 3650, distance: 32.4, water: true, camp: false, signal: false, toilet: false, emergencyExit: false, note: "藏族转山文化重要节点，注意尊重当地习俗。" },
    { name: "尼农峡谷出口", lat: 28.328, lon: 98.818, elevation: 2050, distance: 42.8, water: false, camp: false, signal: true, toilet: false, emergencyExit: true, note: "崖壁路段窄且湿滑，天气差时建议改乘越野车。" }
  ],
  elevationProfile: [
    { distance: 0, elevation: 2700 },
    { distance: 2.5, elevation: 3100 },
    { distance: 6.8, elevation: 3720 },
    { distance: 9.5, elevation: 3380 },
    { distance: 11.2, elevation: 3160 },
    { distance: 15.0, elevation: 3650 },
    { distance: 18.5, elevation: 3900 },
    { distance: 22.2, elevation: 3400 },
    { distance: 25.8, elevation: 3050 },
    { distance: 29.5, elevation: 3480 },
    { distance: 32.4, elevation: 3650 },
    { distance: 37.0, elevation: 2800 },
    { distance: 42.8, elevation: 2050 },
    { distance: 52.0, elevation: 2200 }
  ],
  itinerary: [
    {
      day: 0,
      title: "飞来寺适应与日照金山",
      desc: "提前一天抵达飞来寺，适应海拔并确认次日进山车辆。天气好时清晨看卡瓦格博日照金山。",
      overnight: "飞来寺",
      checkpoints: []
    },
    {
      day: 1,
      title: "西当温泉—南宗垭口—上雨崩",
      desc: "乘车至西当温泉后开始徒步，沿马帮路翻越南宗垭口，约 11 公里，住上雨崩。",
      overnight: "上雨崩",
      checkpoints: ["西当温泉", "南宗垭口", "上雨崩"]
    },
    {
      day: 2,
      title: "上雨崩—冰湖—上雨崩",
      desc: "往返约 14 公里，最高约 3900 米。上升强度较大，建议早出发并携带路餐。",
      overnight: "上雨崩",
      checkpoints: ["上雨崩", "冰湖", "上雨崩"]
    },
    {
      day: 3,
      title: "上雨崩—下雨崩—神瀑",
      desc: "从上雨崩移步下雨崩，再沿河谷前往神瀑，往返约 12 公里。",
      overnight: "下雨崩",
      checkpoints: ["上雨崩", "下雨崩", "神瀑", "下雨崩"]
    },
    {
      day: 4,
      title: "下雨崩—尼农峡谷—出村",
      desc: "沿尼农大峡谷下降至澜沧江边，约 17 公里。路窄崖陡，天气差时改乘越野车出村。",
      overnight: "返程或飞来寺",
      checkpoints: ["下雨崩", "尼农峡谷出口"]
    }
  ],
  services: {
    rescue: "雨崩景区咨询电话：0887-8414949；偏远路段建议携带卫星通信。",
    nearestHospital: "德钦县人民医院；高反严重时应尽快下撤至低海拔。",
    guideContact: "飞来寺、西当村和雨崩村均有当地向导/马帮，建议提前预约。",
    transportContact: "香格里拉或飞来寺可包车至西当温泉；出村车辆需提前联系。",
    insurance: "建议购买含高海拔徒步、紧急救援的户外保险。"
  },
  tracks: {
    geojson: "data/tracks/yubeng.geojson",
    gpx: "data/tracks/yubeng.gpx"
  },
  media: [
    { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80", caption: "飞来寺日照金山示意图", location: "飞来寺观景台", credit: "Unsplash 示意图" },
    { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80", caption: "雨崩山谷与雪山示意图", location: "上雨崩方向", credit: "Unsplash 示意图" },
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80", caption: "神瀑与经幡示意图", location: "神瀑", credit: "Unsplash 示意图" }
  ]
};
