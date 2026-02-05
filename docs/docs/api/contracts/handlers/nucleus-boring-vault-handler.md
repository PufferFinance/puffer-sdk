# contracts/handlers/nucleus-boring-vault-handler

## Classes

### NucleusBoringVaultHandler

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:26](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L26)

Handler for the `BoringVault` contract for a given token exposing
methods to interact with the contract.

#### Constructors

##### Constructor

> **new NucleusBoringVaultHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusBoringVaultHandler`](#nucleusboringvaulthandler)

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:39](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L39)

Create the handler for processing UniFi tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`NucleusBoringVaultHandler`](#nucleusboringvaulthandler)

#### Methods

##### approve()

> **approve**(`walletAddress`, `spenderAddress`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:117](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L117)

Approve transaction for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `spenderAddress` | `` `0x${string}` `` | Address of the spender. |
| `value` | `bigint` | Value to approve for the spender. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

Hash of the transaction.

##### balanceOf()

> **balanceOf**(`walletAddress`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L96)

Check the token balance of the wallet.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Wallet address to check the balance of. |

###### Returns

`Promise`\<`bigint`\>

Token balance in wei.

##### getAllowance()

> **getAllowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:86](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L86)

Get the allowance for the given owner and spender.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | Address of the owner. |
| `spender` | `` `0x${string}` `` | Address of the spender. |

###### Returns

`Promise`\<`bigint`\>

Allowance for the given owner and spender.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:66](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L66)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### permit()

> **permit**(`params`): `object`

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:205](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L205)

Get permit to be able to use the token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`PermitParams`](#permitparams) | Permit parameters. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to make the
transaction with the given value.

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

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:105](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L105)

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

Total supply of the token.

##### transfer()

> **transfer**(`walletAddress`, `toAddress`, `value`): `object`

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:140](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L140)

Transfer tokens from the owner's wallet to the given address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Address of the owner's wallet. |
| `toAddress` | `` `0x${string}` `` | Address to transfer the tokens to. |
| `value` | `bigint` | Value to transfer. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to make the
transaction with the given value.

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

##### transferFrom()

> **transferFrom**(`walletAddress`, `fromAddress`, `toAddress`, `value`): `object`

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:167](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L167)

Transfer tokens from the given address to another address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `fromAddress` | `` `0x${string}` `` | Address to transfer the tokens from. |
| `toAddress` | `` `0x${string}` `` | Address to transfer the tokens to. |
| `value` | `bigint` | Value to transfer. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to
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

##### withToken()

> **withToken**(`token`): [`NucleusBoringVaultHandler`](#nucleusboringvaulthandler)

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:55](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L55)

Set the UniFi token to use for executing transactions on the
contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | [`UnifiToken`](../tokens.md#unifitoken) | UniFi token to use for the handler. |

###### Returns

[`NucleusBoringVaultHandler`](#nucleusboringvaulthandler)

The handler.

## Type Aliases

### PermitParams

> **PermitParams** = [`PermitData`](../common/lib/types.md#permitdata) & `object`

Defined in: [lib/contracts/handlers/nucleus-boring-vault-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L16)

#### Type Declaration

##### account

> **account**: `Address`

##### owner

> **owner**: `Address`

##### spender

> **spender**: `Address`
