# 人生の旅マップ

引越し遍歴を 3D マップで 120 秒かけて紹介する、Next.js 製の自己紹介サイトです。  
MapLibre GL JS で全画面マップを表示し、大村から奥沢まで 10 拠点を自動飛行します。

## ローカル起動

```bash
npm install
cp .env.example .env.local
npm run dev
```

`http://localhost:3000` を開くと、中央の「人生の旅をスタート」ボタンから旅を再生できます。

## 技術構成

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- MapLibre GL JS
- MapTiler Maps API

## MapTiler キー

地図スタイルは `NEXT_PUBLIC_MAPTILER_API_KEY` を使って MapTiler から読み込みます。  
ローカル開発では `.env.local`、GitHub Pages では Repository Secret に同名の値を設定してください。

## GitHub Pages 公開

静的公開用 workflow は `.github/workflows/deploy-life-journey-map-pages.yml` に追加してあります。  
`main` に push されると GitHub Pages に再デプロイされます。

前提:

- GitHub repository settings で Pages を `GitHub Actions` ソースに設定
- Repository Secret に `NEXT_PUBLIC_MAPTILER_API_KEY` を登録

公開 URL は project pages の場合、`https://<owner>.github.io/life-journey-map/` です。

## 補足

- 3D 建物は OpenFreeMap のベクタータイルを利用
- 最終地点の奥沢では 360 度 Orbit して停止
