---
sidebar_position: 2
---

# Staking Assets in Puffer

Puffer supports staking of the following assets on the protocol:

- `ETH`
- `stETH`
- `wstETH`

Before staking, make sure to follow the [Getting Started](../getting-started.mdx#1-setup-the-puffer-client) guide to setup the PufferClient.

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
