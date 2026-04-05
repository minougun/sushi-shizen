# 寿司店サイト雛形ガイド（鮨し禅ベース）

別の寿司店サイトを新規作成するときに、このリポジトリをテンプレートとして複製・改変するための手順と注意点をまとめたものです。

**GitHub で読む:** `https://github.com/minougun/sushi-shizen/blob/master/docs/SUSHI_SITE_TEMPLATE_GUIDE.md`

---

## クイックリファレンス（よく触る場所）

| やりたいこと | 主に触るファイル |
|--------------|------------------|
| 文言・多言語 | `js/main.js` の `translations` + `index.html` の `data-i18n*` |
| ヒーロー写真 | `images/photo/sushi-photo-0.png` + `images/opt/hero-sushi-720w.webp`（`generate-mobile-images.cjs`） |
| トップ下ギャラリー（4枚） | `images/slider/slide-1.png` … `slide-3.png`、4枚目は `images/photo/sushi-photo-5.png`（HTML 参照） |
| モバイル用 WebP | `npm run images:mobile` または `sharp` で個別生成 → `images/opt/*` |
| キャッシュ対策 | `index.html` の該当 `<img>` / `<link>` に `?v=日付や版` |
| 本番反映 | `npm run check:i18n` → `npm run deploy:prod` |
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
| 本番 URL（この雛形のデプロイ例） | `https://sushi-zen.vercel.app` |

新規店舗用には **GitHub でリポジトリを複製（Use this template / fork / clone して別名リポ）** し、Vercel で **別プロジェクト** として接続することを推奨します。

---

## 技術スタック

- **フロント:** 静的 HTML + 単一 CSS（`css/style.css`）+ `js/main.js`（多言語・予約リンクなど。ヒーローの星表示は削除済みだが `api/review-scores` 用の fetch ロジックは残置可能）
- **サニタイズ:** `dompurify`（CDN）— `data-i18n-html` 用
- **画像最適化（開発時）:** Node + `sharp`（`npm run images:mobile`）
- **サーバレス（任意）:** `api/review-scores.js` — Google Places（新）+ 食べログ等のフォールバック（Vercel 環境変数）
- **CI:** GitHub Actions — `npm run check:i18n`（`.github/workflows/check-i18n.yml`）
- **ホスティング例:** Vercel（**本番は `npm run deploy:prod` を正**。Git 連携は切ってもよい）

---

## 主要ファイル一覧

| パス | 役割 |
|------|------|
| `index.html` | 1ページ構成の本体。`data-i18n` / `data-i18n-html` / `data-i18n-attrs`。CSS/JS は `?v=` でキャッシュバスト |
| `js/main.js` | 翻訳辞書（`ja` / `en` / `ko` / `zh`）、言語切替、外部 URL の allowlist 付き整形（口コミ DOM が無いときはスコア fetch しない） |
| `css/style.css` | メインスタイル（メディアクエリ込みの集約ファイル） |
| `css/tokens.css` | デザイントークン（`style.css` から import） |
| `scripts/check-i18n-keys.js` | HTML で使う i18n キーが `main.js` の各言語に揃っているか検証 |
| `scripts/generate-mobile-images.cjs` | `images/opt/` 向け WebP 生成（入力パスはスクリプト内に列挙） |
| `api/review-scores.js` | 星評価 API（キー未設定時は環境変数・固定値フォールバック） |
| `public-mock.html` / `js/public-mock.js` | 簡易モック用。本番は通常 `index.html` のみで可 |
| `package.json` | `npm run check:i18n` / `images:mobile` / **`deploy:prod`**（Vercel 本番） |

---

## ページ構成（セクションとアンカー）

ナビや CTA から `#...` で飛ぶ ID はおおむね以下です。

| ID | 内容の目安 |
|----|------------|
| （ヘッダー直上） | ヒーロー、言語切替、KV 画像 |
| `reserveSection` | ご予約（TableCheck 等） |
| `chefSection` | 大将プロフィール |
| `committedSection` | こだわり（`concept-grid` のカード） |
| `courseSection` | コース・料金 |
| `informationSection` | 店舗情報・地図・営業時間 |

新店舗では **メニュー項目とセクションの対応** を崩さないよう、`index.html` の `nav` と `id` をセットで確認します。

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
   - `index.html` 内スクリプトで `?lang=` と `localStorage`（キーは `sushi-zen-language`）を参照。新店舗では **ストレージキー名** を店舗用に変えると、他サイトと干渉しません。

---

## 画像まわり

- **配置の例**
  - `images/photo/` … ヒーロー・About・大将などの写真
  - `images/slider/` … トップ直下ギャラリー用（PNG 等）
  - `images/opt/` … モバイル向け WebP（生成物）
  - `images/bg/` … 背景・装飾
- **ギャラリー**  
  `section__slide_intro` 内の `slide__set` は CSS で **グリッド列数** と一致させる（枚数を増やしたら `grid-template-columns` と `nth-child` 装飾を追随）。
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

---

## 本番デプロイ（Vercel）

このプロジェクトは **Vercel の Git 連携に依存しない運用**を推奨する。リポジトリへの `push` だけでは本番が更新されない事例があるため、**ローカルから CLI で本番デプロイ**を正とする。

### いつもの手順（本番反映）

リポジトリルートで:

```bash
npm run check:i18n
npm run deploy:prod
```

（初回のみ `npx vercel login` とプロジェクト紐づけが必要。既に `vercel link` 済みならそのまま動く。）

本番ドメイン例: `https://sushi-zen.vercel.app`（プロジェクト: `minouguns-projects/sushi-zen`）

### Git 連携を止める（Vercel ダッシュボード）

1. [Vercel Dashboard](https://vercel.com/dashboard) → 対象プロジェクト **sushi-zen** を開く  
2. **Settings** → **Git**  
3. **Disconnect**（Git リポジトリとの接続解除）

これで `push` による自動デプロイは行われない。**ソース管理用の GitHub はそのまま使ってよい**（バックアップ・履歴・Actions の `check-i18n` 用）。本番更新は常に `npm run deploy:prod` だけにすれば、反映漏れを防げる。

### 環境変数（`api/review-scores.js`）

- `GOOGLE_MAPS_API_KEY` / `GOOGLE_PLACE_ID`（任意で Places API 本番値）
- 未設定時は `GOOGLE_RATING_FALLBACK` 等で静的フォールバック

### OGP・canonical

`index.html` の `og:url` / `og:image` を **新店舗のドメインと OGP 画像** に差し替える。

---

## 新店舗向けチェックリスト（コピー用）

- [ ] GitHub で新リポジトリ化し、Vercel 新プロジェクトを作成
- [ ] `index.html` の meta / OGP / `theme-color` / 構造化データがあれば更新
- [ ] `js/main.js` の全言語ブロック・`TABLECHECK_URLS`・店名・住所・電話・コース料金
- [ ] `data-google-maps-link` 等の地図 URL を新店舗に合わせる
- [ ] `images/` 配下の差し替え + `npm run images:mobile` + スクリプトへの追記
- [ ] ギャラリー枚数変更時は `index.html` と `style.css` のグリッドを整合
- [ ] `npm run check:i18n` 成功
- [ ] `npm run deploy:prod` で本番確認（シークレットウィンドウ推奨）
- [ ] （任意）GitHub へ `git push`（バックアップ・CI 用。Vercel 本番とは独立）

---

## 鮨し禅版で入れた主なカスタム（雛形としての参考）

別店に流用する際、「そのまま使う／文言だけ差す／構造ごと削る」の判断用です。

- **About / 想い** … 画像と `alt` キーの対応、`content__image_right` による左右レイアウト（「について」と「想い」で写真を入れ替えた経緯あり）
- **大将** … `content__image_right` で文左・写真右
- **トップ下ギャラリー** … **4枚**構成。`slide__set` を `repeat(4, …)` にし、マーキー最大幅を広げて4列表示に対応。4枚目は `sushi-photo-5.png`
- **こだわり** … 3カードを全幅横一列（大画面で `concept-grid` が `1fr` に上書きされないよう修正）
- **ヒーロー** … Google / 食べログの星・注釈ブロックを **HTML から削除**（`trust_*` i18n も削除）。リード文 `hero_lead` を改行・文言調整（例: 「旬、温度、間」＋「その日の一貫と向き合う10席のカウンター」）
- **コピー** … 例: `concept_card_1_text`「温度まで繊細に演出し…」
- **本番** … **`npm run deploy:prod`** を標準。Git 連携だけに頼ると反映されない環境があったため、Vercel の Git Disconnect 推奨。バックアップ用に `git push` は継続可

---

## 制作・改修の経緯（作業ログ要約）

別店の LP を始めるとき「何をどう決めたか」を短く辿れるようにしたメモです。

1. **レイアウト** … About／想い／大将で写真と文章の左右を `content__image_right` とグリッドで制御。ブロックごとに DOM 順とクラスを揃える。
2. **ギャラリー枚数増** … 3列 → 4列へ。`css/style.css` の `.section__slide_intro .slide__set`（ベース・タブレット・`!important` 付き上書き等）、装飾用 `nth-child(4)`、マーキー `max-width` を **枚数と整合**させる。
3. **画像差し替えの実務** … 外部フォルダの PNG を `images/slider/slide-2.png` 等にコピー。**推奨サイズ 896×1195**（既存枠・`aspect-ratio` と一致）。続けて `slide-2-900w.webp` 等を `sharp` で再生成し、`index.html` の `?v=` を更新。
4. **ヒーロー画像の合成実験** … 白抜き写真に別 BG を貼るスクリプトを試したが、参照デザイン（皿なし・暗背景の別カット）とは **素材が異なり自動では再現困難** → **git revert でロールバック**。同じ見え方には **新撮影 or 手作業の切り抜き素材**が現実的。
5. **i18n** … HTML にキーを足したら必ず `ja` / `en` / `ko` / `zh` 全てに同キーを追加。`main.js` 内の **重複キー**（オブジェクトリテラル）は後勝ちになるので注意。
6. **デプロイ** … `npm run check:i18n` 成功後に `npm run deploy:prod`。必要なら続けて `git push`（コード保管用）。

---

## 関連リンク（公式・インフラ）

- リポジトリ: `https://github.com/minougun/sushi-shizen`
- Vercel（プロジェクトはアカウント内で確認）: `https://vercel.com/dashboard`
- TableCheck 等の予約 URL は店舗ごとに差し替え（`main.js` の allowlist にホストが含まれること）

---

## 更新履歴（このドキュメント）

- 2026-04-05: 初版（鮨し禅サイトを雛形として再利用するための運用・構成メモ）
- 2026-04-05: クイックリファレンス・ギャラリー対応表・作業ログ要約・ヒーロー/デプロイの最新方針を追記
