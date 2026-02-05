# contracts/handlers/erc20-permit-handler

## Classes

### ERC20PermitHandler

Defined in: [lib/contracts/handlers/erc20-permit-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/erc20-permit-handler.ts#L24)

Handler for performing operations for and with ERC20Permit tokens.

#### Constructors

##### Constructor

> **new ERC20PermitHandler**(`chain`, `walletClient`, `publicClient`): [`ERC20PermitHandler`](#erc20permithandler)

Defined in: [lib/contracts/handlers/erc20-permit-handler.ts:37](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/erc20-permit-handler.ts#L37)

Create the handler for processing tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`ERC20PermitHandler`](#erc20permithandler)

#### Methods

##### approve()

> **approve**(`ownerAddress`, `spenderAddress`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/erc20-permit-handler.ts:170](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/erc20-permit-handler.ts#L170)

Approve transaction for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `spenderAddress` | `` `0x${string}` `` | Address of the spender. |
| `value` | `bigint` | Value to approve for the spender. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

Hash of the transaction.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/erc20-permit-handler.ts:63](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/erc20-permit-handler.ts#L63)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getPermitData()

> **getPermitData**(`ownerAddress`, `spenderAddress`, `value`): `Promise`\<[`PermitData`](../common/lib/types.md#permitdata)\>

Defined in: [lib/contracts/handlers/erc20-permit-handler.ts:147](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/erc20-permit-handler.ts#L147)

Get the permit data for the given owner, spender and value.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the token owner. |
| `spenderAddress` | `` `0x${string}` `` | Address of the spender who needs the permit. |
| `value` | `bigint` | Value/amount to be permitted. |

###### Returns

`Promise`\<[`PermitData`](../common/lib/types.md#permitdata)\>

Permit data in the form `{ r, s, v, deadline, amount }`.

##### getPermitSignature()

> **getPermitSignature**(`ownerAddress`, `spenderAddress`, `value`): `Promise`\<\{ `deadline`: `bigint`; \} \| \{ `deadline`: `bigint`; \}\>

Defined in: [lib/contracts/handlers/erc20-permit-handler.ts:94](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/erc20-permit-handler.ts#L94)

Process and get permit signature for the given token to perform
transactions without calling `approve()`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the token owner. |
| `spenderAddress` | `` `0x${string}` `` | Address of the spender who needs the permit. |
| `value` | `bigint` | Value of the transaction. |

###### Returns

`Promise`\<\{ `deadline`: `bigint`; \} \| \{ `deadline`: `bigint`; \}\>

Permit signature in the form `{ r, s, v?, yParity }`.

##### nonces()

> **nonces**(`account`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/erc20-permit-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/erc20-permit-handler.ts#L81)

Get the nonces for the given account.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | Address of the account. |

###### Returns

`Promise`\<`bigint`\>

The nonces.

##### withToken()

> **withToken**(`token`): [`ERC20PermitHandler`](#erc20permithandler)

Defined in: [lib/contracts/handlers/erc20-permit-handler.ts:52](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/erc20-permit-handler.ts#L52)

Set the token to use for executing transactions on the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | [`AnyToken`](../tokens.md#anytoken) | Token to use for the handler. |

###### Returns

[`ERC20PermitHandler`](#erc20permithandler)

The handler.
