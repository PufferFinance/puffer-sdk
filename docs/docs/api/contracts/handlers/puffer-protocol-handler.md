# contracts/handlers/puffer-protocol-handler

## Classes

### PufferProtocolHandler

Handler for the `PufferProtocol` contract exposing methods to interact
with the contract.

#### Constructors

##### new PufferProtocolHandler()

> **new PufferProtocolHandler**(`chain`, `walletClient`, `publicClient`): [`PufferProtocolHandler`](puffer-protocol-handler.md#pufferprotocolhandler)

Create the handler for the `PufferProtocol` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufferProtocolHandler`](puffer-protocol-handler.md#pufferprotocolhandler)

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L51)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### batchHandleWithdrawals()

> **batchHandleWithdrawals**(`validatorInfos`, `guardianEOASignatures`): `Promise`\<\`0x$\{string\}\`\>

Batch handle withdrawals.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `validatorInfos` | [`StoppedValidatorInfo`](puffer-protocol-handler.md#stoppedvalidatorinfo)[] | The validator infos. |
| `guardianEOASignatures` | \`0x$\{string\}\`[] | The guardian EOA signatures. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:306](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L306)

##### createPufferModule()

> **createPufferModule**(`moduleName`): `Promise`\<\`0x$\{string\}\`\>

Create a new puffer module.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | \`0x$\{string\}\` | The module name. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:215](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L215)

##### depositValidatorTickets()

> **depositValidatorTickets**(`permit`, `node`): `Promise`\<\`0x$\{string\}\`\>

Deposit validator tickets.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `permit` | [`PermitData`](../common/lib/types.md#permitdata) | The permit data. |
| `node` | \`0x$\{string\}\` | The node address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:275](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L275)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:64](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L64)

##### getDepositDataRoot()

> **getDepositDataRoot**(`pubKey`, `signature`, `withdrawalCredentials`): `Promise`\<\`0x$\{string\}\`\>

Get deposit data root.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | \`0x$\{string\}\` | The public key. |
| `signature` | \`0x$\{string\}\` | The signature. |
| `withdrawalCredentials` | \`0x$\{string\}\` | The withdrawal credentials. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The deposit data root.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:197](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L197)

##### getMinimumVtAmount()

> **getMinimumVtAmount**(): `Promise`\<`bigint`\>

Get the minimum VT amount required.

###### Returns

`Promise`\<`bigint`\>

The minimum VT amount.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L81)

##### getModuleAddress()

> **getModuleAddress**(`moduleName`): `Promise`\<\`0x$\{string\}\`\>

Get module address by name.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | \`0x$\{string\}\` | The module name. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The module address.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L110)

##### getModuleLimitInformation()

> **getModuleLimitInformation**(`moduleName`): `Promise`\<`object`\>

Get module limit information.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | \`0x$\{string\}\` | The module name. |

###### Returns

`Promise`\<`object`\>

The module limit information.

###### allowedLimit

> **allowedLimit**: `bigint`

###### numberOfRegisteredValidators

> **numberOfRegisteredValidators**: `bigint`

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:175](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L175)

##### getModuleWeights()

> **getModuleWeights**(): `Promise`\<readonly \`0x$\{string\}\`[]\>

Get module weights.

###### Returns

`Promise`\<readonly \`0x$\{string\}\`[]\>

The module weights.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:119](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L119)

##### getNextValidatorToProvision()

> **getNextValidatorToProvision**(): `Promise`\<readonly [\`0x$\{string\}\`, `bigint`]\>

Get the next validator to be provisioned.

###### Returns

`Promise`\<readonly [\`0x$\{string\}\`, `bigint`]\>

Tuple of module name and index.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:128](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L128)

##### getNodeInfo()

> **getNodeInfo**(`node`): `Promise`\<`object`\>

Get node information.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `node` | \`0x$\{string\}\` | The node address. |

###### Returns

`Promise`\<`object`\>

The node information.

###### activeValidatorCount

> **activeValidatorCount**: `bigint`

###### pendingValidatorCount

> **pendingValidatorCount**: `bigint`

###### vtBalance

> **vtBalance**: `bigint`

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:138](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L138)

##### getVTPenalty()

> **getVTPenalty**(): `Promise`\<`bigint`\>

Get the VT penalty amount.

###### Returns

`Promise`\<`bigint`\>

The VT penalty amount.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:90](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L90)

##### getValidatorInfo()

> **getValidatorInfo**(`moduleName`, `pufferModuleIndex`): `Promise`\<`object`\>

Get validator information.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | \`0x$\{string\}\` | The module name. |
| `pufferModuleIndex` | `bigint` | The puffer module index. |

###### Returns

`Promise`\<`object`\>

The validator information.

###### bond

> **bond**: `bigint`

###### module

> **module**: \`0x$\{string\}\`

###### node

> **node**: \`0x$\{string\}\`

###### pubKey

> **pubKey**: \`0x$\{string\}\`

###### status

> **status**: `number`

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:159](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L159)

##### getValidatorTicketsBalance()

> **getValidatorTicketsBalance**(`owner`): `Promise`\<`bigint`\>

Get validator tickets balance for an owner.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner address. |

###### Returns

`Promise`\<`bigint`\>

The validator tickets balance.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:100](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L100)

##### getValidators()

> **getValidators**(`moduleName`): `Promise`\<readonly `object`[]\>

Get validators for a module.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | \`0x$\{string\}\` | The module name. |

###### Returns

`Promise`\<readonly `object`[]\>

The validators array.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:148](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L148)

##### getWithdrawalCredentials()

> **getWithdrawalCredentials**(`module`): `Promise`\<\`0x$\{string\}\`\>

Get withdrawal credentials for a module.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `module` | \`0x$\{string\}\` | The module address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The withdrawal credentials.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:185](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L185)

##### provisionNode()

> **provisionNode**(`guardianEnclaveSignatures`, `validatorSignature`, `depositRootHash`): `Promise`\<\`0x$\{string\}\`\>

Provision a node.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guardianEnclaveSignatures` | \`0x$\{string\}\`[] | The guardian enclave signatures. |
| `validatorSignature` | \`0x$\{string\}\` | The validator signature. |
| `depositRootHash` | \`0x$\{string\}\` | The deposit root hash. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:254](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L254)

##### registerValidatorKey()

> **registerValidatorKey**(`data`, `moduleName`, `pufETHPermit`, `vtPermit`): `Promise`\<\`0x$\{string\}\`\>

Register validator key.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ValidatorKeyData`](puffer-protocol-handler.md#validatorkeydata) | The validator key data. |
| `moduleName` | \`0x$\{string\}\` | The module name. |
| `pufETHPermit` | [`PermitData`](../common/lib/types.md#permitdata) | The pufETH permit data. |
| `vtPermit` | [`PermitData`](../common/lib/types.md#permitdata) | The VT permit data. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:231](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L231)

##### skipProvisioning()

> **skipProvisioning**(`moduleName`, `guardianEOASignatures`): `Promise`\<\`0x$\{string\}\`\>

Skip provisioning for a module.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | \`0x$\{string\}\` | The module name. |
| `guardianEOASignatures` | \`0x$\{string\}\`[] | The guardian EOA signatures. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:326](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L326)

##### withdrawValidatorTickets()

> **withdrawValidatorTickets**(`amount`, `recipient`): `Promise`\<\`0x$\{string\}\`\>

Withdraw validator tickets.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to withdraw. |
| `recipient` | \`0x$\{string\}\` | The recipient address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:289](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L289)

## Type Aliases

### StoppedValidatorInfo

> **StoppedValidatorInfo**: `object`

#### Type declaration

##### endEpoch

> **endEpoch**: `bigint`

##### module

> **module**: `Address`

##### moduleName

> **moduleName**: \`0x$\{string\}\`

##### pufferModuleIndex

> **pufferModuleIndex**: `bigint`

##### startEpoch

> **startEpoch**: `bigint`

##### wasSlashed

> **wasSlashed**: `boolean`

##### withdrawalAmount

> **withdrawalAmount**: `bigint`

#### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L24)

***

### ValidatorKeyData

> **ValidatorKeyData**: `object`

#### Type declaration

##### blsEncryptedPrivKeyShares

> **blsEncryptedPrivKeyShares**: \`0x$\{string\}\`[]

##### blsPubKey

> **blsPubKey**: \`0x$\{string\}\`

##### blsPubKeySet

> **blsPubKeySet**: \`0x$\{string\}\`

##### depositDataRoot

> **depositDataRoot**: \`0x$\{string\}\`

##### raveEvidence

> **raveEvidence**: \`0x$\{string\}\`

##### signature

> **signature**: \`0x$\{string\}\`

#### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/puffer-protocol-handler.ts#L15)
