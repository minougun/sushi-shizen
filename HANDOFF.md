# Sushi Zen 引き継ぎメモ

## 参照先

- 本番 URL: `https://sushi-zen.vercel.app/`
- 公開用モック URL: `https://sushi-zen.vercel.app/public-mock.html`
- ローカル作業パス: `/mnt/c/Users/minou/sushi-shizen`
- ローカル確認 URL: `http://localhost:8080/`
- 参考サイト:
  - `https://sushi-fukushima.com/`
  - `https://www.sushiya-yohee.com/`
  - `https://sushi-kirimon.com/`

## デザイン方針

### 現在の前提

- 最重要コンセプトは「インバウンドの外人観光客が、サイトを見てそのまま予約したくなること」。
- 高級寿司店らしい静けさを保ちつつ、予約判断に必要な情報は早く見せる。
- 写真で押し切る前段として、UI と文言だけで不安を減らし、予約まで落とす構成にしている。

### 現在の見た目の方向

- 配色は藍色と灰色を中心に抑え、文字は白ベース。
- `鮨し禅` の屋号は金色で見せる。
- トップ背景は金箔系アセットを使用。
  - `/mnt/c/Users/minou/sushi-shizen/images/bg/AdobeStock_545367061.png`
- ライトモードとダークモードで配色は変えない。
- 洋風の強い見出し感は抑え、和文中心の静かなトーンに寄せている。
- パネル感は必要最小限に絞り、主役は `ご予約`。

### UI 上の現状

- ヒーローで `価格 / 席数 / アクセス / 予約方法` を即読できる構成。
- 言語切替は `JP / EN / KR / CN`。国旗は絵文字ではなく SVG。
- 英語版は観光客向けに、情報の順番と文言を短く整理済み。
- スクロール時のフェード演出あり。
  - 一度表示された要素は再アニメーションしないよう修正済み。
- 文章量は全体的に圧縮済み。
  - ヒーロー、店舗紹介、大将、こだわり、予約、地図前要約まで、以前よりかなり短い。

### まだ弱い点

- 最大の課題は実写不足。
- 現在の `images/photo/` と `images/slider/` は仮素材中心で、最後の決め手としての実在感が弱い。
- UI と文言だけでかなり詰めたが、高級感を一段上げるには実写差し替えが必要。

## 実装方針

### 現在の主要ファイル

```text
/mnt/c/Users/minou/sushi-shizen
├── index.html
├── public-mock.html
├── HANDOFF.md
├── CSS_CHANGES_20260403.md
├── css/
│   ├── style.css
│   ├── public-mock.css
│   └── media/
│       ├── all.css
│       ├── pc.css
│       ├── tablet.css
│       └── smartphone.css
├── js/
│   ├── main.js
│   └── public-mock.js
└── images/
    ├── bg/
    ├── flags/
    ├── photo/
    ├── slider/
    └── ogp-sushi-shizen.svg
```

### 実運用で見るファイル

- 本体ページの CSS は基本的に `/mnt/c/Users/minou/sushi-shizen/css/style.css` を見る。
- モックページの CSS は `/mnt/c/Users/minou/sushi-shizen/css/public-mock.css` を見る。
- `/mnt/c/Users/minou/sushi-shizen/css/media/` 配下は過去構成の名残があるため、現状確認の主軸にはしない。
- 多言語文言と切替ロジックは以下。
  - `/mnt/c/Users/minou/sushi-shizen/js/main.js`
  - `/mnt/c/Users/minou/sushi-shizen/js/public-mock.js`

### 実装済みの主な項目

#### 基盤整理

- `placehold.co` 依存を除去。
- `jQuery 1.12.4` を削除。
- `viewport` のズーム禁止を削除。
- OGP を最低限整理。
- ブランド名を `sushi-shizen` から `sushi-zen` に変更。

#### 多言語対応

- `JP / EN / KR / CN` 切替対応済み。
- `title`、`meta description`、OGP、見出し、本文、ナビ、予約文言、店舗情報を切替。
- 選択言語は `localStorage` に保存。
- 非日本語ブラウザでは英語を優先する方向に調整済み。

#### 予約転換改善

- ヒーローで `夜のおまかせ価格 / 10席 / 心斎橋5分 / 食べログ予約` を即読化。
- 予約セクションを強め、`ご予約` を主役に調整。
- 予約ボタン周辺に、予約理由・予約条件・安心材料を追加。
- 英語版では説明を減らし、短く予約判断できる文に変更。

#### 店舗情報の改善

- 英語版だけ、情報の並び順を観光客向けに再編。
- Google Map 直前に短い英語要約を追加。
- 価格表現は `per person` を意識した方向へ整理済み。

#### 大将セクション

- `大将 抑野和彦（そものかずひこ）` セクションを本体・モック両方に追加。
- 使用画像:
  - `/mnt/c/Users/minou/sushi-shizen/images/photo/chef-somono.svg`

#### 国旗表示

- 国旗は SVG 画像に統一。
  - `/mnt/c/Users/minou/sushi-shizen/images/flags/jp.svg`
  - `/mnt/c/Users/minou/sushi-shizen/images/flags/us.svg`
  - `/mnt/c/Users/minou/sushi-shizen/images/flags/kr.svg`
  - `/mnt/c/Users/minou/sushi-shizen/images/flags/cn.svg`

#### 背景と配色

- ダークモード時も色を変えない。
- 紫や余計な色変化は除去済み。
- トップ内側の枠線は削除済み。
- トップ背景のタイル感は除去済み。

#### アニメーション

- スクロール時のフェードイン演出を実装。
- 最後にバウンドっぽく見える再発火は修正済み。
- `prefers-reduced-motion` では過剰な動きを避ける。

### 現在のページ構成

#### 本体 `index.html`

1. ヒーロー
2. ナビ
3. 写真帯
4. 鮨し禅について
5. 鮨し禅の想い
6. 大将
7. こだわり
8. コース
9. ご予約
10. ご案内
11. フッター

#### モック `public-mock.html`

- インバウンド向けの予約導線を優先した、より短い構成。
- 先方確認用・比較用として残している。

### 直近の重要変更

- コピー量を全体的に半分近くまで圧縮。
- 英語ヒーロー文言をかなり短くした。
- 店舗情報の英語表現も短文化。
- 予約したくなる理由をヒーローと予約周辺で前に出した。
- `Chef Kazuhiko Somono` まわりの信頼材料を追加。
- CSS は編集しやすいように、本体は `style.css` 主体へ簡素化。

### 確認済み事項

- 本番 URL:
  - `https://sushi-zen.vercel.app/`
  - `https://sushi-zen.vercel.app/public-mock.html`
- JS 構文確認:
  - `node --check /mnt/c/Users/minou/sushi-shizen/js/main.js`
  - `node --check /mnt/c/Users/minou/sushi-shizen/js/public-mock.js`

## 未決定事項

### 優先度が高いもの

1. 実写素材への差し替え
2. 本体とモックのどちらを正式提出導線にするか最終決定
3. コース内容と価格の正式文言反映
4. EN / KR / ZH 文言の店舗確認
5. ロゴ画像化するかどうかの判断

### 現時点の判断メモ

- 予約転換だけで見れば、文言と導線はかなり改善済み。
- 実写を除外した UI / 導線 / 情報設計のペルソナ評価は、現状で 90 点前後の水準。
- ここから先で一番効くのは、文言微調整ではなく実写差し替え。

### 備考

- `/mnt/c/Users/minou/sushi-shizen/CSS_CHANGES_20260403.md` は CSS の細かい調整履歴。
- CSS をダウンロードフォルダへ出した控えは以下。
  - `/mnt/c/Users/minou/Downloads/sushi-zen-css/style.css`
  - `/mnt/c/Users/minou/Downloads/sushi-zen-css/public-mock.css`
