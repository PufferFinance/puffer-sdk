# contracts/handlers/puffer-depositor-handler

## Classes

### PufferDepositorHandler

Defined in: [lib/contracts/handlers/puffer-depositor-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-depositor-handler.ts#L18)

Handler for the `PufferDepositor` contract exposing methods to
interact with the contract.

#### Constructors

##### Constructor

> **new PufferDepositorHandler**(`chain`, `walletClient`, `publicClient`): [`PufferDepositorHandler`](#pufferdepositorhandler)

Defined in: [lib/contracts/handlers/puffer-depositor-handler.ts:32](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-depositor-handler.ts#L32)

Create the handler for the `PufferDepositor` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`PufferDepositorHandler`](#pufferdepositorhandler)

#### Methods

##### depositStETH()

> **depositStETH**(`walletAddress`, `value`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/puffer-depositor-handler.ts:76](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-depositor-handler.ts#L76)

Deposit stETH in exchange for pufETH. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Wallet address to get the stETH from. |
| `value` | `bigint` | Value in wei of the stETH to deposit. |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

`transact: () => Promise<Address>` - Used to make the
transaction.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

##### depositWstETH()

> **depositWstETH**(`walletAddress`, `value`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/puffer-depositor-handler.ts:112](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-depositor-handler.ts#L112)

Deposit wstETH in exchange for pufETH. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Wallet address to get the stETH from. |
| `value` | `bigint` | Value in wei of the wstETH to deposit. |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

`transact: () => Promise<Address>` - Used to make the
transaction.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/puffer-depositor-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/puffer-depositor-handler.ts#L51)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.
