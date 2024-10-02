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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:40](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L40)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:114](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L114)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:93](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L93)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:74](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L74)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:54](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L54)

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

Total supply of the token.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:83](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L83)

##### permit()

> **permit**(`walletAddress`, `params`): `object`

Get permit to be able to use the token.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:201](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L201)

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

Total supply of the token.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:102](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L102)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:137](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L137)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:164](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L164)

## Type Aliases

### PermitParams

> **PermitParams**: `object`

#### Type declaration

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/cce0870cf49d92e09d8ce9ea521f2d5d798f7757/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L14)
