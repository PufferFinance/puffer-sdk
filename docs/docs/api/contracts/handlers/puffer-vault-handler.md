# contracts/handlers/puffer-vault-handler

## Classes

### PufferVaultHandler

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L16)

Handler for the `PufferVaultV2` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new PufferVaultHandler**(`chain`, `walletClient`, `publicClient`): [`PufferVaultHandler`](#puffervaulthandler)

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:29](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L29)

Create the handler for the `PufferVaultV2` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`PufferVaultHandler`](#puffervaulthandler)

#### Methods

##### balanceOf()

> **balanceOf**(`walletAddress`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:116](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L116)

Check the pufETH balance of the wallet.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Wallet address to check the balance of. |

###### Returns

`Promise`\<`bigint`\>

pufETH balance in wei.

##### convertToAssets()

> **convertToAssets**(`amount`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:290](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L290)

Gives exchange rate of pufETH relative to WETH.
This does not include any fees, as compared to previewRedeem method.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | Amount of pufETH to convert. |

###### Returns

`Promise`\<`bigint`\>

Amount of equivalent WETH.

##### deposit()

> **deposit**(`walletAddress`, `value`): `object`

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:67](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L67)

Deposit tokens(e.g. WETH) in exchange for pufETH. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Wallet address to get the tokens from. |
| `value` | `bigint` | Value of tokens to deposit. |

###### Returns

`object`

`transact: (value: bigint) => Promise<Address>` -

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<`` `0x${string}` ``\>

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### depositETH()

> **depositETH**(`walletAddress`): `object`

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:94](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L94)

Deposit ETH in exchange for pufETH. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Wallet address to get the ETH from. |

###### Returns

`object`

`transact: (value: bigint) => Promise<Address>` - Used to
make the transaction with the given value.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: (`value`) => `Promise`\<`` `0x${string}` ``\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `bigint` |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### getAllowance()

> **getAllowance**(`ownerAddress`, `spenderAddress`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:137](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L137)

Get the allowance for the given owner and spender.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the owner. |
| `spenderAddress` | `` `0x${string}` `` | Address of the spender. |

###### Returns

`Promise`\<`bigint`\>

Allowance for the given owner and spender.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L43)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getExitFeeBasisPoints()

> **getExitFeeBasisPoints**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:214](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L214)

Returns how many basis points of a fee there are when exiting. For
example, a 1% fee would mean 1% of the user's requested pufETH is
burned (which increases the value for all pufETH holders) before
the ETH is redeemed. i.e., you get 1% less ETH back. i.e., you get
1% less ETH back.

###### Returns

`Promise`\<`bigint`\>

Basis points of the exit fee.

##### getPufETHRate()

> **getPufETHRate**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:125](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L125)

Get the rate of pufETH compared to ETH.

###### Returns

`Promise`\<`bigint`\>

Rate of pufETH compared to 1 ETH.

##### getTotalExitFeeBasisPoints()

> **getTotalExitFeeBasisPoints**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:239](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L239)

Returns how many basis points of a fee there are in total when
exiting. For example, a 1% fee would mean 1% of the user's
requested pufETH is burned (which increases the value for all
pufETH holders) before the ETH is redeemed. i.e., you get 1% less
ETH back.

###### Returns

`Promise`\<`bigint`\>

Basis points of the exit fee.

##### getTreasuryExitFeeBasisPoints()

> **getTreasuryExitFeeBasisPoints**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:226](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L226)

Returns how many treasury basis points of a fee there are when
exiting. For example, a 1% fee would mean 1% of the user's
requested pufETH is burned (which increases the value for all
pufETH holders) before the ETH is redeemed.

###### Returns

`Promise`\<`bigint`\>

Basis points of the exit fee.

##### maxRedeem()

> **maxRedeem**(`ownerAddress`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:201](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L201)

Calculates the maximum amount of pufETH shares that can be redeemed
by the owner.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the owner's wallet. |

###### Returns

`Promise`\<`bigint`\>

Maximum amount of pufETH shares that can be redeemed.

##### previewRedeem()

> **previewRedeem**(`value`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:190](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L190)

Preview the amount of WETH that can be redeemed for the given
amount of pufETH using the `.redeem()` method.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `bigint` | Value of pufETH to redeem. |

###### Returns

`Promise`\<`bigint`\>

Preview of the amount of WETH that can be redeemed.

##### redeem()

> **redeem**(`ownerAddress`, `receiverAddress`, `shares`): `object`

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:258](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L258)

Redeems pufETH shares in exchange for WETH assets from the vault.
In the process, the pufETH shares of the owner are burned. This
doesn't make the transaction but returns two methods namely
`transact` and `estimate`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the owner of pufETH. |
| `receiverAddress` | `` `0x${string}` `` | Address of the receiver of WETH. |
| `shares` | `bigint` | Amount of pufETH shares to redeem. |

###### Returns

`object`

`transact: (value: bigint) => Promise<Address>` - Used to
make the transaction with the given value.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<`` `0x${string}` ``\>

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### withdraw()

> **withdraw**(`ownerAddress`, `walletAddress`, `value`): `object`

Defined in: [lib/contracts/handlers/puffer-vault-handler.ts:158](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/puffer-vault-handler.ts#L158)

Withdraw pufETH to the given wallet address. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the owner. |
| `walletAddress` | `` `0x${string}` `` | Address of the receiver. |
| `value` | `bigint` | Value of pufETH to withdraw. |

###### Returns

`object`

`transact: (value: bigint) => Promise<Address>` - Used to
make the transaction with the given value.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<`` `0x${string}` ``\>

###### Returns

`Promise`\<`` `0x${string}` ``\>
