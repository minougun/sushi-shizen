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
| 大将 `#chefSection` | 店舗に「大将」ストーリーが無い場合は、**「店の想い」「ブランドストーリー」** に差し替え（ナビ文言キー `nav_chef` を `nav_story` 等に変えるなら HTML・4 言語すべて更新） |
| こだわり `#committedSection` | 食べログ「お店のこだわり」相当をオリジナル文で3カード化（例: オーガニック素材と江戸前、炭火焼鳥、一枚板カウンターのライブ感） |

---

## 5. 多言語（i18n）実装方針

- 対象言語: **ja / en / ko / zh**（雛形どおり）。
- HTML に `data-i18n` / `data-i18n-html` / `data-i18n-attrs` を追加・変更したら、`js/main.js` の **4 言語ブロックすべて**に同一キーを定義する。
- デプロイ前に必ず `npm run check:i18n` を成功させる（CI と同コマンド）。
- `localStorage` キー（現状 `sushi-zen-language` および `index.html` ブートスクリプト内の同一文字列、`window.__SUSHI_ZEN_BOOT`）は、別サイトと干渉しないよう **店舗用プレフィックスに変更**する（例: `sushi-osaka-organic-language` / `__SUSHI_OSAKA_ORGANIC_BOOT`）。変更時は `main.js` と `index.html` を**両方**直す。

---

## 6. 予約・外部リンク（重要：コード変更の要否）

現状 `js/main.js` では、`[data-tablecheck]` 付きリンクは **ホストが `tablecheck.com` のみ**許可される（`sanitizeExternalHttpsUrl(..., "tablecheck")`）。

**SUSHI OSAKA Organic の公式予約が TableCheck でない場合**（食べログネット予約のみ等）、次のいずれかを実装仕様として選ぶ。

| 案 | 内容 |
|----|------|
| A | 店舗が TableCheck を契約し、従来どおり `TABLECHECK_URLS` + `data-tablecheck` を使用 |
| B | **食べログ予約 URL** を使う: `data-tablecheck` を流用せず、新たに `data-booking`（仮）等を設け、`tabelog.com` / `yoyaku.tabelog.com` を allowlist する `sanitize` 分岐を追加する |
| C | 予約ボタンは `tel:` のみにし、ネット予約はご案内文の通常リンク（`rel="noopener noreferrer"`）で **別属性・別 sanitize 種別**で扱う |

実装書のゴール: **実装開始前に「公式の予約 URL（TableCheck か 食べログ か その他）」を1つに決める**。

電話リンク: `href="tel:07010091009"`（表示は `070-1009-1009`）。モバイル表示で問題ない形式に統一。

---

## 7. メタ情報・OGP・地図の同期箇所

ガイドの「住所を変えたときに揃える場所」に加え、Organic 用に次を列挙しておく。

| 種別 | 主な更新ファイル |
|------|------------------|
| `title` / `description` / `keywords` / OGP / Twitter / canonical | `index.html` + `js/main.js` の各言語メタ |
| Google Maps 検索・埋め込み iframe | `index.html`（`data-google-maps-link`、`q=` クエリ） |
| 口コミ API フォールバック | `js/main.js` の `REVIEW_DEFAULTS`、`review-scores.json`（使用時）、`api/review-scores.js` |
| 食べログ公式ページリンク（任意・掲載する場合） | `REVIEW_DEFAULTS.tabelog.url` を `https://tabelog.com/osaka/A2701/A270108/27149380/` に更新するなど |

**評価スコアの表示方針:** 第三者サイトの点数を LP に出す場合は、表記ルール・更新責任を確認する。雛形では Google / 食べログ星ブロックは削除済みとのことなので、**Organic でも同様に非表示**とするのが安全。

---

## 8. 画像・アセット

| アセット | 方針 |
|----------|------|
| ヒーロー | `images/photo/sushi-photo-0.png` 相当を店舗用に差し替え。モバイル WebP は `npm run images:mobile` / `scripts/generate-mobile-images.cjs` にパスを追加 |
| ギャラリー 4 枚 | `images/slider/slide-1.png`〜`slide-3.png` + 4 枚目 `images/photo/sushi-photo-5.png`（ガイドの対応表どおり）。寿司・焼鳥のバランスを考慮 |
| OGP 画像 | `images/ogp-*.png` を新規デザイン（1200×630 前後） |
| favicon | ブランドに合わせて `images/favicon.svg` を差し替え検討 |

差し替え後は `index.html` の CSS/JS/主要画像の **`?v=` キャッシュバスト**を更新する。

---

## 9. デザイン・UI（雛形からの継承）

- PC: 既存のダーク基調レイアウトを基本継承。
- 767px 以下: 固定トップバー・全画面ナビ・クリーム地＋ゴールド帯見出し（ガイド記載の「おやじ風」ブロック）。店名・配色の微調整は `css/style.css` 末尾のメディアクエリ側で検討。
- 住所は **`.address__line`（建物・番地）** と **`.address__subline`（駅からの補足）** に分離し、4 言語で同じ HTML 骨格を保つ。

---

## 10. 実装タスク一覧（チェックリスト）

実装フェーズ用。順序は並列可能な箇所あり。

- [ ] リポジトリ複製・Vercel プロジェクト作成・`vercel link`
- [ ] 予約 URL 方針決定（TableCheck / 食べログ / 電話のみ）に応じた `main.js` のリンク sanitize 設計
- [ ] `index.html` 店名・全セクション文案・電話・営業時間・注意書きの差し替え
- [ ] `js/main.js` `translations` 全キー（ja/en/ko/zh）の同期、`STORAGE_KEY` とブートスクリプトのリネーム
- [ ] 地図 URL・iframe・`REVIEW_DEFAULTS`・フッター住所の一致確認
- [ ] Instagram 等 SNS リンクの追加（フッター or ご案内）
- [ ] 画像差し替えと `generate-mobile-images.cjs` 更新、`npm run images:mobile`
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

---

## 12. 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-04-06 | 初版（雛形ガイド準拠・食べログ参照・実装前仕様として整理） |
