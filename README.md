# Membership Console

![CI](https://github.com/membership-console/membership-console/workflows/CI/badge.svg)
![Build](https://github.com/membership-console/membership-console/workflows/Build/badge.svg)
![version](https://img.shields.io/badge/version-1.0.0__SNAPSHOT-blue.svg)

## 概要

本プロジェクトは汎用的なグループウェアの統合 UI です。

## 開発

### 開発環境

-   Node.js 18
-   Angular 14

### インストール

```shell
$ npm install
```

### ビルド

ビルドに成功すると、`dist`直下に静的 HTML ファイルが生成されます。

```shell
# build for local
$ npm run build

# build for dev
$ npm run build:dev

# build for prod
$ npm run build:prod
```

### ローカルサーバを起動

起動に成功すると、[http://localhost:4200](http://localhost:4200)からアクセスできます。

```shell
$ npm run start
```

### テスト & コードチェック

```shell
# test
$ npm run test:ci

# code check
$ npm run check

# code format
$ npm run format
```

### 依存関係のアップデート

```shell
# check outdated dependencies
$ npm outdated

# update dependencies
$ npx npm-check --update
```
