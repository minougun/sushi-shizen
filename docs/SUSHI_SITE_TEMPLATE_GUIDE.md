# 寿司店サイト雛形ガイド（鮨し禅ベース）

別の寿司店サイトを新規作成するときに、このリポジトリをテンプレートとして複製・改変するための手順と注意点をまとめたものです。

**GitHub で読む:** `https://github.com/minougun/sushi-shizen/blob/master/docs/SUSHI_SITE_TEMPLATE_GUIDE.md`

---

## クイックリファレンス（よく触る場所）

| やりたいこと | 主に触るファイル |
|--------------|------------------|
| 文言・多言語 | `js/main.js` の `translations` + `index.html` の `data-i18n*` |
| 本番ドメイン・OGP・canonical | `index.html` の `og:url` / `og:image` / `twitter:image` / `<link rel="canonical">` |
| ヒーロー写真 | `images/photo/sushi-photo-0.png` + `images/opt/hero-sushi-720w.webp`（`generate-mobile-images.cjs`） |
| トップ下ギャラリー（4枚） | `images/slider/slide-1.png` … `slide-3.png`、4枚目は `images/photo/sushi-photo-5.png`（HTML 参照） |
| モバイル用 WebP | `npm run images:mobile` または `sharp` で個別生成 → `images/opt/*` |
| キャッシュ対策 | `index.html` の該当 `<img>` / `<link rel="stylesheet">` / `<script>` に `?v=日付や版` |
| **スマホ専用シェル**（固定バー・全画面メニュー・クリーム調本文） | `css/style.css` 末尾付近の `@media (max-width: 767px)` ブロック（「スマホのみ: …おやじ…」コメント） |
| **スマホ用トップバー HTML** | `index.html` 内 `.sp-sitebar`（店名・予約・ハンバーガー） |
| **スマホメニュー JS** | `js/main.js` の `initializeSpOyajiNav` / `syncSpNavMenuAria` / `getCurrentLangFromDom` |
| TableCheck 予約 URL | `js/main.js` の `TABLECHECK_URLS` と各言語の `tablecheck_url`、HTML の `data-tablecheck` |
| 本番反映 | `npm run check:i18n` → `npm run deploy:prod`（必要なら続けて `git push`） |
| 検証 | `npm run check:i18n`（ローカル・CI 共通） |

### ギャラリー画像とファイル名の対応（重要）

HTML 上の並びは **1枚目〜4枚目** だが、**3枚目のファイル名は `slide-3.png`**（`slide-2.png` が2枚目）。4枚目だけ `images/photo/sushi-photo-5.png` を直接参照。

| 表示順 | 主な参照パス（PNG） | モバイル WebP（例） |
|--------|---------------------|---------------------|
| 1 | `images/slider/slide-1.png` | `images/opt/slide-1-900w.webp` |
| 2 | `images/slider/slide-2.png` | `images/opt/slide-2-900w.webp` |
| 3 | `images/slider/slide-3.png` | `images/opt/slide-3-900w.webp` |
| 4 | `images/photo/sushi-photo-5.png` | `images/opt/sushi-photo-5-900w.webp` |

差し替え後は **PNG を上書き**し、`sharp` で該当 WebP を再生成し、`index.html` の `?v=` を更新する。

---

## 雛形の所在

| 種別 | URL / パス |
|------|------------|
| GitHub リポジトリ | `https://github.com/minougun/sushi-shizen` |
| ローカル例（WSL） | `/mnt/c/Users/minou/sushi-shizen` |
| 本番 URL（この雛形のデプロイ例） | `https://sushi-zen.net`（カスタムドメイン） |
| Vercel プロジェクト例 | `minouguns-projects/sushi-zen`（ダッシュボードで別名プロジェクトを作る） |

新規店舗用には **GitHub でリポジトリを複製（Use this template / fork / clone して別名リポ）** し、Vercel で **別プロジェクト** として接続することを推奨します。

---

## 技術スタック

- **フロント:** 静的 HTML + 単一 CSS（`css/style.css`）+ `js/main.js`（多言語・予約リンク・スマホドロワーナビ等）
- **サニタイズ:** `dompurify`（CDN）— `data-i18n-html` 用
- **画像最適化（開発時）:** Node + `sharp`（`npm run images:mobile`）
- **サーバレス（任意）:** `api/review-scores.js` — Google Places 等（Vercel 環境変数）
- **CI:** GitHub Actions — `npm run check:i18n`（`.github/workflows/check-i18n.yml`）
- **ホスティング例:** Vercel（**本番は `npm run deploy:prod` を正**。Git 連携は切ってもよい）

---

## 主要ファイル一覧

| パス | 役割 |
|------|------|
| `index.html` | 1ページ構成の本体。`.sp-sitebar`、`nav#siteNav`、`data-i18n` / `data-i18n-html` / `data-i18n-attrs`。CSS/JS は `?v=` でキャッシュバスト |
| `js/main.js` | 翻訳辞書（`ja` / `en` / `ko` / `zh`）、言語切替、スマホナビ開閉、外部 URL の allowlist 付き整形 |
| `css/style.css` | メインスタイル（メディアクエリ込みの集約。**スマホ専用の「別シェル」CSS はファイル末尾の 767px ブロック**） |
| `css/tokens.css` | デザイントークン（`style.css` から import）。`--sz-safe-*` 等 |
| `scripts/check-i18n-keys.js` | HTML で使う i18n キーが `main.js` の各言語に揃っているか検証 |
| `scripts/generate-mobile-images.cjs` | `images/opt/` 向け WebP 生成（入力パスはスクリプト内に列挙） |
| `api/review-scores.js` | 星評価 API（キー未設定時はフォールバック） |
| `public-mock.html` / `js/public-mock.js` | 簡易モック用。本番は通常 `index.html` のみで可 |
| `package.json` | `npm run check:i18n` / `images:mobile` / **`deploy:prod`**（Vercel 本番） |

---

## ページ構成（セクションとアンカー）

`<nav>` の並び（上から）と `id` の対応:

| 順 | ナビ文言（キー例） | アンカー ID |
|----|-------------------|-------------|
| 1 | `nav_reserve`（ご予約） | `#reserveSection` |
| 2 | `nav_course`（コース） | `#courseSection` |
| 3 | `nav_information`（ご案内） | `#informationSection` |
| 4 | `nav_chef`（大将） | `#chefSection` |
| 5 | `nav_committed`（こだわり） | `#committedSection` |

その他:

- ヘッダー内: ヒーロー、言語切替、KV 画像、TableCheck CTA 等
- `main` 直後: トップ下ギャラリー `section__slide_intro`（アンカー ID なし。ナビからは直接飛ばない）

新店舗では **`nav` の `href` とセクション `id` をセット**で確認する。

---

## スマホ UI（768px 未満）— 2026-04 以降の雛形の特徴

**PC（768px 以上）は従来のダーク基調のまま。** 次は **767px 以下のみ** 有効なレイヤーです。

### 概要

- 参考にしたパターン（レイアウト・配色の参考）: [おやじ最後の握り](https://oyajisaigononigiri.com/) のスマホ（固定バー＋全画面メニュー＋クリーム系本文＋ゴールド帯見出し）
- **固定トップバー** `.sp-sitebar`: 黒背景、店名リンク、ゴールドの予約ボタン（`data-tablecheck`）、ハンバーガー
- **ナビ** `nav#siteNav`: 横スクロール帯ではなく、開いたとき **全画面オーバーレイ**（`body.sp-nav-is-open`）
- **ヒーロー**: スマホでは **KV 画像を上**、コピーを下（`flex` + `order`）
- **`main` 以降**: クリーム系背景・ダークテキスト・主要見出しにゴールド帯
- **フローティング予約** `.floating-reserve`: スマホでは **非表示**（トップバーと重複するため）

### 変更・流用時に触るファイル

| 内容 | 場所 |
|------|------|
| バーに載せる予約リンク | `index.html` の `.sp-sitebar__reserve`（`data-tablecheck` 付与済み。URL は `main.js` で言語別に上書き） |
| メニュー開閉・スクロールロック・Esc | `js/main.js` — `initializeSpOyajiNav` |
| 見た目（色・余白・オーバーレイ） | `css/style.css` — 末尾付近 `/* スマホのみ: 参考 https://oyajisaigononigiri.com/ ... */` |
| 768px 以上でバーを消す | 同ブロック内 `@media (min-width: 768px) { .sp-sitebar { display: none !important; } }` |

### i18n キー（スマホ UI 追加分）

`index.html` と `js/main.js` の **4 言語すべて**に定義が必要（`npm run check:i18n` が検出）:

- `sp_sitebar_reserve` … トップバーの短い予約ラベル
- `sp_menu_aria_open` / `sp_menu_aria_close` … メニューボタンの `aria-label`（開閉で JS が切替）
- `site_nav_aria` … `nav#siteNav` の `aria-label`

### スマホ本文の色（可読性）

クリーム背景の上で読めなくならないよう、**767px 以下**で次を **黒 `#000000` に固定**している:

- 「鮨し禅について」「鮨し禅の想い」: `.intro__about_concept` 内 `.section__text` と `p`（詳細度の高いグローバル指定を上書き）
- 大将: `.section__chef_story` 内の資格・本文・見出しまわり

新店舗でテーマ色を変える場合は、同じセレクタブロックを編集または削除する。

---

## 多言語（i18n）の扱い

1. **HTML**  
   - 表示文: `data-i18n="キー"` または `data-i18n-html="キー"`（HTML 可の段落）  
   - `alt` 等: `data-i18n-attrs="alt:キー"`（複数は `;` 区切り）

2. **`js/main.js`**  
   - `translations` 内の `ja` / `en` / `ko` / `zh` ブロックに **同じキー集合** を定義する。  
   - メタ情報（`title`, `description`, `ogTitle` など）も言語ごとに持つ。

3. **検証**  
   ```bash
   npm run check:i18n
   ```  
   デプロイ前に必ず成功させる（CI でも同じコマンドが走る）。

4. **初回言語**  
   - `index.html` 内スクリプトで `?lang=` と `localStorage`（キーは **`sushi-zen-language`**）を参照。新店舗では **ストレージキー名** を店舗用に変えると、他サイトと干渉しません（`js/main.js` の `STORAGE_KEY` とブートスクリプト内のキー文字列を揃えて変更）。

---

## 画像まわり

- **配置の例**
  - `images/photo/` … ヒーロー・About・大将などの写真
  - `images/slider/` … トップ直下ギャラリー用（PNG 等）
  - `images/opt/` … モバイル向け WebP（生成物）
  - `images/bg/` … 背景・装飾
- **ギャラリー**  
  `section__slide_intro` 内の `slide__set` は CSS で **グリッド列数** と一致させる（枚数を増やしたら `grid-template-columns` と装飾を追随）。
- **ヒーロー**  
  モバイル用 WebP の preload は `index.html` `<head>` に記載。差し替え時はパスと `generate-mobile-images.cjs` を揃える。
- **生成コマンド**
  ```bash
  npm run images:mobile
  ```  
  新しい元画像を追加したら `scripts/generate-mobile-images.cjs` に `outWebp(...)` を1行足すのが安全。

---

## CSS の注意

- **編集の主戦場は `css/style.css`。** `css/media/*.css` はレガシー参照用のコメントあり（このリポジトリ方針では `style.css` 優先）。
- **`.intro__about_committed .concept-grid`**  
  大画面で `grid-template-columns: 1fr` のままだとカードが縦一列になる。3カード横並びにするなら `repeat(3, minmax(0, 1fr))` を維持する。
- **キャッシュ**  
  本番で確実に読み直させるには `index.html` の `style.css` / `main.js` のクエリ `?v=` を更新する。
- **スマホナビの行高**  
  767px 付近では `ul` / `li` / `a` の高さを揃えるルールがある。オーバーレイ化した後は末尾の「おやじ風」ブロックが優先される部分があるため、**矛盾した `height` が残っていないか** grep しながら調整する。

---

## 本番デプロイとカスタムドメイン（Vercel）

このプロジェクトは **Vercel の Git 連携に依存しない運用**を推奨する。リポジトリへの `push` だけでは本番が更新されない事例があるため、**ローカルから CLI で本番デプロイ**を正とする。

### いつもの手順（本番反映）

リポジトリルートで:

```bash
npm run check:i18n
npm run deploy:prod
```

（初回のみ `npx vercel login` とプロジェクト紐づけが必要。既に `vercel link` 済みならそのまま動く。）

本番ドメイン例: **`https://sushi-zen.net`**（プロジェクト: `minouguns-projects/sushi-zen`）

### カスタムドメインを載せる手順（要約）

1. **Vercel**  
   - ダッシュボード: `https://vercel.com/` → 対象プロジェクト → **Settings → Domains**  
   - または CLI（プロジェクトディレクトリで）:  
     `npx vercel domains add 例.jp`  
     `npx vercel domains add www.例.jp`
2. **DNS（ドメイン取得業者の管理画面）**  
   - Vercel の Domains 画面に表示される **A / CNAME** に従う（値は画面が正。よくある例: ルート **A → `76.76.21.21`**、`www` **CNAME → `cname.vercel-dns.com`**）
3. **コード**  
   - `index.html` の **`og:url` / `og:image` / `twitter:image` / `rel="canonical"`** を新店舗の **https URL** に合わせる。
4. 古いドメインを使わない場合は Vercel から **Domains を remove** し、DNS の旧レコードも削除する。

詳しい DNS の説明は、必要に応じて同リポジトリ内の運用メモや [Vercel Domains ドキュメント](https://vercel.com/docs/projects/domains) を参照する。

### Git 連携を止める（Vercel ダッシュボード）

1. [Vercel Dashboard](https://vercel.com/dashboard) → 対象プロジェクトを開く  
2. **Settings** → **Git**  
3. **Disconnect**

**ソース管理用の GitHub はそのまま使ってよい**（バックアップ・履歴・Actions の `check-i18n` 用）。本番更新は `npm run deploy:prod` に統一すると反映漏れを防げる。

### 環境変数（`api/review-scores.js`）

- `GOOGLE_MAPS_API_KEY` / `GOOGLE_PLACE_ID`（任意で Places API 本番値）
- 未設定時は `GOOGLE_RATING_FALLBACK` 等で静的フォールバック

---

## 新店舗向けチェックリスト（コピー用）

- [ ] GitHub で新リポジトリ化し、Vercel 新プロジェクトを作成・`vercel link`
- [ ] `index.html` の **canonical / OGP / Twitter カード** を新店舗の **https ドメイン**に更新
- [ ] Vercel **Domains** にドメイン追加 + DNS（A / CNAME）設定
- [ ] `js/main.js` の全言語ブロック・`TABLECHECK_URLS`・店名・住所・電話・コース料金・**スマホ用 i18n キー**（`sp_*` / `site_nav_aria`）
- [ ] `localStorage` キー `sushi-zen-language` を店舗固有の文字列に変更（任意・干渉防止）
- [ ] `data-google-maps-link` 等の地図 URL を新店舗に合わせる
- [ ] `images/` 配下の差し替え + `npm run images:mobile` + スクリプトへの追記
- [ ] ギャラリー枚数変更時は `index.html` と `style.css` のグリッドを整合
- [ ] スマホテーマを使わない場合は `.sp-sitebar` HTML と `initializeSpOyajiNav`、および `style.css` 末尾の「おやじ風」ブロックを削除または無効化
- [ ] `npm run check:i18n` 成功
- [ ] `npm run deploy:prod` で本番確認（シークレットウィンドウ推奨）
- [ ] （任意）GitHub へ `git push`（バックアップ・CI 用。Vercel 本番とは独立）

---

## 鮨し禅版で入れた主なカスタム（雛形としての参考）

別店に流用する際、「そのまま使う／文言だけ差す／構造ごと削る」の判断用です。

- **About / 想い** … 画像と `alt` キーの対応、`content__image_right` による左右レイアウト
- **大将** … `content__image_right` で文左・写真右。スマホでは本文・見出しを黒に固定
- **トップ下ギャラリー** … **4枚**構成。4枚目は `sushi-photo-5.png`
- **こだわり** … 3カードを全幅横一列（大画面で `concept-grid` が崩れないよう調整）
- **ヒーロー** … Google / 食べログの星ブロックは削除済み。リード文 `hero_lead` は短いキャッチ向けに調整済み
- **スマホシェル** … 固定バー + 全画面ナビ + クリーム調 `main` + ゴールド帯見出し（参考サイト風）。**768px 以上は変更なし**
- **本番** … **`npm run deploy:prod`** を標準。カスタムドメイン例 **`sushi-zen.net`**

---

## 制作・改修の経緯（作業ログ要約）

1. **レイアウト** … About／想い／大将で写真と文章の左右を `content__image_right` とグリッドで制御。
2. **ギャラリー** … 4列表示・4枚目のファイル配置・WebP と `?v=` の運用。
3. **画像差し替え** … 推奨 **896×1195** 前後で `sharp` 再生成。
4. **スマホナビ** … 行高の矛盾修正ののち、オーバーレイ型ナビへ。
5. **スマホテーマ** … クリーム地 + 見出し帯。`について`/`想い`/`大将` の可読性のため **黒字** を明示指定。
6. **ドメイン** … `sushi-zen.net` を Vercel に追加。OGP / canonical を同期。
7. **i18n** … HTML にキーを足したら **4 言語すべて**に追加。デプロイ前に `npm run check:i18n`。
8. **デプロイ** … `npm run deploy:prod`。必要なら続けて `git push`。

---

## 関連リンク（公式・インフラ）

- リポジトリ: `https://github.com/minougun/sushi-shizen`
- 本番例: `https://sushi-zen.net`
- Vercel ダッシュボード: `https://vercel.com/dashboard`
- Vercel Domains ドキュメント: `https://vercel.com/docs/projects/domains`
- TableCheck 等の予約 URL は店舗ごとに差し替え（`main.js` の allowlist にホストが含まれること）

---

## 更新履歴（このドキュメント）

- 2026-04-05: 初版（鮨し禅サイトを雛形として再利用するための運用・構成メモ）
- 2026-04-05: クイックリファレンス・ギャラリー対応表・作業ログ要約・ヒーロー/デプロイの最新方針を追記
- 2026-04-06: **スマホ専用 UI（固定バー・全画面メニュー・クリーム/ゴールド帯）**、**スマホ本文の黒字指定**、**カスタムドメイン（sushi-zen.net）**、**関連 i18n キー**、**ナビとアンカー ID の正しい並び**、チェックリストを反映して全面更新
