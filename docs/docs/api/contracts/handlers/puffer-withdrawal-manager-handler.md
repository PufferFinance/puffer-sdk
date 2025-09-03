# contracts/handlers/puffer-withdrawal-manager-handler

## Classes

### PufferWithdrawalManagerHandler

Handler for the `PufferWithdrawalsManager` contract exposing methods to
interact with the contract.

#### Constructors

##### new PufferWithdrawalManagerHandler()

> **new PufferWithdrawalManagerHandler**(`chain`, `walletClient`, `publicClient`): [`PufferWithdrawalManagerHandler`](puffer-withdrawal-manager-handler.md#pufferwithdrawalmanagerhandler)

Create the handler for the `PufferWithdrawalsManager` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufferWithdrawalManagerHandler`](puffer-withdrawal-manager-handler.md#pufferwithdrawalmanagerhandler)

###### Source

[lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:32](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L32)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `erc20PermitHandler` | `private` | [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler) | - |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### completeQueuedWithdrawal()

> **completeQueuedWithdrawal**(`walletAddress`, `withdrawalIdx`): `Promise`\<`object`\>

Complete a withdrawal from the queue.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | - |
| `withdrawalIdx` | `bigint` | The index of the withdrawal to complete. |

###### Returns

`Promise`\<`object`\>

The transaction hash of the withdrawal.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:132](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L132)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:50](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L50)

##### getWithdrawal()

> **getWithdrawal**(`withdrawalIdx`): `Promise`\<`object`\>

Get the withdrawal at the given index.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `withdrawalIdx` | `bigint` | The index of the withdrawal to get. |

###### Returns

`Promise`\<`object`\>

The withdrawal at the given index.

###### pufETHAmount

> **pufETHAmount**: `bigint`

###### pufETHToETHExchangeRate

> **pufETHToETHExchangeRate**: `bigint`

###### recipient

> **recipient**: \`0x$\{string\}\`

###### Source

[lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:157](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L157)

##### requestWithdrawal()

> **requestWithdrawal**(`walletAddress`, `amount`): `Promise`\<`object`\>

Request a withdrawal of the given amount to the given address, with a permit.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | The account address to request the withdrawal for. |
| `amount` | `bigint` | The pufETH amount to request the withdrawal for. |

###### Returns

`Promise`\<`object`\>

The transaction hash of the withdrawal.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L70)

##### requestWithdrawalWithPermit()

> **requestWithdrawalWithPermit**(`walletAddress`, `amount`): `Promise`\<`object`\>

Request a withdrawal of the given amount to the given address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | The account address to request the withdrawal for. |
| `amount` | `bigint` | The pufETHamount to request the withdrawal for. |

###### Returns

`Promise`\<`object`\>

The transaction hash of the withdrawal.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puffer-withdrawal-manager-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/puffer-withdrawal-manager-handler.ts#L96)
