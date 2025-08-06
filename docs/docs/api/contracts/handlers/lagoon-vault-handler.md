# contracts/handlers/lagoon-vault-handler

## Classes

### LagoonVaultHandler

Handler for the `LagoonVault` contract exposing methods to interact
with the contract.

#### Constructors

##### new LagoonVaultHandler()

> **new LagoonVaultHandler**(`chain`, `walletClient`, `publicClient`): [`LagoonVaultHandler`](lagoon-vault-handler.md#lagoonvaulthandler)

Create the handler for processing Lagoon vault.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`LagoonVaultHandler`](lagoon-vault-handler.md#lagoonvaulthandler)

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L30)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
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

[lib/contracts/handlers/lagoon-vault-handler.ts:63](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L63)

##### deposit()

> **deposit**(`amount`, `receiver`, `controller`?): `Promise`\<\`0x$\{string\}\`\>

Deposit an amount of the assets (pufETH) to the vault to get shares
(tacpufETH).

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to deposit. |
| `receiver` | \`0x$\{string\}\` | The receiver of the tacpufETH. |
| `controller`? | \`0x$\{string\}\` | The optional controller of the deposit. Set to the receiver if not sure. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:129](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L129)

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

[lib/contracts/handlers/lagoon-vault-handler.ts:77](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L77)

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

[lib/contracts/handlers/lagoon-vault-handler.ts:87](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L87)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L43)

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

The total supply.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L96)

##### isTotalAssetsValid()

> **isTotalAssetsValid**(): `Promise`\<`boolean`\>

Check if the total assets are valid. Used for checking if
synchronous deposit is possible.

###### Returns

`Promise`\<`boolean`\>

True if the total assets are valid, false otherwise.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:106](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L106)

##### previewDeposit()

> **previewDeposit**(`amount`): `Promise`\<`bigint`\>

Provides a preview of the number of shares that would be minted for
a given deposit amount, after fees.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to deposit. |

###### Returns

`Promise`\<`bigint`\>

The preview.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:264](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L264)

##### previewRedeem()

> **previewRedeem**(`shares`): `Promise`\<`bigint`\>

Provides a preview of the amount of assets (pufETH) that would be redeemed
for the given shares (tacpufETH), after withdrawal fees. Subtracts
the withdrawal fee from the share amount to determine the net
shares for asset conversion.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shares` | `bigint` | The amount of shares (tacpufETH) to redeem. |

###### Returns

`Promise`\<`bigint`\>

The preview.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:288](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L288)

##### previewWithdraw()

> **previewWithdraw**(`assets`): `Promise`\<`bigint`\>

Provides a preview of the number of shares (tacpufETH) that would be
burned for the given amount of assets (pufETH).

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `assets` | `bigint` | The amount of assets (pufETH) to withdraw. |

###### Returns

`Promise`\<`bigint`\>

The preview.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:275](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L275)

##### redeem()

> **redeem**(`shares`, `receiver`, `controller`): `Promise`\<\`0x$\{string\}\`\>

Redeem an amount of the shares (tacpufETH) so the receiver
gets the assets (pufETH).

###### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `shares` | `bigint` | `undefined` | The amount of shares (tacpufETH) to redeem. |
| `receiver` | \`0x$\{string\}\` | `undefined` | The receiver of the assets. |
| `controller` | \`0x$\{string\}\` | `receiver` | The controller of the withdrawal. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:222](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L222)

##### requestDeposit()

> **requestDeposit**(`amount`, `receiver`, `controller`): `Promise`\<\`0x$\{string\}\`\>

Request an asynchronous deposit of an amount of the assets (pufETH)
to the vault to get shares (tacpufETH). This should be used if
`isTotalAssetsValid` is false.

###### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `bigint` | `undefined` | The amount to deposit. |
| `receiver` | \`0x$\{string\}\` | `undefined` | The receiver of the tacpufETH. |
| `controller` | \`0x$\{string\}\` | `receiver` | The optional controller of the deposit. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:176](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L176)

##### requestRedeem()

> **requestRedeem**(`shares`, `receiver`, `controller`): `Promise`\<\`0x$\{string\}\`\>

Request an asynchronous redeem of an amount of the shares (tacpufETH)
so the receiver gets the assets (pufETH).

###### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `shares` | `bigint` | `undefined` | The amount of shares (tacpufETH) to redeem. |
| `receiver` | \`0x$\{string\}\` | `undefined` | The receiver of the assets. |
| `controller` | \`0x$\{string\}\` | `receiver` | The controller of the redemption. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:243](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L243)

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Get the symbol of the token. (tacpufETH)

###### Returns

`Promise`\<`string`\>

The symbol.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:115](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L115)

##### syncDeposit()

> **syncDeposit**(`amount`, `receiver`, `referral`): `Promise`\<\`0x$\{string\}\`\>

Synchronously deposit an amount of the assets (pufETH) to the vault
to get shares (tacpufETH). This is only possible if `isTotalAssetsValid`
is true.

###### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `bigint` | `undefined` | The amount to deposit. |
| `receiver` | \`0x$\{string\}\` | `undefined` | The receiver of the tacpufETH. |
| `referral` | \`0x$\{string\}\` | `receiver` | The referral of the deposit. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:154](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L154)

##### withdraw()

> **withdraw**(`assets`, `receiver`, `controller`): `Promise`\<\`0x$\{string\}\`\>

Withdraw an amount of the shares (pufETH) so the receiver
gets the assets (pufETH).

###### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `assets` | `bigint` | `undefined` | The amount of assets (pufETH) to withdraw. |
| `receiver` | \`0x$\{string\}\` | `undefined` | The receiver of the assets. |
| `controller` | \`0x$\{string\}\` | `receiver` | The controller of the withdrawal. Falls back to the receiver if not provided. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/lagoon-vault-handler.ts:201](https://github.com/PufferFinance/puffer-sdk/blob/7a9bc01f2fed6f42384fd85ca26fb87e35c34fd2/lib/contracts/handlers/lagoon-vault-handler.ts#L201)
