# contracts/handlers/puf-token-handler

## Classes

### PufTokenHandler

Handler for the `PufToken` contract exposing methods to interact with
the contract for each of the wrapped PufTokens (like pufWETH,
pufStETH, pufWstETH etc.).

#### Constructors

##### new PufTokenHandler()

> **new PufTokenHandler**(`chain`, `walletClient`, `publicClient`): [`PufTokenHandler`](puf-token-handler.md#puftokenhandler)

Create the handler for the `PufToken` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufTokenHandler`](puf-token-handler.md#puftokenhandler)

###### Source

[lib/contracts/handlers/puf-token-handler.ts:25](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L25)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `pufToken` | `private` | [`PufToken`](../tokens.md#puftoken) | - |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### approve()

> **approve**(`ownerAddress`, `spenderAddress`, `value`): `Promise`\<\`0x$\{string\}\`\>

Approve transaction for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender. |
| `value` | `bigint` | Value to approve for the spender. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

Hash of the transaction.

###### Source

[lib/contracts/handlers/puf-token-handler.ts:213](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L213)

##### balanceOf()

> **balanceOf**(`walletAddress`): `Promise`\<`bigint`\>

Check the wrapped token (PufToken) balance of the wallet.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to check the balance of. |

###### Returns

`Promise`\<`bigint`\>

The wrapped token's (PufToken) balance in wei.

###### Source

[lib/contracts/handlers/puf-token-handler.ts:68](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L68)

##### deposit()

> **deposit**(`depositorAddress`, `walletAddress`, `value`): `object`

Deposits the underlying token in exchange for the wrapped PufToken.
This doesn't make the transaction but returns two methods namely
`transact` and `estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `depositorAddress` | \`0x$\{string\}\` | Depositor of the underlying token. |
| `walletAddress` | \`0x$\{string\}\` | Wallet address of the recipient of the deposit. |
| `value` | `bigint` | Value of the deposit. |

###### Returns

`object`

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

[lib/contracts/handlers/puf-token-handler.ts:143](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L143)

##### getAllowance()

> **getAllowance**(`ownerAddress`, `spenderAddress`): `Promise`\<`bigint`\>

Get the allowance for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the owner. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender. |

###### Returns

`Promise`\<`bigint`\>

Allowance that can be used by the spender.

###### Source

[lib/contracts/handlers/puf-token-handler.ts:79](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L79)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puf-token-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L51)

##### getTotalDepositCap()

> **getTotalDepositCap**(): `Promise`\<`bigint`\>

Get the total cap of the PufToken that can be deposited.

###### Returns

`Promise`\<`bigint`\>

Total cap of the PufToken that can be deposited.

###### Source

[lib/contracts/handlers/puf-token-handler.ts:88](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L88)

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the PufToken.

###### Returns

`Promise`\<`bigint`\>

Total supply of the PufToken.

###### Source

[lib/contracts/handlers/puf-token-handler.ts:97](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L97)

##### migrate()

> **migrate**(`walletAddress`, `migratorContract`, `value`): `object`

Migrate tokens using an allowed `migratorContract` to the given
wallet address. This doesn't make the transaction but returns two
methods namely `transact` and `estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Address to migrate the tokens to. |
| `migratorContract` | \`0x$\{string\}\` | Address of the migrator contract. |
| `value` | `bigint` | Value of the tokens to migrate. |

###### Returns

`object`

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

[lib/contracts/handlers/puf-token-handler.ts:181](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L181)

##### withPufToken()

> **withPufToken**(`pufToken`): [`PufTokenHandler`](puf-token-handler.md#puftokenhandler)

Set the PufToken to use for executing transactions on the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pufToken` | [`PufToken`](../tokens.md#puftoken) | The PufToken to use for the handler. |

###### Returns

[`PufTokenHandler`](puf-token-handler.md#puftokenhandler)

The handler.

###### Source

[lib/contracts/handlers/puf-token-handler.ts:40](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L40)

##### withdraw()

> **withdraw**(`walletAddress`, `value`): `object`

Withdraws the PufToken and returns the underlying token to the
given wallet. This doesn't make the transaction but returns two
methods namely `transact` and `estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to withdraw the PufToken from. |
| `value` | `bigint` | Value of the withdrawal. |

###### Returns

`object`

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

[lib/contracts/handlers/puf-token-handler.ts:114](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/handlers/puf-token-handler.ts#L114)
