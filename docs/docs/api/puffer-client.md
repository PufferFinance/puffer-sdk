# puffer-client

## Classes

### PufferClient

#### Constructors

##### new PufferClient()

> **new PufferClient**(`chain`, `walletClient`?, `publicClient`?): [`PufferClient`](puffer-client.md#pufferclient)

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `chain` | `Chain` |
| `walletClient`? | `object` |
| `publicClient`? | `object` |

###### Returns

[`PufferClient`](puffer-client.md#pufferclient)

###### Source

[lib/api/puffer-client.ts:23](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/02707b039bbcaa57636b9b81b3f22c8a7c977da7/lib/api/puffer-client.ts#L23)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `chainAbis` | `private` | `ValueOf`\<`object`\> |
| `chainAddresses` | `private` | `ValueOf`\<`object`\> |
| `publicClient` | `private` | `object` |
| `viemChain` | `private` | `Chain` |
| `walletClient` | `private` | `object` |

#### Methods

##### depositETH()

> **depositETH**(`walletAddress`): `object`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` |

###### Returns

`object`

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: (`value`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `bigint` |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/api/puffer-client.ts:50](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/02707b039bbcaa57636b9b81b3f22c8a7c977da7/lib/api/puffer-client.ts#L50)

##### requestAddresses()

> **requestAddresses**(): `Promise`\<`RequestAddressesReturnType`\>

###### Returns

`Promise`\<`RequestAddressesReturnType`\>

###### Source

[lib/api/puffer-client.ts:46](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/02707b039bbcaa57636b9b81b3f22c8a7c977da7/lib/api/puffer-client.ts#L46)
