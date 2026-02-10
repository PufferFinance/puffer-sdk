# contracts/handlers/nucleus-accountant-handler

## Classes

### NucleusAccountantHandler

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L18)

Handler for the `Accountant` contract from nucleus.

#### Constructors

##### Constructor

> **new NucleusAccountantHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusAccountantHandler`](#nucleusaccountanthandler)

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L30)

Create the handler for processing tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`NucleusAccountantHandler`](#nucleusaccountanthandler)

#### Methods

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:56](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L56)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getRate()

> **getRate**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L96)

Get the rate for the given token address.

###### Returns

`Promise`\<`bigint`\>

Rate for the given token address.

##### getRateInQuote()

> **getRateInQuote**(`quoteAddress`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:114](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L114)

Get the rate from the given quote address.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `quoteAddress` | `` `0x${string}` `` |

###### Returns

`Promise`\<`bigint`\>

Rate for the given quote address.

##### getRateInQuoteSafe()

> **getRateInQuoteSafe**(`quoteAddress`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:123](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L123)

Get the rate from the given quote address for safe.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `quoteAddress` | `` `0x${string}` `` |

###### Returns

`Promise`\<`bigint`\>

Rate for the given quote address for safe.

##### getRateSafe()

> **getRateSafe**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:105](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L105)

Get the rate for the given token address for safe.

###### Returns

`Promise`\<`bigint`\>

Rate for the given token address for safe.

##### rateProviderData()

> **rateProviderData**(`tokenAddress`): `Promise`\<\{ `isPeggedToBase`: `boolean`; `rateProvider`: `` `0x${string}` ``; \}\>

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:75](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L75)

Get the rate provider data for the given token address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokenAddress` | `` `0x${string}` `` | Address of the token. |

###### Returns

`Promise`\<\{ `isPeggedToBase`: `boolean`; `rateProvider`: `` `0x${string}` ``; \}\>

Rate provider data for the given token address.

##### vault()

> **vault**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:87](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L87)

Get the vault for the given token address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

Vault for the given token address.

##### withToken()

> **withToken**(`token`): [`NucleusAccountantHandler`](#nucleusaccountanthandler)

Defined in: [lib/contracts/handlers/nucleus-accountant-handler.ts:45](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/nucleus-accountant-handler.ts#L45)

Set the UniFi token to use for executing transactions on the
contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | [`UnifiToken`](../tokens.md#unifitoken) | UniFi token to use for the handler. |

###### Returns

[`NucleusAccountantHandler`](#nucleusaccountanthandler)

The handler.
