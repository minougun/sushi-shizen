const MOCK_STORAGE_KEY = "sushi-zen-public-mock-language";

const mockTranslations = {
  ja: {
    lang: "ja",
    page_title: "Sushi Zen | Overview",
    meta_description:
      "大阪・東心斎橋に佇む鮨し禅のご紹介ページです。十席の静かなカウンターで味わう、おまかせ鮨の体験をご案内します。",
    og_title: "Sushi Zen | Overview",
    og_description:
      "大阪・東心斎橋に佇む鮨し禅のご紹介ページです。十席の静かなカウンターで味わう、おまかせ鮨の体験をご案内します。",
    language_switcher_label: "言語切り替え",
    eyebrow: "大阪・東心斎橋 / 完全予約制",
    title: "鮨し禅",
    lead: "大阪・東心斎橋で、<br>十席の静かな鮨体験を。",
    hero_cta_primary: "食べログから予約する",
    hero_cta_secondary: "店舗情報を見る",
    hero_note: "東心斎橋の10席カウンター。食べログから予約できます。",
    hero_highlight_1: "夜のおまかせ ¥15,000〜",
    hero_highlight_2: "カウンター10席のみ",
    hero_highlight_3: "心斎橋駅から徒歩5分",
    hero_highlight_4: "食べログから予約可",
    hero_panel_label: "海外からご来店の方へ",
    hero_panel_text:
      "食べログで価格と条件を確認し、そのまま予約できます。",
    hero_panel_stat_1_label: "コース",
    hero_panel_stat_1_value: "夜のおまかせ ¥15,000〜",
    hero_panel_stat_2_label: "アクセス",
    hero_panel_stat_2_value: "心斎橋駅から徒歩5分",
    hero_panel_stat_3_label: "席数",
    hero_panel_stat_3_value: "カウンター10席のみ",
    hero_panel_stat_4_label: "予約",
    hero_panel_stat_4_value: "食べログのオンライン予約",
    hero_trust_1: "大将 抑野和彦が立つ10席カウンター",
    hero_trust_2: "東心斎橋の完全予約制",
    hero_trust_3: "旅行前にオンラインで席を確保",
    hero_alt: "鮨し禅のメインビジュアル",
    filmstrip_label: "鮨し禅の料理イメージ",
    slide_1_alt: "おまかせの握り盛り合わせ",
    slide_2_alt: "季節の食材を用いた一皿",
    slide_3_alt: "職人の技を表現した一皿",
    slide_4_alt: "カウンターで味わう鮨の時間",
    slide_5_alt: "ご予約で楽しむ季節のおまかせ",
    chef_label: "大将",
    chef_name: "抑野和彦（そものかずひこ）",
    chef_cred: "東心斎橋の10席カウンターで、その日の最良を静かに整える大将。",
    chef_text:
      "大将 抑野和彦が、温度と流れを整えながらその日の最良をお出しします。",
    chef_alt: "大将 抑野和彦のイメージビジュアル",
    concept_label: "こだわり",
    concept_heading: "静かな高揚だけを残す、<br>10席のための鮨。",
    concept_card_1_title: "温度で魅せる",
    concept_card_1_text: "温度まで繊細に演出し、一口の輪郭を整えます。",
    concept_card_2_title: "過度に飾らない",
    concept_card_2_text: "飾りすぎず、素材の美しさを前に出します。",
    concept_card_3_title: "会話も一皿のうち",
    concept_card_3_text: "季節と酒も、簡潔にご案内します。",
    course_label: "おまかせ",
    course_heading: "その日の最良だけで組む、<br>おまかせ一択の設計。",
    course_note: "夜のおまかせコース / 税別",
    course_item_1: "旬の握りと肴のおまかせ",
    course_item_2: "週末ランチは前日までの予約制",
    course_item_3: "カウンター10席のみ",
    course_alt: "おまかせコース",
    details_label: "店舗情報",
    details_summary: "心斎橋駅から徒歩5分。完全予約制の10席カウンターです。",
    hours_dt: "営業時間",
    hours_dd: "18:00〜20:00 / 20:30〜23:00<br>土・日・祝 ランチ 12:00〜",
    address_dt: "住所",
    address_dd: "大阪府大阪市中央区東心斎橋1-14-15 アルスビル 4F",
    access_dt: "アクセス",
    access_dd: "心斎橋駅 徒歩5分 / 長堀橋駅から317m",
    policy_label: "ご案内",
    seats_dt: "席数",
    seats_dd: "カウンター10席",
    smoking_dt: "禁煙",
    smoking_dd: "全席禁煙",
    cancel_dt: "キャンセル",
    cancel_dd: "当日キャンセルは100%",
    reservation_label: "ご予約",
    reservation_heading: "ご予約は、<br>静かな一席への入口です。",
    reservation_lead:
      "海外からのご予約は食べログが最短です。<br>価格と条件を見たまま予約できます。",
    reservation_button: "食べログから予約する",
    reserve_fact_1: "完全予約制",
    reserve_fact_2: "カウンター10席のみ",
    reserve_fact_3: "当日キャンセルは100%",
    reserve_fact_4: "土日祝ランチは前日までの予約制",
    reserve_step_1: "食べログから希望日時を選択",
    reserve_step_2: "週末ランチは前日までに予約",
    reserve_step_3: "変更やキャンセルは前日までに連絡",
    reserve_why_title: "いま予約しやすい理由",
    reserve_reason_1: "各回10席のみ",
    reserve_reason_2: "価格と条件を確認して予約できる",
    reserve_reason_3: "週末ランチは前日までの予約制",
    reserve_support: "夜は二部制 / 全席禁煙 / カード・電子マネー・QR決済対応",
    footer_name: "鮨し禅",
    footer_address: "大阪府大阪市中央区東心斎橋1-14-15 アルスビル 4F",
    footer_copy: "© Sushi Zen",
  },
  en: {
    lang: "en",
    page_title: "Sushi Zen | Overview",
    meta_description:
      "An overview page for Sushi Zen, a quiet ten-seat omakase sushi counter in Higashi-Shinsaibashi, Osaka.",
    og_title: "Sushi Zen | Overview",
    og_description:
      "An overview page for Sushi Zen, a quiet ten-seat omakase sushi counter in Higashi-Shinsaibashi, Osaka.",
    language_switcher_label: "Language selector",
    eyebrow: "Osaka Omakase / Reservation Only",
    title: "Sushi Zen",
    lead: "Only 10 seats.<br>One quiet omakase counter in Osaka.",
    hero_cta_primary: "Reserve via Tabelog",
    hero_cta_secondary: "Access & Details",
    hero_note: "Only ten seats in Higashi-Shinsaibashi. Reserve before your Osaka dates fill.",
    hero_highlight_1: "Dinner omakase from JPY 15,000 per person",
    hero_highlight_2: "Only 10 counter seats",
    hero_highlight_3: "5 min from Shinsaibashi Station",
    hero_highlight_4: "Reserve via Tabelog",
    hero_panel_label: "Only Ten Seats Each Night",
    hero_panel_text:
      "A quiet counter led by Chef Kazuhiko Somono.<br>Reserve before your Osaka dates fill.",
    hero_panel_stat_1_label: "Course",
    hero_panel_stat_1_value: "Dinner omakase from JPY 15,000 per person",
    hero_panel_stat_2_label: "Access",
    hero_panel_stat_2_value: "5 min from Shinsaibashi Station",
    hero_panel_stat_3_label: "Counter",
    hero_panel_stat_3_value: "Only 10 seats",
    hero_panel_stat_4_label: "Booking",
    hero_panel_stat_4_value: "Online reservation via Tabelog",
    hero_trust_1: "Chef Kazuhiko Somono at the counter",
    hero_trust_2: "Only 10 seats, reservation only",
    hero_trust_3: "Book before your Osaka dates fill",
    hero_alt: "Main visual of Sushi Zen",
    filmstrip_label: "Dish gallery of Sushi Zen",
    slide_1_alt: "Selection of omakase nigiri",
    slide_2_alt: "Seasonal dish made with fresh ingredients",
    slide_3_alt: "A plate expressing the chef's craftsmanship",
    slide_4_alt: "Quiet time at the sushi counter",
    slide_5_alt: "Seasonal omakase enjoyed by reservation",
    chef_label: "Chef",
    chef_name: "Kazuhiko Somono",
    chef_cred:
      "Chef Kazuhiko Somono leads a quiet 10-seat counter reserved in advance.",
    chef_text:
      "Chef Kazuhiko Somono serves the best bite of the day with careful timing and a calm pace.",
    chef_alt: "Portrait-style visual of Chef Kazuhiko Somono",
    concept_label: "Concept",
    concept_heading: "Sushi for ten seats,<br>leaving only a quiet sense of elevation.",
    concept_card_1_title: "Built around temperature",
    concept_card_1_text: "Temperature is tuned to sharpen each bite.",
    concept_card_2_title: "Never overdressed",
    concept_card_2_text: "The ingredient stays at the center.",
    concept_card_3_title: "Conversation is part of the course",
    concept_card_3_text: "Season and sake are explained simply.",
    course_label: "Course",
    course_heading: "A single omakase route,<br>composed only from the best of the day.",
    course_note: "Dinner omakase course / tax excluded",
    course_item_1: "Seasonal nigiri and small dishes",
    course_item_2: "Weekend lunch requires booking by the previous day",
    course_item_3: "Only 10 counter seats",
    course_alt: "Omakase course",
    details_label: "Details",
    details_summary:
      "5 min from Shinsaibashi / reservation only / only 10 counter seats",
    hours_dt: "Hours",
    hours_dd: "Dinner 18:00-20:00 / 20:30-23:00<br>Weekend and holiday lunch from 12:00",
    address_dt: "Address",
    address_dd: "4F Ars Building, 1-14-15 Higashi-Shinsaibashi, Chuo-ku, Osaka",
    access_dt: "Access",
    access_dd: "5 min from Shinsaibashi Station / 317 m from Nagahoribashi Station",
    policy_label: "Policy",
    seats_dt: "Seats",
    seats_dd: "10 counter seats",
    smoking_dt: "Smoking",
    smoking_dd: "Non-smoking",
    cancel_dt: "Cancellation",
    cancel_dd: "100% charge for same-day cancellation",
    reservation_label: "Reservation",
    reservation_heading: "Reserve before the counter<br>fills for your Osaka dates.",
    reservation_lead:
      "Tabelog is the fastest way to book.<br>Check the details and reserve in one step.",
    reservation_button: "Reserve via Tabelog",
    reserve_fact_1: "Reservation only",
    reserve_fact_2: "10 counter seats only",
    reserve_fact_3: "100% charge for same-day cancellation",
    reserve_fact_4: "Weekend lunch requires booking by the previous day",
    reserve_step_1: "Select your preferred date and time on Tabelog",
    reserve_step_2: "Weekend lunch must be booked by the previous day",
    reserve_step_3: "Please contact the restaurant by the previous day for changes or cancellations",
    reserve_why_title: "Why book ahead",
    reserve_reason_1: "Only 10 seats per seating",
    reserve_reason_2: "Check price and policy before checkout",
    reserve_reason_3: "Weekend lunch requires advance booking",
    reserve_support: "Two dinner seatings / Non-smoking / Cards, e-money, and QR payments accepted",
    footer_name: "Sushi Zen",
    footer_address: "4F Ars Building, 1-14-15 Higashi-Shinsaibashi, Chuo-ku, Osaka",
    footer_copy: "© Sushi Zen",
  },
  ko: {
    lang: "ko",
    page_title: "스시 시젠 | 소개",
    meta_description:
      "오사카 히가시신사이바시에 자리한 10석 스시 시젠을 소개하는 페이지입니다.",
    og_title: "스시 시젠 | 소개",
    og_description:
      "오사카 히가시신사이바시에 자리한 10석 스시 시젠을 소개하는 페이지입니다.",
    language_switcher_label: "언어 선택",
    eyebrow: "오사카 오마카세 / 예약제",
    title: "스시 시젠",
    lead: "오사카 히가시신사이바시에서,<br>10석의 조용한 스시 경험을.",
    hero_cta_primary: "타베로그로 예약하기",
    hero_cta_secondary: "매장 정보 보기",
    hero_note: "히가시신사이바시의 10석 카운터. 타베로그로 예약할 수 있습니다.",
    hero_highlight_1: "1인 저녁 오마카세 15,000엔부터",
    hero_highlight_2: "카운터 10석만 운영",
    hero_highlight_3: "신사이바시역 도보 5분",
    hero_highlight_4: "타베로그 예약 가능",
    hero_panel_label: "해외 방문객 안내",
    hero_panel_text:
      "타베로그에서 가격과 조건을 확인하고 바로 예약할 수 있습니다.",
    hero_panel_stat_1_label: "코스",
    hero_panel_stat_1_value: "1인 저녁 오마카세 15,000엔부터",
    hero_panel_stat_2_label: "오시는 길",
    hero_panel_stat_2_value: "신사이바시역 도보 5분",
    hero_panel_stat_3_label: "좌석",
    hero_panel_stat_3_value: "카운터 10석만 운영",
    hero_panel_stat_4_label: "예약",
    hero_panel_stat_4_value: "타베로그 온라인 예약",
    hero_trust_1: "대장 소모노 카즈히코가 서는 10석 카운터",
    hero_trust_2: "히가시신사이바시의 완전 예약제",
    hero_trust_3: "여행 전에 온라인으로 좌석 확보",
    hero_alt: "스시 시젠 메인 비주얼",
    filmstrip_label: "스시 시젠 요리 이미지",
    slide_1_alt: "오마카세 니기리 모둠",
    slide_2_alt: "제철 식재료를 사용한 한 접시",
    slide_3_alt: "장인의 기술을 표현한 한 접시",
    slide_4_alt: "카운터에서 보내는 조용한 시간",
    slide_5_alt: "예약으로 즐기는 제철 오마카세",
    chef_label: "대장",
    chef_name: "소모노 카즈히코",
    chef_cred: "히가시신사이바시의 10석 카운터에서 그날 최고의 흐름을 조용히 완성하는 대장.",
    chef_text:
      "대장 소모노 카즈히코가 온도와 흐름을 살피며 그날 가장 좋은 한 점을 냅니다.",
    chef_alt: "대장 소모노 카즈히코의 이미지 비주얼",
    concept_label: "철학",
    concept_heading: "조용한 고조감만 남기는,<br>10석을 위한 스시.",
    concept_card_1_title: "온도로 완성한다",
    concept_card_1_text: "온도까지 설계해 한 점의 윤곽을 정돈합니다.",
    concept_card_2_title: "과하게 꾸미지 않는다",
    concept_card_2_text: "재료의 아름다움을 앞에 둡니다.",
    concept_card_3_title: "대화도 한 접시의 일부",
    concept_card_3_text: "계절과 술도 짧고 정확하게 안내합니다.",
    course_label: "오마카세",
    course_heading: "그날 가장 좋은 것만으로 구성하는,<br>오마카세 단일 코스.",
    course_note: "저녁 오마카세 코스 / 세금 별도",
    course_item_1: "제철 니기리와 안주의 오마카세",
    course_item_2: "주말 런치는 전날까지 예약 필수",
    course_item_3: "카운터 10석만 운영",
    course_alt: "오마카세 코스",
    details_label: "매장 정보",
    details_summary: "신사이바시역 도보 5분. 완전 예약제 10석 카운터입니다.",
    hours_dt: "영업시간",
    hours_dd: "18:00-20:00 / 20:30-23:00<br>주말·공휴일 런치 12:00부터",
    address_dt: "주소",
    address_dd: "오사카부 오사카시 주오구 히가시신사이바시 1-14-15 아루스빌딩 4F",
    access_dt: "오시는 길",
    access_dd: "신사이바시역 도보 5분 / 나가호리바시역 317m",
    policy_label: "안내",
    seats_dt: "좌석",
    seats_dd: "카운터 10석",
    smoking_dt: "흡연",
    smoking_dd: "전석 금연",
    cancel_dt: "취소",
    cancel_dd: "당일 취소 100%",
    reservation_label: "예약",
    reservation_heading: "예약은,<br>조용한 한 자리를 향한 입구입니다.",
    reservation_lead:
      "해외 방문객은 타베로그 예약이 가장 빠릅니다.<br>가격과 조건을 보고 바로 예약할 수 있습니다.",
    reservation_button: "타베로그로 예약하기",
    reserve_fact_1: "완전 예약제",
    reserve_fact_2: "카운터 10석만 운영",
    reserve_fact_3: "당일 취소 100%",
    reserve_fact_4: "주말·공휴일 런치는 전날까지 예약 필수",
    reserve_step_1: "타베로그에서 원하는 날짜와 시간을 선택",
    reserve_step_2: "주말 런치는 전날까지 예약 필요",
    reserve_step_3: "변경이나 취소는 전날까지 매장에 연락",
    reserve_why_title: "지금 예약하기 좋은 이유",
    reserve_reason_1: "각 타임 10석만 운영",
    reserve_reason_2: "가격과 조건을 확인하고 예약 가능",
    reserve_reason_3: "주말 런치는 전날까지 예약 필수",
    reserve_support: "저녁 2부제 / 전석 금연 / 카드·전자머니·QR 결제 가능",
    footer_name: "스시 시젠",
    footer_address: "오사카부 오사카시 주오구 히가시신사이바시 1-14-15 아루스빌딩 4F",
    footer_copy: "© Sushi Zen",
  },
  zh: {
    lang: "zh",
    page_title: "鮨し禅｜简介",
    meta_description:
      "这是介绍大阪东心斋桥鮨し禅的页面，带您了解十席吧台上的主厨推荐寿司体验。",
    og_title: "鮨し禅｜简介",
    og_description:
      "这是介绍大阪东心斋桥鮨し禅的页面，带您了解十席吧台上的主厨推荐寿司体验。",
    language_switcher_label: "语言切换",
    eyebrow: "大阪主厨推荐 / 预约制",
    title: "鮨し禅",
    lead: "在大阪东心斋桥，<br>体验10席的安静寿司时光。",
    hero_cta_primary: "通过食べログ预约",
    hero_cta_secondary: "查看店铺信息",
    hero_note: "东心斋桥的10席吧台，可直接通过食べログ预约。",
    hero_highlight_1: "晚间主厨推荐每位 ¥15,000 起",
    hero_highlight_2: "仅设10席吧台",
    hero_highlight_3: "距心斋桥站步行5分钟",
    hero_highlight_4: "可通过食べログ预约",
    hero_panel_label: "给海外来店客人的说明",
    hero_panel_text:
      "可在食べログ确认价格与条件后直接预约。",
    hero_panel_stat_1_label: "套餐",
    hero_panel_stat_1_value: "晚间主厨推荐每位 ¥15,000 起",
    hero_panel_stat_2_label: "交通",
    hero_panel_stat_2_value: "距心斋桥站步行5分钟",
    hero_panel_stat_3_label: "席位",
    hero_panel_stat_3_value: "仅设10席吧台",
    hero_panel_stat_4_label: "预约",
    hero_panel_stat_4_value: "可通过食べログ在线预约",
    hero_trust_1: "由大将抑野和彦坐镇的10席吧台",
    hero_trust_2: "东心斋桥的完全预约制",
    hero_trust_3: "出发前即可在线锁定席位",
    hero_alt: "鮨し禅主视觉",
    filmstrip_label: "鮨し禅料理图片",
    slide_1_alt: "主厨推荐握寿司拼盘",
    slide_2_alt: "使用时令食材的一道料理",
    slide_3_alt: "展现匠人手艺的一道料理",
    slide_4_alt: "在吧台享受寿司的安静时光",
    slide_5_alt: "预约制时令主厨推荐",
    chef_label: "大将",
    chef_name: "抑野和彦",
    chef_cred: "在东心斋桥的10席吧台，安静地把当天最佳状态呈现给客人的大将。",
    chef_text:
      "大将抑野和彦会整理温度与节奏，呈现当天最好的一贯。",
    chef_alt: "大将抑野和彦的形象视觉",
    concept_label: "理念",
    concept_heading: "只留下安静的高扬感，<br>为10席而准备的寿司。",
    concept_card_1_title: "以温度取胜",
    concept_card_1_text: "连温度也经过设计，让一口更完整。",
    concept_card_2_title: "不过度装饰",
    concept_card_2_text: "把食材本身放在最前面。",
    concept_card_3_title: "对话也是一道菜",
    concept_card_3_text: "季节与酒也会简洁说明。",
    course_label: "主厨推荐",
    course_heading: "只以当天最好的食材组成，<br>专注于主厨推荐一种选择。",
    course_note: "晚间主厨推荐套餐 / 未税",
    course_item_1: "时令握寿司与小菜的主厨推荐",
    course_item_2: "周末午餐需至少提前一天预约",
    course_item_3: "仅10席吧台",
    course_alt: "主厨推荐套餐",
    details_label: "店铺信息",
    details_summary: "距心斋桥站步行5分钟。完全预约制，仅10席吧台。",
    hours_dt: "营业时间",
    hours_dd: "18:00-20:00 / 20:30-23:00<br>周末及节假日午餐12:00起",
    address_dt: "地址",
    address_dd: "大阪府大阪市中央区东心斋桥1-14-15 Ars大厦4F",
    access_dt: "交通",
    access_dd: "心斋桥站步行5分钟 / 距长堀桥站317米",
    policy_label: "说明",
    seats_dt: "座位",
    seats_dd: "吧台10席",
    smoking_dt: "吸烟",
    smoking_dd: "全店禁烟",
    cancel_dt: "取消",
    cancel_dd: "当日取消收取100%",
    reservation_label: "预约",
    reservation_heading: "预约，<br>是通往安静吧台席位的入口。",
    reservation_lead:
      "海外客人使用食べログ预约最快。<br>确认价格与条件后即可预约。",
    reservation_button: "通过食べログ预约",
    reserve_fact_1: "完全预约制",
    reserve_fact_2: "仅设10席吧台",
    reserve_fact_3: "当日取消收取100%",
    reserve_fact_4: "周末及节假日午餐需至少提前一天预约",
    reserve_step_1: "在食べログ选择希望的日期与时间",
    reserve_step_2: "周末午餐需至少提前一天预约",
    reserve_step_3: "如需更改或取消，请最晚于前一天联系店铺",
    reserve_why_title: "适合现在预约的理由",
    reserve_reason_1: "每个时段仅10席",
    reserve_reason_2: "确认价格与条件后即可预约",
    reserve_reason_3: "周末午餐需提前一天预约",
    reserve_support: "晚间分两场 / 全店禁烟 / 支持信用卡、电子支付与二维码支付",
    footer_name: "鮨し禅",
    footer_address: "大阪府大阪市中央区东心斋桥1-14-15 Ars大厦4F",
    footer_copy: "© Sushi Zen",
  },
};

function setMockMeta(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute("content", value);
  }
}

function reorderDefinitionList(list, order) {
  if (!list || !Array.isArray(order) || order.length === 0) {
    return;
  }

  const pairs = [];
  const children = Array.from(list.children);
  for (let index = 0; index < children.length; index += 2) {
    const term = children[index];
    const description = children[index + 1];
    if (term && description) {
      pairs.push({
        key: term.dataset.i18n || "",
        nodes: [term, description],
      });
    }
  }

  const pairMap = new Map(pairs.map((pair) => [pair.key, pair.nodes]));
  const orderedNodes = order.flatMap((key) => pairMap.get(key) || []);
  orderedNodes.forEach((node) => {
    list.appendChild(node);
  });
}

function reorderMockDetails(lang) {
  const detailLists = document.querySelectorAll(".detail-list");
  if (detailLists.length < 2) {
    return;
  }

  const infoOrder = lang === "en"
    ? ["access_dt", "address_dt", "hours_dt"]
    : ["hours_dt", "address_dt", "access_dt"];
  const policyOrder = lang === "en"
    ? ["seats_dt", "cancel_dt", "smoking_dt"]
    : ["seats_dt", "smoking_dt", "cancel_dt"];

  reorderDefinitionList(detailLists[0], infoOrder);
  reorderDefinitionList(detailLists[1], policyOrder);
}

function applyMockLanguage(lang) {
  const dict = mockTranslations[lang] || mockTranslations.ja;

  document.documentElement.lang = dict.lang;
  document.title = dict.page_title;
  setMockMeta("#mockMetaDescription", dict.meta_description);
  setMockMeta("#mockOgTitle", dict.og_title);
  setMockMeta("#mockOgDescription", dict.og_description);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key] !== undefined) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dict[key] !== undefined) {
      node.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-attrs]").forEach((node) => {
    const entries = node.dataset.i18nAttrs.split(";");
    entries.forEach((entry) => {
      const [attr, key] = entry.split(":");
      if (attr && key && dict[key] !== undefined) {
        node.setAttribute(attr, dict[key]);
      }
    });
  });

  document.querySelectorAll(".mock-language-switcher__button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  reorderMockDetails(lang);

  localStorage.setItem(MOCK_STORAGE_KEY, lang);
}

function detectMockBrowserLanguage() {
  const languages = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language || "ja"];

  for (const candidate of languages) {
    const lang = String(candidate).toLowerCase();
    if (lang.startsWith("ja")) {
      return "ja";
    }
    if (lang.startsWith("ko")) {
      return "ko";
    }
    if (lang.startsWith("zh")) {
      return "zh";
    }
    if (lang.startsWith("en")) {
      return "en";
    }
  }

  return "en";
}

function getMockInitialLanguage() {
  const stored = localStorage.getItem(MOCK_STORAGE_KEY);
  if (stored && mockTranslations[stored]) {
    return stored;
  }
  return detectMockBrowserLanguage();
}

function initializeMockScrollReveal() {
  const targets = document.querySelectorAll("main > section, .footer");
  if (targets.length === 0) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  targets.forEach((target) => {
    target.classList.add("scroll-reveal");
    if (reduceMotion) {
      target.classList.add("is-visible");
    }
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyMockLanguage(getMockInitialLanguage());
  initializeMockScrollReveal();

  document.querySelectorAll(".mock-language-switcher__button").forEach((button) => {
    button.addEventListener("click", () => {
      applyMockLanguage(button.dataset.lang);
    });
  });
});
