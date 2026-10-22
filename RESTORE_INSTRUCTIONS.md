# FRADELICA LP 復元手順書

ローカルの `fradelica-lp` フォルダを削除した後に、プロジェクトを再構築・復元する手順です。

## リポジトリ情報
- **GitHub URL**: `https://github.com/miyazakikna/fradelica-lp.git`
- **主要ブランチ**: `main`（最新同期済み）、`develop`（最新同期済み）

---

## 復元手順

### 1. リポジトリのクローン
ターミナルを開き、復元先ディレクトリへ移動してクローンします。

```bash
cd "/Users/miyazaki/Documents/01_株式会社Amelio/99_過去プロジェクト/2025/FRADEL/01_github"
git clone https://github.com/miyazakikna/fradelica-lp.git
cd fradelica-lp
```

### 2. 依存パッケージのインストール
Node.js 環境にて以下を実行します。

```bash
npm install
```

### 3. 動作確認（開発サーバー起動）
```bash
npm run dev
```
ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスし、LPが表示されることを確認します。

### 4. ビルド確認
```bash
npm run build
```
`✓ Compiled successfully` と表示されればビルド成功です。

---

## 補足事項
- 本プロジェクトは外部APIキーなどの `.env` 環境変数への依存はありません。クローンして `npm install` するだけで即座に動かせます。
