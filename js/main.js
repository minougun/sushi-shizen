const STORAGE_KEY = "sushi-zen-language";

const REVIEW_DEFAULTS = {
  google: {
    rating: 4.8,
    decimals: 1,
    url:
      "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%9D%B1%E5%BF%83%E6%96%8E%E6%A9%8B1-14-15%20%E3%82%A2%E3%83%AB%E3%82%B9%E3%83%93%E3%83%AB%204F",
  },
  tabelog: {
    rating: 3.72,
    decimals: 2,
    url: "https://tabelog.com/osaka/A2701/A270201/27152697/",
  },
};

const REVIEW_REFRESH_MS = 10 * 60 * 1000;

const TABLECHECK_URLS = {
  ja: "https://www.tablecheck.com/ja/sushi-zen/reserve/message",
  en: "https://www.tablecheck.com/en/sushi-zen/reserve/message",
  ko: "https://www.tablecheck.com/ko/sushi-zen/reserve/message",
  zh: "https://www.tablecheck.com/zh/sushi-zen/reserve/message",
};

/** @param {string} host */
function isAllowedGoogleMapsHost(host) {
  const h = host.toLowerCase();
  if (h === "google.com" || h.endsWith(".google.com")) return true;
  if (h === "google.co.jp" || h.endsWith(".google.co.jp")) return true;
  if (h === "maps.app.goo.gl" || h === "goo.gl" || h.endsWith(".goo.gl")) return true;
  if (h === "g.page" || h.endsWith(".g.page")) return true;
  return false;
}

/** @param {string} host */
function isAllowedTabelogHost(host) {
  const h = host.toLowerCase();
  return h === "tabelog.com" || h.endsWith(".tabelog.com");
}

/** @param {string} host */
function isAllowedTablecheckHost(host) {
  const h = host.toLowerCase();
  return h === "tablecheck.com" || h.endsWith(".tablecheck.com");
}

/**
 * @param {string} raw
 * @param {string} fallback
 * @param {"google"|"tabelog"|"tablecheck"} kind
 */
function sanitizeExternalHttpsUrl(raw, fallback, kind) {
  if (typeof raw !== "string" || !raw.trim()) {
    return fallback;
  }
  let u;
  try {
    u = new URL(raw);
  } catch {
    return fallback;
  }
  if (u.protocol !== "https:") {
    return fallback;
  }
  if (u.username || u.password) {
    return fallback;
  }
  const h = u.hostname.toLowerCase();
  if (kind === "google" && !isAllowedGoogleMapsHost(h)) {
    return fallback;
  }
  if (kind === "tabelog" && !isAllowedTabelogHost(h)) {
    return fallback;
  }
  if (kind === "tablecheck" && !isAllowedTablecheckHost(h)) {
    return fallback;
  }
  return u.href;
}

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
    language_switcher_caption: "Language 言語",
    maps_primary_cta: "Google Mapsで道順を開く",
    access_exit_hint: "心斎橋駅から徒歩約5分・アルスビル4階",
    hero_eyebrow: "大阪・福島 / 18:00〜翌3:00（L.O. 2:00）",
    logo_text: "鮨し禅",
    hero_lead: "旬、温度、間<br>その日の一貫と向き合う10席のカウンター",
    hero_summary: "完全予約制・カウンター10席。心斎橋駅から徒歩5分。",
    booking_aria_label: "TableCheckで予約する",
    booking_card_label: "公式オンライン予約",
    hero_cta_secondary: "店舗情報を見る",
    hero_link_map: "Google Mapsで場所を見る",
    hero_link_call: "電話で確認する",
    hero_link_hours: "営業時間を確認する",
    reserve_meta: "夜のおまかせ ¥16,000〜¥18,000（税込）・飲み放題付き / 完全予約制",
    hero_trust_1: "完全予約制・10席のカウンター",
    hero_trust_2: "心斎橋駅から徒歩5分",
    hero_trust_3: "全席禁煙・キャッシュレス対応",
    hero_phone_note: "当日のお問い合わせはお電話で",
    hero_quick_1: "心斎橋駅から徒歩5分",
    hero_quick_2: "カード・Alipay・WeChat Pay対応",
    hero_quick_3: "カウンター10席のみ",
    hero_alt: "鮨し禅｜大阪心斎橋の隠れ家鮨",
    gallery_label: "鮨し禅の料理写真",
    slide_1_alt: "おまかせの握り盛り合わせ",
    slide_2_alt: "季節の食材を用いた一皿",
    slide_3_alt: "職人の技を表現した一皿",
    slide_4_alt: "雲丹とトリュフを添えた一皿",
    nav_chef: "大将",
    nav_committed: "こだわり",
    nav_course: "コース",
    nav_reserve: "ご予約",
    nav_information: "ご案内",
    concept_image_alt: "鮨し禅のカウンター",
    about_title: "鮨し禅について",
    about_text:
      "東心斎橋の路地にある、カウンター10席の鮨店です。<br>旬の食材を、おまかせで静かに味わっていただきます。",
    craft_image_alt: "鮨し禅の床の間と設え",
    thought_title: "鮨し禅の想い",
    thought_text:
      "鮨し禅が目指すのは、華美な演出ではなく、削ぎ落とした先にだけ宿る本質の美です。<br>一貫の温度、口へ運ぶまでの間、香りの立ち上がり、余韻の消え方。<br>そのすべてが静かに調和してこそ、鮨は深く心に残るものになると考えています。<br><br>道頓堀という街の賑わいの中にありながら、店内に一歩足を踏み入れた瞬間、空気がやわらぎ、心が整っていく。<br>鮨し禅は、そんな静けさを味わっていただくための場所です。<br>喧騒からわずかに距離を置き、落ち着いた会話とともに鮨を味わい、酒を傾ける。<br>その何気ないひとときが、かけがえのない時間になるよう、一席一席を丁寧に整えています。<br><br>私たちが大切にしているのは、素材そのものの力を見極め、職人の手仕事によってその魅力を最も美しく引き出すこと。<br>過度に飾ることなく、しかし細部に一切妥協せず、器、所作、間、空間に至るまで、静かな緊張感をもって積み重ねる。<br>そうして生まれる一貫には、派手さでは語れない品格が宿ると信じています。<br><br>鮨し禅は、ただ食事をするための店ではありません。<br>鮨と酒を愉しみながら、感覚を澄ませ、心をほどき、自分自身を静かに満たしていく。<br>この場所で過ごす時間そのものが、上質であること。<br>それこそが、鮨し禅の目指すもてなしです。",
    chef_image_alt: "大将 抑野和彦",
    chef_label: "大将",
    chef_name: "抑野 和彦（そもの かずひこ）",
    chef_cred:
      "数々の名店で研鑽を積み、ミシュラン星付きの日本料理店や著名な寿司店でも豊富な経験を重ねてきた職人、抑野和彦。",
    chef_text:
      "日本料理で培った繊細な技術と、寿司の世界で磨き上げた感性を併せ持ち、その一皿には長年の修業でしか辿り着けない深みが宿ります。<br><br>華やかな経歴に裏打ちされた確かな技。だけど抑野が本当に大切にしているのは、目の前のお客様に、今日この瞬間だけの感動を届けること。素材、季節、温度、空気感、そのすべてに心を配りながら、一貫一皿に誠実な仕事を重ねています。<br><br>基本に忠実に、しかし型にはまらず。経験に裏打ちされた揺るぎない技と、一期一会を大切にする心で、記憶に残るひとときを生み出します。",
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
      "鮨し禅の夜のおまかせは、フリードリンク付きの2コースです。その日の旬の食材で仕立てる逸品料理と握りを、おまかせでお楽しみください。",
    course_tier_af: "アルコールフリードリンク付き（税込）",
    course_tier_soft: "ソフトドリンクフリードリンク付き（税込）",
    lunch_label: "ランチ",
    lunch_note: "土・日・祝 12:00〜（前日までの予約制）",
    course_image_alt: "おまかせコース",
    reserve_title_main: "ご予約",
    reserve_title_sub: "ご予約案内",
    reserve_call_note: "当日の空席確認はお電話で承ります",
    reserve_button: "TableCheckで予約する",
    reserve_link_map: "Google Mapsで場所を見る",
    reserve_link_hours: "営業時間を確認する",
    concept_card_1_title: "温度で魅せる",
    concept_card_1_text: "温度まで繊細に演出し、一口の輪郭を整えます。",
    concept_card_2_title: "過度に飾らない",
    concept_card_2_text: "飾りすぎず、素材の美しさを前に出します。",
    concept_card_3_title: "会話も一皿のうち",
    concept_card_3_text: "季節と酒も、簡潔にご案内します。",
    reserve_support_1: "心斎橋駅から徒歩5分",
    reserve_support_2: "全席禁煙",
    reserve_support_3: "カード・電子マネー・QR決済対応",
    reserve_policy_note: "ご予約の変更・キャンセルは前日までにご連絡ください。当日は100%を頂戴します。",
    info_title_main: "ご案内",
    info_title_sub: "店舗のご案内",
    info_summary: "心斎橋駅から徒歩5分。完全予約制・カウンター10席・各種キャッシュレス決済対応です。",
    hours_dt: "営業時間",
    phone_dt: "電話番号",
    address_dt: "住所",
    address_access_dd:
      '<span class="address__line">大阪府大阪市中央区東心斎橋1-14-15 アルスビル 4F</span><br><span class="address__subline">心斎橋駅 徒歩5分</span>',
    hours_short_dd: "夜 18:00〜20:00 / 20:30〜23:00<br>土日祝ランチ 12:00〜（前日予約制）",
    payment_dt: "支払い方法",
    payment_short_dd: "カード / 電子マネー / QR決済（Alipay・WeChat Pay対応）",
    map_frame_title: "鮨し禅 地図 大阪市中央区東心斎橋1-14-15",
    info_booking_flow:
      "ご予約は TableCheck で、ご希望の夕方の時間帯をお選びください。",
    floating_reserve_label: "クイック予約",
    floating_call: "電話",
    floating_reserve: "今すぐ予約",
    sp_sitebar_reserve: "予約する",
    sp_menu_aria_open: "メニューを開く",
    sp_menu_aria_close: "メニューを閉じる",
    site_nav_aria: "サイト内メニュー",
    footer_name: "鮨し禅",
    footer_address:
      '<span class="address__line">大阪府大阪市中央区東心斎橋1-14-15 アルスビル 4F</span>',
    tablecheck_url: TABLECHECK_URLS.ja,
    footer_copyright: "© 鮨し禅 All rights reserved.",
  },
  en: {
    lang: "en",
    title: "Sushi Zen | Shinsaibashi, Osaka",
    description:
      "Sushi Zen is a 10-seat omakase counter in Higashi-Shinsaibashi, Osaka, a 5-minute walk from Shinsaibashi Station.",
    keywords: "Sushi Zen, Shinsaibashi, Osaka, sushi, omakase, reservation",
    ogTitle: "Sushi Zen | Shinsaibashi, Osaka",
    ogDescription:
      "A 10-seat omakase counter in Higashi-Shinsaibashi, Osaka.",
    ogSiteName: "Sushi Zen",
    language_switcher_label: "Language selector",
    language_switcher_caption: "Language",
    maps_primary_cta: "Open directions in Google Maps",
    access_exit_hint: "~5 min walk from Shinsaibashi Station · 4F Ars Building",
    hero_eyebrow: "Osaka Fukushima / 6:00 PM-3:00 AM (L.O. 2:00 AM)",
    logo_text: "Sushi Zen",
    hero_lead:
      "Season, temperature, timing.<br>A 10-seat counter to savor that day's omakase.",
    hero_summary: "Reservation required. 5 minutes from Shinsaibashi Station.",
    booking_aria_label: "Reserve on TableCheck",
    booking_card_label: "Official Reservation",
    hero_cta_secondary: "View Access & Hours",
    hero_link_map: "Open in Google Maps",
    hero_link_call: "Call the restaurant",
    hero_link_hours: "Check access & hours",
    reserve_meta: "Evening omakase JPY 16,000–18,000 (incl. tax) with free-flow drinks / reservations required",
    hero_trust_1: "Reservation only / 10 counter seats",
    hero_trust_2: "5 minutes from Shinsaibashi Station",
    hero_trust_3: "Non-smoking / cards and QR accepted",
    hero_phone_note: "Call for same-day inquiries",
    hero_quick_1: "5 min from Shinsaibashi Station",
    hero_quick_2: "Cards, Alipay & WeChat Pay accepted",
    hero_quick_3: "Only 10 counter seats",
    hero_alt: "Sushi Zen hidden sushi counter in Osaka Shinsaibashi",
    gallery_label: "Photo gallery of Sushi Zen dishes",
    slide_1_alt: "Selection of omakase nigiri",
    slide_2_alt: "Seasonal dish prepared with fresh ingredients",
    slide_3_alt: "A plate expressing the chef's craftsmanship",
    slide_4_alt: "Sea urchin and truffle on sushi rice in a ceramic bowl",
    nav_chef: "Chef",
    nav_committed: "Our Craft",
    nav_course: "Course",
    nav_reserve: "Reservation",
    nav_information: "Access & Hours",
    concept_image_alt: "Sushi Zen counter interior",
    about_title: "About Sushi Zen",
    about_text:
      "A ten-seat counter tucked into Higashi-Shinsaibashi.<br>One omakase course, served in a calm, unhurried rhythm.",
    craft_image_alt: "Tokonoma and interior details at Sushi Zen",
    thought_title: "Our Philosophy",
    thought_text:
      "At Sushi Zen, we pursue not theatrical flourish, but an essential beauty found only after everything unnecessary is stripped away—the temperature of each piece, the moment before it reaches your lips, how aroma rises, how the finish fades.<br>We believe sushi lingers in memory only when all of these quietly harmonize.<br><br>Amid the bustle of Dotonbori, the air softens the moment you step inside; your mind steadies.<br>Sushi Zen exists for you to savor that stillness.<br>A slight distance from the noise, with calm conversation, sushi, and sake—we tend each seat so those unassuming moments become time you cannot replace.<br><br>What we cherish is reading each ingredient on its own terms and drawing out its beauty through the craftsman's hands—never overdressed, yet never slack in the details: vessels, gesture, rhythm, and space, layered with a quiet tension.<br>We trust the pieces born from that carry a grace no spectacle can explain.<br><br>Sushi Zen is not merely a place to dine.<br>While you enjoy sushi and sake, your senses clear, your mind loosens, and you fill yourself in stillness.<br>That the hours spent here are, in themselves, refined—this is the hospitality we mean to offer.",
    chef_image_alt: "Chef Kazuhiko Somono",
    chef_label: "Chef",
    chef_name: "Kazuhiko Somono",
    chef_cred: "Trained at Michelin-starred kaiseki and renowned sushi restaurants, Chef Kazuhiko Somono brings decades of refined technique to his 10-seat counter.",
    chef_text:
      "His craft blends the precision of kaiseki with the intuition of sushi. Each course is built around the day's finest ingredients, served with measured timing.<br><br>The experience stays refined, intimate, and never formal for its own sake. At Sushi Zen, every piece reflects years of discipline and a genuine desire to make each visit memorable.",
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
      "Our evening omakase is offered as two courses, each with a free-flow drink package. Enjoy seasonal small plates and nigiri in a fully chef-led menu.",
    course_tier_af: "With alcohol-free free-flow drinks (tax included)",
    course_tier_soft: "With soft-drink free-flow (tax included)",
    lunch_label: "Lunch",
    lunch_note: "Lunch from 12:00 on weekends and holidays, by reservation the day before",
    course_image_alt: "Omakase course visual",
    reserve_title_main: "Reservation",
    reserve_title_sub: "TableCheck",
    reserve_call_note: "For same-day availability, please call us directly.",
    reserve_button: "Reserve on TableCheck",
    reserve_link_map: "Open in Google Maps",
    reserve_link_hours: "Check access & hours",
    concept_card_1_title: "Built around temperature",
    concept_card_1_text: "Temperature is tuned to sharpen each bite.",
    concept_card_2_title: "Never overdressed",
    concept_card_2_text: "The ingredient stays at the center.",
    concept_card_3_title: "Conversation is part of the course",
    concept_card_3_text: "Season and sake are explained simply.",
    reserve_support_1: "Five minutes from Shinsaibashi Station",
    reserve_support_2: "A quiet non-smoking counter",
    reserve_support_3: "Cards, Alipay, WeChat Pay, and QR accepted",
    reserve_policy_note: "For changes or cancellations, please contact us by the day before. Same-day cancellations are charged in full.",
    info_title_main: "Information",
    info_title_sub: "Access & Hours",
    info_summary:
      "Five minutes from Shinsaibashi. Ten counter seats. Cashless payments accepted.",
    hours_dt: "Hours",
    phone_dt: "Phone",
    address_dt: "Address",
    address_access_dd:
      '<span class="address__line">4F Ars Building, 1-14-15 Higashi-Shinsaibashi, Chuo-ku, Osaka</span><br><span class="address__subline">5 min walk from Shinsaibashi Station</span>',
    hours_short_dd: "Dinner 18:00–20:00 / 20:30–23:00<br>Weekend lunch from 12:00 (book by the previous day)",
    payment_dt: "Payment",
    payment_short_dd: "Cards / E-money / QR payments (Alipay & WeChat Pay accepted)",
    map_frame_title: "Map of Sushi Zen, Higashi-Shinsaibashi, Osaka",
    info_booking_flow:
      "On TableCheck, choose the dinner seating time that fits your schedule.",
    floating_reserve_label: "Quick reservation",
    floating_call: "Call",
    floating_reserve: "Reserve now",
    sp_sitebar_reserve: "Reserve",
    sp_menu_aria_open: "Open menu",
    sp_menu_aria_close: "Close menu",
    site_nav_aria: "Site menu",
    footer_name: "鮨し禅",
    footer_address:
      '<span class="address__line">4F Ars Building, 1-14-15 Higashi-Shinsaibashi, Chuo-ku, Osaka</span>',
    tablecheck_url: TABLECHECK_URLS.en,
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
    language_switcher_caption: "언어 Language",
    maps_primary_cta: "Google 지도에서 길 찾기",
    access_exit_hint: "신사이바시역 도보 약 5분 · 아루스빌딩 4층",
    hero_eyebrow: "오사카 후쿠시마 / 18:00~익일 3:00 (L.O. 2:00)",
    logo_text: "鮨し禅",
    hero_lead:
      "제철, 온도, 타이밍.<br>그날의 한 점과 마주하는 10석 카운터.",
    hero_summary: "완전 예약제, 카운터 10석, 신사이바시역 도보 5분.",
    booking_aria_label: "TableCheck에서 예약하기",
    booking_card_label: "공식 온라인 예약",
    hero_cta_secondary: "매장 정보 보기",
    hero_link_map: "Google 지도에서 위치 보기",
    hero_link_call: "전화로 문의하기",
    hero_link_hours: "영업시간 보기",
    reserve_meta: "저녁 오마카세 ¥16,000~¥18,000(세금 포함)·음료 무제한 포함 / 완전 예약제",
    hero_trust_1: "완전 예약제 / 카운터 10석",
    hero_trust_2: "신사이바시역 도보 5분",
    hero_trust_3: "전석 금연 / 카드·QR 결제 가능",
    hero_phone_note: "당일 문의는 전화로 가능합니다",
    hero_quick_1: "신사이바시역 도보 5분",
    hero_quick_2: "카드·Alipay·WeChat Pay 가능",
    hero_quick_3: "카운터 10석만 운영",
    hero_alt: "오사카 신사이바시의 스시 시젠",
    gallery_label: "스시 시젠 요리 사진",
    slide_1_alt: "오마카세 니기리 모둠",
    slide_2_alt: "제철 식재료를 사용한 한 접시",
    slide_3_alt: "장인의 기술을 표현한 한 접시",
    slide_4_alt: "성게알과 트러플을 얹은 한 접시",
    nav_chef: "대장",
    nav_committed: "철학",
    nav_course: "코스",
    nav_reserve: "예약",
    nav_information: "안내",
    concept_image_alt: "스시 시젠 카운터",
    about_title: "스시 시젠 소개",
    about_text:
      "히가시신사이바시 골목 안쪽에 자리한 카운터 10석의 스시야입니다.<br>제철 식재료를 오마카세로 차분히 즐기실 수 있습니다.",
    craft_image_alt: "스시 시젠의 도코노마와 공간 디테일",
    thought_title: "스시 시젠의 마음",
    thought_text:
      "스시 시젠이 지향하는 것은 화려한 연출이 아니라, 불필요한 것을 덜어낸 끝에만 머무는 본질의 아름다움입니다.<br>한 점의 온도, 입에 닿기까지의 간격, 향이 피어오르는 방식, 여운이 사라지는 방식.<br>이 모든 것이 고요히 어우러질 때 비로소 스시는 깊이 마음에 남는다고 믿습니다.<br><br>도톤보리의 번잡 속에 있으면서도, 가게 안으로 한 걸음 들어서는 순간 공기가 부드러워지고 마음이 가라앉습니다.<br>스시 시젠은 그런 고요함을 느끼실 수 있는 곳입니다.<br>소란과 약간의 거리를 두고, 차분한 대화와 함께 스시와 술을 즐기시는, 그 평범해 보이는 순간들이 대체 불가한 시간이 되도록 한 석 한 석을 정성껏 준비합니다.<br><br>우리가 중시하는 것은 재료 자체의 힘을 꿰뚫어 보고, 장인의 손길로 그 매력을 가장 아름답게 끌어내는 일입니다.<br>과하게 꾸미지 않되, 세부에는 한 치의 타협도 없이 그릇, 동작, 간, 공간에 이르기까지 고요한 긴장감을 쌓아 올립니다.<br>그렇게 태어난 한 점에는 화려함으로는 말할 수 없는 품격이 깃든다고 믿습니다.<br><br>스시 시젠은 단순히 식사를 하는 가게가 아닙니다.<br>스시와 술을 즐기는 동안 감각을 맑게 하고, 마음을 풀고, 조용히 스스로를 채워 가는 곳.<br>이곳에서 보내는 시간 그 자체가 고급스러운 것.<br>그것이 바로 스시 시젠이 지향하는 환대입니다.",
    chef_image_alt: "대장 소모노 카즈히코",
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
      "스시 시젠의 저녁 오마카세는 프리 드링크가 포함된 2가지 코스입니다. 그날의 제철 식재료로 차리는 일품 요리와 니기리를 오마카세로 즐기실 수 있습니다.",
    course_tier_af: "논알코올 프리 드링크 포함(세금 포함)",
    course_tier_soft: "소프트드링크 프리 드링크 포함(세금 포함)",
    lunch_label: "런치",
    lunch_note: "토·일·공휴일 12:00부터, 전날까지 예약 필수",
    course_image_alt: "오마카세 코스 이미지",
    reserve_title_main: "예약",
    reserve_title_sub: "예약 안내",
    reserve_call_note: "당일 빈자리 문의는 전화로 부탁드립니다",
    reserve_button: "TableCheck에서 예약하기",
    reserve_link_map: "Google 지도에서 위치 보기",
    reserve_link_hours: "영업시간 보기",
    concept_card_1_title: "온도로 완성한다",
    concept_card_1_text: "온도까지 설계해 한 점의 윤곽을 정돈합니다.",
    concept_card_2_title: "과하게 꾸미지 않는다",
    concept_card_2_text: "재료의 아름다움을 앞에 둡니다.",
    concept_card_3_title: "대화도 한 접시의 일부",
    concept_card_3_text: "계절과 술도 짧고 정확하게 안내합니다.",
    reserve_support_1: "신사이바시역에서 도보 5분",
    reserve_support_2: "전석 금연",
    reserve_support_3: "카드·전자화폐·QR 결제 가능",
    reserve_policy_note: "변경 및 취소는 전날까지 연락 부탁드립니다. 당일 취소는 100%가 청구됩니다.",
    info_title_main: "안내",
    info_title_sub: "매장 정보",
    info_summary: "신사이바시역 도보 5분. 완전 예약제 10석 카운터이며 카드·전자머니·QR 결제가 가능합니다.",
    hours_dt: "영업시간",
    phone_dt: "전화번호",
    address_dt: "주소",
    address_access_dd:
      '<span class="address__line">오사카부 오사카시 주오구 히가시신사이바시 1-14-15 아루스빌딩 4F</span><br><span class="address__subline">신사이바시역 도보 5분</span>',
    hours_short_dd: "저녁 18:00–20:00 / 20:30–23:00<br>토·일·공휴일 런치 12:00부터 (전날 예약 필수)",
    payment_dt: "결제 방법",
    payment_short_dd: "카드 / 전자화폐 / QR 결제 (Alipay·WeChat Pay 가능)",
    map_frame_title: "오사카 히가시신사이바시 스시 시젠 지도",
    info_booking_flow:
      "TableCheck에서 희망하는 저녁 시간대를 선택해 주세요.",
    floating_reserve_label: "빠른 예약",
    floating_call: "전화",
    floating_reserve: "지금 예약",
    sp_sitebar_reserve: "예약",
    sp_menu_aria_open: "메뉴 열기",
    sp_menu_aria_close: "메뉴 닫기",
    site_nav_aria: "사이트 메뉴",
    footer_name: "鮨し禅",
    footer_address:
      '<span class="address__line">오사카부 오사카시 주오구 히가시신사이바시 1-14-15 아루스빌딩 4F</span>',
    tablecheck_url: TABLECHECK_URLS.ko,
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
    language_switcher_caption: "语言 Language",
    maps_primary_cta: "在 Google 地图中打开路线",
    access_exit_hint: "距心斋桥站步行约5分钟 · Ars大厦4楼",
    hero_eyebrow: "大阪・福岛 / 18:00~翌日3:00（L.O. 2:00）",
    logo_text: "鮨し禅",
    hero_lead: "时令、温度、分寸。<br>与当天每一贯相对的10席吧台。",
    hero_summary: "完全预约制，仅设10个柜台席位，距心斋桥站步行5分钟。",
    booking_aria_label: "在 TableCheck 预约",
    booking_card_label: "官方在线预约",
    hero_cta_secondary: "查看店铺信息",
    hero_link_map: "在 Google Maps 中查看位置",
    hero_link_call: "电话联系店铺",
    hero_link_hours: "查看营业时间",
    reserve_meta: "晚间主厨推荐 ¥16,000〜¥18,000（含税）含畅饮 / 完全预约制",
    hero_trust_1: "完全预约制 / 仅10席吧台",
    hero_trust_2: "距心斋桥站步行5分钟",
    hero_trust_3: "全店禁烟 / 支持卡与二维码支付",
    hero_phone_note: "当日咨询请直接致电",
    hero_quick_1: "距心斋桥站步行5分钟",
    hero_quick_2: "支持银行卡、Alipay 与 WeChat Pay",
    hero_quick_3: "仅设10席吧台",
    hero_alt: "大阪心斋桥的鮨し禅",
    gallery_label: "鮨し禅料理照片",
    slide_1_alt: "主厨推荐握寿司拼盘",
    slide_2_alt: "使用时令食材的一道料理",
    slide_3_alt: "展现匠人手艺的一道料理",
    slide_4_alt: "海胆与松露点缀的一碟料理",
    nav_chef: "大将",
    nav_committed: "讲究",
    nav_course: "套餐",
    nav_reserve: "预约",
    nav_information: "店铺信息",
    concept_image_alt: "鮨し禅的吧台空间",
    about_title: "关于鮨し禅",
    about_text:
      "鮨し禅位于东心斋桥的小巷中，仅设10席吧台。<br>以主厨推荐的方式，安静呈现当季食材。",
    craft_image_alt: "鮨し禅的床之间与空间细节",
    thought_title: "鮨し禅的理念",
    thought_text:
      "鮨し禅所追求的，不是华丽的表演，而是删繁就简之后才能留存的本真之美。<br>一贯的温度、送入口前的那一段距离、香气的升起、余韵的消散。<br>我们相信，唯有当这一切在静谧中彼此调和，寿司才能真正留在心底。<br><br>身处道顿堀的喧嚣之中，踏入店内的一刻，空气会柔和下来，心绪也随之沉静。<br>鮨し禅，正是为了让您品味这样的静谧而存在。<br>与嘈杂保持一点距离，在从容的交谈中品尝寿司、小酌美酒；我们细心布置每一席，愿那些看似平常的时光，成为无可替代的记忆。<br><br>我们所珍视的，是读懂每一种食材本身的力量，并以匠人之手将其魅力最优美地呈现。<br>不过度装饰，却在细节上绝不妥协——从器物、动作、节奏到空间，都以克制的张力层层叠加。<br>我们相信，由此诞生的一贯，承载着语言难以形容的品格。<br><br>鮨し禅不只是用餐的场所。<br>在享受寿司与酒的同时，让感官澄明、心绪舒展，在安静中被温柔填满。<br>在这里度过的时光本身，就是上好的体验。<br>这正是鮨し禅所追求的款待。",
    chef_image_alt: "大将抑野和彦",
    chef_label: "大将",
    chef_name: "抑野和彦",
    chef_cred: "在东心斋桥的10席吧台，安静地把当天最佳状态呈现给客人的大将。",
    chef_text:
      "大将抑野和彦会细致拿捏温度与出餐节奏，呈现当天最好的一贯。<br>希望带来低调却令人难忘的用餐体验。",
    commitment_title: "鮨し禅的坚持",
    commitment_copy:
      "我们重视醋饭、醋、酱油、山葵与食材达到平衡的那一刻。",
    shari_title: "对醋饭的讲究",
    rice_alt: "醋饭",
    rice_badge: "醋饭",
    rice_text:
      "严选米种并精心调配，以恰到好处的温度与握法呈现，让醋饭更好地衬托食材本身的鲜味。",
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
      "使用新鲜现磨山葵，并根据食材调整香气与用量，带来更协调清爽的整体感。",
    fish_alt: "时令食材",
    fish_title: "讲究食材",
    fish_text:
      "从日本各地可信赖的渠道直送时令海鲜，以新鲜度与精准处理呈现每一口的纯净旨味。",
    course_title_primary: "推荐套餐",
    course_title_sub: "Omakase Course",
    course_intro:
      "鮨し禅的晚间主厨推荐提供两种含畅饮套餐。请以主厨搭配，品尝以当日时令食材呈现的料理与握寿司。",
    course_tier_af: "含无酒精类饮品畅饮（含税）",
    course_tier_soft: "含软饮畅饮（含税）",
    lunch_label: "午餐",
    lunch_note: "周六、周日及节假日 12:00 起，需至少提前一天预约",
    course_image_alt: "主厨推荐套餐视觉图",
    reserve_title_main: "预约",
    reserve_title_sub: "预约说明",
    reserve_call_note: "如需确认当日空位，请直接来电",
    reserve_button: "在 TableCheck 预约",
    reserve_link_map: "在 Google Maps 中查看位置",
    reserve_link_hours: "查看营业时间",
    concept_card_1_title: "以温度取胜",
    concept_card_1_text: "连温度也经过设计，让一口更完整。",
    concept_card_2_title: "不过度装饰",
    concept_card_2_text: "把食材本身放在最前面。",
    concept_card_3_title: "对话也是一道菜",
    concept_card_3_text: "季节与酒也会简洁说明。",
    reserve_support_1: "距心斋桥站步行5分钟",
    reserve_support_2: "全店禁烟",
    reserve_support_3: "支持信用卡、电子货币与二维码支付",
    reserve_policy_note: "如需变更或取消预约，请最迟于前一天联系。当日取消将收取100%费用。",
    info_title_main: "店铺信息",
    info_title_sub: "店铺信息",
    info_summary: "距心斋桥站步行5分钟。完全预约制、仅10席吧台，并支持多种无现金支付方式。",
    hours_dt: "营业时间",
    phone_dt: "电话",
    address_dt: "地址",
    address_access_dd:
      '<span class="address__line">大阪府大阪市中央区东心斋桥1-14-15 Ars大厦4F</span><br><span class="address__subline">距心斋桥站步行5分钟</span>',
    hours_short_dd: "晚间 18:00–20:00 / 20:30–23:00<br>周末及节假日午餐 12:00起（需提前一天预约）",
    payment_dt: "支付方式",
    payment_short_dd: "信用卡 / 电子货币 / 二维码支付（支持支付宝·微信支付）",
    map_frame_title: "大阪东心斋桥鮨し禅地图",
    info_booking_flow: "请在 TableCheck 上选择您方便的晚餐时段。",
    floating_reserve_label: "快捷预约",
    floating_call: "电话",
    floating_reserve: "立即预约",
    sp_sitebar_reserve: "预约",
    sp_menu_aria_open: "打开菜单",
    sp_menu_aria_close: "关闭菜单",
    site_nav_aria: "网站菜单",
    footer_name: "鮨し禅",
    footer_address:
      '<span class="address__line">大阪府大阪市中央区东心斋桥1-14-15 Ars大厦4F</span>',
    tablecheck_url: TABLECHECK_URLS.zh,
    footer_copyright: "© 鮨し禅 All rights reserved.",
  },
};

function setMetaContent(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute("content", value);
  }
}

function setTranslatedHtml(node, html) {
  if (window.DOMPurify && typeof window.DOMPurify.sanitize === "function") {
    node.innerHTML = window.DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
    });
    return;
  }
  console.warn("DOMPurify not loaded; i18n HTML left unsanitized.");
  node.innerHTML = html;
}

function syncLangQueryParam(lang) {
  if (!translations[lang]) {
    return;
  }
  try {
    const u = new URL(window.location.href);
    u.searchParams.set("lang", lang);
    history.replaceState({}, "", `${u.pathname}${u.search}${u.hash}`);
  } catch (_) {
    /* ignore */
  }
}

function getCurrentLangFromDom() {
  const raw = (document.documentElement.getAttribute("lang") || "ja").toLowerCase();
  if (raw.startsWith("zh")) return "zh";
  if (raw === "ko") return "ko";
  if (raw === "en") return "en";
  return "ja";
}

function syncSpNavMenuAria() {
  const btn = document.getElementById("spNavMenuBtn");
  if (!btn) return;
  const lang = getCurrentLangFromDom();
  const dict = translations[lang] || translations.ja;
  const open = document.body.classList.contains("sp-nav-is-open");
  btn.setAttribute("aria-expanded", String(open));
  const label = open ? dict.sp_menu_aria_close : dict.sp_menu_aria_open;
  if (label) btn.setAttribute("aria-label", label);
}

function initializeSpOyajiNav() {
  const btn = document.getElementById("spNavMenuBtn");
  const nav = document.getElementById("siteNav");
  if (!btn || !nav) return;

  function setOpen(open) {
    const on = Boolean(open);
    document.body.classList.toggle("sp-nav-is-open", on);
    document.body.style.overflow = on ? "hidden" : "";
    syncSpNavMenuAria();
  }

  btn.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("sp-nav-is-open"));
  });

  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && typeof t.closest === "function" && t.closest("a[href]")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  });

  const mq = window.matchMedia("(max-width: 767px)");
  function onMq(ev) {
    if (!ev.matches) setOpen(false);
  }
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", onMq);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(onMq);
  }
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ja;
  const langCode = dict.lang || "ja";

  document.documentElement.lang = langCode;
  document.body.classList.remove("body__ja", "body__en", "body__ko", "body__zh", "body__jp");
  document.body.classList.add("body", `body__${langCode}`);
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
      setTranslatedHtml(node, dict[key]);
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

  // TableCheck links: set href from translation dict (allowlist hosts)
  if (dict.tablecheck_url) {
    const tcFallback = TABLECHECK_URLS[lang] || TABLECHECK_URLS.ja;
    const safeTc = sanitizeExternalHttpsUrl(dict.tablecheck_url, tcFallback, "tablecheck");
    document.querySelectorAll("[data-tablecheck]").forEach((link) => {
      link.href = safeTc;
    });
  }

  safeSetStorage(STORAGE_KEY, lang);
  syncLangQueryParam(lang);
  syncSpNavMenuAria();
}

function safeGetStorage(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}

function safeSetStorage(key, value) {
  try { localStorage.setItem(key, value); } catch (_) { /* storage unavailable */ }
}

function getInitialLanguage() {
  try {
    const raw = new URL(window.location.href).searchParams.get("lang");
    if (raw) {
      const q = raw.trim().toLowerCase();
      if (q === "jp") {
        if (translations.ja) return "ja";
      } else if (translations[q]) {
        return q;
      }
    }
  } catch (_) {
    /* ignore */
  }
  const boot = window.__SUSHI_ZEN_BOOT;
  if (boot && boot.lang && translations[boot.lang]) {
    return boot.lang;
  }
  const stored = safeGetStorage(STORAGE_KEY);
  if (stored && translations[stored]) {
    return stored;
  }
  return "ja";
}

function initializeScrollReveal() {
  const targets = document.querySelectorAll("main > section, main > article, footer .content__footer");
  if (targets.length === 0) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  targets.forEach((target, index) => {
    target.classList.add("scroll-reveal");
    if (reduceMotion) {
      target.classList.add("is-visible");
    } else if (index < 2) {
      target.classList.add("is-visible");
    }
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    if (!reduceMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
    }
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

  targets.forEach((target, index) => {
    if (index >= 2) {
      observer.observe(target);
    }
  });
}

function initializeHeroOrnamentMotion() {
  const ornament = document.querySelector(".hero-ornament--scroll");
  if (ornament) {
    ornament.style.transform = "none";
  };
}

function formatRating(value, decimals) {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    return "—";
  }
  return n.toFixed(decimals);
}

function parseRatingText(text) {
  const n = Number.parseFloat(String(text).replace(/[^\d.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function animateScoreElement(el, toValue, decimals, durationMs) {
  if (!el) {
    return;
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const to = Number(toValue);
  if (!Number.isFinite(to)) {
    el.textContent = "—";
    return;
  }
  if (reduce) {
    el.textContent = formatRating(to, decimals);
    return;
  }
  const from = parseRatingText(el.textContent);
  if (Math.abs(from - to) < 0.0005) {
    el.textContent = formatRating(to, decimals);
    return;
  }
  const start = performance.now();

  function easeOutCubic(t) {
    return 1 - (1 - t) ** 3;
  }

  function frame(now) {
    const t = Math.min(1, (now - start) / durationMs);
    const v = from + (to - from) * easeOutCubic(t);
    el.textContent = formatRating(v, decimals);
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      el.textContent = formatRating(to, decimals);
    }
  }

  requestAnimationFrame(frame);
}

function normalizeReviewPayload(data) {
  const fallback = {
    google: {
      rating: REVIEW_DEFAULTS.google.rating,
      url: REVIEW_DEFAULTS.google.url,
    },
    tabelog: {
      rating: REVIEW_DEFAULTS.tabelog.rating,
      url: REVIEW_DEFAULTS.tabelog.url,
    },
  };
  if (!data || typeof data !== "object") {
    return fallback;
  }
  const g = data.google;
  const t = data.tabelog;
  const googleRating =
    g && typeof g.rating === "number" ? g.rating : fallback.google.rating;
  const tabelogRating =
    t && typeof t.rating === "number" ? t.rating : fallback.tabelog.rating;
  const rawGoogleUrl = g && typeof g.url === "string" ? g.url : "";
  const rawTabelogUrl = t && typeof t.url === "string" ? t.url : "";
  return {
    google: {
      rating: googleRating,
      url: sanitizeExternalHttpsUrl(rawGoogleUrl, fallback.google.url, "google"),
    },
    tabelog: {
      rating: tabelogRating,
      url: sanitizeExternalHttpsUrl(rawTabelogUrl, fallback.tabelog.url, "tabelog"),
    },
  };
}

function getSiteBaseUrl() {
  const { origin, pathname } = window.location;
  if (pathname.endsWith("/")) {
    return `${origin}${pathname}`;
  }
  const dir = pathname.replace(/\/[^/]*$/, "/");
  return `${origin}${dir || "/"}`;
}

async function fetchReviewScoresPayload() {
  const base = getSiteBaseUrl();
  const bases = [
    new URL("api/review-scores", base).href,
    new URL("review-scores.json", base).href,
  ];
  for (let i = 0; i < bases.length; i += 1) {
    try {
      const r = await fetch(bases[i], { cache: "no-store" });
      if (!r.ok) {
        continue;
      }
      const ct = r.headers.get("content-type") || "";
      if (!ct.includes("json")) {
        continue;
      }
      const data = await r.json();
      return normalizeReviewPayload(data);
    } catch (_) {
      /* try next */
    }
  }
  return normalizeReviewPayload(null);
}

function applyReviewScoresToDom(payload) {
  const tabelogLink = document.getElementById("trust-tabelog-link");
  const googleEl = document.querySelector('[data-review-score="google"]');
  const tabelogEl = document.querySelector('[data-review-score="tabelog"]');
  if (!tabelogLink || !googleEl || !tabelogEl) {
    return;
  }

  const p = payload || normalizeReviewPayload({});
  const googleHref = sanitizeExternalHttpsUrl(
    p.google.url,
    REVIEW_DEFAULTS.google.url,
    "google"
  );
  const tabelogHref = sanitizeExternalHttpsUrl(
    p.tabelog.url,
    REVIEW_DEFAULTS.tabelog.url,
    "tabelog"
  );
  document.querySelectorAll("[data-google-maps-link]").forEach((el) => {
    el.href = googleHref;
  });
  tabelogLink.href = tabelogHref;

  const gDec = Number(googleEl.dataset.reviewDecimals) || 1;
  const tDec = Number(tabelogEl.dataset.reviewDecimals) || 2;
  animateScoreElement(googleEl, p.google.rating, gDec, 700);
  animateScoreElement(tabelogEl, p.tabelog.rating, tDec, 700);
}

function initializeReviewScores() {
  if (!document.querySelector('[data-review-score="google"]')) {
    return;
  }

  applyReviewScoresToDom(normalizeReviewPayload(null));

  let timerId = null;

  async function refresh() {
    const payload = await fetchReviewScoresPayload();
    applyReviewScoresToDom(payload);
  }

  refresh();
  timerId = window.setInterval(refresh, REVIEW_REFRESH_MS);

  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      refresh();
    }
  });

  return () => {
    if (timerId) {
      window.clearInterval(timerId);
    }
  };
}

/** 固定背景レイヤーをページ全体のスクロール量に連動して移動（視差）。 */
function initializePageBgParallax() {
  const layer = document.querySelector(".page-bg-parallax");
  if (!layer) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    layer.style.willChange = "auto";
    return;
  }

  const factor = 0.12;
  let ticking = false;

  function applyParallax() {
    ticking = false;
    const y = window.scrollY || window.pageYOffset || 0;
    layer.style.transform = `translate3d(0, ${y * factor}px, 0)`;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(applyParallax);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  applyParallax();
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = getInitialLanguage();
  applyLanguage(initialLanguage);
  initializeSpOyajiNav();
  initializeScrollReveal();
  initializeHeroOrnamentMotion();
  initializePageBgParallax();
  initializeReviewScores();

  document.querySelectorAll(".language-switcher__button").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
    });
  });

});
