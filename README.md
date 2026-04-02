# 人生の旅マップ

引越し遍歴を 3D マップで 120 秒かけて紹介する、Next.js 製の自己紹介サイトです。  
全画面の地図上を 10 拠点ぶん自動飛行し、最後は奥沢周辺を Orbit して締めます。

公開 URL:
[https://junhongo-ccs.github.io/life-journey-map/](https://junhongo-ccs.github.io/life-journey-map/)

## コンセプト

普通の自己紹介スライドではなく、地図上の移動体験そのものを自己紹介にするためのサイトです。

- 地図を見せながら住んだ街を順番にたどる
- 現在地と一言エピソードを到着の瞬間に切り替える
- 終点の奥沢ではカメラを寄せて 360 度 Orbit する

## 主な仕様

- 言語はすべて日本語
- 全画面 3D マップ
- 総再生時間は約 120 秒
- 各拠点で `pitch: 60`
- 最終地点で Orbit 演出
- モバイルでは開始ボタンの導線を優先した簡易 UI

## 収録地点

1. 大村
2. 岩国
3. 柏市
4. 逗子海岸
5. 大倉山駅
6. 都立大学駅
7. 経堂
8. 西小山
9. 荻窪
10. 奥沢

地点データとエピソードは [journey-map-experience.tsx](/Users/hongoujun/Documents/GitHub/life-journey-map/components/journey-map-experience.tsx) の `STOPS` に定義しています。

## 操作

- 開始前:
  中央の `人生の旅をスタート` ボタンで再生開始
- 再生中:
  地図カメラが各地点へ自動移動
- 終了後:
  ボタンが再表示され、再スタート可能

モバイルでは、開始ボタンがブラウザ下部 UI に重ならない位置へ調整されています。

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

### 2. MapTiler キーを設定する

```bash
cp .env.example .env.local
```

`.env.local` に次を設定します。

```bash
NEXT_PUBLIC_MAPTILER_API_KEY=YOUR_MAPTILER_API_KEY
```

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
workflow は [.github/workflows/deploy-life-journey-map-pages.yml](/Users/hongoujun/Documents/GitHub/life-journey-map/.github/workflows/deploy-life-journey-map-pages.yml) にあります。

前提:

- GitHub repository settings で Pages の source を `GitHub Actions` にする
- Repository Secret に `NEXT_PUBLIC_MAPTILER_API_KEY` を登録する

`main` へ push すると Pages が再デプロイされます。

## ファイル構成

- [app/page.tsx](/Users/hongoujun/Documents/GitHub/life-journey-map/app/page.tsx)
  ページの入口
- [app/layout.tsx](/Users/hongoujun/Documents/GitHub/life-journey-map/app/layout.tsx)
  フォント、メタデータ、全体レイアウト
- [app/globals.css](/Users/hongoujun/Documents/GitHub/life-journey-map/app/globals.css)
  全体テーマと MapLibre のスタイル読み込み
- [components/journey-map-experience.tsx](/Users/hongoujun/Documents/GitHub/life-journey-map/components/journey-map-experience.tsx)
  地点データ、カメラ制御、UI、レスポンシブ挙動
- [next.config.ts](/Users/hongoujun/Documents/GitHub/life-journey-map/next.config.ts)
  GitHub Pages 用 `basePath` と静的 export 設定

## メモ

- MapTiler キーがない場合は OpenFreeMap スタイルへフォールバックします
- 3D 建物レイヤーは style 内の source 名を見て `maptiler_planet` または `openmaptiles` を自動選択します
- 現在地表示は到着時に切り替わるので、移動中に次の地点を先出ししません
