# お品書きbot

## このbotができること
- 詳細はそのうち記載

---

## 事前に必要なもの

- Node.js
  - https://nodejs.org/ja/
  - 10系でしか動作確認してない。バージョン依存することはたぶんしてない。
- IFTTTのアカウント
- Google Sheets

## インストール～ビルド

### 1. 事前に必要なもの各種をダウンロードしてきてインストール

### 2. Node.jsパッケージインストール

`package.json`があるフォルダで、以下を実行

```
npm install
```

### 3. ビルド

```
npm run build
```

### 4. IFTTTの設定
- [IFTTT](https://ifttt.com/discover)でNew Appletを登録 
 
```
if Twitter then GoogleSheet
```
1. Twitterは以下
```
New liked tweet by you
```

2. Google Sheetは以下
```
Add row to spreadsheet
```
3. 他の設定は自由
4. 適当にふぁぼって動作テストする

### 5. Google Sheetの設定
1. 手順4.4でシートが出来てるので、それを開く
2. シートから、`ツール` > `スクリプトエディタ`
3. テキストエリアに、このプロジェクトのgasディレクトリに入ってるスクリプトの内容を張り付け
4. `公開` > `ウェブアプリケーションとして導入`
   - 適当なバージョンで設定
   - アプリケーションにアクセスできるユーザーを、`全員（匿名ユーザーを含む）`に設定
   - `更新` ※新規だと保存とかかも
5. 表示されたAPIのURLにアクセスしてみる(exeで終わるURL)
   - JSONが画面に表示されたらOK

## 設定

`config/default.json`をいい感じに書き換えてください。

意味はキー名から察するか、`src/types/common.ts`のConfig型を参照してください。

## 起動、停止

### A. サービスとしてバックグラウンド実行したい場合

#### 1. 起動

```
npm run service:start
```

#### 2. 停止

```
npm run service:stop
```

### B. フォアグラウンド実行したい場合(Ctrl+Cで止められるやつ)

#### 1. 起動

```
npm run start
```

#### 2. 停止

```
Ctrl+C
```

---

---

# やること

### Priority: High

- null

### Priority: Middle

- null

### Priority: Low

- null
