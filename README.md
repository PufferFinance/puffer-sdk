<div align="center">
  <h1>Puffer SDK</h1>

  <img alt="GitHub license" src="https://img.shields.io/github/license/pufferfinance/puffer-sdk?color=limegreen">
  <img alt="Downloads npm" src="https://img.shields.io/npm/dm/@pufferfinance/puffer-sdk?color=limegreen">
  <img alt="Version npm" src="https://img.shields.io/npm/v/@pufferfinance/puffer-sdk?label=version">
  <!-- ADD COVERAGE -->
  
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

- Getting started
- Guides

## Development

Install dependencies.

```sh
pnpm install
```

Start the package in watch mode.

```sh
pnpm dev
```

## Release

The release is automated using [release-it](https://github.com/release-it/release-it) and the [`publish.yml`](./.github/workflows/publish.yml) GitHub action. The action can be [dispatched manually](https://github.com/PufferFinance/puffer-sdk/actions/workflows/publish.yml) to make the release.
