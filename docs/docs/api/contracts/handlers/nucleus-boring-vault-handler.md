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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L43)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `token` | `private` | [`UnifiToken`](../tokens.md#unifitoken) | - |
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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:121](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L121)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:100](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L100)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:90](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L90)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L70)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:209](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L209)

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

Total supply of the token.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L109)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:144](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L144)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:171](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L171)

##### withToken()

> **withToken**(`token`): [`NucleusBoringVaultHandler`](nucleus-boring-vault-handler.md#nucleusboringvaulthandler)

Set the UniFi token to use for executing transactions on the
contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | [`UnifiToken`](../tokens.md#unifitoken) | UniFi token to use for the handler. |

###### Returns

[`NucleusBoringVaultHandler`](nucleus-boring-vault-handler.md#nucleusboringvaulthandler)

The handler.

###### Source

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:59](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L59)

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

[lib/contracts/handlers/nucleus-boring-vault-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/e1df5b058ff743a8745e419a3c4cc544308f89f4/lib/contracts/handlers/nucleus-boring-vault-handler.ts#L15)
