# contracts/handlers/concrete-vault-handler

## Classes

### ConcreteVaultHandler

Handler for the `ConcreteMultStrategyVault` contract for a given token (pufETH) exposing
methods to interact with the contract.

#### Constructors

##### new ConcreteVaultHandler()

> **new ConcreteVaultHandler**(`chain`, `walletClient`, `publicClient`): [`ConcreteVaultHandler`](concrete-vault-handler.md#concretevaulthandler)

Create the handler for processing UniFi tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`ConcreteVaultHandler`](concrete-vault-handler.md#concretevaulthandler)

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:34](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L34)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `token` | `private` | `ctTACpufETH` | - |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### approve()

> **approve**(`spender`, `amount`): `Promise`\<\`0x$\{string\}\`\>

Approve a spender to spend the token.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `spender` | \`0x$\{string\}\` | The spender of the token. |
| `amount` | `bigint` | The amount to approve. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:80](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L80)

##### deposit()

> **deposit**(`amount`): `Promise`\<\`0x$\{string\}\`\>

Deposit an amount of the token.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to deposit. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:123](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L123)

##### getAllowance()

> **getAllowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Get the allowance of the owner for the spender.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner of the allowance. |
| `spender` | \`0x$\{string\}\` | The spender of the allowance. |

###### Returns

`Promise`\<`bigint`\>

The allowance.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:94](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L94)

##### getBalance()

> **getBalance**(`address`): `Promise`\<`bigint`\>

Get the balance for the address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:104](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L104)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L60)

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

The total supply.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:113](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L113)

##### previewDeposit()

> **previewDeposit**(`amount`): `Promise`\<`bigint`\>

Provides a preview of the number of shares that would be minted for a given deposit amount, after fees.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to deposit. |

###### Returns

`Promise`\<`bigint`\>

The preview.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:149](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L149)

##### previewWithdraw()

> **previewWithdraw**(`amount`): `Promise`\<`bigint`\>

Provides a preview of the number of shares that would be burned for a given withdrawal amount, after fees.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to withdraw. |

###### Returns

`Promise`\<`bigint`\>

The preview.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:159](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L159)

##### withToken()

> **withToken**(`token`): [`ConcreteVaultHandler`](concrete-vault-handler.md#concretevaulthandler)

Set the UniFi token to use for executing transactions on the
contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | `ctTACpufETH` | UniFi token to use for the handler. |

###### Returns

[`ConcreteVaultHandler`](concrete-vault-handler.md#concretevaulthandler)

The handler.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:50](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L50)

##### withdraw()

> **withdraw**(`amount`): `Promise`\<\`0x$\{string\}\`\>

Withdraw an amount of the token.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to withdraw. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/concrete-vault-handler.ts:136](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/contracts/handlers/concrete-vault-handler.ts#L136)
