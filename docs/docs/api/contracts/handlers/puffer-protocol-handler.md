# contracts/handlers/puffer-protocol-handler

## Classes

### PufferProtocolHandler

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:38](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L38)

Handler for the `PufferProtocol` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new PufferProtocolHandler**(`chain`, `walletClient`, `publicClient`): [`PufferProtocolHandler`](#pufferprotocolhandler)

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L51)

Create the handler for the `PufferProtocol` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`PufferProtocolHandler`](#pufferprotocolhandler)

#### Methods

##### batchHandleWithdrawals()

> **batchHandleWithdrawals**(`validatorInfos`, `guardianEOASignatures`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:306](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L306)

Batch handle withdrawals.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `validatorInfos` | [`StoppedValidatorInfo`](#stoppedvalidatorinfo)[] | The validator infos. |
| `guardianEOASignatures` | `` `0x${string}` ``[] | The guardian EOA signatures. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### createPufferModule()

> **createPufferModule**(`moduleName`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:215](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L215)

Create a new puffer module.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `` `0x${string}` `` | The module name. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### depositValidatorTickets()

> **depositValidatorTickets**(`permit`, `node`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:275](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L275)

Deposit validator tickets.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `permit` | [`PermitData`](../common/lib/types.md#permitdata) | The permit data. |
| `node` | `` `0x${string}` `` | The node address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:64](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L64)

Get the contract.

###### Returns

`object`

The viem contract.

##### getDepositDataRoot()

> **getDepositDataRoot**(`pubKey`, `signature`, `withdrawalCredentials`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:197](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L197)

Get deposit data root.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pubKey` | `` `0x${string}` `` | The public key. |
| `signature` | `` `0x${string}` `` | The signature. |
| `withdrawalCredentials` | `` `0x${string}` `` | The withdrawal credentials. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The deposit data root.

##### getMinimumVtAmount()

> **getMinimumVtAmount**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L81)

Get the minimum VT amount required.

###### Returns

`Promise`\<`bigint`\>

The minimum VT amount.

##### getModuleAddress()

> **getModuleAddress**(`moduleName`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L110)

Get module address by name.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `` `0x${string}` `` | The module name. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The module address.

##### getModuleLimitInformation()

> **getModuleLimitInformation**(`moduleName`): `Promise`\<\{ `allowedLimit`: `bigint`; `numberOfRegisteredValidators`: `bigint`; \}\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:175](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L175)

Get module limit information.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `` `0x${string}` `` | The module name. |

###### Returns

`Promise`\<\{ `allowedLimit`: `bigint`; `numberOfRegisteredValidators`: `bigint`; \}\>

The module limit information.

##### getModuleWeights()

> **getModuleWeights**(): `Promise`\<readonly `` `0x${string}` ``[]\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:119](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L119)

Get module weights.

###### Returns

`Promise`\<readonly `` `0x${string}` ``[]\>

The module weights.

##### getNextValidatorToProvision()

> **getNextValidatorToProvision**(): `Promise`\<readonly \[`` `0x${string}` ``, `bigint`\]\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:128](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L128)

Get the next validator to be provisioned.

###### Returns

`Promise`\<readonly \[`` `0x${string}` ``, `bigint`\]\>

Tuple of module name and index.

##### getNodeInfo()

> **getNodeInfo**(`node`): `Promise`\<\{ `activeValidatorCount`: `bigint`; `pendingValidatorCount`: `bigint`; `vtBalance`: `bigint`; \}\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:138](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L138)

Get node information.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | `` `0x${string}` `` | The node address. |

###### Returns

`Promise`\<\{ `activeValidatorCount`: `bigint`; `pendingValidatorCount`: `bigint`; `vtBalance`: `bigint`; \}\>

The node information.

##### getValidatorInfo()

> **getValidatorInfo**(`moduleName`, `pufferModuleIndex`): `Promise`\<\{ `bond`: `bigint`; `module`: `` `0x${string}` ``; `node`: `` `0x${string}` ``; `pubKey`: `` `0x${string}` ``; `status`: `number`; \}\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:159](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L159)

Get validator information.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `` `0x${string}` `` | The module name. |
| `pufferModuleIndex` | `bigint` | The puffer module index. |

###### Returns

`Promise`\<\{ `bond`: `bigint`; `module`: `` `0x${string}` ``; `node`: `` `0x${string}` ``; `pubKey`: `` `0x${string}` ``; `status`: `number`; \}\>

The validator information.

##### getValidators()

> **getValidators**(`moduleName`): `Promise`\<readonly `object`[]\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:148](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L148)

Get validators for a module.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `` `0x${string}` `` | The module name. |

###### Returns

`Promise`\<readonly `object`[]\>

The validators array.

##### getValidatorTicketsBalance()

> **getValidatorTicketsBalance**(`owner`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:100](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L100)

Get validator tickets balance for an owner.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner address. |

###### Returns

`Promise`\<`bigint`\>

The validator tickets balance.

##### getVTPenalty()

> **getVTPenalty**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:90](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L90)

Get the VT penalty amount.

###### Returns

`Promise`\<`bigint`\>

The VT penalty amount.

##### getWithdrawalCredentials()

> **getWithdrawalCredentials**(`module`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:185](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L185)

Get withdrawal credentials for a module.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `module` | `` `0x${string}` `` | The module address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The withdrawal credentials.

##### provisionNode()

> **provisionNode**(`guardianEnclaveSignatures`, `validatorSignature`, `depositRootHash`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:254](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L254)

Provision a node.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `guardianEnclaveSignatures` | `` `0x${string}` ``[] | The guardian enclave signatures. |
| `validatorSignature` | `` `0x${string}` `` | The validator signature. |
| `depositRootHash` | `` `0x${string}` `` | The deposit root hash. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### registerValidatorKey()

> **registerValidatorKey**(`data`, `moduleName`, `pufETHPermit`, `vtPermit`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:231](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L231)

Register validator key.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`ValidatorKeyData`](#validatorkeydata) | The validator key data. |
| `moduleName` | `` `0x${string}` `` | The module name. |
| `pufETHPermit` | [`PermitData`](../common/lib/types.md#permitdata) | The pufETH permit data. |
| `vtPermit` | [`PermitData`](../common/lib/types.md#permitdata) | The VT permit data. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### skipProvisioning()

> **skipProvisioning**(`moduleName`, `guardianEOASignatures`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:326](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L326)

Skip provisioning for a module.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `` `0x${string}` `` | The module name. |
| `guardianEOASignatures` | `` `0x${string}` ``[] | The guardian EOA signatures. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### withdrawValidatorTickets()

> **withdrawValidatorTickets**(`amount`, `recipient`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:289](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L289)

Withdraw validator tickets.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to withdraw. |
| `recipient` | `` `0x${string}` `` | The recipient address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

## Type Aliases

### StoppedValidatorInfo

> **StoppedValidatorInfo** = `object`

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L24)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="endepoch"></a> `endEpoch` | `bigint` | [lib/contracts/handlers/puffer-protocol-handler.ts:27](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L27) |
| <a id="module"></a> `module` | `Address` | [lib/contracts/handlers/puffer-protocol-handler.ts:25](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L25) |
| <a id="modulename"></a> `moduleName` | `` `0x${string}` `` | [lib/contracts/handlers/puffer-protocol-handler.ts:29](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L29) |
| <a id="puffermoduleindex"></a> `pufferModuleIndex` | `bigint` | [lib/contracts/handlers/puffer-protocol-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L30) |
| <a id="startepoch"></a> `startEpoch` | `bigint` | [lib/contracts/handlers/puffer-protocol-handler.ts:26](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L26) |
| <a id="wasslashed"></a> `wasSlashed` | `boolean` | [lib/contracts/handlers/puffer-protocol-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L28) |
| <a id="withdrawalamount"></a> `withdrawalAmount` | `bigint` | [lib/contracts/handlers/puffer-protocol-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L31) |

***

### ValidatorKeyData

> **ValidatorKeyData** = `object`

Defined in: [lib/contracts/handlers/puffer-protocol-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L15)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="blsencryptedprivkeyshares"></a> `blsEncryptedPrivKeyShares` | `` `0x${string}` ``[] | [lib/contracts/handlers/puffer-protocol-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L19) |
| <a id="blspubkey"></a> `blsPubKey` | `` `0x${string}` `` | [lib/contracts/handlers/puffer-protocol-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L16) |
| <a id="blspubkeyset"></a> `blsPubKeySet` | `` `0x${string}` `` | [lib/contracts/handlers/puffer-protocol-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L20) |
| <a id="depositdataroot"></a> `depositDataRoot` | `` `0x${string}` `` | [lib/contracts/handlers/puffer-protocol-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L18) |
| <a id="raveevidence"></a> `raveEvidence` | `` `0x${string}` `` | [lib/contracts/handlers/puffer-protocol-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L21) |
| <a id="signature"></a> `signature` | `` `0x${string}` `` | [lib/contracts/handlers/puffer-protocol-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/puffer-protocol-handler.ts#L17) |
