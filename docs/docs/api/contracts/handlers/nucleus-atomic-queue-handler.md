# contracts/handlers/nucleus-atomic-queue-handler

## Classes

### NucleusAtomicQueueHandler

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L31)

Handler for the `AtomicQueue` contract.

#### Constructors

##### Constructor

> **new NucleusAtomicQueueHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusAtomicQueueHandler`](#nucleusatomicqueuehandler)

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:34](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) |
| `walletClient` | \{ \} |
| `publicClient` | \{ \} |

###### Returns

[`NucleusAtomicQueueHandler`](#nucleusatomicqueuehandler)

#### Methods

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L42)

###### Returns

`object`

##### getUserAtomicRequest()

> **getUserAtomicRequest**(`user`, `offerToken`, `wantToken`): `Promise`\<\{ `atomicPrice`: `bigint`; `deadline`: `bigint`; `inSolve`: `boolean`; `offerAmount`: `bigint`; \}\>

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:61](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L61)

Get the atomic request details for a specific user (wallet address).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | User address |
| `offerToken` | `` `0x${string}` `` | Token being offered |
| `wantToken` | `` `0x${string}` `` | Token being requested |

###### Returns

`Promise`\<\{ `atomicPrice`: `bigint`; `deadline`: `bigint`; `inSolve`: `boolean`; `offerAmount`: `bigint`; \}\>

##### isAtomicRequestValid()

> **isAtomicRequestValid**(`offerToken`, `user`, `request`): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:79](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L79)

Check if an atomic request is valid.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerToken` | `` `0x${string}` `` | Token being offered |
| `user` | `` `0x${string}` `` | User address |
| `request` | [`AtomicRequest`](#atomicrequest) | Atomic request details |

###### Returns

`Promise`\<`boolean`\>

##### solve()

> **solve**(`offerToken`, `wantToken`, `users`, `runData`, `solver`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L99)

Solve atomic requests for multiple users.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerToken` | `` `0x${string}` `` | Token being offered |
| `wantToken` | `` `0x${string}` `` | Token being requested |
| `users` | `` `0x${string}` ``[] | Array of user addresses |
| `runData` | `` `0x${string}` `` | Execution data for the solve |
| `solver` | `` `0x${string}` `` | Address of the solver |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### updateAtomicRequest()

> **updateAtomicRequest**(`offerToken`, `wantToken`, `request`, `ownerAddress`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:121](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L121)

Update an atomic request.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerToken` | `` `0x${string}` `` | Token being offered |
| `wantToken` | `` `0x${string}` `` | Token being requested |
| `request` | [`AtomicRequest`](#atomicrequest) | New atomic request details |
| `ownerAddress` | `` `0x${string}` `` | - |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### userAtomicRequest()

> **userAtomicRequest**(`user`, `offerToken`, `wantToken`): `Promise`\<readonly \[`bigint`, `bigint`, `bigint`, `boolean`\]\>

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:139](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L139)

Get user's atomic request details directly from storage.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | User address |
| `offerToken` | `` `0x${string}` `` | Token being offered |
| `wantToken` | `` `0x${string}` `` | Token being requested |

###### Returns

`Promise`\<readonly \[`bigint`, `bigint`, `bigint`, `boolean`\]\>

## Type Aliases

### AtomicRequest

> **AtomicRequest** = `object`

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L14)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="atomicprice"></a> `atomicPrice` | `bigint` | [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L16) |
| <a id="deadline"></a> `deadline` | `bigint` | [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L15) |
| <a id="insolve"></a> `inSolve` | `boolean` | [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L18) |
| <a id="offeramount"></a> `offerAmount` | `bigint` | [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L17) |

***

### SolveMetaData

> **SolveMetaData** = `object`

Defined in: [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L21)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="assetsforwant"></a> `assetsForWant` | `bigint` | [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:25](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L25) |
| <a id="assetstooffer"></a> `assetsToOffer` | `bigint` | [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L24) |
| <a id="flags"></a> `flags` | `number` | [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:23](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L23) |
| <a id="user"></a> `user` | `Address` | [lib/contracts/handlers/nucleus-atomic-queue-handler.ts:22](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L22) |
