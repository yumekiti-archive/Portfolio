export default {
    namespaced:true,
    state: {
        works:[
            {
                id: 1,
                text: `
                    サーバーデプロイ用にポートフォリオ作ってみました。
                    フロントエンドにVueを使い、Dockerのコンテナにデータを置き表示している。
                `,
                url: 'http://yumekiti.mydns.jp:1500/',
                charge: 'フロントエンド',
                purpose: 'サーバーデプロイ用',
                target: '特になし',
                about: `
                    レスポンシブなデザインで作ったこと。
                `,
            },
            {
                id: 2,
                text: `
                    リアルタイムでコードを比較できるアプリを制作しました。
                    Nest.js のみで動いています。
                `,
                url: 'https://diff-sync-code.up.railway.app/',
                charge: 'フロントエンド',
                purpose: 'サーバーデプロイ用',
                target: '特になし',
                about: `
                    レスポンシブなデザインで作ったこと。
                `,
            },
        ],
    },
}