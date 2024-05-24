# puffer-client-helpers

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

[lib/api/puffer-client-helpers.ts:31](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/7435e1fb1bddb7203930f076ca6a2db2b0c715f9/lib/api/puffer-client-helpers.ts#L31)

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

[lib/api/puffer-client-helpers.ts:45](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/7435e1fb1bddb7203930f076ca6a2db2b0c715f9/lib/api/puffer-client-helpers.ts#L45)

##### extractTransportConfig()

> `static` `private` **extractTransportConfig**(`config`): `Transport`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) |

###### Returns

`Transport`

###### Source

[lib/api/puffer-client-helpers.ts:52](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/7435e1fb1bddb7203930f076ca6a2db2b0c715f9/lib/api/puffer-client-helpers.ts#L52)

## Type Aliases

### ClientConfig

> **ClientConfig**: `object` & `object` \| `object`

#### Type declaration

##### chain

> **chain**: `Chain`

#### Source

[lib/api/puffer-client-helpers.ts:13](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/7435e1fb1bddb7203930f076ca6a2db2b0c715f9/lib/api/puffer-client-helpers.ts#L13)
