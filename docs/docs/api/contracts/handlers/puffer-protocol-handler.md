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

[lib/contracts/handlers/puffer-protocol-handler.ts:57](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L57)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:312](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L312)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:221](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L221)

##### depositValidatorTickets()

> **depositValidatorTickets**(`permit`, `node`): `Promise`\<\`0x$\{string\}\`\>

Deposit validator tickets.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `permit` | [`PermitData`](puffer-protocol-handler.md#permitdata) | The permit data. |
| `node` | \`0x$\{string\}\` | The node address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:281](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L281)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L70)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:203](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L203)

##### getMinimumVtAmount()

> **getMinimumVtAmount**(): `Promise`\<`bigint`\>

Get the minimum VT amount required.

###### Returns

`Promise`\<`bigint`\>

The minimum VT amount.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:87](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L87)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:116](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L116)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:181](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L181)

##### getModuleWeights()

> **getModuleWeights**(): `Promise`\<readonly \`0x$\{string\}\`[]\>

Get module weights.

###### Returns

`Promise`\<readonly \`0x$\{string\}\`[]\>

The module weights.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:125](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L125)

##### getNextValidatorToProvision()

> **getNextValidatorToProvision**(): `Promise`\<readonly [\`0x$\{string\}\`, `bigint`]\>

Get the next validator to be provisioned.

###### Returns

`Promise`\<readonly [\`0x$\{string\}\`, `bigint`]\>

Tuple of module name and index.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L134)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:144](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L144)

##### getVTPenalty()

> **getVTPenalty**(): `Promise`\<`bigint`\>

Get the VT penalty amount.

###### Returns

`Promise`\<`bigint`\>

The VT penalty amount.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L96)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:165](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L165)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:106](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L106)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:154](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L154)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:191](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L191)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:260](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L260)

##### registerValidatorKey()

> **registerValidatorKey**(`data`, `moduleName`, `pufETHPermit`, `vtPermit`): `Promise`\<\`0x$\{string\}\`\>

Register validator key.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ValidatorKeyData`](puffer-protocol-handler.md#validatorkeydata) | The validator key data. |
| `moduleName` | \`0x$\{string\}\` | The module name. |
| `pufETHPermit` | [`PermitData`](puffer-protocol-handler.md#permitdata) | The pufETH permit data. |
| `vtPermit` | [`PermitData`](puffer-protocol-handler.md#permitdata) | The VT permit data. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:237](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L237)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:332](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L332)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:295](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L295)

## Type Aliases

### PermitData

> **PermitData**: `object`

#### Type declaration

##### amount

> **amount**: `bigint`

##### deadline

> **deadline**: `bigint`

##### r

> **r**: `Address`

##### s

> **s**: `Address`

##### v

> **v**: `number`

#### Source

[lib/contracts/handlers/puffer-protocol-handler.ts:13](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L13)

***

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

[lib/contracts/handlers/puffer-protocol-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L30)

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

[lib/contracts/handlers/puffer-protocol-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/fa0a7df7054c55dadcb8ea5a4a2acff77f0087e7/lib/contracts/handlers/puffer-protocol-handler.ts#L21)
