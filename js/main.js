const STORAGE_KEY = "sushi-zen-language";

const translations = {
  ja: {
    lang: "ja",
    title: "鮨し禅｜大阪心斎橋の隠れ家鮨",
    description:
      "鮨し禅は大阪・東心斎橋の隠れ家にあるカウンター10席の割烹寿司店です。旬の食材を活かしたおまかせ鮨をご堪能ください。心斎橋駅徒歩5分。",
    keywords: "鮨し禅,心斎橋,大阪,寿司,鮨,おまかせ",
    ogTitle: "鮨し禅｜大阪心斎橋の隠れ家鮨",
    ogDescription:
      "鮨し禅は大阪・東心斎橋の隠れ家にあるカウンター10席の割烹寿司店です。旬の食材を活かしたおまかせ鮨をご堪能ください。",
    ogSiteName: "鮨し禅｜大阪心斎橋の隠れ家鮨",
    language_switcher_label: "言語切り替え",
    hero_eyebrow: "大阪・東心斎橋 / 完全予約制",
    logo_text: "鮨し禅",
    hero_lead:
      "旬、温度、間。<br>十席のカウンターで、その日の一貫と向き合う。",
    hero_cta_secondary: "店舗情報を見る",
    hero_meta: "完全予約制 / カウンター10席 / 心斎橋駅 徒歩5分 / 食べログ予約可",
    hero_phone_note: "当日のお問い合わせはお電話で",
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
    hero_alt: "鮨し禅｜大阪心斎橋の隠れ家鮨",
    gallery_label: "鮨し禅の料理写真",
    slide_1_alt: "おまかせの握り盛り合わせ",
    slide_2_alt: "季節の食材を用いた一皿",
    slide_3_alt: "職人の技を表現した一皿",
    slide_4_alt: "カウンターで味わう鮨の時間",
    slide_5_alt: "ご予約で楽しむ季節のおまかせ",
    nav_chef: "大将",
    nav_committed: "こだわり",
    nav_course: "コース",
    nav_reserve: "ご予約",
    nav_information: "ご案内",
    concept_image_alt: "鮨し禅のカウンターをイメージしたビジュアル",
    about_title: "鮨し禅について",
    about_text:
      "東心斎橋の路地にある、カウンター10席の鮨店です。<br>旬の食材を、おまかせで静かに味わっていただきます。",
    craft_image_alt: "鮨し禅の職人技をイメージしたビジュアル",
    thought_title: "鮨し禅の想い",
    thought_text:
      "余分を削ぎ落とし、温度と間で一貫を整える。<br>鮨と酒を、落ち着いた会話とともに楽しむための店です。",
    chef_image_alt: "大将 抑野和彦のイメージビジュアル",
    chef_label: "大将",
    chef_name: "抑野和彦（そものかずひこ）",
    chef_cred: "東心斎橋の10席カウンターで、その日の最良を静かに整える大将。",
    chef_text:
      "大将 抑野和彦が、温度と流れを整えながらその日の最良をお出しします。<br>肩肘張らず、記憶に残る一席を目指しています。",
    commitment_title: "鮨し禅のこだわり",
    commitment_copy:
      "シャリ、酢、醤油、わさび、ネタ。その重なりが最も美しくなる瞬間を大切にしています。",
    shari_title: "シャリへのこだわり",
    rice_alt: "シャリ",
    rice_badge: "舎利",
    rice_text:
      "米を選び、温度と握りでネタの旨みを引き立てます。",
    vinegar_alt: "お酢",
    vinegar_badge: "お酢",
    vinegar_text:
      "米酢と赤酢を使い分け、シャリに奥行きを持たせます。",
    soy_alt: "醤油",
    soy_badge: "醤油",
    soy_text:
      "食材に合わせて醤油を変え、味を整えます。",
    wasabi_alt: "わさび",
    wasabi_title: "わさびにこだわる",
    wasabi_text:
      "手おろしのわさびをネタごとに使い分けます。",
    fish_alt: "ネタ",
    fish_title: "ネタにこだわる",
    fish_text:
      "全国から届く旬の魚介を、その日の状態でお出しします。",
    course_title_primary: "おすすめコース",
    course_title_sub: "おまかせ",
    course_intro:
      "その日の最良で組む、完全おまかせです。<br>旬と技の流れを一席でお楽しみください。",
    course_note: "（税別 / 夜のおまかせコース）",
    lunch_label: "ランチ",
    lunch_note: "土・日・祝 12:00〜（前日までの予約制）",
    course_image_alt: "おまかせコース",
    reserve_title_main: "ご予約",
    reserve_title_sub: "ご予約案内",
    reserve_intro:
      "海外からのご予約は食べログが最短です。<br>価格と条件を見たまま予約できます。",
    reserve_tel_note:
      "お電話は営業時間内に承ります。<br>ご予約は前日までにお願いいたします。",
    reserve_button: "食べログから予約する",
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
    info_title_main: "ご案内",
    info_title_sub: "店舗のご案内",
    shop_title_main: "店舗情報",
    shop_title_sub: "店舗概要",
    info_summary: "心斎橋駅から徒歩5分。完全予約制・カウンター10席・各種キャッシュレス決済対応です。",
    hours_dt: "営業時間",
    hours_dd:
      "月〜日・祝日<br>・18:00〜20:00（一部）<br>・20:30〜23:00（二部）<br>土・日・祝 ランチ 12:00〜<br>※前日までの予約制",
    closed_dt: "定休日",
    closed_dd: "不定休",
    phone_dt: "電話番号",
    address_dt: "住所",
    address_dd: "大阪府大阪市中央区東心斎橋1-14-15 アルスビル 4F",
    access_dt: "アクセス",
    access_dd: "御堂筋線 心斎橋駅 徒歩5分<br>長堀橋駅 から 317m",
    seats_dt: "席数",
    seats_dd: "10席（カウンター10席）",
    smoking_dt: "禁煙・喫煙",
    smoking_dd: "全席禁煙",
    payment_dt: "支払い方法",
    payment_dd:
      "カード可（VISA / Master / JCB / AMEX / Diners / UnionPay）<br>電子マネー可（交通系電子マネー（Suica等） / 楽天Edy / nanaco / WAON / iD / QUICPay）<br>QRコード決済可（PayPay / d払い / 楽天ペイ / au PAY / Alipay / WeChat Pay）",
    cancel_title_main: "キャンセルポリシー",
    cancel_title_sub: "予約規定",
    cancel_dt: "当日キャンセル",
    cancel_note:
      "変更・キャンセルは前日までにご連絡ください。<br>当日キャンセルはコース全額の場合があります。",
    map_title_main: "アクセス",
    map_title_sub: "地図",
    map_summary:
      "心斎橋駅から徒歩5分。完全予約制の10席カウンターです。",
    map_frame_title: "鮨し禅 地図 大阪市中央区東心斎橋1-14-15",
    footer_name: "鮨し禅",
    footer_address: "大阪府大阪市中央区東心斎橋1-14-15 アルスビル 4F",
    footer_copyright: "© 鮨し禅 All rights reserved.",
  },
  en: {
    lang: "en",
    title: "Sushi Zen | Hidden Sushi Counter in Osaka Shinsaibashi",
    description:
      "Sushi Zen is a hidden 10-seat omakase sushi counter in Higashi-Shinsaibashi, Osaka. Enjoy seasonal ingredients and carefully crafted sushi just a 5-minute walk from Shinsaibashi Station.",
    keywords: "Sushi Zen, Shinsaibashi, Osaka, sushi, omakase, reservation",
    ogTitle: "Sushi Zen | Hidden Sushi Counter in Osaka Shinsaibashi",
    ogDescription:
      "A hidden 10-seat omakase sushi counter in Higashi-Shinsaibashi, Osaka, featuring seasonal ingredients and a refined dining experience.",
    ogSiteName: "Sushi Zen",
    language_switcher_label: "Language selector",
    hero_eyebrow: "Osaka Omakase / Reservation Only",
    logo_text: "Sushi Zen",
    hero_lead:
      "Only 10 seats.<br>One quiet omakase counter in Osaka.",
    hero_cta_secondary: "Access & Details",
    hero_meta: "Reservation only / Chef Kazuhiko Somono / 10 counter seats / 5 min from Shinsaibashi",
    hero_phone_note: "Same-day inquiries: call us directly",
    hero_highlight_1: "Dinner omakase from JPY 15,000 per person",
    hero_highlight_2: "Only 10 counter seats",
    hero_highlight_3: "5 min from Shinsaibashi Station",
    hero_highlight_4: "Reserve via Tabelog (Japan's #1 restaurant site)",
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
    hero_panel_stat_4_value: "Online reservation via Tabelog (Japan's #1 restaurant site)",
    hero_trust_1: "Chef Kazuhiko Somono at the counter",
    hero_trust_2: "Only 10 seats, reservation only",
    hero_trust_3: "Book before your Osaka dates fill",
    hero_alt: "Sushi Zen hidden sushi counter in Osaka Shinsaibashi",
    gallery_label: "Photo gallery of Sushi Zen dishes",
    slide_1_alt: "Selection of omakase nigiri",
    slide_2_alt: "Seasonal dish prepared with fresh ingredients",
    slide_3_alt: "A plate expressing the chef's craftsmanship",
    slide_4_alt: "A quiet sushi counter experience",
    slide_5_alt: "Seasonal omakase enjoyed by reservation",
    nav_chef: "Chef",
    nav_committed: "Commitment",
    nav_course: "Course",
    nav_reserve: "Reservation",
    nav_information: "Information",
    concept_image_alt: "Visual inspired by the Sushi Zen counter",
    about_title: "About Sushi Zen",
    about_text:
      "Sushi Zen is a quiet 10-seat counter in Higashi-Shinsaibashi.<br>Seasonal ingredients are served as a single omakase course.",
    craft_image_alt: "Visual inspired by the chef's craftsmanship at Sushi Zen",
    thought_title: "Our Philosophy",
    thought_text:
      "We strip sushi back to temperature, timing, and balance.<br>The room is designed for calm service, sake, and conversation.",
    chef_image_alt: "Portrait-style visual of Chef Kazuhiko Somono",
    chef_label: "Chef",
    chef_name: "Kazuhiko Somono",
    chef_cred:
      "Chef Kazuhiko Somono leads a quiet 10-seat counter reserved in advance.",
    chef_text:
      "Chef Kazuhiko Somono serves the best bite of the day with careful timing and a calm pace.<br>The aim is a meal that stays in memory without feeling formal.",
    commitment_title: "What We Value",
    commitment_copy:
      "We value the moment when rice, vinegar, soy, wasabi, and fish meet in balance.",
    shari_title: "Commitment to the Rice",
    rice_alt: "Rice",
    rice_badge: "Rice",
    rice_text:
      "Rice is blended and shaped to lift the flavor of each topping.",
    vinegar_alt: "Vinegar",
    vinegar_badge: "Vinegar",
    vinegar_text:
      "Rice vinegar and red vinegar are balanced for a cleaner finish.",
    soy_alt: "Soy sauce",
    soy_badge: "Soy",
    soy_text:
      "Soy sauce is adjusted to match each ingredient.",
    wasabi_alt: "Wasabi",
    wasabi_title: "Wasabi with Intention",
    wasabi_text:
      "Fresh wasabi is hand-grated and used with restraint.",
    fish_alt: "Seasonal topping",
    fish_title: "Seasonal Seafood",
    fish_text:
      "Seasonal seafood is chosen for condition and clarity of flavor.",
    course_title_primary: "Recommended Course",
    course_title_sub: "Omakase Course",
    course_intro:
      "A single omakase course, built from the best ingredients of the day.",
    course_note: "(Tax excluded / dinner omakase course)",
    lunch_label: "Lunch",
    lunch_note: "Sat, Sun, and holidays from 12:00, reservation required by the previous day",
    course_image_alt: "Omakase course visual",
    reserve_title_main: "Reservation",
    reserve_title_sub: "Reservation",
    reserve_intro:
      "Tabelog — Japan's largest restaurant booking site — is the fastest way to reserve from overseas.<br>Check the details and book in one step.",
    reserve_tel_note:
      "Phone inquiries are welcome during business hours.<br>Please book by the previous day.",
    reserve_button: "Reserve via Tabelog",
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
    info_title_main: "Information",
    info_title_sub: "Information",
    shop_title_main: "Shop Info",
    shop_title_sub: "Shop Info",
    info_summary:
      "5 min from Shinsaibashi / reservation only / only 10 counter seats / cashless payments accepted",
    hours_dt: "Hours",
    hours_dd:
      "Dinner 18:00-20:00 / 20:30-23:00<br>Weekend and holiday lunch from 12:00<br>Lunch booking required by the previous day",
    closed_dt: "Closed",
    closed_dd: "Irregular holidays",
    phone_dt: "Phone",
    address_dt: "Address",
    address_dd: "4F Ars Building, 1-14-15 Higashi-Shinsaibashi, Chuo-ku, Osaka",
    access_dt: "Access",
    access_dd: "5 min walk from Shinsaibashi Station<br>317 m from Nagahoribashi Station",
    seats_dt: "Seats",
    seats_dd: "10 seats, counter only",
    smoking_dt: "Smoking",
    smoking_dd: "Non-smoking",
    payment_dt: "Payment",
    payment_dd:
      "Cards accepted (VISA / Master / JCB / AMEX / Diners / UnionPay)<br>E-money accepted (Suica / Rakuten Edy / nanaco / WAON / iD / QUICPay)<br>QR payments accepted (PayPay / Alipay / WeChat Pay / au PAY etc.)",
    cancel_title_main: "Cancellation",
    cancel_title_sub: "Cancellation",
    cancel_dt: "Same-day cancellation",
    cancel_note:
      "Please contact us by the previous day for changes or cancellations.<br>Same-day cancellations may be charged in full.",
    map_title_main: "Access",
    map_title_sub: "Map",
    map_summary:
      "5 minutes from Shinsaibashi Station. Reservation only. 10 counter seats.",
    map_frame_title: "Map of Sushi Zen, Higashi-Shinsaibashi, Osaka",
    footer_name: "鮨し禅",
    footer_address: "4F Ars Building, 1-14-15 Higashi-Shinsaibashi, Chuo-ku, Osaka",
    footer_copyright: "© Sushi Zen All rights reserved.",
  },
  ko: {
    lang: "ko",
    title: "스시 시젠 | 오사카 신사이바시의 프라이빗 스시 카운터",
    description:
      "스시 시젠은 오사카 히가시신사이바시에 위치한 10석 규모의 프라이빗 오마카세 스시 카운터입니다. 제철 식재료와 정교한 기술이 어우러진 코스를 즐겨보세요.",
    keywords: "스시 시젠, 신사이바시, 오사카, 스시, 오마카세, 예약",
    ogTitle: "스시 시젠 | 오사카 신사이바시의 프라이빗 스시 카운터",
    ogDescription:
      "오사카 히가시신사이바시에 자리한 10석 규모의 프라이빗 오마카세 스시 카운터.",
    ogSiteName: "스시 시젠",
    language_switcher_label: "언어 선택",
    hero_eyebrow: "오사카 오마카세 / 예약제",
    logo_text: "鮨し禅",
    hero_lead:
      "제철, 온도, 타이밍.<br>10석 카운터에서 그날의 한 점과 마주합니다.",
    hero_cta_secondary: "매장 정보 보기",
    hero_meta: "완전 예약제 / 카운터 10석 / 신사이바시역 도보 5분 / 타베로그 예약 가능",
    hero_phone_note: "당일 문의는 전화로 가능합니다",
    hero_highlight_1: "1인 저녁 오마카세 15,000엔부터",
    hero_highlight_2: "카운터 10석만 운영",
    hero_highlight_3: "신사이바시역 도보 5분",
    hero_highlight_4: "타베로그(일본 최대 맛집 사이트)로 예약 가능",
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
    hero_panel_stat_4_value: "타베로그(일본 최대 맛집 사이트) 온라인 예약",
    hero_trust_1: "대장 소모노 카즈히코가 서는 10석 카운터",
    hero_trust_2: "히가시신사이바시의 완전 예약제",
    hero_trust_3: "여행 전에 온라인으로 좌석 확보",
    hero_alt: "오사카 신사이바시의 스시 시젠",
    gallery_label: "스시 시젠 요리 사진",
    slide_1_alt: "오마카세 니기리 모둠",
    slide_2_alt: "제철 식재료를 사용한 한 접시",
    slide_3_alt: "장인의 기술을 표현한 한 접시",
    slide_4_alt: "카운터에서 즐기는 스시 시간",
    slide_5_alt: "예약제로 즐기는 제철 오마카세",
    nav_chef: "대장",
    nav_committed: "철학",
    nav_course: "코스",
    nav_reserve: "예약",
    nav_information: "안내",
    concept_image_alt: "스시 시젠 카운터를 표현한 비주얼",
    about_title: "스시 시젠 소개",
    about_text:
      "히가시신사이바시 골목 안쪽에 자리한 10석 카운터 스시입니다.<br>제철 식재료를 오마카세로 조용히 즐기실 수 있습니다.",
    craft_image_alt: "스시 시젠의 장인 정신을 표현한 비주얼",
    thought_title: "스시 시젠의 마음",
    thought_text:
      "불필요한 것을 덜고, 온도와 타이밍으로 한 점을 완성합니다.<br>스시와 술을 차분한 대화와 함께 즐기기 위한 공간입니다.",
    chef_image_alt: "대장 소모노 카즈히코의 이미지 비주얼",
    chef_label: "대장",
    chef_name: "소모노 카즈히코",
    chef_cred: "히가시신사이바시의 10석 카운터에서 그날 최고의 흐름을 조용히 완성하는 대장.",
    chef_text:
      "대장 소모노 카즈히코가 온도와 흐름을 살피며 그날 가장 좋은 한 점을 냅니다.<br>과하지 않지만 오래 기억에 남는 한 자리를 지향합니다.",
    commitment_title: "스시 시젠의 기준",
    commitment_copy:
      "샤리, 식초, 간장, 와사비, 네타가 가장 균형 있게 만나는 순간을 중요하게 생각합니다.",
    shari_title: "샤리에 대한 집념",
    rice_alt: "샤리",
    rice_badge: "샤리",
    rice_text:
      "엄선한 쌀을 장인이 블렌딩하고, 올바른 온도와 압력으로 쥐어내어 네타의 감칠맛을 가장 잘 끌어내는 샤리를 만듭니다.",
    vinegar_alt: "식초",
    vinegar_badge: "식초",
    vinegar_text:
      "쌀식초와 붉은 식초를 재료에 맞게 조정하여, 샤리에 깊이 있고 섬세한 맛을 더합니다.",
    soy_alt: "간장",
    soy_badge: "간장",
    soy_text:
      "식재료마다 어울리는 여러 간장을 구분하여 사용해, 각 네타의 개성이 가장 잘 살아나도록 마무리합니다.",
    wasabi_alt: "와사비",
    wasabi_title: "와사비의 균형",
    wasabi_text:
      "산지를 고른 신선한 와사비를 손으로 갈아 사용하며, 네타에 따라 향과 양을 조절해 최고의 일체감을 만들어냅니다.",
    fish_alt: "제철 네타",
    fish_title: "제철 네타",
    fish_text:
      "일본 각지의 신뢰할 수 있는 공급처에서 제철 해산물을 들여옵니다. 신선도와 손질의 정밀함이 한 점의 풍미를 완성합니다.",
    course_title_primary: "추천 코스",
    course_title_sub: "Omakase Course",
    course_intro:
      "그날 가장 좋은 식재료로 구성하는 완전 오마카세입니다.<br>제철의 흐름을 한 자리에서 즐겨보세요.",
    course_note: "(세금 별도 / 저녁 오마카세 코스)",
    lunch_label: "런치",
    lunch_note: "토·일·공휴일 12:00부터, 전날까지 예약 필수",
    course_image_alt: "오마카세 코스 이미지",
    reserve_title_main: "예약",
    reserve_title_sub: "Reservation",
    reserve_intro:
      "타베로그(일본 최대 맛집 예약 사이트)를 이용하면 해외에서도 가장 빠르게 예약할 수 있습니다.<br>가격과 조건을 확인한 후 바로 예약 가능합니다.",
    reserve_tel_note:
      "전화 문의는 영업시간 내에 부탁드립니다.<br>예약은 전날까지 가능합니다.",
    reserve_button: "타베로그로 예약하기",
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
    info_title_main: "안내",
    info_title_sub: "Information",
    shop_title_main: "매장 정보",
    shop_title_sub: "Shop Info",
    info_summary: "신사이바시역 도보 5분. 완전 예약제 10석 카운터이며 카드·전자머니·QR 결제가 가능합니다.",
    hours_dt: "영업시간",
    hours_dd:
      "월-일 / 공휴일<br>1부 18:00-20:00<br>2부 20:30-23:00<br>토·일·공휴일 런치 12:00부터<br>전날까지 예약 필수",
    closed_dt: "휴무일",
    closed_dd: "비정기 휴무",
    phone_dt: "전화번호",
    address_dt: "주소",
    address_dd: "오사카부 오사카시 주오구 히가시신사이바시 1-14-15 아루스빌딩 4F",
    access_dt: "오시는 길",
    access_dd: "미도스지선 신사이바시역 도보 5분<br>나가호리바시역에서 317m",
    seats_dt: "좌석 수",
    seats_dd: "카운터 10석",
    smoking_dt: "흡연 여부",
    smoking_dd: "전석 금연",
    payment_dt: "결제 방법",
    payment_dd:
      "카드 가능: VISA / Master / JCB / AMEX / Diners / UnionPay<br>전자머니 가능: Suica / Rakuten Edy / nanaco / WAON / iD / QUICPay<br>QR 결제 가능: PayPay / Alipay / WeChat Pay / d Pay / Rakuten Pay / au PAY",
    cancel_title_main: "취소 규정",
    cancel_title_sub: "Cancellation",
    cancel_dt: "당일 취소",
    cancel_note:
      "변경과 취소는 전날까지 연락해 주세요.<br>당일 취소는 전액 청구될 수 있습니다.",
    map_title_main: "오시는 길",
    map_title_sub: "Access",
    map_summary:
      "신사이바시역에서 도보 5분. 완전 예약제 10석 카운터 스시입니다.",
    map_frame_title: "오사카 히가시신사이바시 스시 시젠 지도",
    footer_name: "鮨し禅",
    footer_address: "오사카부 오사카시 주오구 히가시신사이바시 1-14-15 아루스빌딩 4F",
    footer_copyright: "© Sushi Zen All rights reserved.",
  },
  zh: {
    lang: "zh",
    title: "鮨し禅｜大阪心斋桥的隐秘寿司吧台",
    description:
      "鮨し禅位于大阪东心斋桥，是一家仅有10席的私密寿司吧台。以当季食材与细致手艺呈现安静而讲究的主厨推荐体验。",
    keywords: "鮨し禅, 心斋桥, 大阪, 寿司, 主厨推荐, 预约",
    ogTitle: "鮨し禅｜大阪心斋桥的隐秘寿司吧台",
    ogDescription:
      "大阪东心斋桥的10席私密寿司吧台，以当季食材和细致手艺呈现主厨推荐套餐。",
    ogSiteName: "鮨し禅",
    language_switcher_label: "语言切换",
    hero_eyebrow: "大阪主厨推荐 / 预约制",
    logo_text: "鮨し禅",
    hero_lead:
      "时令、温度、分寸。<br>在十席吧台里，与当天的一贯相遇。",
    hero_cta_secondary: "查看店铺信息",
    hero_meta: "完全预约制 / 吧台10席 / 距心斋桥站步行5分钟 / 支持食べログ预约",
    hero_phone_note: "当日咨询请直接致电",
    hero_highlight_1: "晚间主厨推荐每位 ¥15,000 起",
    hero_highlight_2: "仅设10席吧台",
    hero_highlight_3: "距心斋桥站步行5分钟",
    hero_highlight_4: "可通过食べログ（日本最大餐厅预约网站）预约",
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
    hero_panel_stat_4_value: "可通过食べログ（日本最大餐厅网站）在线预约",
    hero_trust_1: "由大将抑野和彦坐镇的10席吧台",
    hero_trust_2: "东心斋桥的完全预约制",
    hero_trust_3: "出发前即可在线锁定席位",
    hero_alt: "大阪心斋桥的鮨し禅",
    gallery_label: "鮨し禅料理照片",
    slide_1_alt: "主厨推荐握寿司拼盘",
    slide_2_alt: "使用时令食材的一道料理",
    slide_3_alt: "展现匠人手艺的一道料理",
    slide_4_alt: "在吧台享受寿司的时光",
    slide_5_alt: "预约制时令主厨推荐",
    nav_chef: "大将",
    nav_committed: "讲究",
    nav_course: "套餐",
    nav_reserve: "预约",
    nav_information: "店铺信息",
    concept_image_alt: "以鮨し禅吧台为灵感的视觉图",
    about_title: "关于鮨し禅",
    about_text:
      "鮨し禅位于东心斋桥的小巷中，仅设10席吧台。<br>以主厨推荐的方式，安静呈现当季食材。",
    craft_image_alt: "以鮨し禅匠人精神为灵感的视觉图",
    thought_title: "鮨し禅的理念",
    thought_text:
      "去掉多余，只留下温度、节奏与平衡。<br>这是一家适合安静品尝寿司与酒的店。",
    chef_image_alt: "大将抑野和彦的形象视觉",
    chef_label: "大将",
    chef_name: "抑野和彦",
    chef_cred: "在东心斋桥的10席吧台，安静地把当天最佳状态呈现给客人的大将。",
    chef_text:
      "大将抑野和彦会整理温度与节奏，呈现当天最好的那一贯。<br>希望带来不张扬却能留在记忆里的用餐体验。",
    commitment_title: "鮨し禅的坚持",
    commitment_copy:
      "我们重视米饭、醋、酱油、山葵与鱼料达到平衡的那一刻。",
    shari_title: "对米饭的坚持",
    rice_alt: "米饭",
    rice_badge: "米饭",
    rice_text:
      "将严选米种进行调配，以恰到好处的温度与握法呈现，最大限度衬托鱼料本身的鲜味。",
    vinegar_alt: "醋",
    vinegar_badge: "醋",
    vinegar_text:
      "根据当日食材的特点调整米醋与赤醋的比例，让米饭层次更深、余味更长。",
    soy_alt: "酱油",
    soy_badge: "酱油",
    soy_text:
      "针对不同食材选择不同酱油，让每一贯都能以最适合的方式展现自身个性。",
    wasabi_alt: "山葵",
    wasabi_title: "讲究山葵",
    wasabi_text:
      "使用新鲜手磨山葵，并根据鱼料调整香气与用量，带来更加协调而清爽的整体感。",
    fish_alt: "时令鱼料",
    fish_title: "讲究鱼料",
    fish_text:
      "从日本各地可信赖的渠道直送时令海鲜，以新鲜度与精准处理呈现每一口的纯净旨味。",
    course_title_primary: "推荐套餐",
    course_title_sub: "Omakase Course",
    course_intro:
      "以当天最好的食材组成完整的主厨推荐套餐。<br>请在一席之间感受时令的流动。",
    course_note: "（未税 / 晚间主厨推荐套餐）",
    lunch_label: "午餐",
    lunch_note: "周六、周日及节假日 12:00 起，需至少提前一天预约",
    course_image_alt: "主厨推荐套餐视觉图",
    reserve_title_main: "预约",
    reserve_title_sub: "Reservation",
    reserve_intro:
      "食べログ是日本最大的餐厅预约网站，海外客人使用最为便捷。<br>确认价格与条件后即可直接预约。",
    reserve_tel_note:
      "电话咨询请在营业时间内进行。<br>预约请最晚于前一天完成。",
    reserve_button: "通过食べログ预约",
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
    info_title_main: "店铺信息",
    info_title_sub: "Information",
    shop_title_main: "门店信息",
    shop_title_sub: "Shop Info",
    info_summary: "距心斋桥站步行5分钟。完全预约制、仅10席吧台，并支持多种无现金支付方式。",
    hours_dt: "营业时间",
    hours_dd:
      "周一至周日 / 节假日<br>第一场 18:00-20:00<br>第二场 20:30-23:00<br>周六、周日及节假日午餐 12:00 起<br>需至少提前一天预约",
    closed_dt: "休息日",
    closed_dd: "不定休",
    phone_dt: "电话",
    address_dt: "地址",
    address_dd: "大阪府大阪市中央区东心斋桥1-14-15 Ars大厦4F",
    access_dt: "交通",
    access_dd: "御堂筋线心斋桥站步行5分钟<br>距长堀桥站约317米",
    seats_dt: "座位数",
    seats_dd: "仅吧台10席",
    smoking_dt: "吸烟",
    smoking_dd: "全店禁烟",
    payment_dt: "支付方式",
    payment_dd:
      "可用信用卡：VISA / Master / JCB / AMEX / Diners / 银联<br>可用电子支付：Suica / Rakuten Edy / nanaco / WAON / iD / QUICPay<br>可用二维码支付：PayPay / 支付宝 / 微信支付 / d Pay / Rakuten Pay / au PAY",
    cancel_title_main: "取消政策",
    cancel_title_sub: "Cancellation",
    cancel_dt: "当日取消",
    cancel_note:
      "如需更改或取消，请最晚于前一天联系。<br>当日取消可能收取全额费用。",
    map_title_main: "交通",
    map_title_sub: "Access",
    map_summary:
      "距心斋桥站步行5分钟。完全预约制，仅有10席吧台。",
    map_frame_title: "大阪东心斋桥鮨し禅地图",
    footer_name: "鮨し禅",
    footer_address: "大阪府大阪市中央区东心斋桥1-14-15 Ars大厦4F",
    footer_copyright: "© 鮨し禅 All rights reserved.",
  },
};

function setMetaContent(selector, value) {
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

function reorderInformationLayout(lang) {
  const mainInfoList = document.querySelector(".section__information .group1 .info__list");
  const mainOrder = lang === "en"
    ? ["access_dt", "address_dt", "hours_dt", "seats_dt", "payment_dt", "smoking_dt", "phone_dt", "closed_dt"]
    : ["hours_dt", "closed_dt", "phone_dt", "address_dt", "access_dt", "seats_dt", "smoking_dt", "payment_dt"];
  reorderDefinitionList(mainInfoList, mainOrder);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ja;

  document.documentElement.lang = dict.lang;
  document.title = dict.title;
  setMetaContent("#metaDescription", dict.description);
  setMetaContent("#metaKeywords", dict.keywords);
  setMetaContent("#metaOgTitle", dict.ogTitle);
  setMetaContent("#metaOgDescription", dict.ogDescription);
  setMetaContent("#metaOgSiteName", dict.ogSiteName);

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

  document.querySelectorAll(".language-switcher__button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  reorderInformationLayout(lang);

  localStorage.setItem(STORAGE_KEY, lang);
}

function detectBrowserLanguage() {
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

function getInitialLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) {
    return stored;
  }
  return detectBrowserLanguage();
}

function initializeScrollReveal() {
  const targets = document.querySelectorAll("main > section, main > article, footer .content__footer");
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
  const initialLanguage = getInitialLanguage();
  applyLanguage(initialLanguage);
  initializeScrollReveal();

  document.querySelectorAll(".language-switcher__button").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
    });
  });
});
