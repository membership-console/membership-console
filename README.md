# Membership Console

![version](https://img.shields.io/badge/version-1.0.0__SNAPSHOT-blue.svg)

## 概要

本プロジェクトは汎用的なグループウェアの統合UIです。

## 開発

### 開発環境

- Node.js 16
- Angular 14
- yarn


### インストール

```shell
$ yarn
```

### ビルド

ビルドに成功すると、`dist`直下に静的 HTML ファイルが生成されます。

```shell
# local build
$ yarn build

# dev build
$ yarn build:dev

# prod build
$ yarn build:prod
```

### ローカルサーバを起動

起動に成功すると、[http://localhost:4200](http://localhost:4200)からアクセスできます。

```shell
$ yarn start
```


### テスト & コードチェック

```shell
# test
$ yarn run test:ci

# code check
$ yarn run check

# code format
$ yarn run format
```


### 依存関係のアップデート

```shell
# check outdated dependencies
$ yarn outdated

# update dependencies
$ yarn upgrade-interactive --latest
```
