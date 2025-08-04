# contracts/handlers/puffer-oracle-v2-handler

## Classes

### PufferOracleV2Handler

Handler for the `PufferOracleV2` contract exposing methods to interact
with the contract.

#### Constructors

##### new PufferOracleV2Handler()

> **new PufferOracleV2Handler**(`chain`, `walletClient`, `publicClient`): [`PufferOracleV2Handler`](puffer-oracle-v2-handler.md#pufferoraclev2handler)

Create the handler for the `PufferOracleV2` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufferOracleV2Handler`](puffer-oracle-v2-handler.md#pufferoraclev2handler)

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L30)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### exitValidators()

> **exitValidators**(`numberOfExits`): `Promise`\<\`0x$\{string\}\`\>

Exit validators.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `numberOfExits` | `bigint` | The number of validators to exit. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L109)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L43)

##### getLockedEthAmount()

> **getLockedEthAmount**(): `Promise`\<`bigint`\>

Get the locked ETH amount.

###### Returns

`Promise`\<`bigint`\>

The locked ETH amount.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:78](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L78)

##### getTotalNumberOfValidators()

> **getTotalNumberOfValidators**(): `Promise`\<`bigint`\>

Get the total number of validators.

###### Returns

`Promise`\<`bigint`\>

The total number of validators.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:69](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L69)

##### getValidatorTicketPrice()

> **getValidatorTicketPrice**(): `Promise`\<`bigint`\>

Get the validator ticket price.

###### Returns

`Promise`\<`bigint`\>

The validator ticket price.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L60)

##### isOverBurstThreshold()

> **isOverBurstThreshold**(): `Promise`\<`boolean`\>

Check if the system is over burst threshold.

###### Returns

`Promise`\<`boolean`\>

True if over burst threshold.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:87](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L87)

##### provisionNode()

> **provisionNode**(): `Promise`\<\`0x$\{string\}\`\>

Provision a new node.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L96)

##### setMintPrice()

> **setMintPrice**(`newPrice`): `Promise`\<\`0x$\{string\}\`\>

Set the mint price for validator tickets.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `newPrice` | `bigint` | The new mint price. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:122](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L122)

##### setTotalNumberOfValidators()

> **setTotalNumberOfValidators**(`newTotalNumberOfValidators`, `epochNumber`, `guardianEOASignatures`): `Promise`\<\`0x$\{string\}\`\>

Set the total number of validators.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `newTotalNumberOfValidators` | `bigint` | The new total number of validators. |
| `epochNumber` | `bigint` | The epoch number. |
| `guardianEOASignatures` | \`0x$\{string\}\`[] | The guardian EOA signatures. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-oracle-v2-handler.ts:137](https://github.com/PufferFinance/puffer-sdk/blob/4dadb8f49937bb2533b19e1e434d0fbb731c090f/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L137)
