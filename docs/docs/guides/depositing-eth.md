---
sidebar_position: 1
---

# Depositing ETH

Using the Puffer SDK to deposit ETH is simple. First, setup the `PufferClient`.

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

Then connect to the wallet or use an existing wallet address.

```ts
const [walletAddress] = await pufferClient.requestAddresses();
```

With the wallet address at hand, make the transacation.

```ts
const { transact, estimate } = pufferClient.depositETH(walletAddress);

const ethValue = new BigInt(1);

// Returns gas estimate of the transaction.
const gasEstimate = await estimate();
// Execute the transaction for depositing ETH.
const address = await transact(ethValue);
```
