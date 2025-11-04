# contracts/handlers/puf-locker-handler

## Classes

### PufLockerHandler

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:29](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L29)

Handler for the `PufLocker` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new PufLockerHandler**(`chain`, `walletClient`, `publicClient`): [`PufLockerHandler`](#puflockerhandler)

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L43)

Create the handler for the `PufLocker` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`PufLockerHandler`](#puflockerhandler)

#### Methods

##### deposit()

> **deposit**(`depositParams`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:140](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L140)

Deposit the given PufToken into the locker. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `depositParams` | [`LockerDepositParams`](#lockerdepositparams) |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

`transact: () => Promise<Address>` - Used to make the
transaction.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

##### getAllDeposits()

> **getAllDeposits**(`pufToken`, `walletAddress`): `Promise`\<readonly `object`[]\>

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L81)

Get all deposits of the given account address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pufToken` | [`AnyToken`](../tokens.md#anytoken) | The PufToken to get the deposits for. |
| `walletAddress` | `` `0x${string}` `` | The wallet address to get the deposits for. |

###### Returns

`Promise`\<readonly `object`[]\>

The amount and deposits of the given account address.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L62)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getDeposits()

> **getDeposits**(`pufToken`, `userAddress`, `start`, `limit`): `Promise`\<readonly `object`[]\>

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:97](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L97)

Get the user's deposits for the given token and deposit index.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pufToken` | [`AnyToken`](../tokens.md#anytoken) | PufToken to get the deposits of. |
| `userAddress` | `` `0x${string}` `` | User address to get the deposits for. |
| `start` | `bigint` | The starting index of the deposits. |
| `limit` | `bigint` | The maximum number of deposits to retrieve. |

###### Returns

`Promise`\<readonly `object`[]\>

The amount and release time of the deposits.

##### getLockPeriods()

> **getLockPeriods**(): `Promise`\<readonly \[`bigint`, `bigint`\]\>

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:117](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L117)

Get the minimum and maximum lock periods allowed for deposits.

###### Returns

`Promise`\<readonly \[`bigint`, `bigint`\]\>

The minimum and maximum lock period in seconds.
(`[minLock, maxLock]`)

##### withdraw()

> **withdraw**(`pufToken`, `walletAddress`, `recipient`, `depositIndexes`): `object`

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:200](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L200)

Withdraw the deposits identified by the deposit indexes from the
locker.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pufToken` | [`AnyToken`](../tokens.md#anytoken) | PufToken to withdraw. |
| `walletAddress` | `` `0x${string}` `` | Address of the account making the transaction. |
| `recipient` | `` `0x${string}` `` | Recipient of the withdrawal. |
| `depositIndexes` | `bigint`[] | Deposit indexes to withdraw. |

###### Returns

`object`

Hash of the withdrawal transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<`` `0x${string}` ``\>

###### Returns

`Promise`\<`` `0x${string}` ``\>

## Type Aliases

### LockerDepositParams

> **LockerDepositParams** = `object`

Defined in: [lib/contracts/handlers/puf-locker-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L16)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="account"></a> `account` | `Address` | [lib/contracts/handlers/puf-locker-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L18) |
| <a id="ispreapproved"></a> `isPreapproved?` | `boolean` | [lib/contracts/handlers/puf-locker-handler.ts:22](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L22) |
| <a id="lockperiod"></a> `lockPeriod` | `bigint` | [lib/contracts/handlers/puf-locker-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L21) |
| <a id="recipient"></a> `recipient` | `Address` | [lib/contracts/handlers/puf-locker-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L19) |
| <a id="token"></a> `token` | [`AnyToken`](../tokens.md#anytoken) | [lib/contracts/handlers/puf-locker-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L17) |
| <a id="value"></a> `value` | `bigint` | [lib/contracts/handlers/puf-locker-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/puf-locker-handler.ts#L20) |
