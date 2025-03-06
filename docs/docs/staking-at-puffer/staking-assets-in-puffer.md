---
sidebar_position: 2
---

# Staking assets in Puffer

Puffer supports staking of the following assets on the protocol:

- `ETH`
- `stETH`
- `wstETH`

## Setting up the PufferClient

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
```

Then connect to the wallet to fetch your address.

```ts
const [walletAddress] = await pufferClient.requestAddresses();
```

## Staking ETH

With your address at hand, make the transaction to deposit ETH to mint pufETH.

```ts
const { transact, estimate } = pufferClient.vault.depositETH(walletAddress);

const weiAmount = BigInt(1e18);

// Returns gas estimate of the transaction.
const gasEstimate = await estimate();
// Execute the transaction for depositing ETH.
const txHash = await transact(weiAmount);
```

Alternatively, you can set the pufETH recipient to a different address.

```ts
const { transact, estimate } = pufferClient.vault.depositETH(recipientAddress);

const weiAmount = BigInt(1e18);

// Returns gas estimate of the transaction.
const gasEstimate = await estimate();
// Execute the transaction for depositing ETH.
const txHash = await transact(weiAmount);
```

## Staking stETH

```ts
const weiAmount = BigInt(1e18);
const { transact, estimate } = await pufferClient.depositor.depositStETH(walletAddress, weiAmount);

// Returns gas estimate of the transaction.
const gasEstimate = await estimate();
// Execute the transaction for depositing stETH.
const txHash = await transact();
```

## Staking wstETH

```ts
const weiAmount = BigInt(1e18);
const { transact, estimate } = await pufferClient.depositor.depositWstETH(walletAddress, weiAmount);

// Returns gas estimate of the transaction.
const gasEstimate = await estimate();
// Execute the transaction for depositing wstETH.
const txHash = await transact();
```
