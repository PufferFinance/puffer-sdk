# puffer-client

## Classes

### PufferClient

The core class and the main entry point of the Puffer SDK.

#### Constructors

##### new PufferClient()

> **new PufferClient**(`chain`, `walletClient`?, `publicClient`?): [`PufferClient`](puffer-client.md#pufferclient)

Create the Puffer Client.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | `Chain` | Chain to use for the client. |
| `walletClient`? | `object` | The wallet client to use for wallet interactions. |
| `publicClient`? | `object` | The public client to use for public interactions. |

###### Returns

[`PufferClient`](puffer-client.md#pufferclient)

###### Source

[lib/api/puffer-client.ts:32](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/04d3cf08e4a224e4d187c438d5041e962c4cdfb2/lib/api/puffer-client.ts#L32)

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

Deposit ETH to the given wallet address. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to get the ETH from. |

###### Returns

`object`

`transact: (value: bigint) => Promise<Address>` - Used to
make the transaction with the given value.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

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

[lib/api/puffer-client.ts:76](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/04d3cf08e4a224e4d187c438d5041e962c4cdfb2/lib/api/puffer-client.ts#L76)

##### requestAddresses()

> **requestAddresses**(): `Promise`\<`RequestAddressesReturnType`\>

Request addresses from the wallet.

###### Returns

`Promise`\<`RequestAddressesReturnType`\>

An array of wallet addresses.

###### Source

[lib/api/puffer-client.ts:60](https://github.com/PufferFinance/puffer-smart-contract-lib/blob/04d3cf08e4a224e4d187c438d5041e962c4cdfb2/lib/api/puffer-client.ts#L60)
