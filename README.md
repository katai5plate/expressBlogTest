# expressBlogTest
mysqlとexpressで簡易ブログを出力するものを作ってみるテスト

# Install
```coffee
git clone https://github.com/katai5plate/expressBlogTest
cd expressBlogTest
yarn install
```

# Description
- mysqlが以下のように設定されていると動きます
  - user/pass: root
  - DB: BlogTest
  - Table: blog
    - date(DATERIMW): 投稿日時
    - title(TEXT): 記事タイトル
    - content(TEXT): 記事HTML
    - 照合順序: utf8mb4_general_ci
- `yarn start` すると http://localhost:3000/ に記事が出力されます
- 出力を更新したい場合はもう一度実行し直してください
