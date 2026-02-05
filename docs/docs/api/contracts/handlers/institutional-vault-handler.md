# contracts/handlers/institutional-vault-handler

## Classes

### InstitutionalVaultHandler

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L33)

Handler for the `InstitutionalVault` contract exposing methods to
interact with the contract.

#### Constructors

##### Constructor

> **new InstitutionalVaultHandler**(`chain`, `walletClient`, `publicClient`): [`InstitutionalVaultHandler`](#institutionalvaulthandler)

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:47](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L47)

Create the handler for the `InstitutionalVault` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`InstitutionalVaultHandler`](#institutionalvaulthandler)

#### Methods

##### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:181](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L181)

Get the allowance for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner of the tokens. |
| `spender` | `` `0x${string}` `` | The spender of the tokens. |

###### Returns

`Promise`\<`bigint`\>

The allowance of the owner for the spender.

##### approve()

> **approve**(`spender`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:191](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L191)

Approve the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spender` | `` `0x${string}` `` | The spender of the tokens. |
| `amount` | `bigint` | The amount of tokens to approve. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### asset()

> **asset**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:203](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L203)

Get the asset of the vault.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The asset of the vault.

##### authority()

> **authority**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:212](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L212)

Get the authority of the vault.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The authority of the vault.

##### balanceOf()

> **balanceOf**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:222](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L222)

Get the balance of the address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance of the address.

##### completeQueuedWithdrawals()

> **completeQueuedWithdrawals**(`withdrawals`, `receiveAsTokens`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:241](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L241)

Complete the queued withdrawals.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `withdrawals` | [`QueuedWithdrawal`](#queuedwithdrawal)[] | The withdrawals to complete. |
| `receiveAsTokens` | `boolean`[] | Whether to receive the assets as tokens. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### convertToAssets()

> **convertToAssets**(`shares`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:260](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L260)

Convert shares to assets.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The number of shares to convert. |

###### Returns

`Promise`\<`bigint`\>

The number of assets.

##### convertToShares()

> **convertToShares**(`assets`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:270](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L270)

Convert assets to shares.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assets` | `bigint` | The number of assets to convert. |

###### Returns

`Promise`\<`bigint`\>

The number of shares.

##### customExternalCall()

> **customExternalCall**(`target`, `data`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:610](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L610)

Call a custom external function.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target contract address. |
| `data` | `` `0x${string}` `` | The calldata to send a transaction to the target contract. |
| `value` | `bigint` | The amount of value to send to the target contract. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### decimals()

> **decimals**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:231](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L231)

Get the number of decimals of the token.

###### Returns

`Promise`\<`number`\>

The number of decimals of the token.

##### deposit()

> **deposit**(`assets`, `receiver`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:280](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L280)

Deposit assets into the vault.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assets` | `bigint` | The number of assets to deposit. |
| `receiver` | `` `0x${string}` `` | The address to receive the shares. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### depositETH()

> **depositETH**(`receiver`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:293](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L293)

Deposit ETH into the vault.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `receiver` | `` `0x${string}` `` | The address to receive the shares. |
| `value` | `bigint` | The amount of ETH to deposit. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### getAddress()

> **getAddress**(): `` `0x${string}` `` \| `undefined`

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:72](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L72)

Get the address of the contract for this handler.

###### Returns

`` `0x${string}` `` \| `undefined`

The address of the contract.

##### getBeaconDepositContract()

> **getBeaconDepositContract**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:107](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L107)

Get the beacon deposit contract address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The beacon deposit contract address.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:82](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L82)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getEigenDelegationManager()

> **getEigenDelegationManager**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L134)

Get the eigen delegation manager contract address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The eigen delegation manager.

##### getEigenPod()

> **getEigenPod**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:152](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L152)

Get the eigen pod address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The eigen pod address.

##### getEigenPodManager()

> **getEigenPodManager**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:143](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L143)

Get the eigen pod manager contract address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The eigen pod manager contract address.

##### getEigenPodWithdrawalCredentials()

> **getEigenPodWithdrawalCredentials**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:161](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L161)

Get the eigen pod withdrawal credentials.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The eigen pod withdrawal credentials as bytes.

##### getNonRestakedValidatorETH()

> **getNonRestakedValidatorETH**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:306](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L306)

Get the non-restaked validator ETH.

###### Returns

`Promise`\<`bigint`\>

The non-restaked validator ETH.

##### getNonRestakingWithdrawalCredentialsFactory()

> **getNonRestakingWithdrawalCredentialsFactory**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:116](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L116)

Get the non-restaking withdrawal credentials factory address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The non-restaking withdrawal credentials factory address.

##### getNoRestakingWithdrawalCredentials()

> **getNoRestakingWithdrawalCredentials**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:170](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L170)

Get the no-restaking withdrawal credentials address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The no-restaking withdrawal credentials address.

##### getRestakedValidatorETH()

> **getRestakedValidatorETH**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:315](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L315)

Get the restaked validator ETH.

###### Returns

`Promise`\<`bigint`\>

The restaked validator ETH.

##### getWeth()

> **getWeth**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:125](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L125)

Get the WETH contract address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The WETH contract address.

##### getWithdrawalCredentials()

> **getWithdrawalCredentials**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:324](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L324)

Get the withdrawal credentials.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The withdrawal credentials.

##### maxDeposit()

> **maxDeposit**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:334](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L334)

Get the maximum deposit amount for the address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to get the maximum deposit amount for. |

###### Returns

`Promise`\<`bigint`\>

The maximum deposit amount for the address.

##### maxMint()

> **maxMint**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:344](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L344)

Get the maximum mint amount for the address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to get the maximum mint amount for. |

###### Returns

`Promise`\<`bigint`\>

The maximum mint amount for the address.

##### maxRedeem()

> **maxRedeem**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:354](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L354)

Get the maximum redeem amount for the address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to get the maximum redeem amount for. |

###### Returns

`Promise`\<`bigint`\>

The maximum redeem amount for the address.

##### maxWithdraw()

> **maxWithdraw**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:364](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L364)

Get the maximum withdraw amount for the address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to get the maximum withdraw amount for. |

###### Returns

`Promise`\<`bigint`\>

The maximum withdraw amount for the address.

##### mint()

> **mint**(`shares`, `receiver`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:374](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L374)

Mint shares to the receiver.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The number of shares to mint. |
| `receiver` | `` `0x${string}` `` | The address to receive the shares. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### name()

> **name**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:386](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L386)

Get the name of the contract.

###### Returns

`Promise`\<`string`\>

The name of the contract.

##### previewDeposit()

> **previewDeposit**(`assets`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:396](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L396)

Preview the deposit amount for the assets.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assets` | `bigint` | The number of assets to deposit. |

###### Returns

`Promise`\<`bigint`\>

The number of shares to receive.

##### previewMint()

> **previewMint**(`shares`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:406](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L406)

Preview the mint amount for the shares.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The number of shares to mint. |

###### Returns

`Promise`\<`bigint`\>

The number of assets to receive.

##### previewRedeem()

> **previewRedeem**(`shares`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:416](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L416)

Preview the redeem amount for the shares.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The number of shares to redeem. |

###### Returns

`Promise`\<`bigint`\>

The number of assets to receive.

##### previewWithdraw()

> **previewWithdraw**(`shares`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:426](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L426)

Preview the withdraw amount for the shares.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The number of shares to withdraw. |

###### Returns

`Promise`\<`bigint`\>

The number of assets to receive.

##### queueWithdrawals()

> **queueWithdrawals**(`shares`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:435](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L435)

Queue the withdrawals.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The number of shares to withdraw. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### redeem()

> **redeem**(`shares`, `receiver`, `owner`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:463](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L463)

Redeem the shares to the receiver.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shares` | `bigint` | The number of shares to redeem. |
| `receiver` | `` `0x${string}` `` | The address to receive the assets. |
| `owner` | `` `0x${string}` `` | The owner of the shares. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### requestEigenPodConsolidation()

> **requestEigenPodConsolidation**(`srcPubkeys`, `targetPubkeys`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:624](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L624)

Request EigenPod consolidation.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `srcPubkeys` | `` `0x${string}` ``[] | The source public keys. |
| `targetPubkeys` | `` `0x${string}` ``[] | The target public keys. |
| `value` | `bigint` | The amount to send to the target contract (small quantity of GWei) |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### requestWithdrawal()

> **requestWithdrawal**(`requests`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:448](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L448)

Request withdrawal from the EigenPod.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requests` | [`WithdrawalRequest`](#withdrawalrequest)[] | The withdrawal requests containing pubkey and amountGwei. |
| `value` | `bigint` | The amount of ETH to send with the transaction. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### setValidatorsETH()

> **setValidatorsETH**(`restakedValidatorsETH`, `nonRestakedValidatorsETH`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:476](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L476)

Set the validators ETH.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `restakedValidatorsETH` | `bigint` | The amount of restaked validator ETH. |
| `nonRestakedValidatorsETH` | `bigint` | The amount of non-restaked validator ETH. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### startNonRestakingValidators()

> **startNonRestakingValidators**(`pubKeys`, `signatures`, `amountsInGwei`, `depositDataRoots`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:497](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L497)

Start the non-restaking validators.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pubKeys` | `` `0x${string}` ``[] | The public keys of the validators. |
| `signatures` | `` `0x${string}` ``[] | The signatures of the validators. |
| `amountsInGwei` | `bigint`[] | The amounts of the validators. |
| `depositDataRoots` | `` `0x${string}` ``[] | The deposit data roots of the validators. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### startRestakingValidators()

> **startRestakingValidators**(`pubKeys`, `signatures`, `amountsInGwei`, `depositDataRoots`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:520](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L520)

Start the restaking validators.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pubKeys` | `` `0x${string}` ``[] | The public keys of the validators. |
| `signatures` | `` `0x${string}` ``[] | The signatures of the validators. |
| `amountsInGwei` | `bigint`[] | The amounts of the validators. |
| `depositDataRoots` | `` `0x${string}` ``[] | The deposit data roots of the validators. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:554](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L554)

Get the symbol of the contract.

###### Returns

`Promise`\<`string`\>

The symbol of the contract.

##### totalAssets()

> **totalAssets**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:563](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L563)

Get the total assets of the vault.

###### Returns

`Promise`\<`bigint`\>

The total assets of the vault.

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:572](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L572)

Get the total supply of the vault.

###### Returns

`Promise`\<`bigint`\>

The total supply of the vault.

##### transfer()

> **transfer**(`to`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:582](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L582)

Transfer the value to the to address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `to` | `` `0x${string}` `` | The address to transfer the value to. |
| `value` | `bigint` | The amount of value to transfer. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### transferFrom()

> **transferFrom**(`from`, `to`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:596](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L596)

Transfer the value from the from address to the to address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `from` | `` `0x${string}` `` | The address to transfer the value from. |
| `to` | `` `0x${string}` `` | The address to transfer the value to. |
| `value` | `bigint` | The amount of value to transfer. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### withAddress()

> **withAddress**(`address`): [`InstitutionalVaultHandler`](#institutionalvaulthandler)

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:61](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L61)

Set the address of the contract for this handler.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address of the contract. |

###### Returns

[`InstitutionalVaultHandler`](#institutionalvaulthandler)

The handler.

##### withdraw()

> **withdraw**(`assets`, `receiver`, `owner`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:542](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L542)

Withdraw the assets to the receiver.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assets` | `bigint` | The number of assets to withdraw. |
| `receiver` | `` `0x${string}` `` | The address to receive the assets. |
| `owner` | `` `0x${string}` `` | The owner of the assets. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### withdrawNonRestakedETH()

> **withdrawNonRestakedETH**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:642](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L642)

Withdraw non-restaked ETH from the vault.

###### Returns

`Promise`\<`` `0x${string}` ``\>

## Type Aliases

### QueuedWithdrawal

> **QueuedWithdrawal** = `object`

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L14)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="delegatedto"></a> `delegatedTo` | `Address` | [lib/contracts/handlers/institutional-vault-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L16) |
| <a id="nonce"></a> `nonce` | `bigint` | [lib/contracts/handlers/institutional-vault-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L18) |
| <a id="scaledshares"></a> `scaledShares` | `bigint`[] | [lib/contracts/handlers/institutional-vault-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L21) |
| <a id="staker"></a> `staker` | `Address` | [lib/contracts/handlers/institutional-vault-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L15) |
| <a id="startblock"></a> `startBlock` | `number` | [lib/contracts/handlers/institutional-vault-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L19) |
| <a id="strategies"></a> `strategies` | `Address`[] | [lib/contracts/handlers/institutional-vault-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L20) |
| <a id="withdrawer"></a> `withdrawer` | `Address` | [lib/contracts/handlers/institutional-vault-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L17) |

***

### WithdrawalRequest

> **WithdrawalRequest** = `object`

Defined in: [lib/contracts/handlers/institutional-vault-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L24)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="amountgwei"></a> `amountGwei` | `bigint` | [lib/contracts/handlers/institutional-vault-handler.ts:26](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L26) |
| <a id="pubkey"></a> `pubkey` | `Hex` | [lib/contracts/handlers/institutional-vault-handler.ts:25](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/institutional-vault-handler.ts#L25) |
