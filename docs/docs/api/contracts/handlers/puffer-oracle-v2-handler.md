# contracts/handlers/puffer-oracle-v2-handler

## Classes

### PufferOracleV2Handler

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L17)

Handler for the `PufferOracleV2` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new PufferOracleV2Handler**(`chain`, `walletClient`, `publicClient`): [`PufferOracleV2Handler`](#pufferoraclev2handler)

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L30)

Create the handler for the `PufferOracleV2` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`PufferOracleV2Handler`](#pufferoraclev2handler)

#### Methods

##### exitValidators()

> **exitValidators**(`numberOfExits`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L109)

Exit validators.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numberOfExits` | `bigint` | The number of validators to exit. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L43)

Get the contract.

###### Returns

`object`

The viem contract.

##### getLockedEthAmount()

> **getLockedEthAmount**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:78](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L78)

Get the locked ETH amount.

###### Returns

`Promise`\<`bigint`\>

The locked ETH amount.

##### getTotalNumberOfValidators()

> **getTotalNumberOfValidators**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:69](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L69)

Get the total number of validators.

###### Returns

`Promise`\<`bigint`\>

The total number of validators.

##### getValidatorTicketPrice()

> **getValidatorTicketPrice**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L60)

Get the validator ticket price.

###### Returns

`Promise`\<`bigint`\>

The validator ticket price.

##### isOverBurstThreshold()

> **isOverBurstThreshold**(): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:87](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L87)

Check if the system is over burst threshold.

###### Returns

`Promise`\<`boolean`\>

True if over burst threshold.

##### provisionNode()

> **provisionNode**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L96)

Provision a new node.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### setMintPrice()

> **setMintPrice**(`newPrice`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:122](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L122)

Set the mint price for validator tickets.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newPrice` | `bigint` | The new mint price. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### setTotalNumberOfValidators()

> **setTotalNumberOfValidators**(`newTotalNumberOfValidators`, `epochNumber`, `guardianEOASignatures`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-oracle-v2-handler.ts:137](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-oracle-v2-handler.ts#L137)

Set the total number of validators.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newTotalNumberOfValidators` | `bigint` | The new total number of validators. |
| `epochNumber` | `bigint` | The epoch number. |
| `guardianEOASignatures` | `` `0x${string}` ``[] | The guardian EOA signatures. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.
