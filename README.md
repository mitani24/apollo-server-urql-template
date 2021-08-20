# apollo-server-urql-template

Apollo Server + urql の素振り環境

## Create Application

```sh
yarn create next-app -e https://github.com/mitani24/apollo-server-urql-template
```

## インストール

```sh
# root directory
yarn install
```

## コード生成

`graphql` ディレクトリの定義を元に以下のコードを生成します。

- サーバーの Resolver の型定義
- クライアントコード

```sh
# root directory
yarn codegen
```

## REST API の起動

REST API を 3001 ポートで起動します。

```sh
# api direcotry
yarn start
```

または

```sh
# api direcotry
yarn dev
```

## Apollo Server の起動

Apollo Server を 4000 ポートで起動します。

```sh
# server direcotry
yarn start
```

または

```sh
# server direcotry
yarn dev
```

## Client Application の起動

Client Application を 3000 ポートで起動します。

```sh
# client direcotry
yarn start
```

または

```sh
# client direcotry
yarn dev
```
