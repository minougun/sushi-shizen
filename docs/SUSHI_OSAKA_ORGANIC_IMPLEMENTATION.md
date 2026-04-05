# SUSHI OSAKA Organic ランディングページ — 実装仕様書（ドラフト）

本書は、鮨し禅ベースの静的サイト雛形（`docs/SUSHI_SITE_TEMPLATE_GUIDE.md`）を用いて **SUSHI OSAKA Organic（寿司大阪オーガニック）** 向けランディングを実装する前の、要件整理・作業分解・確認事項のメモです。
実装フェーズに入る前に、店舗側で文言・予約 URL・写真の最終確定を行うことを前提とします。

---

## 1. 参照ドキュメント・ソース

| 種別 | URL / ローカルパス |
|------|---------------------|
| 雛形ガイド | Web: `https://github.com/minougun/sushi-shizen/blob/master/docs/SUSHI_SITE_TEMPLATE_GUIDE.md` / ローカル: `/mnt/c/Users/minou/sushi-shizen/docs/SUSHI_SITE_TEMPLATE_GUIDE.md` |
| テンプレートリポジトリ | `https://github.com/minougun/sushi-shizen` |
| 店舗情報（参考・要ファクトチェック） | `https://tabelog.com/osaka/A2701/A270108/27149380/` |

**注意:** 食べログの文章・口コミ・評価点数のそのままの転載は避け、**事実（住所・電話・営業時間など）と店舗が公式に掲げるコンセプト**を起点に、オリジナル文案で実装する。

---

## 2. プロジェクト方針（リポジトリ・ホスティング）

雛形ガイドの推奨どおり、次のいずれかを実装前に決める。

| 方針 | 内容 |
|------|------|
| **推奨** | GitHub で `sushi-shizen` を **別リポジトリとして複製**し、Vercel で **別プロジェクト** を作成して `vercel link` |
| 代替 | 同一リポジトリ内に `organic/` などサブディレクトリでサイトを持つ（デプロイ設定・ドメインが複雑になりやすい） |

> **[CRITICAL] リポジトリ複製時の安全手順:**
> 1. 複製後、`.vercel/project.json` を **必ず削除** する
> 2. `vercel link` で新しいプロジェクトとして紐付ける
> 3. 手順を怠ると `vercel deploy --prod` が **本番 sushi-zen を上書きする事故** になる

本番 URL・OGP・canonical は **確定ドメイン** が決まり次第、すべてその URL に揃える（ガイドのチェックリスト参照）。

---

## 3. 店舗ファクト（食べログ掲載ベース・実装前に店舗確認必須）

以下は 2026-04-06 時点の食べログ店舗ページから抽出した **たたき台**。価格・休業・喫煙・予約ポリシーは変更されやすいため、公開前に必ず店舗に確認する。

| 項目 | 内容（要確認） |
|------|----------------|
| 店名（英） | SUSHI OSAKA Organic |
| 店名（和） | 寿司大阪オーガニック |
| キャッチ（食べログ見出し） | 江戸前寿司と地鶏焼き鳥を愉しむ美食劇場 |
| 住所 | 大阪府大阪市福島区鷺洲2-10-4 |
| アクセス | JR環状線 福島駅 徒歩約5分（掲載上 約390m） |
| 電話 | 070-1009-1009 |
| ジャンル | 寿司・焼き鳥・居酒屋（掲載カテゴリ） |
| 営業時間（掲載） | 月・火・木・金・土・日・祝・祝前・祝後: 18:00–03:00 / **水曜 定休** |
| 臨時休業（掲載例） | 3/24（火）・4/14（火）臨時休業など **日付は都度更新** |
| 席 | 20席・一枚板の長いカウンター（掲載） |
| 予算帯（掲載） | 夜 ￥3,000〜￥3,999 など（分布表記あり） |
| 支払い | カード・交通系等・QR 決済（詳細は食べログ「店舗情報」相当） |
| 喫煙 | 分煙（加熱式たばこ限定）など ※法改正後の表記は公式確認 |
| 公式 Instagram | `https://www.instagram.com/sushiosaka_organic` |
| オープン日（掲載） | 2025-07-10 |

**コンテンツ上の差分（鮨し禅雛形との違い）**

- **おまかせ一択の高単価店**ではなく、アラカルト中心・寿司と焼鳥の併用・深夜帯など、**訴求軸が「オーガニック素材 × 江戸前 × 焼鳥」** に寄る。
- 席数・業態・喫煙ポリシーが雛形（10席・禁煙など）と一致しないため、ヒーロー周りの **trust バッジ・サマリー** を全面的に差し替える。

---

## 4. 情報設計（セクション対応）

雛形のセクション ID・ナビアンカー（`#reserveSection` `#courseSection` `#informationSection` `#chefSection` `#committedSection`）は **HTML の `id` と `nav` の `href` をセットで維持**する（ガイド記載どおり）。

| セクション（アンカー） | Organic 向けの想定内容 |
|------------------------|-------------------------|
| ヒーロー | 店名・福島/鷺洲エリア・「寿司＋焼鳥」「オーガニック」・予算感の一言（※断定しすぎない）・予約 CTA |
| ギャラリー（`section__slide_intro`） | 寿司・焼鳥・店内の4枚（著作権のある第三者写真は使わず、**店舗提供または撮影分**） |
| ご予約 `#reserveSection` | ネット予約・電話（070番号）・キャンセル規定の要約（食べログの予約欄記載を要約し公式確認） |
| コース `#courseSection` | 雛形は「おまかせコース」中心。**Organic では「アラカルト中心」** に変更。コースが無い場合は見出しを「メニュー」「おすすめの楽しみ方」等に変更し、**i18n キー名のリネームは `npm run check:i18n` との整合**を取る |
| ご案内 `#informationSection` | 住所（`address__line` / `address__subline` パターン）、地図リンク・iframe、営業時間・定休・支払い・席・喫煙・子連れ等（掲載事実ベース＋確認） |
| 大将 `#chefSection` | 店舗に「大将」ストーリーが無い場合は、**「店の想い」「ブランドストーリー」** に差し替え（後述の「リネーム影響範囲」参照） |
| こだわり `#committedSection` | 食べログ「お店のこだわり」相当をオリジナル文で3カード化（例: オーガニック素材と江戸前、炭火焼鳥、一枚板カウンターのライブ感） |

### 4a. ヒーロー trust バッジ系キーの差し替え一覧

以下のi18nキーは鮨し禅固有の値（10席・禁煙・完全予約制等）のため、**Organic の実態に合わせて全言語で差し替え必須**:

| i18n キー | 現在値（ja） | Organic で想定される方向 |
|-----------|-------------|-------------------------|
| `hero_trust_1` | 完全予約制・10席のカウンター | 20席・一枚板カウンター等 |
| `hero_trust_2` | 心斎橋駅から徒歩5分 | 福島駅から徒歩5分 |
| `hero_trust_3` | 全席禁煙・キャッシュレス対応 | 分煙（加熱式たばこ限定）・キャッシュレス対応 |
| `reserve_meta` | 夜のおまかせ ¥16,000〜... | 予算帯・アラカルト中心の表現に変更 |
| `hero_summary` | 完全予約制・カウンター10席... | Organic の席数・アクセスに変更 |
| `reserve_support_1` | 心斎橋駅から徒歩5分 | 福島駅から徒歩5分 |
| `reserve_support_2` | 全席禁煙 | 分煙（加熱式たばこ限定） |
| `reserve_support_3` | カード・電子マネー・QR決済対応 | 実態に合わせて確認 |
| `info_summary` | 心斎橋駅から徒歩5分... | Organic の情報に変更 |

### 4b. `nav_chef` リネーム時の影響範囲

`nav_chef` を `nav_story` 等にリネームする場合、以下を **すべて連動変更** する:

| 対象 | ファイル | 変更内容 |
|------|----------|----------|
| HTML `id` | `index.html` | `id="chefSection"` → 新ID（例: `id="storySection"`） |
| ナビ `href` | `index.html` | `href="#chefSection"` → `href="#storySection"` |
| CSS クラス | `css/style.css` | `.section__chef_story` → 新クラス名 |
| i18n キー | `js/main.js` | `nav_chef` → `nav_story`（4言語すべて） |
| その他キー | `js/main.js` | `chef_label`, `chef_name`, `chef_cred`, `chef_text`, `chef_image_alt` も必要に応じてリネーム |

### 4c. `#committedSection` の構造（orphaned code 削除方針）

現在のHTMLは `concept-card` x3（テキストのみ、画像/バッジなし）のシンプルな構造。

しかし `main.js` の `translations` に以下の **~20個の orphaned キー** が残っている（HTMLで参照されていない）:
- `shari_title`, `rice_alt`, `rice_badge`, `rice_text`
- `vinegar_alt`, `vinegar_badge`, `vinegar_text`
- `soy_alt`, `soy_badge`, `soy_text`
- `wasabi_alt`, `wasabi_title`, `wasabi_text`
- `fish_alt`, `fish_title`, `fish_text`
- その他: `hero_phone_note`, `hero_quick_1/2/3`

**方針:** Organic 実装時にこれらの orphaned キーを **全言語から削除** し、`npm run check:i18n` を通す。

### 4d. 定休日の表示方法

水曜定休の表示は、`hours_short_dd` キーに含める（新キー不要でシンプル）:

```
ja: "18:00〜03:00 / 水曜定休"
en: "6:00 PM - 3:00 AM (next day) / Closed Wednesdays"
ko: "18:00~03:00 (익일) / 수요일 정기 휴무"
zh: "18:00~03:00（翌日） / 周三定休"
```

### 4e. 喫煙ポリシーの多言語対応

「分煙（加熱式たばこ限定）」の4言語翻訳方針:

| 言語 | 表記 |
|------|------|
| ja | 分煙（加熱式たばこ限定） |
| en | Designated smoking area (heated tobacco only) |
| ko | 분연(가열식 담배 전용) |
| zh | 分区吸烟（仅限加热式香烟） |

### 4f. Instagram リンクの設計

フッターに Instagram リンクを追加する:

```html
<!-- footer 内に追加 -->
<p class="content__footer_sns">
  <a href="https://www.instagram.com/sushiosaka_organic"
     target="_blank" rel="noopener noreferrer"
     data-i18n="footer_instagram_label">Instagram</a>
</p>
```

i18n キー追加（4言語）:
- `footer_instagram_label`: `"Instagram"` / `"Instagram"` / `"Instagram"` / `"Instagram"`（全言語共通で可）

---

## 5. 多言語（i18n）実装方針

- 対象言語: **ja / en / ko / zh**（雛形どおり）。
- HTML に `data-i18n` / `data-i18n-html` / `data-i18n-attrs` を追加・変更したら、`js/main.js` の **4 言語ブロックすべて**に同一キーを定義する。
- デプロイ前に必ず `npm run check:i18n` を成功させる（CI と同コマンド）。
- `localStorage` キー（現状 `sushi-zen-language` および `index.html` ブートスクリプト内の同一文字列、`window.__SUSHI_ZEN_BOOT`）は、別サイトと干渉しないよう **店舗用プレフィックスに変更**する（例: `sushi-osaka-organic-language` / `__SUSHI_OSAKA_ORGANIC_BOOT`）。変更時は `main.js` と `index.html` を**両方**直す。

### 5a. 深夜営業の多言語表記ガイドライン

Organic は 18:00-03:00 の midnight 跨ぎ営業のため、以下の注意を適用:

| 言語 | 推奨表記 |
|------|----------|
| ja | `18:00〜03:00` （日本語は翌日補足不要、慣例的に理解される） |
| en | `6:00 PM - 3:00 AM (next day)` |
| ko | `18:00~03:00 (익일)` |
| zh | `18:00~03:00（翌日）` |

---

## 6. 予約・外部リンク（重要：コード変更の要否）

現状 `js/main.js` では、`[data-tablecheck]` 付きリンクは **ホストが `tablecheck.com` のみ**許可される（`sanitizeExternalHttpsUrl(..., "tablecheck")`）。

**SUSHI OSAKA Organic の公式予約が TableCheck でない場合**（食べログネット予約のみ等）、次のいずれかを実装仕様として選ぶ。

| 案 | 内容 |
|----|------|
| A | 店舗が TableCheck を契約し、従来どおり `TABLECHECK_URLS` + `data-tablecheck` を使用 |
| B | **食べログ予約 URL** を使う: `data-tablecheck` を `data-booking`（仮）等に変更し、`sanitizeExternalHttpsUrl` の `kind` に `"tabelog"` を指定して既存の `isAllowedTabelogHost()` を再利用する（`*.tabelog.com` を許可済みのため **新規 sanitize 関数は不要**） |
| C | 予約ボタンは `tel:` のみにし、ネット予約はご案内文の通常リンク（`rel="noopener noreferrer"`）で **別属性・別 sanitize 種別**で扱う |

実装書のゴール: **実装開始前に「公式の予約 URL（TableCheck か 食べログ か その他）」を1つに決める**。

電話リンク: `href="tel:07010091009"`（表示は `070-1009-1009`）。モバイル表示で問題ない形式に統一。

### 6a. 予約URL未定時のプレースホルダー方針

予約URLが未定の間は以下の方針で実装を進める:

1. **`tel:` リンクのみ有効化** — 電話予約は確実に動作させる
2. **ネット予約ボタンはHTMLコメントアウト**:
```html
<!-- TODO: 予約URL確定後に有効化
<a href="PLACEHOLDER" data-booking target="_blank" rel="noopener noreferrer" class="booking-card">
  ...
</a>
-->
```
3. `TABLECHECK_URLS` 定数は削除し、予約URL確定後に適切な定数（`BOOKING_URLS` 等）として再定義
4. floating-reserve バーも電話リンクのみ表示

---

## 7. メタ情報・OGP・地図の同期箇所

ガイドの「住所を変えたときに揃える場所」に加え、Organic 用に次を列挙しておく。

| 種別 | 主な更新ファイル |
|------|------------------|
| `title` / `description` / `keywords` / OGP / Twitter / canonical | `index.html` + `js/main.js` の各言語メタ |
| Google Maps 検索・埋め込み iframe | `index.html`（`data-google-maps-link`、`q=` クエリ） |
| 食べログ公式ページリンク（任意・掲載する場合） | `REVIEW_DEFAULTS.tabelog.url` を `https://tabelog.com/osaka/A2701/A270108/27149380/` に更新するなど |

### 7a. レビュースコア系コードの削除方針

HTML側の星ブロックは既に削除済み。以下のJSコードも **Organic では削除** する:

| 対象 | ファイル | 行数目安 |
|------|----------|----------|
| `REVIEW_DEFAULTS` 定数 | `js/main.js` L2-15 | ~14行 |
| `REVIEW_REFRESH_MS` 定数 | `js/main.js` L17 | 1行 |
| `formatRating` / `parseRatingText` / `animateScoreElement` | `js/main.js` L854-904 | ~50行 |
| `normalizeReviewPayload` / `getSiteBaseUrl` / `fetchReviewScoresPayload` | `js/main.js` L906-972 | ~66行 |
| `applyReviewScoresToDom` / `initializeReviewScores` | `js/main.js` L974-1032 | ~58行 |
| `initializeReviewScores()` 呼び出し | `js/main.js` L1073 | 1行 |
| API エンドポイント | `api/review-scores.js` | ファイルごと削除 |

合計: **約190行の削除**。HTML に `[data-review-score]` や `#trust-tabelog-link` が存在しないため、これらは完全な dead code。

### 7b. Google Maps URL の事前準備

住所「大阪府大阪市福島区鷺洲2-10-4」の URL:

- **Google Maps 検索リンク**: `https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E7%A6%8F%E5%B3%B6%E5%8C%BA%E9%B7%BA%E6%B4%B22-10-4`
- **iframe `q=` パラメータ**: `q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E7%A6%8F%E5%B3%B6%E5%8C%BA%E9%B7%BA%E6%B4%B22-10-4`

**注意:** Place ID が取得できればそちらを優先（ピン精度が向上する）。

---

## 8. 画像・アセット

| アセット | 方針 |
|----------|------|
| ヒーロー | `images/photo/sushi-photo-0.png` 相当を店舗用に差し替え。モバイル WebP は `npm run images:mobile` / `scripts/generate-mobile-images.cjs` を更新 |
| ギャラリー 4 枚 | `images/slider/slide-1.png`〜`slide-3.png` + 4 枚目 `images/photo/sushi-photo-5.png`（ガイドの対応表どおり）。寿司・焼鳥のバランスを考慮 |
| OGP 画像 | `images/ogp-*.png` を新規デザイン（1200×630 前後） |
| favicon | ブランドに合わせて `images/favicon.svg` を差し替え検討 |

### 8a. `generate-mobile-images.cjs` の作業範囲

「パスを追加」ではなく、`main()` 関数内の **全 `outWebp()` 呼び出しを Organic 用の画像パスに書き換え** る。現在のエントリ:

```js
// 現在（全11エントリ）— すべて Organic 用ファイルに差し替え
await outWebp("images/photo/sushi-photo-0.png", "hero-sushi-720w.webp", 720);
await outWebp("images/slider/slide-1.png", "slide-1-900w.webp", 900);
await outWebp("images/slider/slide-2.png", "slide-2-900w.webp", 900);
await outWebp("images/slider/slide-3.png", "slide-3-900w.webp", 900);
await outWebp("images/photo/sushi-photo-5.png", "sushi-photo-5-900w.webp", 900);
await outWebp("images/photo/craft-hand.jpg", "craft-hand-800w.webp", 800);
await outWebp("images/photo/concept-counter.jpg", "concept-counter-800w.webp", 800);
await outWebp("images/photo/chef-somono.jpg", "chef-somono-800w.webp", 800);
await outWebp("images/photo/course-omakase.jpg", "course-omakase-800w.webp", 800);
await outWebp("images/bg/AdobeStock_54536706122.png", "parallax-arc-960w.webp", 960);
await outWebp("images/bg/AdobeStock_401925665.jpeg", "parallax-base-1400w.webp", 1400);
```

ソース画像ファイル名は Organic 用に差し替え、出力名（`hero-sushi-720w.webp` 等）は HTML の `srcset` と一致させる。

差し替え後は `index.html` の CSS/JS/主要画像の **`?v=` キャッシュバスト**を更新する。

---

## 9. デザイン・UI（雛形からの継承）

- PC: 既存のダーク基調レイアウトを基本継承。
- 767px 以下: 固定トップバー・全画面ナビ・クリーム地＋ゴールド帯見出し（ガイド記載の「おやじ風」ブロック）。店名・配色の微調整は `css/style.css` 末尾のメディアクエリ側で検討。
- 住所は **`.address__line`（建物・番地）** と **`.address__subline`（駅からの補足）** に分離し、4 言語で同じ HTML 骨格を保つ。

### 9a. スマホテーマの業態適合性検討

> **検討項目:** 現在の「おやじ風」テーマ（クリーム地＋ゴールド帯見出し＋和風の重厚感）は **高単価鮨店** 向けに設計されている。Organic はアラカルト中心・￥3,000〜帯のカジュアル業態のため、以下を検討:
>
> - 配色の調整（ゴールド → グリーン系でオーガニック感を表現？）
> - フォントの軽量化（現在の和風重厚フォント → よりモダンな方向？）
> - 結論が出るまではテーマをそのまま継承し、**MVP 後に店舗フィードバック** で判断

---

## 10. 実装タスク一覧（チェックリスト）

実装フェーズ用。順序は並列可能な箇所あり。

### リポジトリ・プロジェクト設定
- [ ] リポジトリ複製 → `.vercel/project.json` 削除 → Vercel プロジェクト作成 → `vercel link`
- [ ] `package.json` の `name` を `"sushi-osaka-organic-site"` に、`description` を Organic 用に更新

### 不要ファイル・dead code 削除
- [ ] `public-mock.html` / `js/public-mock.js` / `css/public-mock.css` を削除（sushi-zen のモックコンテンツがそのまま公開される）
- [ ] `css/media/` ディレクトリ（`pc.css`, `all.css`, `tablet.css`, `smartphone.css`）を削除（レガシー、現行は `style.css` に統合済み）
- [ ] `api/review-scores.js` を削除
- [ ] `main.js` のレビュースコア関連コード（§7a 参照、約190行）を削除
- [ ] `main.js` の orphaned i18n キー（§4c 参照、約20キー x 4言語）を削除

### 予約・リンク
- [ ] 予約 URL 方針決定（TableCheck / 食べログ / 電話のみ）に応じた `main.js` のリンク sanitize 設計
- [ ] 予約URL未定の場合: §6a の方針でプレースホルダー実装

### コンテンツ差し替え
- [ ] `index.html` 店名・全セクション文案・電話・営業時間・注意書きの差し替え
- [ ] `js/main.js` `translations` 全キー（ja/en/ko/zh）の同期、`STORAGE_KEY` とブートスクリプトのリネーム
- [ ] trust バッジ系キーの差し替え（§4a の一覧に従う）
- [ ] 定休日表示の追加（§4d）
- [ ] 喫煙ポリシーの多言語対応（§4e）
- [ ] 深夜営業の多言語表記（§5a）

### 地図・メタ・OGP
- [ ] 地図 URL・iframe の差し替え（§7b のパーセントエンコード済みURLを使用）
- [ ] フッター住所の一致確認
- [ ] **OGP/canonical を独立タスクとして更新**: `og:url`, `og:image`, `twitter:image`, `canonical`（ドメイン未定の場合は `<!-- TODO: ドメイン確定後に更新 -->` コメントで残す）

### SNS
- [ ] Instagram リンクの追加（§4f のHTML設計 + i18nキー追加）

### 画像
- [ ] 画像差し替えと `generate-mobile-images.cjs` の全 `outWebp()` 書き換え（§8a）
- [ ] `npm run images:mobile` 実行

### 検証・デプロイ
- [ ] `npm run check:i18n`
- [ ] `npm run deploy:prod` と本番表示確認（シークレット推奨）
- [ ] （任意）`git push` でバックアップ・CI

---

## 11. オープンクエスチョン（店舗ヒアリング）

1. 公式の **ネット予約 URL**（TableCheck 契約の有無、食べログ予約ページの正規リンク）。
2. **アラカルト価格帯**（食べログに「一貫150円から」等の記述あり）を LP に数字で載せるか。載せる場合は **最新メニューとの一致**をどう保証するか。
3. **臨時休業**をトップに出す運用をするか（静的サイトのため、更新フローを決める）。
4. 「オーガニック」の定義範囲（訴求コピーの法務・広告表現の確認）。
5. **英語・韓国語・中国語**の文案は店舗レビュー必須か、まずは日本語＋機械翻訳修正でよいか。
6. スマホテーマの配色調整要否（§9a 参照）。

---

## 12. 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-04-06 | 初版（雛形ガイド準拠・食べログ参照・実装前仕様として整理） |
| 2026-04-06 | v2: 21件の改善を反映 — `.vercel/project.json` 安全手順、orphaned code 削除方針、trust バッジ差替一覧、nav_chef リネーム影響範囲、定休日/喫煙/深夜営業の多言語対応、レビュースコア削除方針、Google Maps URL事前準備、予約プレースホルダー方針、generate-mobile-images.cjs 作業範囲明確化、不要ファイル削除タスク、OGP独立タスク化、Instagram設計、スマホテーマ検討、package.json更新 |
