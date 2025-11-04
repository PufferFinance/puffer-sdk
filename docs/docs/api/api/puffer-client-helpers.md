# api/puffer-client-helpers

## Classes

### PufferClientHelpers

Defined in: [lib/api/puffer-client-helpers.ts:25](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/api/puffer-client-helpers.ts#L25)

Helper methods for the main `PufferClient`.

#### Constructors

##### Constructor

> **new PufferClientHelpers**(): [`PufferClientHelpers`](#pufferclienthelpers)

###### Returns

[`PufferClientHelpers`](#pufferclienthelpers)

#### Methods

##### createPublicClient()

> `static` **createPublicClient**(`config`): `object`

Defined in: [lib/api/puffer-client-helpers.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/api/puffer-client-helpers.ts#L33)

Helper method for creating a public client based on the
configuration

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`ClientConfig`](#clientconfig) | Configuration for the public client. |

###### Returns

`object`

The public client created with viem.

##### createWalletClient()

> `static` **createWalletClient**(`config`): `object`

Defined in: [lib/api/puffer-client-helpers.ts:47](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/api/puffer-client-helpers.ts#L47)

Helper method for creating a wallet client based on the
configuration

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`ClientConfig`](#clientconfig) | Configuration for the wallet client. |

###### Returns

`object`

The wallet client created with viem.

## Type Aliases

### ClientConfig

> **ClientConfig** = `object` & \{ `rpcUrls`: `string`[]; \} \| \{ `config?`: `CustomTransportConfig`; `provider`: [`TransportProvider`](../utils/types.md#transportprovider); \}

Defined in: [lib/api/puffer-client-helpers.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/api/puffer-client-helpers.ts#L15)

#### Type Declaration

##### chain

> **chain**: [`Chain`](../chains/constants.md#chain)
