window.ROUTEBOOKS = window.ROUTEBOOKS || {};
Object.assign(window.ROUTEBOOKS, {
  "huihang": {
    "id": "huihang",
    "name": "徽杭古道",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "绩溪伏岭",
        "lat": 30.036,
        "lon": 118.886,
        "elevation": 550,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿古道缓升，过江南第一关后进入山谷，约 9 公里，住下雪堂或蓝天凹。"
      },
      {
        "name": "下雪堂",
        "lat": 30.044,
        "lon": 118.894,
        "elevation": 1050,
        "distance": 18,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "登蓝天凹看群山，随后一路下坡至浙江临安永来村，约 9 公里。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 550
      },
      {
        "distance": 18,
        "elevation": 1050
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "绩溪伏岭—江南第一关—下雪堂",
        "desc": "沿古道缓升，过江南第一关后进入山谷，约 9 公里，住下雪堂或蓝天凹。",
        "overnight": "绩溪伏岭—江南第一关—下雪堂",
        "checkpoints": [
          "绩溪伏岭—江南第一关—下雪堂"
        ]
      },
      {
        "day": 2,
        "title": "下雪堂—蓝天凹—永来村",
        "desc": "登蓝天凹看群山，随后一路下坡至浙江临安永来村，约 9 公里。",
        "overnight": "返程",
        "checkpoints": [
          "下雪堂—蓝天凹—永来村"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或安徽主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "高铁至绩溪北，包车到伏岭古道入口；终点永来村可乘车至临安或杭州。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/huihang.geojson",
      "gpx": "data/tracks/huihang.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "徽杭古道示意图 1",
        "location": "安徽",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
        "caption": "徽杭古道示意图 2",
        "location": "安徽",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "徽杭古道示意图 3",
        "location": "安徽",
        "credit": "自动生成示例图"
      }
    ]
  },
  "kalajun": {
    "id": "kalajun",
    "name": "喀拉峻—琼库什台穿越",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": false
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "特克斯",
        "lat": 43.048,
        "lon": 81.998,
        "elevation": 1900,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "进入草原徒步，约 10-12 公里，住加撒干营地或牧民家。"
      },
      {
        "name": "加撒干",
        "lat": 43.056,
        "lon": 82.006,
        "elevation": 2233,
        "distance": 14,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "下切河谷再上升，约 14 公里，住琼库什台村。"
      },
      {
        "name": "琼库什台周边牧场",
        "lat": 43.064,
        "lon": 82.014,
        "elevation": 2567,
        "distance": 28,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "轻松适应或走乌孙古道入口段，拍摄古村与森林。"
      },
      {
        "name": "琼库什台",
        "lat": 43.072,
        "lon": 82.022,
        "elevation": 2900,
        "distance": 42,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘车返回特克斯，途中可停留八卦城。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1900
      },
      {
        "distance": 14,
        "elevation": 2233
      },
      {
        "distance": 28,
        "elevation": 2567
      },
      {
        "distance": 42,
        "elevation": 2900
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "特克斯—喀拉峻草原—加撒干",
        "desc": "进入草原徒步，约 10-12 公里，住加撒干营地或牧民家。",
        "overnight": "特克斯—喀拉峻草原—加撒干",
        "checkpoints": [
          "特克斯—喀拉峻草原—加撒干"
        ]
      },
      {
        "day": 2,
        "title": "加撒干—库尔代河—琼库什台",
        "desc": "下切河谷再上升，约 14 公里，住琼库什台村。",
        "overnight": "加撒干—库尔代河—琼库什台",
        "checkpoints": [
          "加撒干—库尔代河—琼库什台"
        ]
      },
      {
        "day": 3,
        "title": "琼库什台周边牧场",
        "desc": "轻松适应或走乌孙古道入口段，拍摄古村与森林。",
        "overnight": "琼库什台周边牧场",
        "checkpoints": [
          "琼库什台周边牧场"
        ]
      },
      {
        "day": 4,
        "title": "琼库什台—特克斯",
        "desc": "乘车返回特克斯，途中可停留八卦城。",
        "overnight": "返程",
        "checkpoints": [
          "琼库什台—特克斯"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或新疆主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "伊宁/特克斯包车至喀拉峻，结束后从琼库什台返回特克斯。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/kalajun.geojson",
      "gpx": "data/tracks/kalajun.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "喀拉峻—琼库什台穿越示意图 1",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "喀拉峻—琼库什台穿越示意图 2",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "喀拉峻—琼库什台穿越示意图 3",
        "location": "新疆",
        "credit": "自动生成示例图"
      }
    ]
  },
  "zhagana": {
    "id": "zhagana",
    "name": "扎尕那—卓尼穿越",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "扎尕那",
        "lat": 34.208,
        "lon": 103.188,
        "elevation": 2000,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "从村后进入峡谷与石林，约 12 公里，扎营。"
      },
      {
        "name": "一线天",
        "lat": 34.216,
        "lon": 103.196,
        "elevation": 2733,
        "distance": 19,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越多个垭口，海拔 4000 米上下，约 13 公里。"
      },
      {
        "name": "垭口",
        "lat": 34.224,
        "lon": 103.204,
        "elevation": 3467,
        "distance": 39,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "下降进入河谷，约 14 公里，扎营。"
      },
      {
        "name": "牧场",
        "lat": 34.232,
        "lon": 103.212,
        "elevation": 4200,
        "distance": 58,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿河谷出山，联系车辆返回卓尼，约 16 公里。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 2000
      },
      {
        "distance": 19,
        "elevation": 2733
      },
      {
        "distance": 39,
        "elevation": 3467
      },
      {
        "distance": 58,
        "elevation": 4200
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "扎尕那—石林—一线天",
        "desc": "从村后进入峡谷与石林，约 12 公里，扎营。",
        "overnight": "扎尕那—石林—一线天",
        "checkpoints": [
          "扎尕那—石林—一线天"
        ]
      },
      {
        "day": 2,
        "title": "一线天—光盖山垭口",
        "desc": "翻越多个垭口，海拔 4000 米上下，约 13 公里。",
        "overnight": "一线天—光盖山垭口",
        "checkpoints": [
          "一线天—光盖山垭口"
        ]
      },
      {
        "day": 3,
        "title": "垭口—洮河源头—牧场",
        "desc": "下降进入河谷，约 14 公里，扎营。",
        "overnight": "垭口—洮河源头—牧场",
        "checkpoints": [
          "垭口—洮河源头—牧场"
        ]
      },
      {
        "day": 4,
        "title": "牧场—卓尼县",
        "desc": "沿河谷出山，联系车辆返回卓尼，约 16 公里。",
        "overnight": "返程",
        "checkpoints": [
          "牧场—卓尼县"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或甘肃主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "合作或迭部至扎尕那，出山后在卓尼包车；建议请熟悉线路的向导。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/zhagana.geojson",
      "gpx": "data/tracks/zhagana.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "扎尕那—卓尼穿越示意图 1",
        "location": "甘肃",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "扎尕那—卓尼穿越示意图 2",
        "location": "甘肃",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "扎尕那—卓尼穿越示意图 3",
        "location": "甘肃",
        "credit": "自动生成示例图"
      }
    ]
  },
  "chuandiding": {
    "id": "chuandiding",
    "name": "船底顶",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "罗坑/新洞",
        "lat": 24.646,
        "lon": 113.166,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "上升明显，过乱石坡后登顶，约 12 公里，山顶扎营。"
      },
      {
        "name": "船底顶",
        "lat": 24.654,
        "lon": 113.174,
        "elevation": 1900,
        "distance": 25,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "视队伍能力选择下撤路线，约 13 公里，注意湿滑路段。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 25,
        "elevation": 1900
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "罗坑/新洞—乱石坡—船底顶",
        "desc": "上升明显，过乱石坡后登顶，约 12 公里，山顶扎营。",
        "overnight": "罗坑/新洞—乱石坡—船底顶",
        "checkpoints": [
          "罗坑/新洞—乱石坡—船底顶"
        ]
      },
      {
        "day": 2,
        "title": "船底顶—落日大峡谷/下撤",
        "desc": "视队伍能力选择下撤路线，约 13 公里，注意湿滑路段。",
        "overnight": "返程",
        "checkpoints": [
          "船底顶—落日大峡谷/下撤"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或广东主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "广州/韶关自驾或包车至罗坑，需提前确认进山口是否开放。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/chuandiding.geojson",
      "gpx": "data/tracks/chuandiding.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "船底顶示意图 1",
        "location": "广东",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "船底顶示意图 2",
        "location": "广东",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
        "caption": "船底顶示意图 3",
        "location": "广东",
        "credit": "自动生成示例图"
      }
    ]
  },
  "changbaishan": {
    "id": "changbaishan",
    "name": "长白山天池西坡",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": false
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "西坡景区",
        "lat": 42.006,
        "lon": 128.056,
        "elevation": 1770,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘景区交通至登山点，沿台阶上天池，再走苔原栈道，约 6-8 公里。"
      },
      {
        "name": "地下森林",
        "lat": 42.014,
        "lon": 128.064,
        "elevation": 2470,
        "distance": 12,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "轻松森林徒步，约 4 公里，随后返程。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1770
      },
      {
        "distance": 12,
        "elevation": 2470
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "西坡景区—天池—苔原",
        "desc": "乘景区交通至登山点，沿台阶上天池，再走苔原栈道，约 6-8 公里。",
        "overnight": "西坡景区—天池—苔原",
        "checkpoints": [
          "西坡景区—天池—苔原"
        ]
      },
      {
        "day": 2,
        "title": "地下森林—峡谷",
        "desc": "轻松森林徒步，约 4 公里，随后返程。",
        "overnight": "返程",
        "checkpoints": [
          "地下森林—峡谷"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或吉林主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "长白山机场/松江河镇至西坡景区，景区内乘环保车。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/changbaishan.geojson",
      "gpx": "data/tracks/changbaishan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "长白山天池西坡示意图 1",
        "location": "吉林",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=1200&q=80",
        "caption": "长白山天池西坡示意图 2",
        "location": "吉林",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "长白山天池西坡示意图 3",
        "location": "吉林",
        "credit": "自动生成示例图"
      }
    ]
  },
  "taibai": {
    "id": "taibai",
    "name": "太白山南北穿越",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "厚畛子",
        "lat": 33.942,
        "lon": 107.762,
        "elevation": 1167,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿溪谷与森林上升，约 12 公里，住南天门。"
      },
      {
        "name": "南天门",
        "lat": 33.95,
        "lon": 107.77,
        "elevation": 2467,
        "distance": 24,
        "water": false,
        "camp": false,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "进入高山石海区，约 16 公里，住大爷海附近。"
      },
      {
        "name": "大爷海",
        "lat": 33.958,
        "lon": 107.778,
        "elevation": 3767,
        "distance": 48,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿北坡景区步道下撤，约 14 公里，乘索道/交通出山。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1167
      },
      {
        "distance": 24,
        "elevation": 2467
      },
      {
        "distance": 48,
        "elevation": 3767
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "厚畛子—铁甲树—南天门",
        "desc": "沿溪谷与森林上升，约 12 公里，住南天门。",
        "overnight": "厚畛子—铁甲树—南天门",
        "checkpoints": [
          "厚畛子—铁甲树—南天门"
        ]
      },
      {
        "day": 2,
        "title": "南天门—大爷海—拔仙台",
        "desc": "进入高山石海区，约 16 公里，住大爷海附近。",
        "overnight": "南天门—大爷海—拔仙台",
        "checkpoints": [
          "南天门—大爷海—拔仙台"
        ]
      },
      {
        "day": 3,
        "title": "大爷海—小文公—汤峪",
        "desc": "沿北坡景区步道下撤，约 14 公里，乘索道/交通出山。",
        "overnight": "返程",
        "checkpoints": [
          "大爷海—小文公—汤峪"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或陕西主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "西安至厚畛子包车，出山后从汤峪返回西安。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/taibai.geojson",
      "gpx": "data/tracks/taibai.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "太白山南北穿越示意图 1",
        "location": "陕西",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "太白山南北穿越示意图 2",
        "location": "陕西",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "太白山南北穿越示意图 3",
        "location": "陕西",
        "credit": "自动生成示例图"
      }
    ]
  },
  "moganshan": {
    "id": "moganshan",
    "name": "莫干山古道",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "庾村",
        "lat": 30.6,
        "lon": 119.88,
        "elevation": 320,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "从庾村沿古道上山，穿竹林至剑池，再环线返回，约 9 公里。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 320
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "庾村—莫干山古道—剑池—下山",
        "desc": "从庾村沿古道上山，穿竹林至剑池，再环线返回，约 9 公里。",
        "overnight": "返程",
        "checkpoints": [
          "庾村—莫干山古道—剑池—下山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或浙江主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "杭州/湖州自驾或高铁至德清，再打车至庾村。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/moganshan.geojson",
      "gpx": "data/tracks/moganshan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "莫干山古道示意图 1",
        "location": "浙江",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "莫干山古道示意图 2",
        "location": "浙江",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
        "caption": "莫干山古道示意图 3",
        "location": "浙江",
        "credit": "自动生成示例图"
      }
    ]
  },
  "lijiang": {
    "id": "lijiang",
    "name": "漓江杨堤—兴坪",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "杨堤",
        "lat": 24.95,
        "lon": 110.54,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿江边步道行走，约 16 公里，可在兴坪住一晚看日落。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "杨堤—全家洲—九马画山—兴坪",
        "desc": "沿江边步道行走，约 16 公里，可在兴坪住一晚看日落。",
        "overnight": "返程",
        "checkpoints": [
          "杨堤—全家洲—九马画山—兴坪"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或广西主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "桂林乘车至杨堤，结束后从兴坪乘车返回阳朔或桂林。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/lijiang.geojson",
      "gpx": "data/tracks/lijiang.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "漓江杨堤—兴坪示意图 1",
        "location": "广西",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "漓江杨堤—兴坪示意图 2",
        "location": "广西",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "漓江杨堤—兴坪示意图 3",
        "location": "广西",
        "credit": "自动生成示例图"
      }
    ]
  },
  "enshi": {
    "id": "enshi",
    "name": "恩施大峡谷—鹿院坪",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "恩施大峡谷",
        "lat": 30.176,
        "lon": 109.486,
        "elevation": 800,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "游览地缝后走七星寨栈道，约 8-10 公里，住沐抚镇。"
      },
      {
        "name": "沐抚",
        "lat": 30.184,
        "lon": 109.494,
        "elevation": 1700,
        "distance": 18,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "下至天坑村落鹿院坪，走溪谷环线，约 8 公里，后返回恩施。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 800
      },
      {
        "distance": 18,
        "elevation": 1700
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "恩施大峡谷—云龙地缝—七星寨",
        "desc": "游览地缝后走七星寨栈道，约 8-10 公里，住沐抚镇。",
        "overnight": "恩施大峡谷—云龙地缝—七星寨",
        "checkpoints": [
          "恩施大峡谷—云龙地缝—七星寨"
        ]
      },
      {
        "day": 2,
        "title": "沐抚—鹿院坪—出山",
        "desc": "下至天坑村落鹿院坪，走溪谷环线，约 8 公里，后返回恩施。",
        "overnight": "返程",
        "checkpoints": [
          "沐抚—鹿院坪—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或湖北主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "恩施乘车至大峡谷景区，鹿院坪需包车或接驳。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/enshi.geojson",
      "gpx": "data/tracks/enshi.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "恩施大峡谷—鹿院坪示意图 1",
        "location": "湖北",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "恩施大峡谷—鹿院坪示意图 2",
        "location": "湖北",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "恩施大峡谷—鹿院坪示意图 3",
        "location": "湖北",
        "credit": "自动生成示例图"
      }
    ]
  },
  "luoke": {
    "id": "luoke",
    "name": "洛克线",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "木里水洛",
        "lat": 28.734,
        "lon": 100.634,
        "elevation": 1200,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘车进入徒步起点，适应海拔。"
      },
      {
        "name": "嘟噜村",
        "lat": 28.742,
        "lon": 100.642,
        "elevation": 2100,
        "distance": 18,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "沿水洛河上升，进入原始森林。"
      },
      {
        "name": "满措牛场",
        "lat": 28.75,
        "lon": 100.65,
        "elevation": 3000,
        "distance": 36,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越垭口，雪山开始出现。"
      },
      {
        "name": "杂巴拉",
        "lat": 28.758,
        "lon": 100.658,
        "elevation": 3900,
        "distance": 54,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "经过高山海子与牧场，扎营。"
      },
      {
        "name": "新果牛场",
        "lat": 28.766,
        "lon": 100.666,
        "elevation": 4800,
        "distance": 72,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "出山进入亚丁，结束穿越。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1200
      },
      {
        "distance": 18,
        "elevation": 2100
      },
      {
        "distance": 36,
        "elevation": 3000
      },
      {
        "distance": 54,
        "elevation": 3900
      },
      {
        "distance": 72,
        "elevation": 4800
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "木里水洛—嘟噜村",
        "desc": "乘车进入徒步起点，适应海拔。",
        "overnight": "木里水洛—嘟噜村",
        "checkpoints": [
          "木里水洛—嘟噜村"
        ]
      },
      {
        "day": 2,
        "title": "嘟噜村—满措牛场",
        "desc": "沿水洛河上升，进入原始森林。",
        "overnight": "嘟噜村—满措牛场",
        "checkpoints": [
          "嘟噜村—满措牛场"
        ]
      },
      {
        "day": 3,
        "title": "满措牛场—杂巴拉垭口",
        "desc": "翻越垭口，雪山开始出现。",
        "overnight": "满措牛场—杂巴拉垭口",
        "checkpoints": [
          "满措牛场—杂巴拉垭口"
        ]
      },
      {
        "day": 4,
        "title": "杂巴拉—新果牛场",
        "desc": "经过高山海子与牧场，扎营。",
        "overnight": "杂巴拉—新果牛场",
        "checkpoints": [
          "杂巴拉—新果牛场"
        ]
      },
      {
        "day": 5,
        "title": "新果牛场—亚丁景区",
        "desc": "出山进入亚丁，结束穿越。",
        "overnight": "返程",
        "checkpoints": [
          "新果牛场—亚丁景区"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或四川主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "西昌/木里包车至水洛，亚丁出山后返回稻城。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/luoke.geojson",
      "gpx": "data/tracks/luoke.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "洛克线示意图 1",
        "location": "四川",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "洛克线示意图 2",
        "location": "四川",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "洛克线示意图 3",
        "location": "四川",
        "credit": "自动生成示例图"
      }
    ]
  },
  "dangling": {
    "id": "dangling",
    "name": "党岭—莫斯卡",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "党岭村",
        "lat": 30.768,
        "lon": 101.408,
        "elevation": 2800,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿森林与草甸上升，住葫芦海附近。"
      },
      {
        "name": "葫芦海",
        "lat": 30.776,
        "lon": 101.416,
        "elevation": 3267,
        "distance": 12,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "走海子环线后返回，拍摄晨雾。"
      },
      {
        "name": "党岭村",
        "lat": 30.784,
        "lon": 101.424,
        "elevation": 3733,
        "distance": 23,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越牧场垭口进入莫斯卡，住村中。"
      },
      {
        "name": "莫斯卡",
        "lat": 30.792,
        "lon": 101.432,
        "elevation": 4200,
        "distance": 35,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "轻松返程，途中可看土拨鼠。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 2800
      },
      {
        "distance": 12,
        "elevation": 3267
      },
      {
        "distance": 23,
        "elevation": 3733
      },
      {
        "distance": 35,
        "elevation": 4200
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "党岭村—飞机坪—葫芦海",
        "desc": "沿森林与草甸上升，住葫芦海附近。",
        "overnight": "党岭村—飞机坪—葫芦海",
        "checkpoints": [
          "党岭村—飞机坪—葫芦海"
        ]
      },
      {
        "day": 2,
        "title": "葫芦海—卓雍措—党岭村",
        "desc": "走海子环线后返回，拍摄晨雾。",
        "overnight": "葫芦海—卓雍措—党岭村",
        "checkpoints": [
          "葫芦海—卓雍措—党岭村"
        ]
      },
      {
        "day": 3,
        "title": "党岭村—莫斯卡",
        "desc": "翻越牧场垭口进入莫斯卡，住村中。",
        "overnight": "党岭村—莫斯卡",
        "checkpoints": [
          "党岭村—莫斯卡"
        ]
      },
      {
        "day": 4,
        "title": "莫斯卡—丹巴",
        "desc": "轻松返程，途中可看土拨鼠。",
        "overnight": "返程",
        "checkpoints": [
          "莫斯卡—丹巴"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或四川主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "丹巴包车至党岭，莫斯卡出山后返回丹巴。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/dangling.geojson",
      "gpx": "data/tracks/dangling.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "党岭—莫斯卡示意图 1",
        "location": "四川",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "党岭—莫斯卡示意图 2",
        "location": "四川",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "党岭—莫斯卡示意图 3",
        "location": "四川",
        "credit": "自动生成示例图"
      }
    ]
  },
  "genie": {
    "id": "genie",
    "name": "格聂C线",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "理塘",
        "lat": 29.844,
        "lon": 99.814,
        "elevation": 850,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘车至徒步起点，适应海拔。"
      },
      {
        "name": "新冷古寺",
        "lat": 29.852,
        "lon": 99.822,
        "elevation": 1900,
        "distance": 24,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "沿河谷与草甸缓升。"
      },
      {
        "name": "夯达营地",
        "lat": 29.86,
        "lon": 99.83,
        "elevation": 2950,
        "distance": 48,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越草坡，接近神山北壁。"
      },
      {
        "name": "热梯河谷",
        "lat": 29.868,
        "lon": 99.838,
        "elevation": 4000,
        "distance": 71,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "穿越海子群与垭口。"
      },
      {
        "name": "格木村",
        "lat": 29.876,
        "lon": 99.846,
        "elevation": 5050,
        "distance": 95,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "完成环线并乘车返回理塘。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 850
      },
      {
        "distance": 24,
        "elevation": 1900
      },
      {
        "distance": 48,
        "elevation": 2950
      },
      {
        "distance": 71,
        "elevation": 4000
      },
      {
        "distance": 95,
        "elevation": 5050
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "理塘—新冷古寺",
        "desc": "乘车至徒步起点，适应海拔。",
        "overnight": "理塘—新冷古寺",
        "checkpoints": [
          "理塘—新冷古寺"
        ]
      },
      {
        "day": 2,
        "title": "新冷古寺—夯达营地",
        "desc": "沿河谷与草甸缓升。",
        "overnight": "新冷古寺—夯达营地",
        "checkpoints": [
          "新冷古寺—夯达营地"
        ]
      },
      {
        "day": 3,
        "title": "夯达营地—热梯河谷",
        "desc": "翻越草坡，接近神山北壁。",
        "overnight": "夯达营地—热梯河谷",
        "checkpoints": [
          "夯达营地—热梯河谷"
        ]
      },
      {
        "day": 4,
        "title": "热梯河谷—格木村",
        "desc": "穿越海子群与垭口。",
        "overnight": "热梯河谷—格木村",
        "checkpoints": [
          "热梯河谷—格木村"
        ]
      },
      {
        "day": 5,
        "title": "格木村—哈嘎拉垭口—出山",
        "desc": "完成环线并乘车返回理塘。",
        "overnight": "返程",
        "checkpoints": [
          "格木村—哈嘎拉垭口—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或四川主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "理塘包车至新冷古寺，出山后返回理塘。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/genie.geojson",
      "gpx": "data/tracks/genie.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "格聂C线示意图 1",
        "location": "四川",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "格聂C线示意图 2",
        "location": "四川",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "格聂C线示意图 3",
        "location": "四川",
        "credit": "自动生成示例图"
      }
    ]
  },
  "niruyading": {
    "id": "niruyading",
    "name": "尼汝—稻城亚丁穿越",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "香格里拉",
        "lat": 28.384,
        "lon": 100.284,
        "elevation": 1500,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘车进入尼汝，适应海拔。"
      },
      {
        "name": "尼汝",
        "lat": 28.392,
        "lon": 100.292,
        "elevation": 2325,
        "distance": 20,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "穿过森林与溪谷，扎营。"
      },
      {
        "name": "南宝牧场",
        "lat": 28.4,
        "lon": 100.3,
        "elevation": 3150,
        "distance": 39,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越垭口后进入牧场。"
      },
      {
        "name": "新寨河",
        "lat": 28.408,
        "lon": 100.308,
        "elevation": 3975,
        "distance": 59,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "下切至卡斯地狱谷。"
      },
      {
        "name": "卡斯村",
        "lat": 28.416,
        "lon": 100.316,
        "elevation": 4800,
        "distance": 78,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "出山进入亚丁，结束穿越。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1500
      },
      {
        "distance": 20,
        "elevation": 2325
      },
      {
        "distance": 39,
        "elevation": 3150
      },
      {
        "distance": 59,
        "elevation": 3975
      },
      {
        "distance": 78,
        "elevation": 4800
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "香格里拉—尼汝村",
        "desc": "乘车进入尼汝，适应海拔。",
        "overnight": "香格里拉—尼汝村",
        "checkpoints": [
          "香格里拉—尼汝村"
        ]
      },
      {
        "day": 2,
        "title": "尼汝—南宝牧场",
        "desc": "穿过森林与溪谷，扎营。",
        "overnight": "尼汝—南宝牧场",
        "checkpoints": [
          "尼汝—南宝牧场"
        ]
      },
      {
        "day": 3,
        "title": "南宝牧场—新寨河",
        "desc": "翻越垭口后进入牧场。",
        "overnight": "南宝牧场—新寨河",
        "checkpoints": [
          "南宝牧场—新寨河"
        ]
      },
      {
        "day": 4,
        "title": "新寨河—卡斯村",
        "desc": "下切至卡斯地狱谷。",
        "overnight": "新寨河—卡斯村",
        "checkpoints": [
          "新寨河—卡斯村"
        ]
      },
      {
        "day": 5,
        "title": "卡斯村—亚丁景区",
        "desc": "出山进入亚丁，结束穿越。",
        "overnight": "返程",
        "checkpoints": [
          "卡斯村—亚丁景区"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或云南主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "香格里拉包车至尼汝，亚丁出山后返回稻城。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/niruyading.geojson",
      "gpx": "data/tracks/niruyading.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "尼汝—稻城亚丁穿越示意图 1",
        "location": "云南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "尼汝—稻城亚丁穿越示意图 2",
        "location": "云南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "尼汝—稻城亚丁穿越示意图 3",
        "location": "云南",
        "credit": "自动生成示例图"
      }
    ]
  },
  "meilibeipo": {
    "id": "meilibeipo",
    "name": "梅里北坡",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "亚贡村",
        "lat": 28.538,
        "lon": 98.818,
        "elevation": 1700,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿河谷进入森林，适应海拔。"
      },
      {
        "name": "涨价营地",
        "lat": 28.546,
        "lon": 98.826,
        "elevation": 2867,
        "distance": 18,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "上升至冰川观景营地，风景渐开。"
      },
      {
        "name": "坡均营地",
        "lat": 28.554,
        "lon": 98.834,
        "elevation": 4033,
        "distance": 37,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越垭口，注意风雪。"
      },
      {
        "name": "坡将营地",
        "lat": 28.562,
        "lon": 98.842,
        "elevation": 5200,
        "distance": 55,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "根据天气选择垭口，下撤至亚贡。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1700
      },
      {
        "distance": 18,
        "elevation": 2867
      },
      {
        "distance": 37,
        "elevation": 4033
      },
      {
        "distance": 55,
        "elevation": 5200
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "亚贡村—涨价营地",
        "desc": "沿河谷进入森林，适应海拔。",
        "overnight": "亚贡村—涨价营地",
        "checkpoints": [
          "亚贡村—涨价营地"
        ]
      },
      {
        "day": 2,
        "title": "涨价营地—坡均营地",
        "desc": "上升至冰川观景营地，风景渐开。",
        "overnight": "涨价营地—坡均营地",
        "checkpoints": [
          "涨价营地—坡均营地"
        ]
      },
      {
        "day": 3,
        "title": "坡均营地—次丁垭口—坡将营地",
        "desc": "翻越垭口，注意风雪。",
        "overnight": "坡均营地—次丁垭口—坡将营地",
        "checkpoints": [
          "坡均营地—次丁垭口—坡将营地"
        ]
      },
      {
        "day": 4,
        "title": "坡将营地—滇藏垭口—出山",
        "desc": "根据天气选择垭口，下撤至亚贡。",
        "overnight": "返程",
        "checkpoints": [
          "坡将营地—滇藏垭口—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或云南主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "德钦包车至亚贡村，结束后返回德钦。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/meilibeipo.geojson",
      "gpx": "data/tracks/meilibeipo.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "梅里北坡示意图 1",
        "location": "云南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "梅里北坡示意图 2",
        "location": "云南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
        "caption": "梅里北坡示意图 3",
        "location": "云南",
        "credit": "自动生成示例图"
      }
    ]
  },
  "kulagangri": {
    "id": "kulagangri",
    "name": "库拉岗日",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "洛扎",
        "lat": 28.188,
        "lon": 90.588,
        "elevation": 3300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘车进入，适应海拔。"
      },
      {
        "name": "措玉村",
        "lat": 28.196,
        "lon": 90.596,
        "elevation": 3900,
        "distance": 15,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "轻装或重装前往白马林措。"
      },
      {
        "name": "白马林措",
        "lat": 28.204,
        "lon": 90.604,
        "elevation": 4500,
        "distance": 30,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "沿湖泊群行走，扎营。"
      },
      {
        "name": "介久措",
        "lat": 28.212,
        "lon": 90.612,
        "elevation": 5100,
        "distance": 45,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "下撤返回，结束环线。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 3300
      },
      {
        "distance": 15,
        "elevation": 3900
      },
      {
        "distance": 30,
        "elevation": 4500
      },
      {
        "distance": 45,
        "elevation": 5100
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "洛扎—措玉村",
        "desc": "乘车进入，适应海拔。",
        "overnight": "洛扎—措玉村",
        "checkpoints": [
          "洛扎—措玉村"
        ]
      },
      {
        "day": 2,
        "title": "措玉村—白马林措",
        "desc": "轻装或重装前往白马林措。",
        "overnight": "措玉村—白马林措",
        "checkpoints": [
          "措玉村—白马林措"
        ]
      },
      {
        "day": 3,
        "title": "白马林措—折公措—介久措",
        "desc": "沿湖泊群行走，扎营。",
        "overnight": "白马林措—折公措—介久措",
        "checkpoints": [
          "白马林措—折公措—介久措"
        ]
      },
      {
        "day": 4,
        "title": "介久措—措玉村",
        "desc": "下撤返回，结束环线。",
        "overnight": "返程",
        "checkpoints": [
          "介久措—措玉村"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或西藏主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "拉萨至洛扎，再包车至措玉村。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/kulagangri.geojson",
      "gpx": "data/tracks/kulagangri.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "库拉岗日示意图 1",
        "location": "西藏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "库拉岗日示意图 2",
        "location": "西藏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "库拉岗日示意图 3",
        "location": "西藏",
        "credit": "自动生成示例图"
      }
    ]
  },
  "motuo": {
    "id": "motuo",
    "name": "墨脱徒步",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "派镇",
        "lat": 29.308,
        "lon": 95.308,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "翻越雪山垭口后下降。"
      },
      {
        "name": "拉格",
        "lat": 29.316,
        "lon": 95.316,
        "elevation": 1700,
        "distance": 26,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "穿行原始森林，住汗密。"
      },
      {
        "name": "汗密",
        "lat": 29.324,
        "lon": 95.324,
        "elevation": 3100,
        "distance": 52,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "经过蚂蟥区和陡峭山路，下至背崩。"
      },
      {
        "name": "背崩",
        "lat": 29.332,
        "lon": 95.332,
        "elevation": 4500,
        "distance": 78,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿江边公路或步道进入墨脱。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 26,
        "elevation": 1700
      },
      {
        "distance": 52,
        "elevation": 3100
      },
      {
        "distance": 78,
        "elevation": 4500
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "派镇—松林口—多雄拉山口—拉格",
        "desc": "翻越雪山垭口后下降。",
        "overnight": "派镇—松林口—多雄拉山口—拉格",
        "checkpoints": [
          "派镇—松林口—多雄拉山口—拉格"
        ]
      },
      {
        "day": 2,
        "title": "拉格—汗密",
        "desc": "穿行原始森林，住汗密。",
        "overnight": "拉格—汗密",
        "checkpoints": [
          "拉格—汗密"
        ]
      },
      {
        "day": 3,
        "title": "汗密—背崩",
        "desc": "经过蚂蟥区和陡峭山路，下至背崩。",
        "overnight": "汗密—背崩",
        "checkpoints": [
          "汗密—背崩"
        ]
      },
      {
        "day": 4,
        "title": "背崩—墨脱",
        "desc": "沿江边公路或步道进入墨脱。",
        "overnight": "返程",
        "checkpoints": [
          "背崩—墨脱"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或西藏主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "林芝至派镇，墨脱出山后返回波密/林芝。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/motuo.geojson",
      "gpx": "data/tracks/motuo.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "墨脱徒步示意图 1",
        "location": "西藏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "墨脱徒步示意图 2",
        "location": "西藏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "墨脱徒步示意图 3",
        "location": "西藏",
        "credit": "自动生成示例图"
      }
    ]
  },
  "everest-east": {
    "id": "everest-east",
    "name": "珠峰东坡嘎玛沟",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "曲当乡",
        "lat": 28.144,
        "lon": 86.964,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "进入徒步起点，扎营湖边。"
      },
      {
        "name": "晓乌措",
        "lat": 28.152,
        "lon": 86.972,
        "elevation": 1600,
        "distance": 30,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越高垭口，下降至沟谷。"
      },
      {
        "name": "卓湘",
        "lat": 28.16,
        "lon": 86.98,
        "elevation": 2900,
        "distance": 60,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "沿嘎玛沟前进，雪山全景出现。"
      },
      {
        "name": "白当",
        "lat": 28.168,
        "lon": 86.988,
        "elevation": 4200,
        "distance": 90,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "近距离感受珠峰东壁。"
      },
      {
        "name": "白当",
        "lat": 28.176,
        "lon": 86.996,
        "elevation": 5500,
        "distance": 120,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "翻越垭口后下撤至曲当。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 30,
        "elevation": 1600
      },
      {
        "distance": 60,
        "elevation": 2900
      },
      {
        "distance": 90,
        "elevation": 4200
      },
      {
        "distance": 120,
        "elevation": 5500
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "曲当乡—晓乌措",
        "desc": "进入徒步起点，扎营湖边。",
        "overnight": "曲当乡—晓乌措",
        "checkpoints": [
          "曲当乡—晓乌措"
        ]
      },
      {
        "day": 2,
        "title": "晓乌措—朗玛拉垭口—卓湘",
        "desc": "翻越高垭口，下降至沟谷。",
        "overnight": "晓乌措—朗玛拉垭口—卓湘",
        "checkpoints": [
          "晓乌措—朗玛拉垭口—卓湘"
        ]
      },
      {
        "day": 3,
        "title": "卓湘—汤湘—白当",
        "desc": "沿嘎玛沟前进，雪山全景出现。",
        "overnight": "卓湘—汤湘—白当",
        "checkpoints": [
          "卓湘—汤湘—白当"
        ]
      },
      {
        "day": 4,
        "title": "白当—珠峰东坡大本营—白当",
        "desc": "近距离感受珠峰东壁。",
        "overnight": "白当—珠峰东坡大本营—白当",
        "checkpoints": [
          "白当—珠峰东坡大本营—白当"
        ]
      },
      {
        "day": 5,
        "title": "白当—错学仁玛—出山",
        "desc": "翻越垭口后下撤至曲当。",
        "overnight": "返程",
        "checkpoints": [
          "白当—错学仁玛—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或西藏主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "日喀则至曲当乡，需办理边防手续并跟队。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/everest-east.geojson",
      "gpx": "data/tracks/everest-east.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "珠峰东坡嘎玛沟示意图 1",
        "location": "西藏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        "caption": "珠峰东坡嘎玛沟示意图 2",
        "location": "西藏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "珠峰东坡嘎玛沟示意图 3",
        "location": "西藏",
        "credit": "自动生成示例图"
      }
    ]
  },
  "cangshan": {
    "id": "cangshan",
    "name": "苍山玉带路",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "感通寺",
        "lat": 25.676,
        "lon": 100.096,
        "elevation": 2100,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿玉带路横切，约 12-14 公里。"
      },
      {
        "name": "中和寺",
        "lat": 25.684,
        "lon": 100.104,
        "elevation": 2600,
        "distance": 14,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "可继续北行或乘索道下山。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 2100
      },
      {
        "distance": 14,
        "elevation": 2600
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "感通寺—清碧溪—七龙女池—中和寺",
        "desc": "沿玉带路横切，约 12-14 公里。",
        "overnight": "感通寺—清碧溪—七龙女池—中和寺",
        "checkpoints": [
          "感通寺—清碧溪—七龙女池—中和寺"
        ]
      },
      {
        "day": 2,
        "title": "中和寺—三月街/索道下撤",
        "desc": "可继续北行或乘索道下山。",
        "overnight": "返程",
        "checkpoints": [
          "中和寺—三月街/索道下撤"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或云南主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "大理古城打车至感通寺，下撤后可乘公交回古城。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/cangshan.geojson",
      "gpx": "data/tracks/cangshan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "苍山玉带路示意图 1",
        "location": "云南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "苍山玉带路示意图 2",
        "location": "云南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        "caption": "苍山玉带路示意图 3",
        "location": "云南",
        "credit": "自动生成示例图"
      }
    ]
  },
  "abujicuo": {
    "id": "abujicuo",
    "name": "阿布吉措",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "香格里拉",
        "lat": 27.78,
        "lon": 99.87,
        "elevation": 3600,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘车至徒步点，往返约 11 公里，湖面海拔约 4200 米。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 3600
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "香格里拉—阿布吉措—返回",
        "desc": "乘车至徒步点，往返约 11 公里，湖面海拔约 4200 米。",
        "overnight": "返程",
        "checkpoints": [
          "香格里拉—阿布吉措—返回"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或云南主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "香格里拉包车前往，需当地向导或确认进山手续。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/abujicuo.geojson",
      "gpx": "data/tracks/abujicuo.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "阿布吉措示意图 1",
        "location": "云南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "阿布吉措示意图 2",
        "location": "云南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "阿布吉措示意图 3",
        "location": "云南",
        "credit": "自动生成示例图"
      }
    ]
  },
  "xiata": {
    "id": "xiata",
    "name": "夏塔古道",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "昭苏",
        "lat": 42.592,
        "lon": 80.542,
        "elevation": 1980,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘车进入，适应环境。"
      },
      {
        "name": "温泉营地",
        "lat": 42.6,
        "lon": 80.55,
        "elevation": 2780,
        "distance": 28,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "沿河谷接近木扎尔特冰川，约 18-20 公里。"
      },
      {
        "name": "夏塔",
        "lat": 42.608,
        "lon": 80.558,
        "elevation": 3580,
        "distance": 55,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "轻松返程。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1980
      },
      {
        "distance": 28,
        "elevation": 2780
      },
      {
        "distance": 55,
        "elevation": 3580
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "昭苏—夏塔景区—温泉营地",
        "desc": "乘车进入，适应环境。",
        "overnight": "昭苏—夏塔景区—温泉营地",
        "checkpoints": [
          "昭苏—夏塔景区—温泉营地"
        ]
      },
      {
        "day": 2,
        "title": "温泉营地—冰川脚下—返回",
        "desc": "沿河谷接近木扎尔特冰川，约 18-20 公里。",
        "overnight": "温泉营地—冰川脚下—返回",
        "checkpoints": [
          "温泉营地—冰川脚下—返回"
        ]
      },
      {
        "day": 3,
        "title": "夏塔—昭苏",
        "desc": "轻松返程。",
        "overnight": "返程",
        "checkpoints": [
          "夏塔—昭苏"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或新疆主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "伊宁/昭苏包车至夏塔景区，景区内换乘。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/xiata.geojson",
      "gpx": "data/tracks/xiata.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "夏塔古道示意图 1",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "夏塔古道示意图 2",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "夏塔古道示意图 3",
        "location": "新疆",
        "credit": "自动生成示例图"
      }
    ]
  },
  "mengkedao": {
    "id": "mengkedao",
    "name": "孟克德古道",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": false
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "独库公路",
        "lat": 42.988,
        "lon": 83.988,
        "elevation": 2100,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "进入沟谷，扎营。"
      },
      {
        "name": "沟口",
        "lat": 42.996,
        "lon": 83.996,
        "elevation": 2567,
        "distance": 18,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "沿河谷上行至天湖。"
      },
      {
        "name": "达坂下营地",
        "lat": 43.004,
        "lon": 84.004,
        "elevation": 3033,
        "distance": 37,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越达坂后进入北坡牧场。"
      },
      {
        "name": "牧场",
        "lat": 43.012,
        "lon": 84.012,
        "elevation": 3500,
        "distance": 55,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿河谷下降至公路。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 2100
      },
      {
        "distance": 18,
        "elevation": 2567
      },
      {
        "distance": 37,
        "elevation": 3033
      },
      {
        "distance": 55,
        "elevation": 3500
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "独库公路—孟克德沟口",
        "desc": "进入沟谷，扎营。",
        "overnight": "独库公路—孟克德沟口",
        "checkpoints": [
          "独库公路—孟克德沟口"
        ]
      },
      {
        "day": 2,
        "title": "沟口—天湖—达坂下营地",
        "desc": "沿河谷上行至天湖。",
        "overnight": "沟口—天湖—达坂下营地",
        "checkpoints": [
          "沟口—天湖—达坂下营地"
        ]
      },
      {
        "day": 3,
        "title": "达坂下营地—孟克德达坂—牧场",
        "desc": "翻越达坂后进入北坡牧场。",
        "overnight": "达坂下营地—孟克德达坂—牧场",
        "checkpoints": [
          "达坂下营地—孟克德达坂—牧场"
        ]
      },
      {
        "day": 4,
        "title": "牧场—独库公路出山",
        "desc": "沿河谷下降至公路。",
        "overnight": "返程",
        "checkpoints": [
          "牧场—独库公路出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或新疆主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "奎屯或独山子包车至进山口，出山后返回。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/mengkedao.geojson",
      "gpx": "data/tracks/mengkedao.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "孟克德古道示意图 1",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "孟克德古道示意图 2",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "孟克德古道示意图 3",
        "location": "新疆",
        "credit": "自动生成示例图"
      }
    ]
  },
  "bogeda": {
    "id": "bogeda",
    "name": "博格达大环线",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": false
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "达坂城",
        "lat": 43.788,
        "lon": 88.288,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "进入博格达北坡，接近冰湖。"
      },
      {
        "name": "冰湖营地",
        "lat": 43.796,
        "lon": 88.296,
        "elevation": 1633,
        "distance": 33,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "近距离看主峰与冰川。"
      },
      {
        "name": "大本营",
        "lat": 43.804,
        "lon": 88.304,
        "elevation": 2967,
        "distance": 67,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越达坂，进入南坡。"
      },
      {
        "name": "黑沟达坂",
        "lat": 43.812,
        "lon": 88.312,
        "elevation": 4300,
        "distance": 100,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿河谷下撤至公路。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 33,
        "elevation": 1633
      },
      {
        "distance": 67,
        "elevation": 2967
      },
      {
        "distance": 100,
        "elevation": 4300
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "达坂城—三个岔—冰湖营地",
        "desc": "进入博格达北坡，接近冰湖。",
        "overnight": "达坂城—三个岔—冰湖营地",
        "checkpoints": [
          "达坂城—三个岔—冰湖营地"
        ]
      },
      {
        "day": 2,
        "title": "冰湖营地—博格达大本营",
        "desc": "近距离看主峰与冰川。",
        "overnight": "冰湖营地—博格达大本营",
        "checkpoints": [
          "冰湖营地—博格达大本营"
        ]
      },
      {
        "day": 3,
        "title": "大本营—黑沟达坂",
        "desc": "翻越达坂，进入南坡。",
        "overnight": "大本营—黑沟达坂",
        "checkpoints": [
          "大本营—黑沟达坂"
        ]
      },
      {
        "day": 4,
        "title": "黑沟达坂—四工河—出山",
        "desc": "沿河谷下撤至公路。",
        "overnight": "返程",
        "checkpoints": [
          "黑沟达坂—四工河—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或新疆主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "乌鲁木齐/达坂城包车至进山口，出山后返回。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/bogeda.geojson",
      "gpx": "data/tracks/bogeda.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "博格达大环线示意图 1",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "博格达大环线示意图 2",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        "caption": "博格达大环线示意图 3",
        "location": "新疆",
        "credit": "自动生成示例图"
      }
    ]
  },
  "langta": {
    "id": "langta",
    "name": "狼塔C+V",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "呼图壁",
        "lat": 43.408,
        "lon": 86.138,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "进入天山，适应重装。"
      },
      {
        "name": "翻越白杨沟达坂",
        "lat": 43.416,
        "lon": 86.146,
        "elevation": 3300,
        "distance": 67,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "过冰河，扎营。"
      },
      {
        "name": "台普希克马河",
        "lat": 43.424,
        "lon": 86.154,
        "elevation": 6300,
        "distance": 133,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "连续翻越，强度极大。"
      },
      {
        "name": "达坂",
        "lat": 43.432,
        "lon": 86.162,
        "elevation": 9300,
        "distance": 200,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿河谷下撤，完成穿越。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 67,
        "elevation": 3300
      },
      {
        "distance": 133,
        "elevation": 6300
      },
      {
        "distance": 200,
        "elevation": 9300
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "呼图壁—白杨沟—白杨沟达坂下",
        "desc": "进入天山，适应重装。",
        "overnight": "呼图壁—白杨沟—白杨沟达坂下",
        "checkpoints": [
          "呼图壁—白杨沟—白杨沟达坂下"
        ]
      },
      {
        "day": 2,
        "title": "翻越白杨沟达坂—台普希克马河",
        "desc": "过冰河，扎营。",
        "overnight": "翻越白杨沟达坂—台普希克马河",
        "checkpoints": [
          "翻越白杨沟达坂—台普希克马河"
        ]
      },
      {
        "day": 3,
        "title": "台普希克马河—库拉阿特腾阿苏达坂",
        "desc": "连续翻越，强度极大。",
        "overnight": "台普希克马河—库拉阿特腾阿苏达坂",
        "checkpoints": [
          "台普希克马河—库拉阿特腾阿苏达坂"
        ]
      },
      {
        "day": 4,
        "title": "达坂—尔特兰塔河—出山",
        "desc": "沿河谷下撤，完成穿越。",
        "overnight": "返程",
        "checkpoints": [
          "达坂—尔特兰塔河—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或新疆主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "乌鲁木齐/呼图壁包车至进山口，出山后接驳。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/langta.geojson",
      "gpx": "data/tracks/langta.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "狼塔C+V示意图 1",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "狼塔C+V示意图 2",
        "location": "新疆",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "狼塔C+V示意图 3",
        "location": "新疆",
        "credit": "自动生成示例图"
      }
    ]
  },
  "haituo": {
    "id": "haituo",
    "name": "海坨山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": false
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "大海坨村",
        "lat": 40.53,
        "lon": 115.84,
        "elevation": 1241,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "往返约 18 公里，可轻装或山顶露营。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1241
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "大海坨村—鞍部—小海坨—下撤",
        "desc": "往返约 18 公里，可轻装或山顶露营。",
        "overnight": "返程",
        "checkpoints": [
          "大海坨村—鞍部—小海坨—下撤"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或北京主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "北京自驾至延庆大海坨村。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/haituo.geojson",
      "gpx": "data/tracks/haituo.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
        "caption": "海坨山示意图 1",
        "location": "北京",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "海坨山示意图 2",
        "location": "北京",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "海坨山示意图 3",
        "location": "北京",
        "credit": "自动生成示例图"
      }
    ]
  },
  "kubuqi": {
    "id": "kubuqi",
    "name": "库布齐沙漠东线",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "包头",
        "lat": 40.242,
        "lon": 109.192,
        "elevation": 1000,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "进入沙漠，适应沙地行走。"
      },
      {
        "name": "营地",
        "lat": 40.25,
        "lon": 109.2,
        "elevation": 1100,
        "distance": 18,
        "water": false,
        "camp": false,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越沙丘，住龙头拐。"
      },
      {
        "name": "龙头拐",
        "lat": 40.258,
        "lon": 109.208,
        "elevation": 1200,
        "distance": 35,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "完成穿越并返回。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1000
      },
      {
        "distance": 18,
        "elevation": 1100
      },
      {
        "distance": 35,
        "elevation": 1200
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "包头—恩格贝—沙漠营地",
        "desc": "进入沙漠，适应沙地行走。",
        "overnight": "包头—恩格贝—沙漠营地",
        "checkpoints": [
          "包头—恩格贝—沙漠营地"
        ]
      },
      {
        "day": 2,
        "title": "营地—龙头拐",
        "desc": "翻越沙丘，住龙头拐。",
        "overnight": "营地—龙头拐",
        "checkpoints": [
          "营地—龙头拐"
        ]
      },
      {
        "day": 3,
        "title": "龙头拐—响沙湾—出沙",
        "desc": "完成穿越并返回。",
        "overnight": "返程",
        "checkpoints": [
          "龙头拐—响沙湾—出沙"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或内蒙古主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "包头或呼和浩特包车至恩格贝。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/kubuqi.geojson",
      "gpx": "data/tracks/kubuqi.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
        "caption": "库布齐沙漠东线示意图 1",
        "location": "内蒙古",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "库布齐沙漠东线示意图 2",
        "location": "内蒙古",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "库布齐沙漠东线示意图 3",
        "location": "内蒙古",
        "credit": "自动生成示例图"
      }
    ]
  },
  "tengger": {
    "id": "tengger",
    "name": "腾格里五湖连穿",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "银川",
        "lat": 38.592,
        "lon": 104.892,
        "elevation": 1100,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "进入沙漠，住湖边营地。"
      },
      {
        "name": "天鹅湖",
        "lat": 38.6,
        "lon": 104.9,
        "elevation": 1275,
        "distance": 26,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "穿越沙丘与湖盆。"
      },
      {
        "name": "苏海图湖",
        "lat": 38.608,
        "lon": 104.908,
        "elevation": 1450,
        "distance": 52,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "完成穿越返回银川。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1100
      },
      {
        "distance": 26,
        "elevation": 1275
      },
      {
        "distance": 52,
        "elevation": 1450
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "银川—通古淖尔—天鹅湖",
        "desc": "进入沙漠，住湖边营地。",
        "overnight": "银川—通古淖尔—天鹅湖",
        "checkpoints": [
          "银川—通古淖尔—天鹅湖"
        ]
      },
      {
        "day": 2,
        "title": "天鹅湖—乌兰湖—苏海图湖",
        "desc": "穿越沙丘与湖盆。",
        "overnight": "天鹅湖—乌兰湖—苏海图湖",
        "checkpoints": [
          "天鹅湖—乌兰湖—苏海图湖"
        ]
      },
      {
        "day": 3,
        "title": "苏海图湖—月亮湖—出沙",
        "desc": "完成穿越返回银川。",
        "overnight": "返程",
        "checkpoints": [
          "苏海图湖—月亮湖—出沙"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或内蒙古主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "银川包车至通古淖尔。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/tengger.geojson",
      "gpx": "data/tracks/tengger.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "腾格里五湖连穿示意图 1",
        "location": "内蒙古",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        "caption": "腾格里五湖连穿示意图 2",
        "location": "内蒙古",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "腾格里五湖连穿示意图 3",
        "location": "内蒙古",
        "credit": "自动生成示例图"
      }
    ]
  },
  "animachen": {
    "id": "animachen",
    "name": "阿尼玛卿转山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": false
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "玛沁",
        "lat": 34.814,
        "lon": 99.534,
        "elevation": 400,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "乘车进入，适应海拔。"
      },
      {
        "name": "雪山乡",
        "lat": 34.822,
        "lon": 99.542,
        "elevation": 1525,
        "distance": 33,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "开始转山。"
      },
      {
        "name": "白塔营地",
        "lat": 34.83,
        "lon": 99.55,
        "elevation": 2650,
        "distance": 65,
        "water": true,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越高垭口。"
      },
      {
        "name": "达木乔垭口",
        "lat": 34.838,
        "lon": 99.558,
        "elevation": 3775,
        "distance": 98,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "沿冰川与草甸前行。"
      },
      {
        "name": "下大武",
        "lat": 34.846,
        "lon": 99.566,
        "elevation": 4900,
        "distance": 130,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "完成转山环线。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 400
      },
      {
        "distance": 33,
        "elevation": 1525
      },
      {
        "distance": 65,
        "elevation": 2650
      },
      {
        "distance": 98,
        "elevation": 3775
      },
      {
        "distance": 130,
        "elevation": 4900
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "玛沁—雪山乡",
        "desc": "乘车进入，适应海拔。",
        "overnight": "玛沁—雪山乡",
        "checkpoints": [
          "玛沁—雪山乡"
        ]
      },
      {
        "day": 2,
        "title": "雪山乡—察那卡多—白塔营地",
        "desc": "开始转山。",
        "overnight": "雪山乡—察那卡多—白塔营地",
        "checkpoints": [
          "雪山乡—察那卡多—白塔营地"
        ]
      },
      {
        "day": 3,
        "title": "白塔营地—达木乔垭口",
        "desc": "翻越高垭口。",
        "overnight": "白塔营地—达木乔垭口",
        "checkpoints": [
          "白塔营地—达木乔垭口"
        ]
      },
      {
        "day": 4,
        "title": "达木乔垭口—下大武",
        "desc": "沿冰川与草甸前行。",
        "overnight": "达木乔垭口—下大武",
        "checkpoints": [
          "达木乔垭口—下大武"
        ]
      },
      {
        "day": 5,
        "title": "下大武—雪山乡",
        "desc": "完成转山环线。",
        "overnight": "返程",
        "checkpoints": [
          "下大武—雪山乡"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或青海主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "西宁至玛沁，包车进雪山乡。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/animachen.geojson",
      "gpx": "data/tracks/animachen.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "阿尼玛卿转山示意图 1",
        "location": "青海",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "阿尼玛卿转山示意图 2",
        "location": "青海",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "阿尼玛卿转山示意图 3",
        "location": "青海",
        "credit": "自动生成示例图"
      }
    ]
  },
  "qilian": {
    "id": "qilian",
    "name": "祁连山草原穿越",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": true,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": false
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近机场/高铁站至集结点，再包车进山；建议提前联系当地司机。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 800-2000 元。"
    },
    "checkpoints": [
      {
        "name": "祁连县",
        "lat": 38.192,
        "lon": 100.492,
        "elevation": 3000,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "进入草原，扎营。"
      },
      {
        "name": "牧场营地",
        "lat": 38.2,
        "lon": 100.5,
        "elevation": 3600,
        "distance": 23,
        "water": false,
        "camp": true,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "翻越草甸垭口。"
      },
      {
        "name": "河谷",
        "lat": 38.208,
        "lon": 100.508,
        "elevation": 4200,
        "distance": 45,
        "water": true,
        "camp": true,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿溪谷下撤。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 3000
      },
      {
        "distance": 23,
        "elevation": 3600
      },
      {
        "distance": 45,
        "elevation": 4200
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "祁连县—阿柔草原—牧场营地",
        "desc": "进入草原，扎营。",
        "overnight": "祁连县—阿柔草原—牧场营地",
        "checkpoints": [
          "祁连县—阿柔草原—牧场营地"
        ]
      },
      {
        "day": 2,
        "title": "牧场营地—垭口—河谷",
        "desc": "翻越草甸垭口。",
        "overnight": "牧场营地—垭口—河谷",
        "checkpoints": [
          "牧场营地—垭口—河谷"
        ]
      },
      {
        "day": 3,
        "title": "河谷—冰沟—出山",
        "desc": "沿溪谷下撤。",
        "overnight": "返程",
        "checkpoints": [
          "河谷—冰沟—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或青海主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "西宁/张掖至祁连县，包车进山。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/qilian.geojson",
      "gpx": "data/tracks/qilian.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        "caption": "祁连山草原穿越示意图 1",
        "location": "青海",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "祁连山草原穿越示意图 2",
        "location": "青海",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "祁连山草原穿越示意图 3",
        "location": "青海",
        "credit": "自动生成示例图"
      }
    ]
  },
  "helan": {
    "id": "helan",
    "name": "贺兰山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "苏峪口",
        "lat": 38.796,
        "lon": 105.896,
        "elevation": 2056,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿景区步道上升，住山下。"
      },
      {
        "name": "岩画",
        "lat": 38.804,
        "lon": 105.904,
        "elevation": 3556,
        "distance": 28,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "轻松游览后返程。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 2056
      },
      {
        "distance": 28,
        "elevation": 3556
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "苏峪口—松涛山庄—贺兰山主峰",
        "desc": "沿景区步道上升，住山下。",
        "overnight": "苏峪口—松涛山庄—贺兰山主峰",
        "checkpoints": [
          "苏峪口—松涛山庄—贺兰山主峰"
        ]
      },
      {
        "day": 2,
        "title": "岩画—峡谷—返回银川",
        "desc": "轻松游览后返程。",
        "overnight": "返程",
        "checkpoints": [
          "岩画—峡谷—返回银川"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或宁夏主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "银川自驾或打车至苏峪口。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/helan.geojson",
      "gpx": "data/tracks/helan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
        "caption": "贺兰山示意图 1",
        "location": "宁夏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "贺兰山示意图 2",
        "location": "宁夏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "贺兰山示意图 3",
        "location": "宁夏",
        "credit": "自动生成示例图"
      }
    ]
  },
  "liupan": {
    "id": "liupan",
    "name": "六盘山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "泾源",
        "lat": 35.6,
        "lon": 106.2,
        "elevation": 2242,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "环线约 16 公里。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 2242
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "泾源—六盘山森林公园—野荷谷",
        "desc": "环线约 16 公里。",
        "overnight": "返程",
        "checkpoints": [
          "泾源—六盘山森林公园—野荷谷"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或宁夏主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "固原/泾源包车前往。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/liupan.geojson",
      "gpx": "data/tracks/liupan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "六盘山示意图 1",
        "location": "宁夏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "六盘山示意图 2",
        "location": "宁夏",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "六盘山示意图 3",
        "location": "宁夏",
        "credit": "自动生成示例图"
      }
    ]
  },
  "qinghai-lake": {
    "id": "qinghai-lake",
    "name": "青海湖环湖",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": false
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": false
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "西海镇",
        "lat": 36.542,
        "lon": 100.292,
        "elevation": 2900,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿湖岸行走或骑行。"
      },
      {
        "name": "二郎剑",
        "lat": 36.55,
        "lon": 100.3,
        "elevation": 3050,
        "distance": 23,
        "water": false,
        "camp": false,
        "signal": false,
        "toilet": false,
        "emergencyExit": false,
        "note": "看日出与草原。"
      },
      {
        "name": "环湖西路返回",
        "lat": 36.558,
        "lon": 100.308,
        "elevation": 3200,
        "distance": 45,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "选择合适路段收尾。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 2900
      },
      {
        "distance": 23,
        "elevation": 3050
      },
      {
        "distance": 45,
        "elevation": 3200
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "西海镇—金沙湾—二郎剑",
        "desc": "沿湖岸行走或骑行。",
        "overnight": "西海镇—金沙湾—二郎剑",
        "checkpoints": [
          "西海镇—金沙湾—二郎剑"
        ]
      },
      {
        "day": 2,
        "title": "二郎剑—黑马河—茶卡方向",
        "desc": "看日出与草原。",
        "overnight": "二郎剑—黑马河—茶卡方向",
        "checkpoints": [
          "二郎剑—黑马河—茶卡方向"
        ]
      },
      {
        "day": 3,
        "title": "环湖西路返回",
        "desc": "选择合适路段收尾。",
        "overnight": "返程",
        "checkpoints": [
          "环湖西路返回"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或青海主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "西宁乘车至西海镇，沿途有班车和包车。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/qinghai-lake.geojson",
      "gpx": "data/tracks/qinghai-lake.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        "caption": "青海湖环湖示意图 1",
        "location": "青海",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "青海湖环湖示意图 2",
        "location": "青海",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "青海湖环湖示意图 3",
        "location": "青海",
        "credit": "自动生成示例图"
      }
    ]
  },
  "huangshan": {
    "id": "huangshan",
    "name": "黄山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "云谷寺",
        "lat": 30.126,
        "lon": 118.156,
        "elevation": 664,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "从后山上山，住山顶。"
      },
      {
        "name": "光明顶",
        "lat": 30.134,
        "lon": 118.164,
        "elevation": 1864,
        "distance": 22,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "前山下撤，台阶较多。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 664
      },
      {
        "distance": 22,
        "elevation": 1864
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "云谷寺—始信峰—西海大峡谷—光明顶",
        "desc": "从后山上山，住山顶。",
        "overnight": "云谷寺—始信峰—西海大峡谷—光明顶",
        "checkpoints": [
          "云谷寺—始信峰—西海大峡谷—光明顶"
        ]
      },
      {
        "day": 2,
        "title": "光明顶—莲花峰—迎客松—慈光阁",
        "desc": "前山下撤，台阶较多。",
        "overnight": "返程",
        "checkpoints": [
          "光明顶—莲花峰—迎客松—慈光阁"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或安徽主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "黄山北站乘班车至汤口，再换景区交通。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/huangshan.geojson",
      "gpx": "data/tracks/huangshan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "黄山示意图 1",
        "location": "安徽",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "黄山示意图 2",
        "location": "安徽",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "黄山示意图 3",
        "location": "安徽",
        "credit": "自动生成示例图"
      }
    ]
  },
  "jiuhua": {
    "id": "jiuhua",
    "name": "九华山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "九华街",
        "lat": 30.476,
        "lon": 117.796,
        "elevation": 342,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿古道和步道行走。"
      },
      {
        "name": "九华街",
        "lat": 30.484,
        "lon": 117.804,
        "elevation": 1342,
        "distance": 20,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "走花台栈道，看山色。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 342
      },
      {
        "distance": 20,
        "elevation": 1342
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "九华街—百岁宫—天台峰—返回",
        "desc": "沿古道和步道行走。",
        "overnight": "九华街—百岁宫—天台峰—返回",
        "checkpoints": [
          "九华街—百岁宫—天台峰—返回"
        ]
      },
      {
        "day": 2,
        "title": "九华街—花台—出山",
        "desc": "走花台栈道，看山色。",
        "overnight": "返程",
        "checkpoints": [
          "九华街—花台—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或安徽主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "池州/青阳乘班车至九华山。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/jiuhua.geojson",
      "gpx": "data/tracks/jiuhua.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "九华山示意图 1",
        "location": "安徽",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "九华山示意图 2",
        "location": "安徽",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "九华山示意图 3",
        "location": "安徽",
        "credit": "自动生成示例图"
      }
    ]
  },
  "tianmu-seven": {
    "id": "tianmu-seven",
    "name": "天目七尖",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "建议请当地向导或跟商业队。",
      "lodgingPerNight": "全程扎营为主，集结点客栈约 100-400 元。",
      "mealsPerDay": "约 120-200 元/天，长线需自备补给。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "西天目",
        "lat": 30.346,
        "lon": 119.416,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "连续上下，约 22 公里，住农家。"
      },
      {
        "name": "千亩田",
        "lat": 30.354,
        "lon": 119.424,
        "elevation": 3500,
        "distance": 42,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "完成七尖，约 20 公里。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 42,
        "elevation": 3500
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "西天目—龙王山—千亩田",
        "desc": "连续上下，约 22 公里，住农家。",
        "overnight": "西天目—龙王山—千亩田",
        "checkpoints": [
          "西天目—龙王山—千亩田"
        ]
      },
      {
        "day": 2,
        "title": "千亩田—仙人顶—出山",
        "desc": "完成七尖，约 20 公里。",
        "overnight": "返程",
        "checkpoints": [
          "千亩田—仙人顶—出山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或浙江主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "杭州/临安包车至西天目。",
      "insurance": "必须购买含高海拔、救援或直升机保障的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/tianmu-seven.geojson",
      "gpx": "data/tracks/tianmu-seven.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "天目七尖示意图 1",
        "location": "浙江",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "天目七尖示意图 2",
        "location": "浙江",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "天目七尖示意图 3",
        "location": "浙江",
        "credit": "自动生成示例图"
      }
    ]
  },
  "qingliangfeng": {
    "id": "qingliangfeng",
    "name": "清凉峰",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "可视路况与经验决定是否请向导。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "银龙坞",
        "lat": 30.05,
        "lon": 118.85,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "约 24 公里环线。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "银龙坞—蓝天凹—清凉峰—下撤",
        "desc": "约 24 公里环线。",
        "overnight": "返程",
        "checkpoints": [
          "银龙坞—蓝天凹—清凉峰—下撤"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或浙江主要城镇医院。",
      "guideContact": "建议通过当地俱乐部、客栈或正规旅行社联系向导。",
      "transportContact": "杭州/绩溪包车至银龙坞。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/qingliangfeng.geojson",
      "gpx": "data/tracks/qingliangfeng.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "清凉峰示意图 1",
        "location": "浙江",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "清凉峰示意图 2",
        "location": "浙江",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        "caption": "清凉峰示意图 3",
        "location": "浙江",
        "credit": "自动生成示例图"
      }
    ]
  },
  "sanqingshan": {
    "id": "sanqingshan",
    "name": "三清山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "金沙索道",
        "lat": 28.896,
        "lon": 118.046,
        "elevation": 919,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿栈道环线。"
      },
      {
        "name": "三清宫",
        "lat": 28.904,
        "lon": 118.054,
        "elevation": 1819,
        "distance": 18,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "继续环线后下山。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 919
      },
      {
        "distance": 18,
        "elevation": 1819
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "金沙索道—南清园—西海岸—三清宫",
        "desc": "沿栈道环线。",
        "overnight": "金沙索道—南清园—西海岸—三清宫",
        "checkpoints": [
          "金沙索道—南清园—西海岸—三清宫"
        ]
      },
      {
        "day": 2,
        "title": "三清宫—阳光海岸—金沙索道",
        "desc": "继续环线后下山。",
        "overnight": "返程",
        "checkpoints": [
          "三清宫—阳光海岸—金沙索道"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或江西主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "上饶/玉山乘班车至三清山。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/sanqingshan.geojson",
      "gpx": "data/tracks/sanqingshan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "三清山示意图 1",
        "location": "江西",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "三清山示意图 2",
        "location": "江西",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "三清山示意图 3",
        "location": "江西",
        "credit": "自动生成示例图"
      }
    ]
  },
  "lushan": {
    "id": "lushan",
    "name": "庐山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "牯岭",
        "lat": 29.546,
        "lon": 115.976,
        "elevation": 574,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "环山步道。"
      },
      {
        "name": "五老峰",
        "lat": 29.554,
        "lon": 115.984,
        "elevation": 1474,
        "distance": 20,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "看瀑布后返回。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 574
      },
      {
        "distance": 20,
        "elevation": 1474
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "牯岭—如琴湖—仙人洞—五老峰",
        "desc": "环山步道。",
        "overnight": "牯岭—如琴湖—仙人洞—五老峰",
        "checkpoints": [
          "牯岭—如琴湖—仙人洞—五老峰"
        ]
      },
      {
        "day": 2,
        "title": "五老峰—三叠泉—下山",
        "desc": "看瀑布后返回。",
        "overnight": "返程",
        "checkpoints": [
          "五老峰—三叠泉—下山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或江西主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "九江/庐山站乘车至牯岭。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/lushan.geojson",
      "gpx": "data/tracks/lushan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        "caption": "庐山示意图 1",
        "location": "江西",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "庐山示意图 2",
        "location": "江西",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "庐山示意图 3",
        "location": "江西",
        "credit": "自动生成示例图"
      }
    ]
  },
  "wuyishan": {
    "id": "wuyishan",
    "name": "武夷山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "天游峰",
        "lat": 27.716,
        "lon": 117.676,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "核心步道。"
      },
      {
        "name": "大红袍",
        "lat": 27.724,
        "lon": 117.684,
        "elevation": 1400,
        "distance": 24,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "环线返回。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 24,
        "elevation": 1400
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "天游峰—九曲溪—武夷宫",
        "desc": "核心步道。",
        "overnight": "天游峰—九曲溪—武夷宫",
        "checkpoints": [
          "天游峰—九曲溪—武夷宫"
        ]
      },
      {
        "day": 2,
        "title": "大红袍—水帘洞—一线天",
        "desc": "环线返回。",
        "overnight": "返程",
        "checkpoints": [
          "大红袍—水帘洞—一线天"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或福建主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "武夷山北/东站乘车至景区。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/wuyishan.geojson",
      "gpx": "data/tracks/wuyishan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "caption": "武夷山示意图 1",
        "location": "福建",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "武夷山示意图 2",
        "location": "福建",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "caption": "武夷山示意图 3",
        "location": "福建",
        "credit": "自动生成示例图"
      }
    ]
  },
  "taimu": {
    "id": "taimu",
    "name": "太姥山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "太姥山景区",
        "lat": 27.1,
        "lon": 120.17,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "环线约 16 公里。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "太姥山景区—葫芦洞—一线天—返程",
        "desc": "环线约 16 公里。",
        "overnight": "返程",
        "checkpoints": [
          "太姥山景区—葫芦洞—一线天—返程"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或福建主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "福鼎/宁德乘车至太姥山。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/taimu.geojson",
      "gpx": "data/tracks/taimu.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
        "caption": "太姥山示意图 1",
        "location": "福建",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
        "caption": "太姥山示意图 2",
        "location": "福建",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "caption": "太姥山示意图 3",
        "location": "福建",
        "credit": "自动生成示例图"
      }
    ]
  },
  "dayushan": {
    "id": "dayushan",
    "name": "大嵛山岛",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": true
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "三沙码头",
        "lat": 26.946,
        "lon": 120.306,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "上岛徒步并扎营。"
      },
      {
        "name": "环岛公路/草甸",
        "lat": 26.954,
        "lon": 120.314,
        "elevation": 800,
        "distance": 18,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "看日出后离岛。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 18,
        "elevation": 800
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "三沙码头—大嵛山岛—小天湖",
        "desc": "上岛徒步并扎营。",
        "overnight": "三沙码头—大嵛山岛—小天湖",
        "checkpoints": [
          "三沙码头—大嵛山岛—小天湖"
        ]
      },
      {
        "day": 2,
        "title": "环岛公路/草甸—返程",
        "desc": "看日出后离岛。",
        "overnight": "返程",
        "checkpoints": [
          "环岛公路/草甸—返程"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或福建主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "霞浦三沙码头乘船上岛。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/dayushan.geojson",
      "gpx": "data/tracks/dayushan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "大嵛山岛示意图 1",
        "location": "福建",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "大嵛山岛示意图 2",
        "location": "福建",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "caption": "大嵛山岛示意图 3",
        "location": "福建",
        "credit": "自动生成示例图"
      }
    ]
  },
  "zhangjiajie": {
    "id": "zhangjiajie",
    "name": "张家界森林公园",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": false
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "森林公园门票站",
        "lat": 29.316,
        "lon": 110.426,
        "elevation": 300,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿溪谷与步道上山。"
      },
      {
        "name": "袁家界",
        "lat": 29.324,
        "lon": 110.434,
        "elevation": 1500,
        "distance": 24,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "环线后下山。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 300
      },
      {
        "distance": 24,
        "elevation": 1500
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "森林公园门票站—金鞭溪—袁家界",
        "desc": "沿溪谷与步道上山。",
        "overnight": "森林公园门票站—金鞭溪—袁家界",
        "checkpoints": [
          "森林公园门票站—金鞭溪—袁家界"
        ]
      },
      {
        "day": 2,
        "title": "袁家界—天子山—十里画廊—下山",
        "desc": "环线后下山。",
        "overnight": "返程",
        "checkpoints": [
          "袁家界—天子山—十里画廊—下山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或湖南主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "张家界市区乘车至森林公园。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/zhangjiajie.geojson",
      "gpx": "data/tracks/zhangjiajie.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "张家界森林公园示意图 1",
        "location": "湖南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "张家界森林公园示意图 2",
        "location": "湖南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "caption": "张家界森林公园示意图 3",
        "location": "湖南",
        "credit": "自动生成示例图"
      }
    ]
  },
  "laojunshan": {
    "id": "laojunshan",
    "name": "老君山",
    "credibility": "C",
    "version": 1,
    "updatedAt": "2026-08-16",
    "sources": [
      "由现有路线数据自动生成",
      "轨迹和节点为示例参考线，需人工替换核实"
    ],
    "status": {
      "open": null,
      "permitRequired": false,
      "ticketRequired": true,
      "closureRisk": "自动生成示例，开放状态、门票和线路情况尚未逐条核实。",
      "officialUrl": ""
    },
    "seasonDetail": {
      "春季": {
        "months": [
          3,
          4,
          5
        ],
        "condition": "气温回升，植被返青。",
        "risk": "早晚温差大，天气变化快。",
        "best": true
      },
      "夏季": {
        "months": [
          6,
          7,
          8
        ],
        "condition": "植被茂盛，白昼较长。",
        "risk": "雷雨、暴晒、蚊虫。",
        "best": false
      },
      "秋季": {
        "months": [
          9,
          10,
          11
        ],
        "condition": "色彩丰富，空气通透。",
        "risk": "昼夜温差大，部分垭口开始降雪。",
        "best": true
      },
      "冬季": {
        "months": [
          12,
          1,
          2
        ],
        "condition": "雪景壮丽，游客较少。",
        "risk": "低温、冰雪、部分路线封闭。",
        "best": true
      }
    },
    "budget": {
      "transport": "就近高铁站或客运站至起点，再短途包车或乘景区接驳车。",
      "ticket": "门票、观光车或进山管理费以官方和当地实际收费为准。",
      "guide": "常规路线可自助，偏远路段建议结伴。",
      "lodgingPerNight": "沿途客栈或集结点住宿约 100-400 元。",
      "mealsPerDay": "约 80-150 元/天。",
      "emergencyReserve": "建议预留 300-600 元。"
    },
    "checkpoints": [
      {
        "name": "景区",
        "lat": 33.746,
        "lon": 111.626,
        "elevation": 1317,
        "distance": 0,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "沿步道或索道上山。"
      },
      {
        "name": "金顶",
        "lat": 33.754,
        "lon": 111.634,
        "elevation": 2217,
        "distance": 15,
        "water": true,
        "camp": false,
        "signal": true,
        "toilet": true,
        "emergencyExit": true,
        "note": "看日出后返回。"
      }
    ],
    "elevationProfile": [
      {
        "distance": 0,
        "elevation": 1317
      },
      {
        "distance": 15,
        "elevation": 2217
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "景区—中天门—十里画屏—金顶",
        "desc": "沿步道或索道上山。",
        "overnight": "景区—中天门—十里画屏—金顶",
        "checkpoints": [
          "景区—中天门—十里画屏—金顶"
        ]
      },
      {
        "day": 2,
        "title": "金顶—下山",
        "desc": "看日出后返回。",
        "overnight": "返程",
        "checkpoints": [
          "金顶—下山"
        ]
      }
    ],
    "services": {
      "rescue": "当地救援、景区或公安电话以官方公告为准。",
      "nearestHospital": "就近县城或河南主要城镇医院。",
      "guideContact": "沿途客栈可协助联系包车和向导。",
      "transportContact": "洛阳/栾川乘车至老君山。",
      "insurance": "建议购买含山地徒步和意外救援的户外保险。"
    },
    "tracks": {
      "geojson": "data/tracks/laojunshan.geojson",
      "gpx": "data/tracks/laojunshan.gpx"
    },
    "media": [
      {
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "caption": "老君山示意图 1",
        "location": "河南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "caption": "老君山示意图 2",
        "location": "河南",
        "credit": "自动生成示例图"
      },
      {
        "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "caption": "老君山示意图 3",
        "location": "河南",
        "credit": "自动生成示例图"
      }
    ]
  }
});
