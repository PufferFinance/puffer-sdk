# contracts/handlers/erc20-permit-handler

## Classes

### ERC20PermitHandler

Handler for performing operations for and with ERC20Permit tokens.

#### Constructors

##### new ERC20PermitHandler()

> **new ERC20PermitHandler**(`chain`, `walletClient`, `publicClient`): [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler)

Create the handler for processing tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler)

###### Source

[lib/contracts/handlers/erc20-permit-handler.ts:36](https://github.com/PufferFinance/puffer-sdk/blob/abc759bacf8ed48d0b87dd025e4c84259b37520a/lib/contracts/handlers/erc20-permit-handler.ts#L36)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `token` | `private` | [`AnyToken`](../tokens.md#anytoken) | - |
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

[lib/contracts/handlers/erc20-permit-handler.ts:136](https://github.com/PufferFinance/puffer-sdk/blob/abc759bacf8ed48d0b87dd025e4c84259b37520a/lib/contracts/handlers/erc20-permit-handler.ts#L136)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/erc20-permit-handler.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/abc759bacf8ed48d0b87dd025e4c84259b37520a/lib/contracts/handlers/erc20-permit-handler.ts#L62)

##### getPermitSalt()

> `private` **getPermitSalt**(`token`): `undefined` \| \`0x$\{string\}\`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `token` | [`AnyToken`](../tokens.md#anytoken) |

###### Returns

`undefined` \| \`0x$\{string\}\`

###### Source

[lib/contracts/handlers/erc20-permit-handler.ts:151](https://github.com/PufferFinance/puffer-sdk/blob/abc759bacf8ed48d0b87dd025e4c84259b37520a/lib/contracts/handlers/erc20-permit-handler.ts#L151)

##### getPermitSignature()

> **getPermitSignature**(`ownerAddress`, `spenderAddress`, `value`): `Promise`\<`object` \| `object`\>

Process and get permit signature for the given token to perform
transactions without calling `approve()`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the token owner. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender who needs the permit. |
| `value` | `bigint` | Value of the transaction. |

###### Returns

`Promise`\<`object` \| `object`\>

Permit signature in the form `{ r, s, v?, yParity }`.

###### Source

[lib/contracts/handlers/erc20-permit-handler.ts:83](https://github.com/PufferFinance/puffer-sdk/blob/abc759bacf8ed48d0b87dd025e4c84259b37520a/lib/contracts/handlers/erc20-permit-handler.ts#L83)

##### getPermitVersion()

> `private` **getPermitVersion**(`token`): `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `token` | [`AnyToken`](../tokens.md#anytoken) |

###### Returns

`string`

###### Source

[lib/contracts/handlers/erc20-permit-handler.ts:147](https://github.com/PufferFinance/puffer-sdk/blob/abc759bacf8ed48d0b87dd025e4c84259b37520a/lib/contracts/handlers/erc20-permit-handler.ts#L147)

##### withToken()

> **withToken**(`token`): [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler)

Set the token to use for executing transactions on the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | [`AnyToken`](../tokens.md#anytoken) | Token to use for the handler. |

###### Returns

[`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler)

The handler.

###### Source

[lib/contracts/handlers/erc20-permit-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/abc759bacf8ed48d0b87dd025e4c84259b37520a/lib/contracts/handlers/erc20-permit-handler.ts#L51)
