# @pufferfinance/smart-contract-lib

Library for interacting with puffer smart contract interface.

## Usage

There are multiple ways to use the package.

- [GitHub (Recommended)](#github-recommended)
- [GitHub Packages](#github-packages)
- [Local](#local)

### GitHub (Recommended)

> Note: You must have access to the [PufferFinance](https://github.com/PufferFinance) GitHub organization and [SSH setup for GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) for this to work.

Install the dependency through GitHub URL.

```sh
npm install github:pufferfinance/puffer-smart-contract-lib
pnpm install github:pufferfinance/puffer-smart-contract-lib
yarn add github:pufferfinance/puffer-smart-contract-lib
```

Add `#<tag>` (for example, `github:pufferfinance/puffer-smart-contract-lib#1.0.0`) at the end to use a different published tag from GitHub (<https://github.com/PufferFinance/puffer-smart-contract-lib/tags>).

### GitHub Packages

The package is published privately to GitHub Packages. It can be installed by authenticating to GitHub Packages. Please check [GitHub guide for installing a private package](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package).

Use `@pufferfinance` as the organization name and `@pufferfinance/smart-contract-lib` as the complete dependency name.

### Local

Clone this repository and locally link this package so it can used by other projects.

```sh
pnpm link --global
```

In the project where you want to use this package as a dependency, run the following command.

```sh
pnpm link --global @pufferfinance/smart-contract-lib
```

## Setup

Install dependencies.

```sh
pnpm install
```

Start the package in watch mode.

```sh
pnpm dev
```

## Release

The release is automated using [release-it](https://github.com/release-it/release-it) and the [`publish.yml`](./.github/workflows/publish.yml) GitHub action. The action can be [dispatched manually](https://github.com/PufferFinance/puffer-smart-contract-lib/actions/workflows/publish.yml) to make the release.
