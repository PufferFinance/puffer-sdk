---
sidebar_position: 2
---

# UniFi Vaults Deposit and Withdrawal

Deposits for each vault are handled by the `TellerWithMultiAssetSupport` contract while withdrawals are handled by the `AtomicQueue` contract. We will use "UniFi ETH Vault" (`unifiETH`) as an example to explain the process.

Make sure to follow the [Getting Started](../getting-started.mdx#1-setup-the-puffer-client) guide to setup the PufferClient before proceeding.

## Deposit

### Approving the Token

First, approve the `pufETH` token for the `TellerWithMultiAssetSupport` contract so it can be deposited into the vault.

```ts
const nucleusTellerAddress = pufferClient.nucleusTeller.getContract().address;
const depositAmount = BigInt(1);

const approveTx = await pufferClient.erc20Permit
  .withToken(Token.pufETH)
  .approve(walletAddress, nucleusTellerAddress, depositAmount);

// Wait for the approve transaction to be completed.
await publicClient.waitForTransactionReceipt({ hash: approveTx });
```

Alternatively, it's also possible to use a permit for `pufETH`. In that case, no approval is needed and the `isPreapproved` option when depositing can be set to `false`. Note that not all tokens support permit signatures. Check [reference configuration](https://github.com/PufferFinance/puffer-sdk/blob/81389d702a728db8a5b59024e44189e2a3e38084/lib/contracts/tokens.ts#L155) for the ones that do.

### Depositing the Token

Once the token is approved, you can deposit it into the vault.

```ts
const { transact } = await pufferClient.nucleusTeller
  .withToken(UnifiToken.unifiETH)
  .deposit({
    token: Token.pufETH,
    unifiToken: UnifiToken.unifiETH,
    account: walletAddress,
    amount: depositAmount,
    minimumMint: BigInt(0),
    isPreapproved: true,
  });

const depositTx = await transact();
```

## Withdrawal

### Approving the Token

First, approve the `unifiETH` token for the `AtomicQueue` contract so it can be withdrawn from the vault.

```ts
const atomicQueueAddress =
  pufferClient.nucleusAtomicQueue.getContract().address;
const withdrawAmount = BigInt(1);

const approveTx = await pufferClient.erc20Permit
  .withToken(UnifiToken.unifiETH)
  .approve(walletAddress, atomicQueueAddress, withdrawAmount);

// Wait for the approve transaction to be completed.
await publicClient.waitForTransactionReceipt({ hash: approveTx });
```

### Calculating the Atomic Price with Slippage

Next, we need to calculate the price for the withdrawing token with the slippage amount. Slippage is the maximum deviation from the expected price that is allowed when withdrawing. This is because the withdrawal queue is processed in batches and the price of the token might change in the meantime.

We can calculate the atomic price of the token with slippage using the following helper function.

```ts
const getAtomicPriceWithSlippage = (atomicPrice: bigint, slippage: number) => {
  const slippageMultiplier = BigInt(Math.round((1 - slippage) * 1000));
  return (atomicPrice * slippageMultiplier) / BigInt(1000);
};
```

The function takes two parameters:

- `atomicPrice`: The current price of the token being withdrawn in terms of the UniFi token.
- `slippage`: A number between 0 and 1 representing the maximum allowed price deviation (e.g. 0.01 for 1% slippage).

For this example, let's use 0.5% slippage to calculate the atomic price when withdrawing pufETH.

```ts
import { TOKENS_ADDRESSES, Chain } from "@puffer-finance/puffer-sdk";
...

// Price of pufETH in unifiETH.
const atomicPrice = await pufferClient.nucleusAccountant
  .withToken(UnifiToken.unifiETH)
  .getRateInQuoteSafe(TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet]);

// Price of pufETH in unifiETH with 0.5% slippage.
const atomicPriceWithSlippage = getAtomicPriceWithSlippage(
  atomicPrice,
  0.005,
);
```

### Queueing the Withdrawal

Now that the token is approved and the atomic price is calculated, it can be queued for withdrawal through the `AtomicQueue` contract.

```ts
// Set the deadline to process the withdrawal to 3 days from now.
const deadline = BigInt(Math.floor(Date.now() / 1000) + 3 * 24 * 60 * 60);

const txHash = await pufferClient.nucleusAtomicQueue.updateAtomicRequest(
  TOKENS_ADDRESSES[UnifiToken.unifiETH][Chain.Mainnet],
  TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet],
  {
    deadline,
    atomicPrice: atomicPriceWithSlippage,
    offerAmount: withdrawAmount,
    inSolve: false,
  },
  walletAddress,
);
```

Once the withdrawal is queued, it can take up to 3 days to be processed depending on which vault is being used.
