export default {
  namespaced: true,
  state: {
    works: [
      {
        title: 'サーバーデプロイ用ポートフォリオ',
        img: 'https://pbs.twimg.com/profile_banners/885036975136395264/1640313696/1500x500',
        body: `
# ポートフォリオ作りました！

## 使用言語

- JavaScript

## フレームワーク

Vue

## 制作日

2年生時 2021年7月頃 制作

## こだわったこと

レスポンシブWebデザイン
`,
      },
      {
        title: 'リアルタイムコード比較',
        img: 'https://raw.githubusercontent.com/yumekiti/Diff_Sync_Code/master/public/icon.png',
        body: `
# Diff Sync Code

https://diff-sync-code.up.railway.app/

## 問題定義

学校の課題のコードを書いているとA君のコードでは動くけどB君のコードでは動かないと言う事があり
difffというサイトを使い差分をとり構文ミスを見つけ解決できた。
だがこのサイトでは１つのパソコンに２人のコードを入れなければならなく、手間だと感じた。
なので2人のパソコンでリアルタイムで差分を取れたら良いのではと考え制作することにした。

## 目的

コードをリアルタイムで差分を取りミスを探し学びにつなげる

## ターゲット

コーディングの課題を2人以上で取り組んでいるエンジニア

## 使用言語

- TypeScript
- CSS

## フレームワーク

Next

## 主要ライブラリ

- monaco-editor
- socket.io
`,
      },
    ],
  },
};
