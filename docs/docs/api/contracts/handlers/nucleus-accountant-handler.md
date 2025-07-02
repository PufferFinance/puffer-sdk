# contracts/handlers/nucleus-accountant-handler

## Classes

### NucleusAccountantHandler

Handler for the `Accountant` contract from nucleus.

#### Constructors

##### new NucleusAccountantHandler()

> **new NucleusAccountantHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusAccountantHandler`](nucleus-accountant-handler.md#nucleusaccountanthandler)

Create the handler for processing tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`NucleusAccountantHandler`](nucleus-accountant-handler.md#nucleusaccountanthandler)

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L30)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `token` | `private` | [`UnifiToken`](../tokens.md#unifitoken) | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:56](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L56)

##### getRate()

> **getRate**(): `Promise`\<`bigint`\>

Get the rate for the given token address.

###### Returns

`Promise`\<`bigint`\>

Rate for the given token address.

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L96)

##### getRateInQuote()

> **getRateInQuote**(`quoteAddress`): `Promise`\<`bigint`\>

Get the rate from the given quote address.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `quoteAddress` | \`0x$\{string\}\` |

###### Returns

`Promise`\<`bigint`\>

Rate for the given quote address.

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:114](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L114)

##### getRateInQuoteSafe()

> **getRateInQuoteSafe**(`quoteAddress`): `Promise`\<`bigint`\>

Get the rate from the given quote address for safe.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `quoteAddress` | \`0x$\{string\}\` |

###### Returns

`Promise`\<`bigint`\>

Rate for the given quote address for safe.

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:123](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L123)

##### getRateSafe()

> **getRateSafe**(): `Promise`\<`bigint`\>

Get the rate for the given token address for safe.

###### Returns

`Promise`\<`bigint`\>

Rate for the given token address for safe.

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:105](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L105)

##### rateProviderData()

> **rateProviderData**(`tokenAddress`): `Promise`\<`object`\>

Get the rate provider data for the given token address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | \`0x$\{string\}\` | Address of the token. |

###### Returns

`Promise`\<`object`\>

Rate provider data for the given token address.

###### isPeggedToBase

> **isPeggedToBase**: `boolean`

###### rateProvider

> **rateProvider**: \`0x$\{string\}\`

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:75](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L75)

##### vault()

> **vault**(): `Promise`\<\`0x$\{string\}\`\>

Get the vault for the given token address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

Vault for the given token address.

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:87](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L87)

##### withToken()

> **withToken**(`token`): [`NucleusAccountantHandler`](nucleus-accountant-handler.md#nucleusaccountanthandler)

Set the UniFi token to use for executing transactions on the
contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | [`UnifiToken`](../tokens.md#unifitoken) | UniFi token to use for the handler. |

###### Returns

[`NucleusAccountantHandler`](nucleus-accountant-handler.md#nucleusaccountanthandler)

The handler.

###### Source

[lib/contracts/handlers/nucleus-accountant-handler.ts:45](https://github.com/PufferFinance/puffer-sdk/blob/dd889a0e191ba7a287d39dd4dceaeb2b76c96478/lib/contracts/handlers/nucleus-accountant-handler.ts#L45)
