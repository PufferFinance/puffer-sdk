# contracts/handlers/puffer-withdrawal-manager-handler

## Classes

### PufferWithdrawalManagerHandler

Defined in: [lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L18)

Handler for the `PufferWithdrawalsManager` contract exposing methods to
interact with the contract.

#### Constructors

##### Constructor

> **new PufferWithdrawalManagerHandler**(`chain`, `walletClient`, `publicClient`): [`PufferWithdrawalManagerHandler`](#pufferwithdrawalmanagerhandler)

Defined in: [lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:32](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L32)

Create the handler for the `PufferWithdrawalsManager` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`PufferWithdrawalManagerHandler`](#pufferwithdrawalmanagerhandler)

#### Methods

##### completeQueuedWithdrawal()

> **completeQueuedWithdrawal**(`walletAddress`, `withdrawalIdx`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:132](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L132)

Complete a withdrawal from the queue.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | - |
| `withdrawalIdx` | `bigint` | The index of the withdrawal to complete. |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

The transaction hash of the withdrawal.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:50](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L50)

Get the contract.

###### Returns

`object`

The viem contract.

##### getWithdrawal()

> **getWithdrawal**(`withdrawalIdx`): `Promise`\<\{ `pufETHAmount`: `bigint`; `pufETHToETHExchangeRate`: `bigint`; `recipient`: `` `0x${string}` ``; \}\>

Defined in: [lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:157](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L157)

Get the withdrawal at the given index.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `withdrawalIdx` | `bigint` | The index of the withdrawal to get. |

###### Returns

`Promise`\<\{ `pufETHAmount`: `bigint`; `pufETHToETHExchangeRate`: `bigint`; `recipient`: `` `0x${string}` ``; \}\>

The withdrawal at the given index.

##### requestWithdrawal()

> **requestWithdrawal**(`walletAddress`, `amount`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L70)

Request a withdrawal of the given amount to the given address, with a permit.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | The account address to request the withdrawal for. |
| `amount` | `bigint` | The pufETH amount to request the withdrawal for. |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

The transaction hash of the withdrawal.

##### requestWithdrawalWithPermit()

> **requestWithdrawalWithPermit**(`walletAddress`, `amount`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L96)

Request a withdrawal of the given amount to the given address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | The account address to request the withdrawal for. |
| `amount` | `bigint` | The pufETHamount to request the withdrawal for. |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

The transaction hash of the withdrawal.
