(function () {
  const makeBook = (config) => ({
    id: config.id,
    name: config.name,
    credibility: config.credibility || "B",
    version: 1,
    updatedAt: "2026-08-16",
    sources: config.sources || ["公开攻略与示例整理", "出发前请核实官方信息"],
    status: config.status || { open: true, permitRequired: false, ticketRequired: true, closureRisk: "出发前请核实开放状态。", officialUrl: "" },
    seasonDetail: config.seasonDetail,
    budget: config.budget,
    checkpoints: config.checkpoints,
    elevationProfile: config.elevationProfile || config.checkpoints.map((point) => ({ distance: point.distance, elevation: point.elevation })),
    itinerary: config.itinerary,
    services: config.services,
    tracks: {
      geojson: `data/tracks/${config.id}.geojson`,
      gpx: `data/tracks/${config.id}.gpx`
    },
    media: config.media || []
  });

  window.ROUTEBOOKS = window.ROUTEBOOKS || {};

  const books = {
    "tiger-leaping-gorge": {
      name: "虎跳峡高路",
      status: { open: true, permitRequired: false, ticketRequired: true, closureRisk: "雨季可能出现落石和塌方；中虎跳台阶湿滑。", officialUrl: "" },
      seasonDetail: {
        "春季": { months: [3, 4, 5], condition: "气温舒适，江水清亮，适合徒步。", risk: "早晚温差大。", best: true },
        "夏季": { months: [6, 7, 8], condition: "峡谷湿热，偶有暴雨。", risk: "落石、塌方风险升高。", best: false },
        "秋季": { months: [9, 10, 11], condition: "通透度好，日落壮观。", risk: "峡谷风大。", best: true },
        "冬季": { months: [12, 1, 2], condition: "干燥少雨，游客较少。", risk: "部分客栈歇业。", best: false }
      },
      budget: { transport: "丽江至桥头约 80-150 元/车；返程包车另计。", ticket: "虎跳峡景区全票约 45 元，学生票约 22.5 元，以官方为准。", guide: "常规高路可不需要向导，中虎跳下段建议结伴。", lodgingPerNight: "沿途客栈约 80-250 元/床位或标间。", mealsPerDay: "约 80-150 元/天。", emergencyReserve: "建议预留 300-600 元。" },
      checkpoints: [
        { name: "桥头/虎跳峡镇", lat: 27.17, lon: 100.07, elevation: 1800, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "传统徒步起点，可补给。" },
        { name: "纳西雅阁", lat: 27.19, lon: 100.09, elevation: 2200, distance: 3.5, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "可住宿和休整。" },
        { name: "28道拐", lat: 27.22, lon: 100.11, elevation: 2500, distance: 8.5, water: false, camp: false, signal: true, toilet: false, emergencyExit: false, note: "全程主要爬升段。" },
        { name: "Halfway客栈", lat: 27.23, lon: 100.12, elevation: 2670, distance: 13.5, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "高路最高区域与经典住宿点。" },
        { name: "Tina's/中虎跳入口", lat: 27.21, lon: 100.10, elevation: 2050, distance: 18.0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "可结束徒步或下中虎跳。" },
        { name: "中虎跳石", lat: 27.20, lon: 100.09, elevation: 1750, distance: 22.0, water: true, camp: false, signal: false, toilet: false, emergencyExit: false, note: "台阶陡，注意落石。" }
      ],
      itinerary: [
        { day: 1, title: "桥头—纳西雅阁—28道拐—Halfway", desc: "约 14 公里，住 Halfway，下午看峡谷日落。", overnight: "Halfway", checkpoints: ["桥头/虎跳峡镇", "纳西雅阁", "28道拐", "Halfway客栈"] },
        { day: 2, title: "Halfway—Tina's—中虎跳—返程", desc: "约 8-10 公里，可下中虎跳石后返回。", overnight: "返程", checkpoints: ["Halfway客栈", "Tina's/中虎跳入口", "中虎跳石"] }
      ],
      services: { rescue: "当地景区救援/报警电话以官方公告为准。", nearestHospital: "虎跳峡镇或丽江市区医院。", guideContact: "沿途客栈可协助联系向导和包车。", transportContact: "丽江或香格里拉班车/包车至桥头。", insurance: "建议购买含峡谷徒步的户外保险。" },
      media: []
    },

    "changpinggou": {
      name: "四姑娘山长坪沟穿越",
      status: { open: true, permitRequired: true, ticketRequired: true, closureRisk: "高海拔垭口天气多变，冬季可能封山；需办理进山手续。", officialUrl: "https://www.sgns.cn" },
      seasonDetail: {
        "春季": { months: [4, 5], condition: "雪线较高，杜鹃逐渐开放。", risk: "垭口残雪，天气不稳。", best: false },
        "夏季": { months: [6, 7, 8], condition: "草甸翠绿，降雨较多。", risk: "山洪、滑坡风险。", best: false },
        "秋季": { months: [10, 11], condition: "彩林与雪山最佳窗口。", risk: "垭口可能积雪。", best: true },
        "冬季": { months: [12, 1, 2, 3], condition: "雪景壮丽但穿越困难。", risk: "低温、积雪、封山。", best: false }
      },
      budget: { transport: "成都至四姑娘山镇约 150-300 元/人；毕棚沟返程另计。", ticket: "长坪沟与毕棚沟门票及观光车以官方为准；票务咨询 400-088-6969 转 1。", guide: "穿越垭口建议请向导，约 500-800 元/天。", lodgingPerNight: "四姑娘山镇民宿约 100-300 元；木骡子营地另计。", mealsPerDay: "约 100-180 元/天，山上自备路餐。", emergencyReserve: "建议预留 800-1500 元。" },
      checkpoints: [
        { name: "长坪沟口", lat: 31.12, lon: 102.89, elevation: 3200, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "景区入口，可乘观光车。" },
        { name: "喇嘛寺", lat: 31.10, lon: 102.88, elevation: 3400, distance: 4, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "步道起点。" },
        { name: "枯树滩", lat: 31.09, lon: 102.86, elevation: 3500, distance: 7, water: true, camp: false, signal: true, toilet: false, emergencyExit: true, note: "栈道结束，开始马道。" },
        { name: "木骡子", lat: 31.06, lon: 102.82, elevation: 3760, distance: 14, water: true, camp: true, signal: false, toilet: false, emergencyExit: true, note: "主要营地，可看幺妹峰北壁。" },
        { name: "叉子沟尾", lat: 31.03, lon: 102.78, elevation: 3900, distance: 24, water: true, camp: true, signal: false, toilet: false, emergencyExit: false, note: "翻垭口前最后营地。" },
        { name: "垭口", lat: 31.00, lon: 102.74, elevation: 4668, distance: 30, water: false, camp: false, signal: false, toilet: false, emergencyExit: false, note: "最高点，风雪风险大。" },
        { name: "毕棚沟出山", lat: 30.98, lon: 102.70, elevation: 3600, distance: 36, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "景区出口。" }
      ],
      itinerary: [
        { day: 1, title: "长坪沟口—木骡子", desc: "约 14 公里，住木骡子营地。", overnight: "木骡子", checkpoints: ["长坪沟口", "喇嘛寺", "枯树滩", "木骡子"] },
        { day: 2, title: "木骡子—叉子沟尾", desc: "约 10 公里，雪山与草甸相伴。", overnight: "叉子沟尾", checkpoints: ["木骡子", "叉子沟尾"] },
        { day: 3, title: "叉子沟尾—垭口—毕棚沟", desc: "凌晨出发翻垭口，天气差时果断下撤。", overnight: "返程", checkpoints: ["叉子沟尾", "垭口", "毕棚沟出山"] }
      ],
      services: { rescue: "四姑娘山景区救助电话：0837-2791110；投诉电话：0837-2791158。", nearestHospital: "四姑娘山镇或小金县医院。", guideContact: "建议联系四姑娘山当地登山向导或俱乐部。", transportContact: "成都茶店子客运站至四姑娘山镇。", insurance: "必须购买含高海拔徒步和救援的户外保险。" },
      media: []
    },

    "yading": {
      name: "稻城亚丁小转山",
      status: { open: true, permitRequired: false, ticketRequired: true, closureRisk: "高海拔地区天气多变，长线可能因天气临时关闭。", officialUrl: "https://www.yadingtour.com" },
      seasonDetail: {
        "春季": { months: [4, 5], condition: "积雪渐融，杜鹃开放。", risk: "早晚寒冷，路滑。", best: false },
        "夏季": { months: [6, 7, 8], condition: "草甸翠绿，降雨较多。", risk: "雷雨、泥泞。", best: true },
        "秋季": { months: [9, 10, 11], condition: "秋色浓烈，雪山通透。", risk: "高海拔夜间温度低。", best: true },
        "冬季": { months: [12, 1, 2, 3], condition: "雪景安静，游客少。", risk: "部分步道冰雪覆盖。", best: false }
      },
      budget: { transport: "成都/稻城至香格里拉镇交通另计；景区观光车必乘。", ticket: "旺季门票约 146 元/次，观光车另计，以官方为准。", guide: "常规景区路线可自助，长线高海拔建议结伴。", lodgingPerNight: "亚丁村或香格里拉镇约 150-500 元。", mealsPerDay: "约 100-180 元/天。", emergencyReserve: "建议预留 600-1000 元。" },
      checkpoints: [
        { name: "香格里拉镇", lat: 28.56, lon: 100.34, elevation: 2900, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "主要住宿与补给点。" },
        { name: "亚丁村", lat: 28.47, lon: 100.35, elevation: 3900, distance: 5, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "高海拔住宿，需适应。" },
        { name: "冲古寺", lat: 28.45, lon: 100.34, elevation: 3900, distance: 7, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "短线与长线交汇点。" },
        { name: "洛绒牛场", lat: 28.42, lon: 100.33, elevation: 4180, distance: 10, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "可骑马或徒步至牛奶海方向。" },
        { name: "牛奶海", lat: 28.40, lon: 100.32, elevation: 4600, distance: 14, water: false, camp: false, signal: false, toilet: false, emergencyExit: false, note: "爬升大，注意高反。" },
        { name: "五色海", lat: 28.39, lon: 100.31, elevation: 4700, distance: 15, water: false, camp: false, signal: false, toilet: false, emergencyExit: false, note: "长线最高点。" }
      ],
      itinerary: [
        { day: 1, title: "香格里拉镇—亚丁村—珍珠海", desc: "适应海拔，走短线看仙乃日与珍珠海。", overnight: "亚丁村", checkpoints: ["香格里拉镇", "亚丁村"] },
        { day: 2, title: "亚丁村—洛绒牛场—牛奶海—五色海", desc: "核心长线，早出发，约 12-14 公里。", overnight: "亚丁村", checkpoints: ["亚丁村", "冲古寺", "洛绒牛场", "牛奶海", "五色海"] },
        { day: 3, title: "冲古寺—出景区", desc: "轻松收尾并返回香格里拉镇。", overnight: "返程", checkpoints: ["冲古寺", "香格里拉镇"] }
      ],
      services: { rescue: "稻城亚丁景区咨询：0836-6966022；救援：0836-6966027；投诉：0836-6966021。", nearestHospital: "香格里拉镇卫生院或稻城县医院。", guideContact: "景区内不建议请黑导，长线可结伴。", transportContact: "稻城亚丁机场或稻城县至景区。", insurance: "建议购买含高海拔救援的户外保险。" },
      media: []
    },

    "kailash": {
      name: "冈仁波齐转山",
      status: { open: true, permitRequired: true, ticketRequired: true, closureRisk: "极高海拔、天气严寒，冬季可能封闭；必须办理边防手续。", officialUrl: "" },
      seasonDetail: {
        "春季": { months: [4, 5], condition: "气温逐渐回升，风大。", risk: "垭口仍可能积雪。", best: false },
        "夏季": { months: [6, 7, 8], condition: "相对温暖，但降水增多。", risk: "高反与泥泞。", best: true },
        "秋季": { months: [9, 10], condition: "天气较稳，适合转山。", risk: "夜间温度很低。", best: true },
        "冬季": { months: [11, 12, 1, 2, 3], condition: "极端寒冷，通常不建议。", risk: "失温、封路、补给不足。", best: false }
      },
      budget: { transport: "拉萨/阿里至塔钦交通成本较高；建议跟队。", ticket: "转山门票约 150 元/人，进山景交车约 60 元，出山景交车约 50 元，以官方为准。", guide: "强烈建议请当地向导，约 800-1500 元/天。", lodgingPerNight: "塔钦约 150-500 元；途中简易住宿另计。", mealsPerDay: "约 100-200 元/天，补给有限。", emergencyReserve: "救援车约 500-800 元/车；建议预留 1500-3000 元。" },
      checkpoints: [
        { name: "塔钦", lat: 31.07, lon: 81.31, elevation: 4675, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "转山起点与集结点。" },
        { name: "曲古寺", lat: 31.06, lon: 81.34, elevation: 4860, distance: 8, water: true, camp: false, signal: false, toilet: false, emergencyExit: false, note: "沿河谷缓升。" },
        { name: "止热寺", lat: 31.03, lon: 81.42, elevation: 5080, distance: 20, water: true, camp: true, signal: false, toilet: false, emergencyExit: false, note: "第一晚住宿点，海拔高。" },
        { name: "卓玛拉垭口", lat: 31.01, lon: 81.45, elevation: 5630, distance: 28, water: false, camp: false, signal: false, toilet: false, emergencyExit: false, note: "全程最高点。" },
        { name: "祖楚寺", lat: 31.04, lon: 81.38, elevation: 4790, distance: 40, water: true, camp: true, signal: false, toilet: false, emergencyExit: true, note: "第二晚住宿点。" },
        { name: "塔钦", lat: 31.07, lon: 81.31, elevation: 4675, distance: 52, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "完成转山。" }
      ],
      itinerary: [
        { day: 1, title: "塔钦—曲古寺—止热寺", desc: "约 20 公里，住止热寺附近，适应海拔。", overnight: "止热寺", checkpoints: ["塔钦", "曲古寺", "止热寺"] },
        { day: 2, title: "止热寺—卓玛拉垭口—祖楚寺", desc: "最艰难一天，翻越 5630 米垭口。", overnight: "祖楚寺", checkpoints: ["止热寺", "卓玛拉垭口", "祖楚寺"] },
        { day: 3, title: "祖楚寺—塔钦", desc: "约 12 公里返回塔钦。", overnight: "塔钦", checkpoints: ["祖楚寺", "塔钦"] }
      ],
      services: { rescue: "各补给站张贴有救援电话，但高峰难叫；务必携带卫星通信。", nearestHospital: "阿里地区医院或塔钦卫生所。", guideContact: "建议通过正规旅行社或当地向导；官方服务号参考「冈仁波齐玛旁雍错景区」。", transportContact: "拉萨/阿里至塔钦，需提前安排。", insurance: "必须购买含极高海拔和直升机救援的户外保险。" },
      media: []
    },

    "wusun": {
      name: "乌孙古道",
      status: { open: true, permitRequired: true, ticketRequired: false, closureRisk: "天山长线，需免费办理入山许可；积雪融化等危险时期可能禁止徒步。", officialUrl: "http://www.zgtks.gov.cn/" },
      seasonDetail: {
        "春季": { months: [5], condition: "雪未完全融化，河水较冷。", risk: "达坂积雪、涉水风险。", best: false },
        "夏季": { months: [6, 7, 8], condition: "草绿花多，适合穿越。", risk: "冰川融水导致河流上涨。", best: true },
        "秋季": { months: [9, 10], condition: "秋色好，但天气变冷。", risk: "降雪、夜间低温。", best: false },
        "冬季": { months: [11, 12, 1, 2, 3, 4], condition: "不适合常规徒步。", risk: "积雪、封路、失温。", best: false }
      },
      budget: { transport: "特克斯至琼库什台包车约 200-400 元/车；库车接驳另计。", ticket: "入山许可通常免费办理，向导/马帮费用另计。", guide: "强烈建议请向导或跟商业队。", lodgingPerNight: "全程扎营为主，琼库什台民宿约 100-300 元。", mealsPerDay: "约 120-200 元/天，需自备长线补给。", emergencyReserve: "建议预留 2000-4000 元。" },
      checkpoints: [
        { name: "琼库什台", lat: 42.30, lon: 82.10, elevation: 2000, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "徒步起点。" },
        { name: "小木屋营地", lat: 42.28, lon: 82.20, elevation: 2800, distance: 18, water: true, camp: true, signal: false, toilet: false, emergencyExit: false, note: "沿河谷深入天山。" },
        { name: "阿克布拉克达坂", lat: 42.22, lon: 82.32, elevation: 3900, distance: 40, water: false, camp: false, signal: false, toilet: false, emergencyExit: false, note: "最高垭口。" },
        { name: "天堂湖", lat: 42.24, lon: 82.35, elevation: 3100, distance: 48, water: true, camp: true, signal: false, toilet: false, emergencyExit: false, note: "经典营地与摄影点。" },
        { name: "科克苏河", lat: 42.20, lon: 82.45, elevation: 2000, distance: 72, water: true, camp: true, signal: false, toilet: false, emergencyExit: true, note: "需要多次涉水。" },
        { name: "黑英山出山", lat: 42.16, lon: 82.60, elevation: 1800, distance: 110, water: true, camp: false, signal: true, toilet: false, emergencyExit: true, note: "徒步终点。" }
      ],
      itinerary: [
        { day: 1, title: "琼库什台—小木屋营地", desc: "约 18 公里，沿河谷进入天山。", overnight: "小木屋营地", checkpoints: ["琼库什台", "小木屋营地"] },
        { day: 2, title: "小木屋营地—阿克布拉克达坂—天堂湖", desc: "翻越达坂后到达天堂湖。", overnight: "天堂湖", checkpoints: ["小木屋营地", "阿克布拉克达坂", "天堂湖"] },
        { day: 3, title: "天堂湖—科克苏河", desc: "下降至河谷，准备过河。", overnight: "科克苏河", checkpoints: ["天堂湖", "科克苏河"] },
        { day: 4, title: "科克苏河—黑英山出山", desc: "多次涉水后出山至库车方向。", overnight: "返程", checkpoints: ["科克苏河", "黑英山出山"] }
      ],
      services: { rescue: "乌孙古道户外徒步综合服务：19317676333/15299262828；紧急险情拨打 110。", nearestHospital: "特克斯或库车医院。", guideContact: "建议通过成熟商业队或当地向导，并提前办理入山许可。", transportContact: "琼库什台进山、黑英山出山接驳需提前安排。", insurance: "必须购买含长线救援、涉水和直升机救援的户外保险。" },
      media: []
    },

    "gongga": {
      name: "贡嘎大环线",
      status: { open: true, permitRequired: true, ticketRequired: false, closureRisk: "高海拔长线，需进山许可；垭口天气多变。", officialUrl: "" },
      seasonDetail: {
        "春季": { months: [4, 5], condition: "雪线较高，杜鹃开放。", risk: "垭口残雪。", best: false },
        "夏季": { months: [6, 7, 8], condition: "草甸翠绿，降雨多。", risk: "山洪、泥石流。", best: false },
        "秋季": { months: [9, 10, 11], condition: "秋色与雪山最佳。", risk: "垭口风雪。", best: true },
        "冬季": { months: [12, 1, 2, 3], condition: "不适合常规穿越。", risk: "低温、封山。", best: false }
      },
      budget: { transport: "成都至康定/老榆林包车约 300-600 元/车；出山接驳另计。", ticket: "进山管理费/向导费以当地为准。", guide: "强烈建议请向导或跟商业队。", lodgingPerNight: "全程扎营为主，康定住宿约 100-300 元。", mealsPerDay: "约 120-200 元/天。", emergencyReserve: "建议预留 1500-3000 元。" },
      checkpoints: [
        { name: "老榆林", lat: 29.60, lon: 101.88, elevation: 3000, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "徒步起点。" },
        { name: "格西草原", lat: 29.63, lon: 101.92, elevation: 3400, distance: 8, water: true, camp: true, signal: false, toilet: false, emergencyExit: false, note: "适应营地。" },
        { name: "上日乌且", lat: 29.66, lon: 101.98, elevation: 4350, distance: 22, water: true, camp: true, signal: false, toilet: false, emergencyExit: false, note: "接近主峰北壁。" },
        { name: "日乌且垭口", lat: 29.68, lon: 102.00, elevation: 4920, distance: 30, water: false, camp: false, signal: false, toilet: false, emergencyExit: false, note: "全程最高点。" },
        { name: "莫溪沟", lat: 29.64, lon: 101.96, elevation: 3900, distance: 45, water: true, camp: true, signal: false, toilet: false, emergencyExit: false, note: "下垭口后营地。" },
        { name: "贡嘎寺", lat: 29.57, lon: 101.91, elevation: 3750, distance: 65, water: true, camp: false, signal: false, toilet: true, emergencyExit: true, note: "可补给或下撤。" },
        { name: "子梅垭口", lat: 29.54, lon: 101.85, elevation: 4550, distance: 80, water: false, camp: false, signal: true, toilet: false, emergencyExit: true, note: "经典贡嘎观景点。" }
      ],
      itinerary: [
        { day: 1, title: "老榆林—格西草原", desc: "约 8 公里，适应海拔。", overnight: "格西草原", checkpoints: ["老榆林", "格西草原"] },
        { day: 2, title: "格西草原—上日乌且", desc: "约 14 公里，雪山进入视野。", overnight: "上日乌且", checkpoints: ["格西草原", "上日乌且"] },
        { day: 3, title: "上日乌且—日乌且垭口—莫溪沟", desc: "翻越最高垭口，注意风雪。", overnight: "莫溪沟", checkpoints: ["上日乌且", "日乌且垭口", "莫溪沟"] },
        { day: 4, title: "莫溪沟—贡嘎寺—子梅垭口", desc: "下切至贡嘎寺，再乘车/徒步至子梅垭口。", overnight: "返程", checkpoints: ["莫溪沟", "贡嘎寺", "子梅垭口"] }
      ],
      services: { rescue: "四川山地救援热线：028-96111；遇险优先拨打 110 并报告经纬度。贡嘎山区信号差，必须携带卫星通信。", nearestHospital: "康定或泸定医院。", guideContact: "建议通过成熟俱乐部或有资质的当地向导，勿轻信无资质个人。", transportContact: "康定包车至老榆林，子梅垭口出山接驳。", insurance: "必须购买含高海拔救援的户外保险。" },
      media: []
    },

    "wugongshan": {
      name: "武功山徒步",
      status: { open: true, permitRequired: false, ticketRequired: true, closureRisk: "雷雨天气禁止登顶；山脊暴晒和大雾需注意。", officialUrl: "http://www.wugongshan.cn" },
      seasonDetail: {
        "春季": { months: [3, 4, 5], condition: "草甸返青，云海概率高。", risk: "天气变化快。", best: true },
        "夏季": { months: [6, 7, 8], condition: "绿草如茵，星空好。", risk: "雷雨、暴晒。", best: true },
        "秋季": { months: [9, 10, 11], condition: "草色渐黄，通透度好。", risk: "山脊风大。", best: true },
        "冬季": { months: [12, 1, 2], condition: "可能出现雾凇和冰雪。", risk: "湿滑、低温。", best: false }
      },
      budget: { transport: "萍乡北站至沈子村包车约 120-200 元/车。", ticket: "武功山门票与索道以官方为准；咨询电话 0799-2109616。", guide: "常规路线可自助，重装露营建议结伴。", lodgingPerNight: "金顶或山脚客栈约 100-400 元。", mealsPerDay: "约 80-150 元/天。", emergencyReserve: "建议预留 300-600 元。" },
      checkpoints: [
        { name: "沈子村", lat: 27.47, lon: 114.19, elevation: 500, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "徒步起点。" },
        { name: "九龙山", lat: 27.49, lon: 114.22, elevation: 1500, distance: 6, water: false, camp: false, signal: true, toilet: false, emergencyExit: false, note: "开始进入山脊草甸。" },
        { name: "金顶", lat: 27.50, lon: 114.25, elevation: 1918, distance: 12, water: true, camp: true, signal: true, toilet: true, emergencyExit: true, note: "住宿、补给和日出点。" },
        { name: "吊马桩", lat: 27.51, lon: 114.27, elevation: 1600, distance: 17, water: true, camp: true, signal: true, toilet: true, emergencyExit: true, note: "可下撤。" },
        { name: "发云界", lat: 27.53, lon: 114.30, elevation: 1628, distance: 24, water: true, camp: true, signal: true, toilet: false, emergencyExit: true, note: "草甸精华段终点。" }
      ],
      itinerary: [
        { day: 1, title: "沈子村—九龙山—金顶", desc: "约 12 公里，住金顶附近。", overnight: "金顶", checkpoints: ["沈子村", "九龙山", "金顶"] },
        { day: 2, title: "金顶—吊马桩—发云界/下山", desc: "沿山脊草甸行走，视时间下撤。", overnight: "返程", checkpoints: ["金顶", "吊马桩", "发云界"] }
      ],
      services: { rescue: "武功山景区救援：0799-7636666；景区派出所：0799-7651110；管委会：0799-7631158。", nearestHospital: "萍乡或芦溪医院。", guideContact: "山脚农家可协助联系向导和包车。", transportContact: "萍乡北站至沈子村/龙山村。", insurance: "建议购买含山地徒步的户外保险。" },
      media: []
    },

    "wutaishan": {
      name: "五台山大朝台",
      status: { open: true, permitRequired: true, ticketRequired: true, closureRisk: "山顶风大，冬季朝台风险高；需遵守朝台管理要求。", officialUrl: "https://www.wtsykfwzx.com" },
      seasonDetail: {
        "春季": { months: [4, 5], condition: "草甸返青，风大。", risk: "低温、大风。", best: false },
        "夏季": { months: [6, 7, 8], condition: "适合朝台，草甸翠绿。", risk: "雷雨、暴晒。", best: true },
        "秋季": { months: [9, 10], condition: "秋色好，天气较稳。", risk: "山顶夜间冷。", best: true },
        "冬季": { months: [11, 12, 1, 2, 3], condition: "雪景壮丽但风险高。", risk: "失温、白毛风、封路。", best: false }
      },
      budget: { transport: "太原/忻州至台怀镇班车或包车。", ticket: "五台山进山费及朝台管理费以官方为准。", guide: "常规大朝台可自助，冬季建议请向导。", lodgingPerNight: "台怀镇约 100-400 元；台顶挂单随喜。", mealsPerDay: "约 60-150 元/天。", emergencyReserve: "建议预留 400-800 元。" },
      checkpoints: [
        { name: "鸿门岩", lat: 39.01, lon: 113.59, elevation: 2500, distance: 0, water: false, camp: false, signal: true, toilet: false, emergencyExit: true, note: "大朝台起点。" },
        { name: "东台", lat: 39.02, lon: 113.62, elevation: 2796, distance: 2, water: false, camp: false, signal: true, toilet: false, emergencyExit: true, note: "日出点。" },
        { name: "北台", lat: 39.06, lon: 113.66, elevation: 3061, distance: 8, water: false, camp: false, signal: true, toilet: false, emergencyExit: false, note: "华北屋脊。" },
        { name: "中台", lat: 39.04, lon: 113.62, elevation: 2890, distance: 16, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "可挂单。" },
        { name: "西台", lat: 39.03, lon: 113.57, elevation: 2773, distance: 24, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "可挂单。" },
        { name: "狮子窝", lat: 39.01, lon: 113.52, elevation: 2300, distance: 32, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "住宿点。" },
        { name: "南台", lat: 38.96, lon: 113.50, elevation: 2485, distance: 45, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "最后一座台顶。" }
      ],
      itinerary: [
        { day: 1, title: "鸿门岩—东台—北台—中台", desc: "约 16 公里，住中台或台怀镇。", overnight: "中台", checkpoints: ["鸿门岩", "东台", "北台", "中台"] },
        { day: 2, title: "中台—西台—狮子窝", desc: "约 16 公里，住狮子窝。", overnight: "狮子窝", checkpoints: ["中台", "西台", "狮子窝"] },
        { day: 3, title: "狮子窝—南台—佛母洞", desc: "约 13 公里，结束朝台。", overnight: "返程", checkpoints: ["狮子窝", "南台"] }
      ],
      services: { rescue: "五台山朝台应急：0350-6545454；公安：0350-6543110；消防：0350-6543119。", nearestHospital: "台怀镇或五台县医院。", guideContact: "冬季朝台建议通过当地向导。", transportContact: "台怀镇可联系朝台接驳车。", insurance: "建议购买含高海拔、低温和大风的户外保险。" },
      media: []
    },

    "jiankou": {
      name: "箭扣长城",
      credibility: "D",
      status: { open: false, permitRequired: false, ticketRequired: false, closureRisk: "箭扣长城属于未开放野长城，保护与安全管控严格，禁止擅自攀爬；雷雨大风天风险极高。", officialUrl: "" },
      seasonDetail: {
        "春季": { months: [4, 5], condition: "山花与长城相映。", risk: "风大，城墙风化。", best: true },
        "夏季": { months: [6, 7, 8], condition: "植被茂密，暴晒。", risk: "雷雨、滑坠。", best: false },
        "秋季": { months: [9, 10, 11], condition: "秋色与能见度最佳。", risk: "早晚温差大。", best: true },
        "冬季": { months: [12, 1, 2, 3], condition: "雪景壮丽。", risk: "冰雪导致滑坠。", best: false }
      },
      budget: { transport: "北京至西栅子村包车约 200-400 元/车。", ticket: "箭扣为非开放野线，不应作为常规景区购票前往。", guide: "地形险峻且存在法律与安全风险，不建议自行攀爬。", lodgingPerNight: "西栅子村农家院约 100-300 元。", mealsPerDay: "约 60-120 元/天。", emergencyReserve: "建议预留 300-600 元，但应优先避免进入危险段落。" },
      checkpoints: [
        { name: "西栅子村", lat: 40.45, lon: 116.51, elevation: 600, distance: 0, water: true, camp: false, signal: true, toilet: true, emergencyExit: true, note: "箭扣徒步起点。" },
        { name: "北京结", lat: 40.47, lon: 116.52, elevation: 950, distance: 3.5, water: false, camp: false, signal: true, toilet: false, emergencyExit: false, note: "多段长城交汇处。" },
        { name: "鹰飞倒仰", lat: 40.48, lon: 116.53, elevation: 1000, distance: 5.5, water: false, camp: false, signal: true, toilet: false, emergencyExit: false, note: "最险段之一，需手脚并用。" },
        { name: "天梯", lat: 40.49, lon: 116.54, elevation: 900, distance: 8, water: false, camp: false, signal: true, toilet: false, emergencyExit: false, note: "陡峭石阶，注意落石。" },
        { name: "箭扣", lat: 40.50, lon: 116.55, elevation: 950, distance: 10, water: false, camp: false, signal: true, toilet: false, emergencyExit: false, note: "核心段落。" },
        { name: "镇北楼", lat: 40.51, lon: 116.56, elevation: 850, distance: 14, water: false, camp: false, signal: true, toilet: false, emergencyExit: true, note: "可从慕田峪方向下撤。" }
      ],
      itinerary: [
        { day: 1, title: "西栅子村—北京结—鹰飞倒仰—箭扣", desc: "约 10 公里，多处手脚并用。", overnight: "西栅子村", checkpoints: ["西栅子村", "北京结", "鹰飞倒仰", "天梯", "箭扣"] },
        { day: 2, title: "箭扣—镇北楼—慕田峪或下撤", desc: "约 4-6 公里，从镇北楼下撤。", overnight: "返程", checkpoints: ["箭扣", "镇北楼"] }
      ],
      services: { rescue: "遇险拨打 110/119；怀柔消防、蓝天救援等曾多次在箭扣实施山岳救援，野线救援本身也面临岩体坍塌风险。", nearestHospital: "怀柔区医院。", guideContact: "不建议无经验者独行，更不建议组织违规攀爬。", transportContact: "北京自驾或包车至西栅子村外围，服从当地保护员管理。", insurance: "野线违规活动可能影响保险理赔，务必提前确认保障范围。" },
      media: []
    }
  };

  Object.entries(books).forEach(([id, config]) => {
    window.ROUTEBOOKS[id] = makeBook({ id, ...config });
  });
})();
