# contracts/handlers/puf-locker-handler

## Classes

### PufLockerHandler

Handler for the `PufLocker` contract exposing methods to interact
with the contract.

#### Constructors

##### new PufLockerHandler()

> **new PufLockerHandler**(`chain`, `walletClient`, `publicClient`): [`PufLockerHandler`](puf-locker-handler.md#puflockerhandler)

Create the handler for the `PufLocker` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufLockerHandler`](puf-locker-handler.md#puflockerhandler)

###### Source

[lib/contracts/handlers/puf-locker-handler.ts:26](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puf-locker-handler.ts#L26)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `erc20PermitHandler` | `private` | [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler) | - |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### deposit()

> **deposit**(`pufToken`, `walletAddress`, `value`, `lockPeriod`): `Promise`\<`object`\>

Deposit the given PufToken into the locker.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pufToken` | [`PufToken`](../tokens.md#puftoken) | PufToken to deposit. |
| `walletAddress` | \`0x$\{string\}\` | Wallet address of the depositor. |
| `value` | `bigint` | Amount of the deposit. |
| `lockPeriod` | `bigint` | The period for the deposit in seconds. |

###### Returns

`Promise`\<`object`\>

The transaction hash of the deposit.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puf-locker-handler.ts:112](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puf-locker-handler.ts#L112)

##### getAllDeposits()

> **getAllDeposits**(`pufToken`, `walletAddress`): `Promise`\<readonly `object`[]\>

Get all deposits of the given account address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pufToken` | [`PufToken`](../tokens.md#puftoken) | The PufToken to get the deposits for. |
| `walletAddress` | \`0x$\{string\}\` | The wallet address to get the deposits for. |

###### Returns

`Promise`\<readonly `object`[]\>

The amount and deposits of the given account address.

###### Source

[lib/contracts/handlers/puf-locker-handler.ts:63](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puf-locker-handler.ts#L63)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puf-locker-handler.ts:45](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puf-locker-handler.ts#L45)

##### getDeposits()

> **getDeposits**(`pufToken`, `userAddress`, `start`, `limit`): `Promise`\<readonly `object`[]\>

Get the user's deposits for the given token and deposit index.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pufToken` | [`PufToken`](../tokens.md#puftoken) | PufToken to get the deposits of. |
| `userAddress` | \`0x$\{string\}\` | User address to get the deposits for. |
| `start` | `bigint` | The starting index of the deposits. |
| `limit` | `bigint` | The maximum number of deposits to retrieve. |

###### Returns

`Promise`\<readonly `object`[]\>

The amount and release time of the deposits.

###### Source

[lib/contracts/handlers/puf-locker-handler.ts:79](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puf-locker-handler.ts#L79)

##### getLockPeriods()

> **getLockPeriods**(): `Promise`\<readonly [`bigint`, `bigint`]\>

Get the minimum and maximum lock periods allowed for deposits.

###### Returns

`Promise`\<readonly [`bigint`, `bigint`]\>

The minimum and maximum lock period in seconds.
(`[minLock, maxLock]`)

###### Source

[lib/contracts/handlers/puf-locker-handler.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puf-locker-handler.ts#L99)

##### withdraw()

> **withdraw**(`pufToken`, `walletAddress`, `recipient`, `depositIndexes`): `object`

Withdraw the deposits identified by the deposit indexes from the
locker.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pufToken` | [`PufToken`](../tokens.md#puftoken) | PufToken to withdraw. |
| `walletAddress` | \`0x$\{string\}\` | Address of the account making the transaction. |
| `recipient` | \`0x$\{string\}\` | Recipient of the withdrawal. |
| `depositIndexes` | `bigint`[] | Deposit indexes to withdraw. |

###### Returns

`object`

Hash of the withdrawal transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puf-locker-handler.ts:163](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puf-locker-handler.ts#L163)