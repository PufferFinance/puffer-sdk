# contracts/handlers/gauge-registry-handler

## Classes

### GaugeRegistryHandler

Handler for the `GaugeRegistry` contract exposing methods to interact
with the contract.

#### Constructors

##### new GaugeRegistryHandler()

> **new GaugeRegistryHandler**(`chain`, `walletClient`, `publicClient`): [`GaugeRegistryHandler`](gauge-registry-handler.md#gaugeregistryhandler)

Create the handler for the `GaugeRegistry` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`GaugeRegistryHandler`](gauge-registry-handler.md#gaugeregistryhandler)

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L31)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### acceptOwnership()

> **acceptOwnership**(): `Promise`\<\`0x$\{string\}\`\>

Accept ownership transfer.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:186](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L186)

##### activateGauge()

> **activateGauge**(`gauge`): `Promise`\<\`0x$\{string\}\`\>

Activate a gauge.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gauge` | \`0x$\{string\}\` | The gauge address to activate. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L134)

##### deactivateGauge()

> **deactivateGauge**(`gauge`): `Promise`\<\`0x$\{string\}\`\>

Deactivate a gauge.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gauge` | \`0x$\{string\}\` | The gauge address to deactivate. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:147](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L147)

##### gaugeExists()

> **gaugeExists**(`gauge`): `Promise`\<`boolean`\>

Check if a gauge exists.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gauge` | \`0x$\{string\}\` | The gauge address to check. |

###### Returns

`Promise`\<`boolean`\>

True if the gauge exists, false otherwise.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L81)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:44](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L44)

##### getGauge()

> **getGauge**(`gauge`): `Promise`\<`object`\>

Get gauge information.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gauge` | \`0x$\{string\}\` | The gauge address. |

###### Returns

`Promise`\<`object`\>

The gauge information including active status, creation time, and metadata URI.

###### active

> **active**: `boolean`

###### created

> **created**: `number`

###### metadataURI

> **metadataURI**: `string`

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:101](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L101)

##### getGaugeList()

> **getGaugeList**(): `Promise`\<readonly \`0x$\{string\}\`[]\>

Get the list of all gauges.

###### Returns

`Promise`\<readonly \`0x$\{string\}\`[]\>

Array of gauge addresses.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L110)

##### isActive()

> **isActive**(`gauge`): `Promise`\<`boolean`\>

Check if a gauge is active.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gauge` | \`0x$\{string\}\` | The gauge address to check. |

###### Returns

`Promise`\<`boolean`\>

True if the gauge is active, false otherwise.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:91](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L91)

##### owner()

> **owner**(): `Promise`\<\`0x$\{string\}\`\>

Get the owner of the contract.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The owner address.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L62)

##### pendingOwner()

> **pendingOwner**(): `Promise`\<\`0x$\{string\}\`\>

Get the pending owner of the contract.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The pending owner address.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L71)

##### registerGauge()

> **registerGauge**(`gauge`, `metadataURI`): `Promise`\<\`0x$\{string\}\`\>

Register a new gauge.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gauge` | \`0x$\{string\}\` | The gauge address to register. |
| `metadataURI` | `string` | The metadata URI for the gauge. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:121](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L121)

##### renounceOwnership()

> **renounceOwnership**(): `Promise`\<\`0x$\{string\}\`\>

Renounce ownership.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:198](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L198)

##### transferOwnership()

> **transferOwnership**(`newOwner`): `Promise`\<\`0x$\{string\}\`\>

Transfer ownership to a new owner.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `newOwner` | \`0x$\{string\}\` | The new owner address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:174](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L174)

##### updateGaugeMetadata()

> **updateGaugeMetadata**(`gauge`, `metadataURI`): `Promise`\<\`0x$\{string\}\`\>

Update gauge metadata.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gauge` | \`0x$\{string\}\` | The gauge address to update. |
| `metadataURI` | `string` | The new metadata URI for the gauge. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/gauge-registry-handler.ts:161](https://github.com/PufferFinance/puffer-sdk/blob/449784c31a97604a353356c9c6e9d78ef59a6a6d/lib/contracts/handlers/gauge-registry-handler.ts#L161)
