# contracts/handlers/puffer-depositor-handler

## Classes

### PufferDepositorHandler

Handler for the `PufferDepositor` contract exposing methods to
interact with the contract.

#### Constructors

##### new PufferDepositorHandler()

> **new PufferDepositorHandler**(`chain`, `walletClient`, `publicClient`): [`PufferDepositorHandler`](puffer-depositor-handler.md#pufferdepositorhandler)

Create the handler for the `PufferDepositor` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufferDepositorHandler`](puffer-depositor-handler.md#pufferdepositorhandler)

###### Source

[lib/contracts/handlers/puffer-depositor-handler.ts:32](https://github.com/PufferFinance/puffer-sdk/blob/993b2d21b02d3a98164ddef83586b785b9cd549f/lib/contracts/handlers/puffer-depositor-handler.ts#L32)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `erc20PermitHandler` | `private` | [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler) | - |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### depositStETH()

> **depositStETH**(`walletAddress`, `value`): `Promise`\<`object`\>

Deposit stETH in exchange for pufETH. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to get the stETH from. |
| `value` | `bigint` | Value in wei of the stETH to deposit. |

###### Returns

`Promise`\<`object`\>

`transact: () => Promise<Address>` - Used to make the
transaction.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puffer-depositor-handler.ts:76](https://github.com/PufferFinance/puffer-sdk/blob/993b2d21b02d3a98164ddef83586b785b9cd549f/lib/contracts/handlers/puffer-depositor-handler.ts#L76)

##### depositWstETH()

> **depositWstETH**(`walletAddress`, `value`): `Promise`\<`object`\>

Deposit wstETH in exchange for pufETH. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to get the stETH from. |
| `value` | `bigint` | Value in wei of the wstETH to deposit. |

###### Returns

`Promise`\<`object`\>

`transact: () => Promise<Address>` - Used to make the
transaction.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puffer-depositor-handler.ts:120](https://github.com/PufferFinance/puffer-sdk/blob/993b2d21b02d3a98164ddef83586b785b9cd549f/lib/contracts/handlers/puffer-depositor-handler.ts#L120)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puffer-depositor-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/993b2d21b02d3a98164ddef83586b785b9cd549f/lib/contracts/handlers/puffer-depositor-handler.ts#L51)
