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
| :------ | :------ | :------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) | Configuration for the public client. |

###### Returns

`object`

The public client created with viem.

###### Source

[lib/api/puffer-client-helpers.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/62bde8e1d595cc595a6469bcd5aabe3cd4cdb7cb/lib/api/puffer-client-helpers.ts#L33)

##### createWalletClient()

> `static` **createWalletClient**(`config`): `object`

Helper method for creating a wallet client based on the
configuration

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) | Configuration for the wallet client. |

###### Returns

`object`

The wallet client created with viem.

###### Source

[lib/api/puffer-client-helpers.ts:47](https://github.com/PufferFinance/puffer-sdk/blob/62bde8e1d595cc595a6469bcd5aabe3cd4cdb7cb/lib/api/puffer-client-helpers.ts#L47)

##### extractTransportConfig()

> `static` `private` **extractTransportConfig**(`config`): `Transport`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) |

###### Returns

`Transport`

###### Source

[lib/api/puffer-client-helpers.ts:54](https://github.com/PufferFinance/puffer-sdk/blob/62bde8e1d595cc595a6469bcd5aabe3cd4cdb7cb/lib/api/puffer-client-helpers.ts#L54)

## Type Aliases

### ClientConfig

> **ClientConfig**: `object` & `object` \| `object`

#### Type declaration

##### chain

> **chain**: [`Chain`](../chains/constants.md#chain)

#### Source

[lib/api/puffer-client-helpers.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/62bde8e1d595cc595a6469bcd5aabe3cd4cdb7cb/lib/api/puffer-client-helpers.ts#L15)
