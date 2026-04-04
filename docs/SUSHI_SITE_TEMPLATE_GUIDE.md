# 寿司店サイト雛形ガイド（鮨し禅ベース）

別の寿司店サイトを新規作成するときに、このリポジトリをテンプレートとして複製・改変するための手順と注意点をまとめたものです。

## 雛形の所在

| 種別 | URL / パス |
|------|------------|
| GitHub リポジトリ | `https://github.com/minougun/sushi-shizen` |
| ローカル例（WSL） | `/mnt/c/Users/minou/sushi-shizen` |
| 本番 URL（この雛形のデプロイ例） | `https://sushi-zen.vercel.app` |

新規店舗用には **GitHub でリポジトリを複製（Use this template / fork / clone して別名リポ）** し、Vercel で **別プロジェクト** として接続することを推奨します。

---

## 技術スタック

- **フロント:** 静的 HTML + 単一 CSS（`css/style.css`）+ `js/main.js`（多言語・予約リンク・口コミ表示など）
- **サニタイズ:** `dompurify`（CDN）— `data-i18n-html` 用
- **画像最適化（開発時）:** Node + `sharp`（`npm run images:mobile`）
- **サーバレス（任意）:** `api/review-scores.js` — Google Places（新）+ 食べログ等のフォールバック（Vercel 環境変数）
- **CI:** GitHub Actions — `npm run check:i18n`（`.github/workflows/check-i18n.yml`）
- **ホスティング例:** Vercel（Git 連携に加え、**CLI の `vercel deploy --prod` でも本番反映可能**）

---

## 主要ファイル一覧

| パス | 役割 |
|------|------|
| `index.html` | 1ページ構成の本体。`data-i18n` / `data-i18n-html` / `data-i18n-attrs`。CSS/JS は `?v=` でキャッシュバスト |
| `js/main.js` | 翻訳辞書（`ja` / `en` / `ko` / `zh`）、言語切替、外部 URL の allowlist 付き整形、口コミスコア fetch |
| `css/style.css` | メインスタイル（メディアクエリ込みの集約ファイル） |
| `css/tokens.css` | デザイントークン（`style.css` から import） |
| `scripts/check-i18n-keys.js` | HTML で使う i18n キーが `main.js` の各言語に揃っているか検証 |
| `scripts/generate-mobile-images.cjs` | `images/opt/` 向け WebP 生成（入力パスはスクリプト内に列挙） |
| `api/review-scores.js` | 星評価 API（キー未設定時は環境変数・固定値フォールバック） |
| `public-mock.html` / `js/public-mock.js` | 簡易モック用。本番は通常 `index.html` のみで可 |

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

1. **Git**  
   `master`（または接続ブランチ）へ `push` で自動デプロイする設定が一般的。

2. **Git が反映されない場合**  
   ダッシュボードの Production Branch・連携リポジトリを確認。緊急時はローカルから:
   ```bash
   cd /path/to/repo
   npx vercel deploy --prod
   ```
   本プロジェクト例では `minouguns-projects/sushi-zen` に紐づく。

3. **環境変数（`api/review-scores.js`）**  
   - `GOOGLE_MAPS_API_KEY` / `GOOGLE_PLACE_ID`（任意で Places API 本番値）  
   - 未設定時は `GOOGLE_RATING_FALLBACK` 等で静的フォールバック

4. **OGP・canonical**  
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
- [ ] `git push` または `npx vercel deploy --prod` で本番確認（シークレットウィンドウ推奨）

---

## 鮨し禅版で入れた主なカスタム（雛形としての参考）

別店に流用する際、「そのまま使う／文言だけ差す／構造ごと削る」の判断用です。

- **About / 想い** … 画像と `alt` キーの対応、`content__image_right` による左右レイアウト
- **大将** … `content__image_right` で文左・写真右
- **トップ下ギャラリー** … 4枚構成、`slide__set` を 4 列グリッド + マーキー最大幅拡張
- **こだわり** … 3カードを全幅横一列（ブレークポイント別の `concept-grid` 調整）
- **コピー** … 例: `concept_card_1_text` を「温度まで繊細に演出し…」に変更
- **デプロイ** … Git push に加え CLI 本番デプロイで確実に反映

---

## 関連リンク（公式・インフラ）

- リポジトリ: `https://github.com/minougun/sushi-shizen`
- Vercel（プロジェクトはアカウント内で確認）: `https://vercel.com/dashboard`
- TableCheck 等の予約 URL は店舗ごとに差し替え（`main.js` の allowlist にホストが含まれること）

---

## 更新履歴（このドキュメント）

- 2026-04-05: 初版（鮨し禅サイトを雛形として再利用するための運用・構成メモ）
