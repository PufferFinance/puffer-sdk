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

[lib/contracts/handlers/institutional-vault-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L42)

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

[lib/contracts/handlers/institutional-vault-handler.ts:140](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L140)

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

[lib/contracts/handlers/institutional-vault-handler.ts:150](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L150)

##### asset()

> **asset**(): `Promise`\<\`0x$\{string\}\`\>

Get the asset of the vault.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The asset of the vault.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:162](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L162)

##### authority()

> **authority**(): `Promise`\<\`0x$\{string\}\`\>

Get the authority of the vault.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The authority of the vault.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:171](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L171)

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

[lib/contracts/handlers/institutional-vault-handler.ts:181](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L181)

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

[lib/contracts/handlers/institutional-vault-handler.ts:200](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L200)

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

[lib/contracts/handlers/institutional-vault-handler.ts:219](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L219)

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

[lib/contracts/handlers/institutional-vault-handler.ts:229](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L229)

##### customExternalCall()

> **customExternalCall**(`target`, `data`, `value`): `Promise`\<\`0x$\{string\}\`\>

Call a custom external function.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target contract address. |
| `data` | \`0x$\{string\}\` | The calldata to send a transaction to the target contract. |
| `value` | `bigint` | The amount of value to send to the target contract. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:555](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L555)

##### decimals()

> **decimals**(): `Promise`\<`number`\>

Get the number of decimals of the token.

###### Returns

`Promise`\<`number`\>

The number of decimals of the token.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:190](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L190)

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

[lib/contracts/handlers/institutional-vault-handler.ts:239](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L239)

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

[lib/contracts/handlers/institutional-vault-handler.ts:252](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L252)

##### getAddress()

> **getAddress**(): `undefined` \| \`0x$\{string\}\`

Get the address of the contract for this handler.

###### Returns

`undefined` \| \`0x$\{string\}\`

The address of the contract.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:67](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L67)

##### getBeaconDepositContract()

> **getBeaconDepositContract**(): `Promise`\<\`0x$\{string\}\`\>

Get the beacon deposit contract address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The beacon deposit contract address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:102](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L102)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:77](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L77)

##### getEigenDelegationManager()

> **getEigenDelegationManager**(): `Promise`\<\`0x$\{string\}\`\>

Get the eigen delegation manager contract address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The eigen delegation manager.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:111](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L111)

##### getEigenPod()

> **getEigenPod**(): `Promise`\<\`0x$\{string\}\`\>

Get the eigen pod address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The eigen pod address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:129](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L129)

##### getEigenPodManager()

> **getEigenPodManager**(): `Promise`\<\`0x$\{string\}\`\>

Get the eigen pod manager contract address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The eigen pod manager contract address.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:120](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L120)

##### getNonRestakedValidatorETH()

> **getNonRestakedValidatorETH**(): `Promise`\<`bigint`\>

Get the non-restaked validator ETH.

###### Returns

`Promise`\<`bigint`\>

The non-restaked validator ETH.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:265](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L265)

##### getRestakedValidatorETH()

> **getRestakedValidatorETH**(): `Promise`\<`bigint`\>

Get the restaked validator ETH.

###### Returns

`Promise`\<`bigint`\>

The restaked validator ETH.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:274](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L274)

##### getWithdrawalCredentials()

> **getWithdrawalCredentials**(): `Promise`\<\`0x$\{string\}\`\>

Get the withdrawal credentials.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The withdrawal credentials.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:283](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L283)

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

[lib/contracts/handlers/institutional-vault-handler.ts:293](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L293)

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

[lib/contracts/handlers/institutional-vault-handler.ts:303](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L303)

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

[lib/contracts/handlers/institutional-vault-handler.ts:313](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L313)

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

[lib/contracts/handlers/institutional-vault-handler.ts:323](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L323)

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

[lib/contracts/handlers/institutional-vault-handler.ts:333](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L333)

##### name()

> **name**(): `Promise`\<`string`\>

Get the name of the contract.

###### Returns

`Promise`\<`string`\>

The name of the contract.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:345](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L345)

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

[lib/contracts/handlers/institutional-vault-handler.ts:355](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L355)

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

[lib/contracts/handlers/institutional-vault-handler.ts:365](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L365)

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

[lib/contracts/handlers/institutional-vault-handler.ts:375](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L375)

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

[lib/contracts/handlers/institutional-vault-handler.ts:385](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L385)

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

[lib/contracts/handlers/institutional-vault-handler.ts:394](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L394)

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

[lib/contracts/handlers/institutional-vault-handler.ts:408](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L408)

##### requestEigenPodConsolidation()

> **requestEigenPodConsolidation**(`srcPubkeys`, `targetPubkeys`, `value`): `Promise`\<\`0x$\{string\}\`\>

Request EigenPod consolidation.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `srcPubkeys` | \`0x$\{string\}\`[] | The source public keys. |
| `targetPubkeys` | \`0x$\{string\}\`[] | The target public keys. |
| `value` | `bigint` | The amount to send to the target contract (small quantity of GWei) |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:569](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L569)

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

[lib/contracts/handlers/institutional-vault-handler.ts:421](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L421)

##### startNonRestakingValidators()

> **startNonRestakingValidators**(`pubKeys`, `signatures`, `amountsInGwei`, `depositDataRoots`): `Promise`\<\`0x$\{string\}\`\>

Start the non-restaking validators.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pubKeys` | \`0x$\{string\}\`[] | The public keys of the validators. |
| `signatures` | \`0x$\{string\}\`[] | The signatures of the validators. |
| `amountsInGwei` | `bigint`[] | The amounts of the validators. |
| `depositDataRoots` | \`0x$\{string\}\`[] | The deposit data roots of the validators. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:442](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L442)

##### startRestakingValidators()

> **startRestakingValidators**(`pubKeys`, `signatures`, `amountsInGwei`, `depositDataRoots`): `Promise`\<\`0x$\{string\}\`\>

Start the restaking validators.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pubKeys` | \`0x$\{string\}\`[] | The public keys of the validators. |
| `signatures` | \`0x$\{string\}\`[] | The signatures of the validators. |
| `amountsInGwei` | `bigint`[] | The amounts of the validators. |
| `depositDataRoots` | \`0x$\{string\}\`[] | The deposit data roots of the validators. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:465](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L465)

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Get the symbol of the contract.

###### Returns

`Promise`\<`string`\>

The symbol of the contract.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:499](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L499)

##### totalAssets()

> **totalAssets**(): `Promise`\<`bigint`\>

Get the total assets of the vault.

###### Returns

`Promise`\<`bigint`\>

The total assets of the vault.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:508](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L508)

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the vault.

###### Returns

`Promise`\<`bigint`\>

The total supply of the vault.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:517](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L517)

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

[lib/contracts/handlers/institutional-vault-handler.ts:527](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L527)

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

[lib/contracts/handlers/institutional-vault-handler.ts:541](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L541)

##### withAddress()

> **withAddress**(`address`): [`InstitutionalVaultHandler`](institutional-vault-handler.md#institutionalvaulthandler)

Set the address of the contract for this handler.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address of the contract. |

###### Returns

[`InstitutionalVaultHandler`](institutional-vault-handler.md#institutionalvaulthandler)

The handler.

###### Source

[lib/contracts/handlers/institutional-vault-handler.ts:56](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L56)

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

[lib/contracts/handlers/institutional-vault-handler.ts:487](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L487)

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

[lib/contracts/handlers/institutional-vault-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/98122edc3ba140dd873a9312a311b44046586285/lib/contracts/handlers/institutional-vault-handler.ts#L14)
