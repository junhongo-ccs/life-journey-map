# ホンゴウ引っ越しマップ

生まれた街から現在まで、引っ越し遍歴を 3D マップでたどる Next.js 製の自己紹介サイトです。  
全画面の地図上を 10 拠点ぶん自動飛行し、最後は奥沢周辺を orbit して締めます。

公開 URL:  
[https://junhongo-ccs.github.io/life-journey-map/](https://junhongo-ccs.github.io/life-journey-map/)

## コンセプト

普通の自己紹介スライドではなく、移動そのものを自己紹介として見せるサイトです。

- 住んだ街を順番にたどる
- 到着ごとに地点名とエピソードを切り替える
- 最終地点の奥沢では寄りの視点で 360 度 orbit する

## 主な仕様

- 日本語 UI
- 全画面 3D マップ
- 総再生時間は約 120 秒
- 各拠点で `pitch: 60`
- 最終地点で orbit 演出
- OGP / Twitter カード用に静的 PNG を使用
- モバイルでも同じ導線で再生できるレスポンシブ UI

## 収録地点

1. 長崎県大村市
2. 山口県岩国市
3. 千葉県柏市
4. 神奈川県逗子市
5. 横浜市 大倉山
6. 目黒区 都立大学
7. 世田谷区 経堂
8. 品川区 西小山
9. 杉並区 荻窪
10. 世田谷区 奥沢

地点データとエピソードは [components/journey-map-experience.tsx](components/journey-map-experience.tsx) の `STOPS` に定義しています。

## 操作

- 開始前: `人生の旅をスタート` ボタンで再生開始
- 再生中: 地図カメラが各地点へ自動移動
- 終了後: ボタンが再表示され、再スタート可能

## 技術構成

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- MapLibre GL JS
- MapTiler Maps API

## ローカル開発

### 1. 依存関係を入れる

```bash
npm install
```

### 2. 環境変数を設定する

`.env.local` を作成して、次を設定します。

```bash
NEXT_PUBLIC_MAPTILER_API_KEY=YOUR_MAPTILER_API_KEY
```

キーがなくても OpenFreeMap スタイルへフォールバックして表示できます。

### 3. 開発サーバを起動する

```bash
npm run dev
```

`http://localhost:3000` で確認できます。

### 4. 品質確認

```bash
npm run lint
npm run build
```

## GitHub Pages 公開

このリポジトリは GitHub Pages へ静的公開する前提です。  
workflow は [.github/workflows/deploy-life-journey-map-pages.yml](.github/workflows/deploy-life-journey-map-pages.yml) にあります。

前提:

- GitHub repository settings で Pages の source を `GitHub Actions` にする
- Repository Secret に `NEXT_PUBLIC_MAPTILER_API_KEY` を登録する

`main` へ push すると Pages が再デプロイされます。

## ファイル構成

- [app/page.tsx](app/page.tsx)
  ページの入口
- [app/layout.tsx](app/layout.tsx)
  フォント、メタデータ、favicon、OGP 設定
- [app/globals.css](app/globals.css)
  全体テーマと MapLibre のスタイル読み込み
- [components/journey-map-experience.tsx](components/journey-map-experience.tsx)
  地点データ、カメラ制御、UI、レスポンシブ挙動
- [public/ogp-image.png](public/ogp-image.png)
  OGP / Twitter カード用画像
- [next.config.ts](next.config.ts)
  GitHub Pages 用 `basePath` と静的 export 設定

## メモ

- 3D 建物レイヤーは style 内の source 名を見て `maptiler_planet` または `openmaptiles` を自動選択します
- 地点ラベルは地図上に表示しつつ、オーバーレイカードでは現在地の見出しだけを簡潔に見せています
- Teams などのリンクプレビューは OGP を強くキャッシュすることがあります
