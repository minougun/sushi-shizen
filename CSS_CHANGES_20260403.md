# sushi-shizen CSS 改修メモ（2026-04-03）

## 対象ファイル

- `css/media/all.css`
- `css/media/pc.css`
- `css/media/smartphone.css`

---

## 1. ダークモード 視認性修正

### 問題

| 箇所 | 内容 |
|---|---|
| `.section__chef_story` / `.intro__about_committed` / `.section__information` | `background-image: linear-gradient(rgba(255,255,255,0.22),…)` の白い重ね塗りが `#171919` の暗いセクション上に残り、明るいモヤとして浮いていた |
| こだわり・ご案内・予約セクションの `border-top` | 暗い茶 `rgba(111,84,51,0.16)` がダーク背景でほぼ不可視 |
| `.title__type1 .section__sub` / `.title__type2 .section__sub` | `opacity: 0.5 / 0.45` のまま → ダーク背景でテキストが潰れる |
| `.section__title_en` | `opacity: 0.5` → ダーク背景に消える |
| フッター著作権テキスト | `opacity: 0.5` で暗すぎ |
| `.access__link__small`（ご案内リンク） | ダークモードで色指定なし |

### 修正（`all.css` ダークモードブロック追記）

```css
/* 白グラデ除去 */
.section__chef_story,
.intro__about_committed,
.section__information { background-image: none; }

/* 罫線を金系に */
.section__committed_shari,
.section__information .info__panel_base,
.content__list_contact { border-top-color: rgba(216,190,138,0.17); }

/* opacity 依存テキストを明示色に */
.title__type1 .section__sub,
.title__type2 .section__sub { opacity: 1; color: rgba(216,190,138,0.75); }
.section__title_en         { opacity: 1; color: rgba(242,236,223,0.55); }
html[lang="ja"] .section__title_en,
html[lang="ja"] .title__type1 .section__sub,
html[lang="ja"] .title__type2 .section__sub { opacity: 1; }

/* フッター・リンク */
.content__footer_copyright { opacity: 0.65; }
.access__link__small       { color: rgba(242,236,223,0.82); }
.access__link__small:hover { color: #ddc293; }
```

---

## 2. 高級寿司店 UI 改善（ライトモード共通）

### セクションタイトル下の装飾線

`background: rgba(216,190,138,0.62)` の単色 → 両端が消えるテーパードグラデーションに変更。  
左揃えタイトルと中央揃えタイトルで方向を出し分け。

```css
/* 左揃え */
.content__type1 .content__type1_origin .section__title::after,
.chef__name::after {
  background: linear-gradient(90deg, rgba(216,190,138,0.82), rgba(216,190,138,0.12));
}
/* 中央揃え */
.intro__about_committed .section__title::after,
.title__type1 .section__main::after {
  background: linear-gradient(90deg, rgba(216,190,138,0.12), rgba(216,190,138,0.82) 50%, rgba(216,190,138,0.12));
}
```

### `title__type2` 左ボーダー

`2px solid #5a4327`（暗い茶）→ `1px solid #a07840`（上品な金）

### ナビゲーション ホバー下線

色変化に加え、底から伸びる細い金線（幅 60%、スライドアニメ）を追加。

```css
.navigation__inner ul li a { position: relative; }
.navigation__inner ul li a::after {
  content: ""; position: absolute; left: 50%; bottom: 0;
  width: 0; height: 1px; background: rgba(216,190,138,0.7);
  transition: width 0.35s ease, left 0.35s ease;
}
.navigation__inner ul li a:hover::after { width: 60%; left: 20%; }
```

### コースセクション英語サブタイトル

`opacity: 0.5`（コントラスト比 約 2.9:1）→ `0.62`（`pc.css` / `smartphone.css` 両方）

### フッター上部 gold ライン

`border-top: 1px solid rgba(216,190,138,0.18)` を追加。

### `info__list > dt` ラベル色

`#6c5845` → `#7a6245`（わずかに明るく）

---

## 3. ナビゲーション位置修正

### 問題

`position: sticky; top: 0` により、スクロール時にヘッダーが消えてナビだけがトップに浮き上がっていた。

### 修正

```css
/* before */
.navigation { position: sticky; top: 0; … }
.section__slide_intro { margin-top: -72px; … }  /* sticky 前提のオフセット */

/* after */
.navigation { /* sticky 除去、position: relative がベースに戻る */ }
.section__slide_intro { /* margin-top 除去 */ }
```

---

## 4. `intro__about_concept` テキスト不可視バグ修正

### 問題

Visual Refresh の規則

```css
.content__type1 .content__type1_origin .section__text { color: rgba(47,36,26,0.88); }
```

が `.intro__about_concept`（濃紺背景 `#1f2a3a`）内にも適用され、  
**暗い茶色テキスト × 暗い紺背景 = 完全不可視** になっていた。

### 修正

```css
/* before: intro__about_concept にも適用されていた */
.content__type1 .content__type1_origin .section__text { color: rgba(47,36,26,0.88); }

/* after: 明るい背景の chef story のみに限定 */
.section__chef_story .content__type1_origin .section__text { color: rgba(47,36,26,0.88); }
```

---

## 5. `intro__about_concept` 背景色変更

### 問題

`background-color: #1f2a3a`（濃紺）のまま残っており、テキストが読めない。

### 修正

| | 変更前 | 変更後 |
|---|---|---|
| ライトモード背景 | `#1f2a3a`（濃紺） | `#dedad2`（温かみのある明るいグレー） |
| ライトモード文字色 | `#fff` | `#2f241a` |
| ダークモード背景（新規追加） | — | `#1c2535` |
| ダークモード文字色（新規追加） | — | `#f2ecdf` |
| デコレーション円 opacity | `0.15` | `0.08`（明背景で主張しすぎないよう） |

---

## 残課題（HANDOFF.md より再掲）

- 実写素材（`images/photo/` / `images/slider/`）への差し替えが高級感の最優先課題
- `index.html` と `public-mock.html` のデザイン完全統一
- EN / KR / ZH 文言の店舗正式表現への統一
- ロゴ画像化の検討
