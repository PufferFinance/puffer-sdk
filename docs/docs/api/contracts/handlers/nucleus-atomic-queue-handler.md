# contracts/handlers/nucleus-atomic-queue-handler

## Classes

### NucleusAtomicQueueHandler

Handler for the `AtomicQueue` contract.

#### Constructors

##### new NucleusAtomicQueueHandler()

> **new NucleusAtomicQueueHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusAtomicQueueHandler`](nucleus-atomic-queue-handler.md#nucleusatomicqueuehandler)

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) |
| `walletClient` | `object` |
| `publicClient` | `object` |

###### Returns

[`NucleusAtomicQueueHandler`](nucleus-atomic-queue-handler.md#nucleusatomicqueuehandler)

###### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:34](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L34)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) |
| `publicClient` | `private` | `object` |
| `viemChain` | `private` | `Chain` |
| `walletClient` | `private` | `object` |

#### Methods

##### getContract()

> **getContract**(): `object`

###### Returns

`object`

###### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L42)

##### getUserAtomicRequest()

> **getUserAtomicRequest**(`user`, `offerToken`, `wantToken`): `Promise`\<`object`\>

Get the atomic request details for a specific user (wallet address).

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | User address |
| `offerToken` | \`0x$\{string\}\` | Token being offered |
| `wantToken` | \`0x$\{string\}\` | Token being requested |

###### Returns

`Promise`\<`object`\>

###### atomicPrice

> **atomicPrice**: `bigint`

###### deadline

> **deadline**: `bigint`

###### inSolve

> **inSolve**: `boolean`

###### offerAmount

> **offerAmount**: `bigint`

###### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L60)

##### isAtomicRequestValid()

> **isAtomicRequestValid**(`offerToken`, `user`, `request`): `Promise`\<`boolean`\>

Check if an atomic request is valid.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `offerToken` | \`0x$\{string\}\` | Token being offered |
| `user` | \`0x$\{string\}\` | User address |
| `request` | [`AtomicRequest`](nucleus-atomic-queue-handler.md#atomicrequest) | Atomic request details |

###### Returns

`Promise`\<`boolean`\>

###### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:78](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L78)

##### solve()

> **solve**(`offerToken`, `wantToken`, `users`, `runData`, `solver`): `Promise`\<\`0x$\{string\}\`\>

Solve atomic requests for multiple users.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `offerToken` | \`0x$\{string\}\` | Token being offered |
| `wantToken` | \`0x$\{string\}\` | Token being requested |
| `users` | \`0x$\{string\}\`[] | Array of user addresses |
| `runData` | \`0x$\{string\}\` | Execution data for the solve |
| `solver` | \`0x$\{string\}\` | Address of the solver |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L98)

##### updateAtomicRequest()

> **updateAtomicRequest**(`offerToken`, `wantToken`, `request`, `ownerAddress`): `Promise`\<\`0x$\{string\}\`\>

Update an atomic request.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `offerToken` | \`0x$\{string\}\` | Token being offered |
| `wantToken` | \`0x$\{string\}\` | Token being requested |
| `request` | [`AtomicRequest`](nucleus-atomic-queue-handler.md#atomicrequest) | New atomic request details |
| `ownerAddress` | \`0x$\{string\}\` | - |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:120](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L120)

##### userAtomicRequest()

> **userAtomicRequest**(`user`, `offerToken`, `wantToken`): `Promise`\<readonly [`bigint`, `bigint`, `bigint`, `boolean`]\>

Get user's atomic request details directly from storage.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | User address |
| `offerToken` | \`0x$\{string\}\` | Token being offered |
| `wantToken` | \`0x$\{string\}\` | Token being requested |

###### Returns

`Promise`\<readonly [`bigint`, `bigint`, `bigint`, `boolean`]\>

###### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:138](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L138)

## Type Aliases

### AtomicRequest

> **AtomicRequest**: `object`

#### Type declaration

##### atomicPrice

> **atomicPrice**: `bigint`

##### deadline

> **deadline**: `bigint`

##### inSolve

> **inSolve**: `boolean`

##### offerAmount

> **offerAmount**: `bigint`

#### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L14)

***

### SolveMetaData

> **SolveMetaData**: `object`

#### Type declaration

##### assetsForWant

> **assetsForWant**: `bigint`

##### assetsToOffer

> **assetsToOffer**: `bigint`

##### flags

> **flags**: `number`

##### user

> **user**: `Address`

#### Source

[lib/contracts/handlers/nucleus-atomic-queue-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/06a39bc3698c30dd13fb1bc00df2e907256639ac/lib/contracts/handlers/nucleus-atomic-queue-handler.ts#L21)
