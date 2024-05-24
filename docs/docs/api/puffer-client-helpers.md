# puffer-client-helpers

## Classes

### PufferClientHelpers

#### Constructors

##### new PufferClientHelpers()

> **new PufferClientHelpers**(): [`PufferClientHelpers`](puffer-client-helpers.md#pufferclienthelpers)

###### Returns

[`PufferClientHelpers`](puffer-client-helpers.md#pufferclienthelpers)

#### Methods

##### createPublicClient()

> `static` **createPublicClient**(`config`): `object`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) |

###### Returns

`object`

###### Source

[lib/api/puffer-client-helpers.ts:21](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/b42b48e3e859b7356dd285f776ef9f575bf1ffe0/lib/api/puffer-client-helpers.ts#L21)

##### createWalletClient()

> `static` **createWalletClient**(`config`): `object`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) |

###### Returns

`object`

###### Source

[lib/api/puffer-client-helpers.ts:28](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/b42b48e3e859b7356dd285f776ef9f575bf1ffe0/lib/api/puffer-client-helpers.ts#L28)

##### extractTransportConfig()

> `static` `private` **extractTransportConfig**(`config`): `Transport`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](puffer-client-helpers.md#clientconfig) |

###### Returns

`Transport`

###### Source

[lib/api/puffer-client-helpers.ts:35](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/b42b48e3e859b7356dd285f776ef9f575bf1ffe0/lib/api/puffer-client-helpers.ts#L35)

## Type Aliases

### ClientConfig

> **ClientConfig**: `object` & `object` \| `object`

#### Type declaration

##### chain

> **chain**: `Chain`

#### Source

[lib/api/puffer-client-helpers.ts:13](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/b42b48e3e859b7356dd285f776ef9f575bf1ffe0/lib/api/puffer-client-helpers.ts#L13)
