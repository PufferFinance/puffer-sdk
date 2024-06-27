---
sidebar_position: 1
---

# Depositing ETH

Using the Puffer SDK to mint pufETH is simple. First, setup the `PufferClient`.

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
