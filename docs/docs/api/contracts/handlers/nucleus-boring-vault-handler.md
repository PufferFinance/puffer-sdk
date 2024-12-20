# contracts/handlers/nucleus-boring-vault-handler

## Classes

### NucleusBoringVaultHandler

Handler for the `BoringVault` contract for a given token exposing
methods to interact with the contract.

#### Constructors

##### new NucleusBoringVaultHandler()

> **new NucleusBoringVaultHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusBoringVaultHandler`](nucleus-boring-vault-handler.md#nucleusboringvaulthandler)

Create the handler for processing UniFi tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`NucleusBoringVaultHandler`](nucleus-boring-vault-handler.md#nucleusboringvaulthandler)

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:41](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L41)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### approve()

> **approve**(`walletAddress`, `spenderAddress`, `value`): `Promise`\<\`0x$\{string\}\`\>

Approve transaction for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender. |
| `value` | `bigint` | Value to approve for the spender. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

Hash of the transaction.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:115](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L115)

##### balanceOf()

> **balanceOf**(`walletAddress`): `Promise`\<`bigint`\>

Check the token balance of the wallet.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to check the balance of. |

###### Returns

`Promise`\<`bigint`\>

Token balance in wei.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:94](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L94)

##### getAllowance()

> **getAllowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Get the allowance for the given owner and spender.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | Address of the owner. |
| `spender` | \`0x$\{string\}\` | Address of the spender. |

###### Returns

`Promise`\<`bigint`\>

Allowance for the given owner and spender.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:75](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L75)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:55](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L55)

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

Total supply of the token.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:84](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L84)

##### permit()

> **permit**(`params`): `object`

Get permit to be able to use the token.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`PermitParams`](nucleus-boring-vault-handler.md#permitparams) | Permit parameters. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to make the
transaction with the given value.

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:203](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L203)

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

Total supply of the token.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:103](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L103)

##### transfer()

> **transfer**(`walletAddress`, `toAddress`, `value`): `object`

Transfer tokens from the owner's wallet to the given address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Address of the owner's wallet. |
| `toAddress` | \`0x$\{string\}\` | Address to transfer the tokens to. |
| `value` | `bigint` | Value to transfer. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to make the
transaction with the given value.

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:138](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L138)

##### transferFrom()

> **transferFrom**(`walletAddress`, `fromAddress`, `toAddress`, `value`): `object`

Transfer tokens from the given address to another address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `fromAddress` | \`0x$\{string\}\` | Address to transfer the tokens from. |
| `toAddress` | \`0x$\{string\}\` | Address to transfer the tokens to. |
| `value` | `bigint` | Value to transfer. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to
make the transaction with the given value.

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:165](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L165)

## Type Aliases

### PermitParams

> **PermitParams**: `object`

#### Type declaration

##### account

> **account**: `Address`

##### deadline

> **deadline**: `bigint`

##### owner

> **owner**: `Address`

##### r

> **r**: `Address`

##### s

> **s**: `Address`

##### spender

> **spender**: `Address`

##### v

> **v**: `number`

##### value

> **value**: `bigint`

#### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/302c0f19ce389981cb4dce6e1cb6c95f9b8e41f5/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L14)
