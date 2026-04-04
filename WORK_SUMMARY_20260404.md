# 作業サマリー（2026-04-04 〜 本セッションまで）

対象リポジトリ: [minougun/sushi-shizen](https://github.com/minougun/sushi-shizen)  
ローカル: `/mnt/c/Users/minou/sushi-shizen/`  
本番: [https://sushi-zen.vercel.app/](https://sushi-zen.vercel.app/)

---

## 1. ヒーロー・背景（トップ）

- **左端の縦グラデ（ヴィネット）**: `header::after` の `linear-gradient(90deg, …)` を削除し、暗いグレー背景（`.page-bg-parallax` の `#0f1114` 等）は維持。
- **参照スクショに合わせたトーン**: `.page-bg-parallax` に複数層のグラデ（上・左・ヴィネット・左上の淡い円）を重ね、ベース色を深いチャコール系に調整。
- **「まだ明るい」対応**: 全面の黒トーン強化、周辺ヴィネット強化、`body` / `body::before` / ヘッダーオーバーレイの暗さを同期。
- **パララックス**: 固定背景の積層順・`background-size` 等は維持しつつトーンのみ調整。

## 2. コンポーネント・セクション

- **おすすめコース画像**: `Downloads/course-omakase.jpg` → `images/photo/course-omakase.jpg` に差し替え。
- **TableCheck（booking-card）**:
  - ホバーは当初「今すぐ予約」系の金グラデ → **淡いオレンジ** → 最終的に **背景は据え置き・文字色のみ** 変化。
- **ご案内（`#informationSection`）**: 要約・地図CTA・`dl`・TableCheck 案内文・地図を中央寄せ。`info__booking_flow` は左ボーダーをやめ上線区切りに。
- **ご予約（`#reserveSection`）**:
  - タイトル・メタ・リンク・注記の中央寄せ。
  - TableCheck ブロックは **左罫線＋`padding` のラッパー**（`booking-card-block--ruled`）方式に統一（`::before` 廃止で線と文字の重なりを解消）。
  - ラッパー: `border-left: 2px`、`padding-left: 24px`、`padding-right: 20px`、`width: max-content` + `margin-inline: auto`。
  - カード内は **左揃えの縦積み**（ラベル → CTA → ブランド）。`booking-card__reserve-line` ラッパーは削除しヒーローと同構造に。
- **ヒーロー文言・評価行**:
  - `hero_lead` 2行目を `header__lead-nowrap` で一行化（`clamp` で横スクロールなし）。
  - 食べログ / Google の表示順を **食べログ → `/` → Google** に入れ替え。
  - `trust_tabelog_sublabel` を一行（`white-space: nowrap`）に。
  - 「TableCheckで予約する」CTA 行の `nowrap` 等。
- **ヒーロー画像**: `Downloads/sushi-photo-0.png` → `images/photo/sushi-photo-0.png` に差し替え（パスは従来どおり `./images/photo/sushi-photo-0.png`）。

## 3. レスポンシブ・その他

- 狭幅向け: ナビ横スクロール、safe-area、`header` / `body::before` のメディアクエリ調整（会話前半）。
- `index.html` の `style.css` / `main.js` の `?v=` キャッシュバストを随時更新。

## 4. デプロイ・Git

- **Vercel 本番**: `npx vercel deploy --prod --yes`（`.vercel/project.json` の `sushi-zen`）。
- **`origin` 未設定だったため** [minougun/sushi-shizen](https://github.com/minougun/sushi-shizen) を `gh repo create` で作成し、`master` を **`git push -u origin master`**。

---

## 主要変更ファイル（目安）

| 種別 | パス |
|------|------|
| スタイル | `css/style.css` |
| ページ | `index.html` |
| i18n | `js/main.js`（`hero_lead` の HTML 断片等） |
| 画像 | `images/photo/course-omakase.jpg`, `images/photo/sushi-photo-0.png` |

---

## 参照にしたローカルファイル（例）

- `C:\Users\minou\Downloads\スクリーンショット 2026-04-04 214538.png`（左ヴィネット）
- `C:\Users\minou\Downloads\スクリーンショット 2026-04-04 215713.png`（背景トーン）
- `C:\Users\minou\Downloads\スクリーンショット 2026-04-04 221713_sushi-zen.vercel.app.jpg`（ご予約中央）
- `C:\Users\minou\Downloads\スクリーンショット 2026-04-04 223850.png`（ご予約ブロック）
- `C:\Users\minou\Downloads\スクリーンショット 2026-04-04 224536.png`（ご予約レイアウト確定）
- `C:\Users\minou\Downloads\course-omakase.jpg`
- `C:\Users\minou\Downloads\sushi-photo-0.png`
- `C:\Users\minou\Downloads\名称未設定 22.jpg`（ホバー色の参考）

---

## 未コミットの注意（作業環境による）

`git status` により、別作業の変更（例: `images/bg/AdobeStock_545367061.png`）や未追跡ファイルが残っている場合があります。本サマリーは **鮨し禅サイト関連の意図した変更** を中心に記載しています。
