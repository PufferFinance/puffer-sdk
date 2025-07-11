# contracts/handlers/institutional-vault-handler

## Classes

### InstitutionalVaultHandler

Handler for the `InstitutionalVault` contract exposing methods to
interact with the contract.

#### Constructors

##### new InstitutionalVaultHandler()

> **new InstitutionalVaultHandler**(`chain`, `walletClient`, `publicClient`): [`InstitutionalVaultHandler`](institutional-vault-handler.md#institutionalvaulthandler)

Create the handler for the `InstitutionalVault` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`InstitutionalVaultHandler`](institutional-vault-handler.md#institutionalvaulthandler)

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:41](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L41)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `address?` | `private` | \`0x$\{string\}\` | - |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Get the allowance for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner of the tokens. |
| `spender` | \`0x$\{string\}\` | The spender of the tokens. |

###### Returns

`Promise`\<`bigint`\>

The allowance of the owner for the spender.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:139](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L139)

##### approve()

> **approve**(`spender`, `amount`): `Promise`\<\`0x$\{string\}\`\>

Approve the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `spender` | \`0x$\{string\}\` | The spender of the tokens. |
| `amount` | `bigint` | The amount of tokens to approve. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:149](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L149)

##### asset()

> **asset**(): `Promise`\<\`0x$\{string\}\`\>

Get the asset of the vault.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The asset of the vault.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:161](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L161)

##### authority()

> **authority**(): `Promise`\<\`0x$\{string\}\`\>

Get the authority of the vault.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The authority of the vault.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:170](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L170)

##### balanceOf()

> **balanceOf**(`address`): `Promise`\<`bigint`\>

Get the balance of the address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance of the address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:180](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L180)

##### completeQueuedWithdrawals()

> **completeQueuedWithdrawals**(`withdrawals`, `receiveAsTokens`): `Promise`\<\`0x$\{string\}\`\>

Complete the queued withdrawals.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `withdrawals` | [`QueuedWithdrawal`](institutional-vault-handler.md#queuedwithdrawal)[] | The withdrawals to complete. |
| `receiveAsTokens` | `boolean`[] | Whether to receive the assets as tokens. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:199](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L199)

##### convertToAssets()

> **convertToAssets**(`shares`): `Promise`\<`bigint`\>

Convert shares to assets.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shares` | `bigint` | The number of shares to convert. |

###### Returns

`Promise`\<`bigint`\>

The number of assets.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:218](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L218)

##### convertToShares()

> **convertToShares**(`assets`): `Promise`\<`bigint`\>

Convert assets to shares.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `assets` | `bigint` | The number of assets to convert. |

###### Returns

`Promise`\<`bigint`\>

The number of shares.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:228](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L228)

##### decimals()

> **decimals**(): `Promise`\<`number`\>

Get the number of decimals of the token.

###### Returns

`Promise`\<`number`\>

The number of decimals of the token.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:189](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L189)

##### deposit()

> **deposit**(`assets`, `receiver`): `Promise`\<\`0x$\{string\}\`\>

Deposit assets into the vault.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `assets` | `bigint` | The number of assets to deposit. |
| `receiver` | \`0x$\{string\}\` | The address to receive the shares. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:238](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L238)

##### depositETH()

> **depositETH**(`receiver`, `value`): `Promise`\<\`0x$\{string\}\`\>

Deposit ETH into the vault.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `receiver` | \`0x$\{string\}\` | The address to receive the shares. |
| `value` | `bigint` | The amount of ETH to deposit. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:251](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L251)

##### getAddress()

> **getAddress**(): `undefined` \| \`0x$\{string\}\`

Get the address of the contract for this handler.

###### Returns

`undefined` \| \`0x$\{string\}\`

The address of the contract.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:66](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L66)

##### getBeaconDepositContract()

> **getBeaconDepositContract**(): `Promise`\<\`0x$\{string\}\`\>

Get the beacon deposit contract address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The beacon deposit contract address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:101](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L101)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:76](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L76)

##### getEigenDelegationManager()

> **getEigenDelegationManager**(): `Promise`\<\`0x$\{string\}\`\>

Get the eigen delegation manager contract address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The eigen delegation manager.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L110)

##### getEigenPod()

> **getEigenPod**(): `Promise`\<\`0x$\{string\}\`\>

Get the eigen pod address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The eigen pod address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:128](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L128)

##### getEigenPodManager()

> **getEigenPodManager**(): `Promise`\<\`0x$\{string\}\`\>

Get the eigen pod manager contract address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The eigen pod manager contract address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:119](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L119)

##### getNonRestakedValidatorETH()

> **getNonRestakedValidatorETH**(): `Promise`\<`bigint`\>

Get the non-restaked validator ETH.

###### Returns

`Promise`\<`bigint`\>

The non-restaked validator ETH.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:264](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L264)

##### getRestakedValidatorETH()

> **getRestakedValidatorETH**(): `Promise`\<`bigint`\>

Get the restaked validator ETH.

###### Returns

`Promise`\<`bigint`\>

The restaked validator ETH.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:273](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L273)

##### getWithdrawalCredentials()

> **getWithdrawalCredentials**(): `Promise`\<\`0x$\{string\}\`\>

Get the withdrawal credentials.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The withdrawal credentials.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:282](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L282)

##### maxDeposit()

> **maxDeposit**(`address`): `Promise`\<`bigint`\>

Get the maximum deposit amount for the address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to get the maximum deposit amount for. |

###### Returns

`Promise`\<`bigint`\>

The maximum deposit amount for the address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:292](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L292)

##### maxMint()

> **maxMint**(`address`): `Promise`\<`bigint`\>

Get the maximum mint amount for the address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to get the maximum mint amount for. |

###### Returns

`Promise`\<`bigint`\>

The maximum mint amount for the address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:302](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L302)

##### maxRedeem()

> **maxRedeem**(`address`): `Promise`\<`bigint`\>

Get the maximum redeem amount for the address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to get the maximum redeem amount for. |

###### Returns

`Promise`\<`bigint`\>

The maximum redeem amount for the address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:312](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L312)

##### maxWithdraw()

> **maxWithdraw**(`address`): `Promise`\<`bigint`\>

Get the maximum withdraw amount for the address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to get the maximum withdraw amount for. |

###### Returns

`Promise`\<`bigint`\>

The maximum withdraw amount for the address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:322](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L322)

##### mint()

> **mint**(`shares`, `receiver`): `Promise`\<\`0x$\{string\}\`\>

Mint shares to the receiver.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shares` | `bigint` | The number of shares to mint. |
| `receiver` | \`0x$\{string\}\` | The address to receive the shares. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:332](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L332)

##### name()

> **name**(): `Promise`\<`string`\>

Get the name of the contract.

###### Returns

`Promise`\<`string`\>

The name of the contract.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:344](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L344)

##### previewDeposit()

> **previewDeposit**(`assets`): `Promise`\<`bigint`\>

Preview the deposit amount for the assets.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `assets` | `bigint` | The number of assets to deposit. |

###### Returns

`Promise`\<`bigint`\>

The number of shares to receive.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:354](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L354)

##### previewMint()

> **previewMint**(`shares`): `Promise`\<`bigint`\>

Preview the mint amount for the shares.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shares` | `bigint` | The number of shares to mint. |

###### Returns

`Promise`\<`bigint`\>

The number of assets to receive.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:364](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L364)

##### previewRedeem()

> **previewRedeem**(`shares`): `Promise`\<`bigint`\>

Preview the redeem amount for the shares.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shares` | `bigint` | The number of shares to redeem. |

###### Returns

`Promise`\<`bigint`\>

The number of assets to receive.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:374](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L374)

##### previewWithdraw()

> **previewWithdraw**(`shares`): `Promise`\<`bigint`\>

Preview the withdraw amount for the shares.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shares` | `bigint` | The number of shares to withdraw. |

###### Returns

`Promise`\<`bigint`\>

The number of assets to receive.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:384](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L384)

##### queueWithdrawals()

> **queueWithdrawals**(`shares`): `Promise`\<\`0x$\{string\}\`\>

Queue the withdrawals.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shares` | `bigint` | The number of shares to withdraw. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:393](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L393)

##### redeem()

> **redeem**(`shares`, `receiver`, `owner`): `Promise`\<\`0x$\{string\}\`\>

Redeem the shares to the receiver.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shares` | `bigint` | The number of shares to redeem. |
| `receiver` | \`0x$\{string\}\` | The address to receive the assets. |
| `owner` | \`0x$\{string\}\` | The owner of the shares. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:407](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L407)

##### setAddress()

> **setAddress**(`address`): [`InstitutionalVaultHandler`](institutional-vault-handler.md#institutionalvaulthandler)

Set the address of the contract for this handler.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address of the contract. |

###### Returns

[`InstitutionalVaultHandler`](institutional-vault-handler.md#institutionalvaulthandler)

The handler.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:55](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L55)

##### setValidatorsETH()

> **setValidatorsETH**(`restakedValidatorsETH`, `nonRestakedValidatorsETH`): `Promise`\<\`0x$\{string\}\`\>

Set the validators ETH.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `restakedValidatorsETH` | `bigint` | The amount of restaked validator ETH. |
| `nonRestakedValidatorsETH` | `bigint` | The amount of non-restaked validator ETH. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:420](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L420)

##### startNonRestakingValidators()

> **startNonRestakingValidators**(`pubKeys`, `signatures`, `depositDataRoots`): `Promise`\<\`0x$\{string\}\`\>

Start the non-restaking validators.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pubKeys` | \`0x$\{string\}\`[] | The public keys of the validators. |
| `signatures` | \`0x$\{string\}\`[] | The signatures of the validators. |
| `depositDataRoots` | \`0x$\{string\}\`[] | The deposit data roots of the validators. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:440](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L440)

##### startRestakingValidators()

> **startRestakingValidators**(`pubKeys`, `signatures`, `depositDataRoots`): `Promise`\<\`0x$\{string\}\`\>

Start the restaking validators.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pubKeys` | \`0x$\{string\}\`[] | The public keys of the validators. |
| `signatures` | \`0x$\{string\}\`[] | The signatures of the validators. |
| `depositDataRoots` | \`0x$\{string\}\`[] | The deposit data roots of the validators. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:461](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L461)

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Get the symbol of the contract.

###### Returns

`Promise`\<`string`\>

The symbol of the contract.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:494](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L494)

##### totalAssets()

> **totalAssets**(): `Promise`\<`bigint`\>

Get the total assets of the vault.

###### Returns

`Promise`\<`bigint`\>

The total assets of the vault.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:503](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L503)

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the vault.

###### Returns

`Promise`\<`bigint`\>

The total supply of the vault.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:512](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L512)

##### transfer()

> **transfer**(`to`, `value`): `Promise`\<\`0x$\{string\}\`\>

Transfer the value to the to address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `to` | \`0x$\{string\}\` | The address to transfer the value to. |
| `value` | `bigint` | The amount of value to transfer. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:522](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L522)

##### transferFrom()

> **transferFrom**(`from`, `to`, `value`): `Promise`\<\`0x$\{string\}\`\>

Transfer the value from the from address to the to address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `from` | \`0x$\{string\}\` | The address to transfer the value from. |
| `to` | \`0x$\{string\}\` | The address to transfer the value to. |
| `value` | `bigint` | The amount of value to transfer. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:536](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L536)

##### withdraw()

> **withdraw**(`assets`, `receiver`, `owner`): `Promise`\<\`0x$\{string\}\`\>

Withdraw the assets to the receiver.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `assets` | `bigint` | The number of assets to withdraw. |
| `receiver` | \`0x$\{string\}\` | The address to receive the assets. |
| `owner` | \`0x$\{string\}\` | The owner of the assets. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:482](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L482)

## Type Aliases

### QueuedWithdrawal

> **QueuedWithdrawal**: `object`

#### Type declaration

##### delegatedTo

> **delegatedTo**: `Address`

##### nonce

> **nonce**: `bigint`

##### scaledShares

> **scaledShares**: `bigint`[]

##### staker

> **staker**: `Address`

##### startBlock

> **startBlock**: `number`

##### strategies

> **strategies**: `Address`[]

##### withdrawer

> **withdrawer**: `Address`

#### Source

[lib/contracts/handlers/institutional-vault-handler.ts:13](https://github.com/PufferFinance/puffer-sdk/blob/43e7f367787f799b5da601ce6770851b1c19ba86/lib/contracts/handlers/institutional-vault-handler.ts#L13)
