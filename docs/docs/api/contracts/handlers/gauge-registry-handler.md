# contracts/handlers/gauge-registry-handler

## Classes

### GaugeRegistryHandler

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L18)

Handler for the `GaugeRegistry` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new GaugeRegistryHandler**(`chain`, `walletClient`, `publicClient`): [`GaugeRegistryHandler`](#gaugeregistryhandler)

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L31)

Create the handler for the `GaugeRegistry` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`GaugeRegistryHandler`](#gaugeregistryhandler)

#### Methods

##### acceptOwnership()

> **acceptOwnership**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:186](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L186)

Accept ownership transfer.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### activateGauge()

> **activateGauge**(`gauge`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L134)

Activate a gauge.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gauge` | `` `0x${string}` `` | The gauge address to activate. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### deactivateGauge()

> **deactivateGauge**(`gauge`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:147](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L147)

Deactivate a gauge.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gauge` | `` `0x${string}` `` | The gauge address to deactivate. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### gaugeExists()

> **gaugeExists**(`gauge`): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L81)

Check if a gauge exists.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gauge` | `` `0x${string}` `` | The gauge address to check. |

###### Returns

`Promise`\<`boolean`\>

True if the gauge exists, false otherwise.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:44](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L44)

Get the contract.

###### Returns

`object`

The viem contract.

##### getGauge()

> **getGauge**(`gauge`): `Promise`\<\{ `active`: `boolean`; `created`: `number`; `metadataURI`: `string`; \}\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:101](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L101)

Get gauge information.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gauge` | `` `0x${string}` `` | The gauge address. |

###### Returns

`Promise`\<\{ `active`: `boolean`; `created`: `number`; `metadataURI`: `string`; \}\>

The gauge information including active status, creation time, and metadata URI.

##### getGaugeList()

> **getGaugeList**(): `Promise`\<readonly `` `0x${string}` ``[]\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L110)

Get the list of all gauges.

###### Returns

`Promise`\<readonly `` `0x${string}` ``[]\>

Array of gauge addresses.

##### isActive()

> **isActive**(`gauge`): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:91](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L91)

Check if a gauge is active.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gauge` | `` `0x${string}` `` | The gauge address to check. |

###### Returns

`Promise`\<`boolean`\>

True if the gauge is active, false otherwise.

##### owner()

> **owner**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L62)

Get the owner of the contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The owner address.

##### pendingOwner()

> **pendingOwner**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L71)

Get the pending owner of the contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The pending owner address.

##### registerGauge()

> **registerGauge**(`gauge`, `metadataURI`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:121](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L121)

Register a new gauge.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gauge` | `` `0x${string}` `` | The gauge address to register. |
| `metadataURI` | `string` | The metadata URI for the gauge. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### renounceOwnership()

> **renounceOwnership**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:198](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L198)

Renounce ownership.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### transferOwnership()

> **transferOwnership**(`newOwner`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:174](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L174)

Transfer ownership to a new owner.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newOwner` | `` `0x${string}` `` | The new owner address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### updateGaugeMetadata()

> **updateGaugeMetadata**(`gauge`, `metadataURI`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/gauge-registry-handler.ts:161](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/gauge-registry-handler.ts#L161)

Update gauge metadata.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `gauge` | `` `0x${string}` `` | The gauge address to update. |
| `metadataURI` | `string` | The new metadata URI for the gauge. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.
