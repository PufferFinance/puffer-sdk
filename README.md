<div align="center">
  <h1>Puffer SDK</h1>

  <a href="https://github.com/pufferfinance/puffer-sdk/actions/workflows/build-and-test.yml?query=branch%3Amain">
    <img alt="build" src="https://github.com/pufferfinance/puffer-sdk/actions/workflows/build-and-test.yml/badge.svg?branch=main" />
  </a>
  <a href="https://github.com/PufferFinance/puffer-sdk/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/github/license/pufferfinance/puffer-sdk" />
  </a>
  <a href="https://www.npmjs.com/package/@pufferfinance/puffer-sdk">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/@pufferfinance/puffer-sdk?logo=npm" />
  </a>
  <a href="https://www.npmjs.com/package/@pufferfinance/puffer-sdk">
    <img alt="npm version" src="https://img.shields.io/npm/v/@pufferfinance/puffer-sdk?label=version&logo=npm" />
  </a>
  <!-- TODO: ADD COVERAGE BADGE -->

  <p>SDK to seamlessly interact with puffer smart contracts<p>
</div>

## Usage

Install the package.

```sh
npm install @pufferfinance/puffer-sdk
```

Example code to check pufETH balance.

```ts
import {
  PufferClientHelpers,
  PufferClient,
  Chain,
} from '@pufferfinance/puffer-sdk';

const walletClient = PufferClientHelpers.createWalletClient({
  chain: Chain.Holesky,
  provider: window.ethereum,
});
const pufferClient = new PufferClient(Chain.Holesky, walletClient);
const [walletAddress] = await pufferClient.requestAddresses();

const balance = await pufferClient.vault.balanceOf(walletAddress);
```

## Features

- Interact with puffer smart contracts.
- Deposit ETH to mint pufETH.
- Deposit stETH to mint pufETH.
- Check pufETH balance.
- Get latest rate of pufETH compared to ETH.
- and much more.

## Documentation

Check the [documentation website](https://pufferfinance.github.io/puffer-sdk/) for detailed documentation and guides.

## Development

Install dependencies.

```sh
pnpm install
```

Start the package in watch mode.

```sh
pnpm dev
```

Setup linking so the package can be linked to other projects locally.

```sh
pnpm link --global
```

To link the package to a local project, run the following command.

```sh
pnpm link --global @pufferfinance/puffer-sdk
```

## Release

The release is automated using [release-it](https://github.com/release-it/release-it) and the [publish.yml](./.github/workflows/publish.yml) GitHub action. The action can be [dispatched manually](https://github.com/PufferFinance/puffer-sdk/actions/workflows/publish.yml) to make the release.
