# BusinessCard

モダンでレスポンシブなデジタル名刺アプリケーション。React 19とTypeScriptで構築され、美しいグラデーションアクセントとダークモード対応が特徴です。

## 特徴

- 🎨 **モダンなデザイン** - クリーンでプロフェッショナルな外観
- 🌓 **ダークモード対応** - システム設定に連動し、ユーザーの好みを記憶
- 📱 **レスポンシブデザイン** - モバイルファーストで全デバイスに対応
- ⚡ **高速パフォーマンス** - Vite + Bunによる超高速ビルド
- 🎯 **TypeScript** - 型安全性とより良い開発体験
- 🎨 **Tailwind CSS v4** - 最新の Utility-first CSS フレームワーク

## 技術スタック

- **フレームワーク**: React 19 + TypeScript 5.8
- **ビルドツール**: Vite 7 + SWC
- **パッケージマネージャー**: Bun
- **スタイリング**: Tailwind CSS v4
- **コード品質**: Biome (フォーマッター + リンター)

## セットアップ

### Dev Container を使用する場合（推奨）

このプロジェクトは Dev Container に対応しており、VS Code や GitHub Codespaces で簡単に開発環境を構築できます。

1. VS Code に [Dev Containers拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) をインストール
2. リポジトリをクローンして VS Code で開く
3. 「Reopen in Container」を選択

Dev Container には以下が含まれています：
- Bun
- Claude Code
- Biome
- その他の開発に必要な拡張機能

### ローカル環境での開発

#### インストール

```bash
# リポジトリをクローン
git clone https://github.com/TakumiOkayasu/BusinessCard.git
cd BusinessCard

# devcontainerの起動をしてください

# 依存関係をインストール
bun install
```

### 開発サーバーの起動

```bash
bun run dev
```

ブラウザで http://localhost:5173 を開いてください。

### ビルド

```bash
bun run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

### その他のコマンド

```bash
# コードのフォーマットとリント
bun run check

# ビルド結果のプレビュー
bun run preview
```

## カスタマイズ

### 名刺データの編集

`public/data/info.json` ファイルを編集して、あなたの情報に更新してください：

```json
{
  "name": "あなたの名前",
  "position": "あなたの役職",
  "email": "your.email@example.com",
  "github": "https://github.com/yourusername",
  "location": "あなたの住所"
}
```

### カラーテーマの変更

グラデーションカラーやその他のスタイルは、Tailwind CSSのユーティリティクラスを使用して簡単にカスタマイズできます。主要なコンポーネントは `src/components/` ディレクトリにあります。

## プロジェクト構造

```
BusinessCard/
├── src/
│   ├── components/      # UIコンポーネント
│   ├── hooks/          # カスタムフック
│   ├── types/          # TypeScript型定義
│   ├── App.tsx         # メインアプリコンポーネント
│   └── BusinessCard.tsx # 名刺コンテナ
├── public/
│   └── data/           # 名刺データとアイコン
└── 設定ファイル
```

## 貢献

このプロジェクトへの貢献を歓迎します！以下の手順でプルリクエストを送ってください：

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット　プレフィックスを頭につけてください (`git commit -m '(feat|bug|...): Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feat/amazing-feature`)
5. プルリクエストを作成

### 改善提案

以下のような改善を歓迎します：

- 🎨 デザインの改善やアニメーションの追加
- 🌍 多言語対応
- ♿ アクセシビリティの向上
- 🚀 パフォーマンスの最適化
- 📱 モバイル体験の向上
- 🧪 テストの追加
- 📚 ドキュメントの改善
- 
---
