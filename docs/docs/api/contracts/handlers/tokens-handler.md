# contracts/handlers/tokens-handler

## Classes

### TokensHandler

Handler for performing operations for and with tokens.

#### Constructors

##### new TokensHandler()

> **new TokensHandler**(`chain`, `walletClient`, `publicClient`): [`TokensHandler`](tokens-handler.md#tokenshandler)

Create the handler for processing tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`TokensHandler`](tokens-handler.md#tokenshandler)

###### Source

[lib/contracts/handlers/tokens-handler.ts:27](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/tokens-handler.ts#L27)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### getContract()

> `private` **getContract**(`token`): `object`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `token` | [`Token`](../tokens.md#token) |

###### Returns

`object`

###### Source

[lib/contracts/handlers/tokens-handler.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/tokens-handler.ts#L33)

##### getPermitSignature()

> **getPermitSignature**(`token`, `walletAddress`, `value`): `Promise`\<`object` \| `object`\>

Process and get permit signature for the given token to perform
transactions through the `PufferDepositor` contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | [`Token`](../tokens.md#token) | Token for which to get the permit signature. |
| `walletAddress` | \`0x$\{string\}\` | Wallet address making the transaction. |
| `value` | `bigint` | Value of the transaction. |

###### Returns

`Promise`\<`object` \| `object`\>

Permit signature in the form `{ r, s, v?, yParity }`.

###### Source

[lib/contracts/handlers/tokens-handler.ts:53](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/tokens-handler.ts#L53)

##### getPermitVersion()

> `private` **getPermitVersion**(`token`): `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `token` | [`Token`](../tokens.md#token) |

###### Returns

`string`

###### Source

[lib/contracts/handlers/tokens-handler.ts:97](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/tokens-handler.ts#L97)
