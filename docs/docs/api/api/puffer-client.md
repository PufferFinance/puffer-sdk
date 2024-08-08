# api/puffer-client

## Classes

### PufferClient

The core class and the main entry point of the Puffer SDK.

#### Constructors

##### new PufferClient()

> **new PufferClient**(`chain`, `walletClient`?, `publicClient`?): [`PufferClient`](puffer-client.md#pufferclient)

Create the Puffer Client.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient`? | `object` | The wallet client to use for wallet interactions. |
| `publicClient`? | `object` | The public client to use for public interactions. |

###### Returns

[`PufferClient`](puffer-client.md#pufferclient)

###### Defined in

[lib/api/puffer-client.ts:46](https://github.com/PufferFinance/puffer-sdk/blob/757072c9d39b8cb5fad75518954e68b14c1ba5da/lib/api/puffer-client.ts#L46)

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `depositor` | `public` | [`PufferDepositorHandler`](../contracts/handlers/puffer-depositor-handler.md#pufferdepositorhandler) | Handler for the `PufferDepositor` contract. | [lib/api/puffer-client.ts:29](https://github.com/PufferFinance/puffer-sdk/blob/757072c9d39b8cb5fad75518954e68b14c1ba5da/lib/api/puffer-client.ts#L29) |
| `erc20Permit` | `public` | [`ERC20PermitHandler`](../contracts/handlers/erc20-permit-handler.md#erc20permithandler) | Handler for the `ERC20Permit` contract. | [lib/api/puffer-client.ts:25](https://github.com/PufferFinance/puffer-sdk/blob/757072c9d39b8cb5fad75518954e68b14c1ba5da/lib/api/puffer-client.ts#L25) |
| `l2Depositor` | `public` | [`PufferL2DepositorHandler`](../contracts/handlers/puffer-l2-depositor-handler.md#pufferl2depositorhandler) | Handler for the `PufferL2Depositor` contract. | [lib/api/puffer-client.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/757072c9d39b8cb5fad75518954e68b14c1ba5da/lib/api/puffer-client.ts#L31) |
| `pufLocker` | `public` | [`PufLockerHandler`](../contracts/handlers/puf-locker-handler.md#puflockerhandler) | Handler for the `PufLocker` contract. | [lib/api/puffer-client.ts:35](https://github.com/PufferFinance/puffer-sdk/blob/757072c9d39b8cb5fad75518954e68b14c1ba5da/lib/api/puffer-client.ts#L35) |
| `pufToken` | `public` | [`PufTokenHandler`](../contracts/handlers/puf-token-handler.md#puftokenhandler) | Handler for the `PufToken` contract. | [lib/api/puffer-client.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/757072c9d39b8cb5fad75518954e68b14c1ba5da/lib/api/puffer-client.ts#L33) |
| `vault` | `public` | [`PufferVaultHandler`](../contracts/handlers/puffer-vault-handler.md#puffervaulthandler) | Handler for the `PufferVaultV2` contract. | [lib/api/puffer-client.ts:27](https://github.com/PufferFinance/puffer-sdk/blob/757072c9d39b8cb5fad75518954e68b14c1ba5da/lib/api/puffer-client.ts#L27) |

#### Methods

##### requestAddresses()

> **requestAddresses**(): `Promise`\<`RequestAddressesReturnType`\>

Request addresses from the wallet.

###### Returns

`Promise`\<`RequestAddressesReturnType`\>

An array of wallet addresses.

###### Defined in

[lib/api/puffer-client.ts:104](https://github.com/PufferFinance/puffer-sdk/blob/757072c9d39b8cb5fad75518954e68b14c1ba5da/lib/api/puffer-client.ts#L104)
