# contracts/handlers/concrete-vault-handler

## Classes

### ConcreteVaultHandler

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L21)

Handler for the `ConcreteMultStrategyVault` contract for a given token (pufETH) exposing
methods to interact with the contract.

#### Constructors

##### Constructor

> **new ConcreteVaultHandler**(`chain`, `walletClient`, `publicClient`): [`ConcreteVaultHandler`](#concretevaulthandler)

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:34](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L34)

Create the handler for processing UniFi tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`ConcreteVaultHandler`](#concretevaulthandler)

#### Methods

##### approve()

> **approve**(`spender`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:80](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L80)

Approve a spender to spend the token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spender` | `` `0x${string}` `` | The spender of the token. |
| `amount` | `bigint` | The amount to approve. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### deposit()

> **deposit**(`amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:123](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L123)

Deposit an amount of the token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to deposit. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### getAllowance()

> **getAllowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:94](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L94)

Get the allowance of the owner for the spender.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner of the allowance. |
| `spender` | `` `0x${string}` `` | The spender of the allowance. |

###### Returns

`Promise`\<`bigint`\>

The allowance.

##### getBalance()

> **getBalance**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:104](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L104)

Get the balance for the address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L60)

Get the contract.

###### Returns

`object`

The viem contract.

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:113](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L113)

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

The total supply.

##### previewDeposit()

> **previewDeposit**(`amount`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:172](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L172)

Provides a preview of the number of shares that would be minted for a given deposit amount, after fees.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to deposit. |

###### Returns

`Promise`\<`bigint`\>

The preview.

##### previewRedeem()

> **previewRedeem**(`amount`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:195](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L195)

Provides a preview of the amount of assets that would be redeemed
for a specific number of shares, after withdrawal fees. Subtracts
the withdrawal fee from the share amount to determine the net
shares for asset conversion.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to redeem. |

###### Returns

`Promise`\<`bigint`\>

The preview.

##### previewWithdraw()

> **previewWithdraw**(`amount`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:182](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L182)

Provides a preview of the number of shares that would be burned for a given withdrawal amount, after fees.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to withdraw. |

###### Returns

`Promise`\<`bigint`\>

The preview.

##### redeem()

> **redeem**(`shares`, `receiver?`, `owner?`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:152](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L152)

Redeem the given amount of shares (ctTACpufETH) so the receiver
gets the assets (pufETH).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The amount of shares (ctTACpufETH) to redeem. |
| `receiver?` | `` `0x${string}` `` | The optional receiver of the assets. |
| `owner?` | `` `0x${string}` `` | The optional owner of the shares. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### withdraw()

> **withdraw**(`assets`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:136](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L136)

Withdraw the given amount of assets (pufETH) to the receiver.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assets` | `bigint` | The amount of assets (pufETH) to withdraw. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### withToken()

> **withToken**(`token`): [`ConcreteVaultHandler`](#concretevaulthandler)

Defined in: [lib/contracts/handlers/concrete-vault-handler.ts:50](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/concrete-vault-handler.ts#L50)

Set the UniFi token to use for executing transactions on the
contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | [`ctTACpufETH`](../tokens.md#cttacpufeth) | UniFi token to use for the handler. |

###### Returns

[`ConcreteVaultHandler`](#concretevaulthandler)

The handler.
