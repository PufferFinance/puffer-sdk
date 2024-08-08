# api/puffer-client-helpers

## Classes

### PufferClientHelpers

Helper methods for the main `PufferClient`.

#### Constructors

##### new PufferClientHelpers()

> **new PufferClientHelpers**(): [`PufferClientHelpers`](puffer-client-helpers.md#pufferclienthelpers)

###### Returns

[`PufferClientHelpers`](puffer-client-helpers.md#pufferclienthelpers)

#### Methods

##### createPublicClient()

> `static` **createPublicClient**(`config`): `object`

Helper method for creating a public client based on the
configuration

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) | Configuration for the public client. |

###### Returns

`object`

The public client created with viem.

###### Defined in

[lib/api/puffer-client-helpers.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/76e7ef64bae7e516a3502e53b1b67e1ba5bfc496/lib/api/puffer-client-helpers.ts#L33)

##### createWalletClient()

> `static` **createWalletClient**(`config`): `object`

Helper method for creating a wallet client based on the
configuration

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) | Configuration for the wallet client. |

###### Returns

`object`

The wallet client created with viem.

###### Defined in

[lib/api/puffer-client-helpers.ts:47](https://github.com/PufferFinance/puffer-sdk/blob/76e7ef64bae7e516a3502e53b1b67e1ba5bfc496/lib/api/puffer-client-helpers.ts#L47)

## Type Aliases

### ClientConfig

> **ClientConfig**: `object` & `object` \| `object`

#### Type declaration

##### chain

> **chain**: [`Chain`](../chains/constants.md#chain)

#### Defined in

[lib/api/puffer-client-helpers.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/76e7ef64bae7e516a3502e53b1b67e1ba5bfc496/lib/api/puffer-client-helpers.ts#L15)
