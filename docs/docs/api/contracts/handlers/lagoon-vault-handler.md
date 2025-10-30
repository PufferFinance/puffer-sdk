# contracts/handlers/lagoon-vault-handler

## Classes

### LagoonVaultHandler

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L18)

Handler for the `LagoonVault` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new LagoonVaultHandler**(`chain`, `walletClient`, `publicClient`): [`LagoonVaultHandler`](#lagoonvaulthandler)

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L30)

Create the handler for processing Lagoon vault.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`LagoonVaultHandler`](#lagoonvaulthandler)

#### Methods

##### approve()

> **approve**(`spender`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:63](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L63)

Approve a spender to spend the token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spender` | `` `0x${string}` `` | The spender of the token. |
| `amount` | `bigint` | The amount to approve. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### claimableDepositRequest()

> **claimableDepositRequest**(`requestId`, `controller`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:360](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L360)

Get the claimable deposit request for the request id and controller.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requestId` | `bigint` | `0n` | The request id. Use `0` as wild card. |
| `controller` | `` `0x${string}` `` | `undefined` | The controller. Usually the depositor or user who initiated the deposit. |

###### Returns

`Promise`\<`bigint`\>

The claimable deposit request.

##### claimableRedeemRequest()

> **claimableRedeemRequest**(`requestId`, `controller`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:375](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L375)

Get the claimable redeem request for the request id and controller.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requestId` | `bigint` | `0n` | The request id. Use `0` as wild card. |
| `controller` | `` `0x${string}` `` | `undefined` | The controller. Usually the redeemer or user who initiated the redeem. |

###### Returns

`Promise`\<`bigint`\>

The claimable redeem request.

##### claimSharesAndRequestRedeem()

> **claimSharesAndRequestRedeem**(`shares`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:389](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L389)

Claim shares and request a redeem of an amount of the shares (tacpufETH)
so the receiver gets the assets (pufETH).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The amount of shares (tacpufETH) to claim. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### claimSharesOnBehalf()

> **claimSharesOnBehalf**(`controllers`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:402](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L402)

Claim shares on behalf of multiple controllers.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `controllers` | `` `0x${string}` ``[] | The controllers to claim shares on behalf of. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### convertToAssets()

> **convertToAssets**(`shares`, `requestId?`): `Promise`\<`never`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:329](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L329)

Convert an amount of the shares (tacpufETH) to the assets (pufETH).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The amount of shares (tacpufETH) to convert. |
| `requestId?` | `bigint` | An optional request id for the conversion. |

###### Returns

`Promise`\<`never`\>

The amount of assets (pufETH).

##### convertToShares()

> **convertToShares**(`assets`, `requestId?`): `Promise`\<`never`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:344](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L344)

Convert an amount of the assets (pufETH) to the shares (tacpufETH).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assets` | `bigint` | The amount of assets (pufETH) to convert. |
| `requestId?` | `bigint` | An optional request id for the conversion. |

###### Returns

`Promise`\<`never`\>

The amount of shares (tacpufETH).

##### deposit()

> **deposit**(`amount`, `receiver`, `controller?`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:129](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L129)

Deposit an amount of the assets (pufETH) to the vault to get shares
(tacpufETH).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to deposit. |
| `receiver` | `` `0x${string}` `` | The receiver of the tacpufETH. |
| `controller?` | `` `0x${string}` `` | The optional controller of the deposit. Set to the receiver if not sure. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### getAllowance()

> **getAllowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:77](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L77)

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

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:87](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L87)

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

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L43)

Get the contract.

###### Returns

`object`

The viem contract.

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L96)

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

The total supply.

##### isTotalAssetsValid()

> **isTotalAssetsValid**(): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:106](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L106)

Check if the total assets are valid. Used for checking if
synchronous deposit is possible.

###### Returns

`Promise`\<`boolean`\>

True if the total assets are valid, false otherwise.

##### pendingDepositRequest()

> **pendingDepositRequest**(`requestId`, `controller`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:199](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L199)

Get the pending deposit request for the request id and controller.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requestId` | `bigint` | `0n` | The request id. Use `0` as wild card. |
| `controller` | `` `0x${string}` `` | `undefined` | The controller. Usually the depositor or user who initiated the deposit. |

###### Returns

`Promise`\<`bigint`\>

The pending deposit request.

##### pendingRedeemRequest()

> **pendingRedeemRequest**(`requestId`, `controller`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:280](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L280)

Get the pending redeem request for the request id and controller.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requestId` | `bigint` | `0n` | The request id. Use `0` as wild card. |
| `controller` | `` `0x${string}` `` | `undefined` | The controller. Usually the redeemer or user who initiated the redeem. |

###### Returns

`Promise`\<`bigint`\>

The pending redeem request.

##### previewDeposit()

> **previewDeposit**(`amount`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:294](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L294)

Provides a preview of the number of shares that would be minted for
a given deposit amount, after fees.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to deposit. |

###### Returns

`Promise`\<`bigint`\>

The preview.

##### previewRedeem()

> **previewRedeem**(`shares`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:318](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L318)

Provides a preview of the amount of assets (pufETH) that would be redeemed
for the given shares (tacpufETH), after withdrawal fees. Subtracts
the withdrawal fee from the share amount to determine the net
shares for asset conversion.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The amount of shares (tacpufETH) to redeem. |

###### Returns

`Promise`\<`bigint`\>

The preview.

##### previewWithdraw()

> **previewWithdraw**(`assets`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:305](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L305)

Provides a preview of the number of shares (tacpufETH) that would be
burned for the given amount of assets (pufETH).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assets` | `bigint` | The amount of assets (pufETH) to withdraw. |

###### Returns

`Promise`\<`bigint`\>

The preview.

##### redeem()

> **redeem**(`shares`, `receiver`, `controller`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:237](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L237)

Redeem an amount of the shares (tacpufETH) so the receiver
gets the assets (pufETH).

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `shares` | `bigint` | `undefined` | The amount of shares (tacpufETH) to redeem. |
| `receiver` | `` `0x${string}` `` | `undefined` | The receiver of the assets. |
| `controller` | `` `0x${string}` `` | `receiver` | The controller of the withdrawal. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### requestDeposit()

> **requestDeposit**(`amount`, `receiver`, `controller`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:176](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L176)

Request an asynchronous deposit of an amount of the assets (pufETH)
to the vault to get shares (tacpufETH). This should be used if
`isTotalAssetsValid` is false.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `amount` | `bigint` | `undefined` | The amount to deposit. |
| `receiver` | `` `0x${string}` `` | `undefined` | The receiver of the tacpufETH. |
| `controller` | `` `0x${string}` `` | `receiver` | The optional controller of the deposit. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### requestRedeem()

> **requestRedeem**(`shares`, `receiver`, `controller`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:258](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L258)

Request an asynchronous redeem of an amount of the shares (tacpufETH)
so the receiver gets the assets (pufETH).

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `shares` | `bigint` | `undefined` | The amount of shares (tacpufETH) to redeem. |
| `receiver` | `` `0x${string}` `` | `undefined` | The receiver of the assets. |
| `controller` | `` `0x${string}` `` | `receiver` | The controller of the redemption. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:115](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L115)

Get the symbol of the token. (tacpufETH)

###### Returns

`Promise`\<`string`\>

The symbol.

##### syncDeposit()

> **syncDeposit**(`amount`, `receiver`, `referral`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:154](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L154)

Synchronously deposit an amount of the assets (pufETH) to the vault
to get shares (tacpufETH). This is only possible if `isTotalAssetsValid`
is true.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `amount` | `bigint` | `undefined` | The amount to deposit. |
| `receiver` | `` `0x${string}` `` | `undefined` | The receiver of the tacpufETH. |
| `referral` | `` `0x${string}` `` | `receiver` | The referral of the deposit. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### withdraw()

> **withdraw**(`assets`, `receiver`, `controller`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/lagoon-vault-handler.ts:216](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/lagoon-vault-handler.ts#L216)

Withdraw an amount of the shares (pufETH) so the receiver
gets the assets (pufETH).

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `assets` | `bigint` | `undefined` | The amount of assets (pufETH) to withdraw. |
| `receiver` | `` `0x${string}` `` | `undefined` | The receiver of the assets. |
| `controller` | `` `0x${string}` `` | `receiver` | The controller of the withdrawal. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.
