# contracts/handlers/guardian-module-handler

## Classes

### GuardianModuleHandler

Handler for the `GuardianModule` contract exposing methods to
interact with the contract.

#### Constructors

##### new GuardianModuleHandler()

> **new GuardianModuleHandler**(`chain`, `walletClient`, `publicClient`): [`GuardianModuleHandler`](guardian-module-handler.md#guardianmodulehandler)

Create the handler for the `PufLocker` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`GuardianModuleHandler`](guardian-module-handler.md#guardianmodulehandler)

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L31)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:45](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L45)

##### getEjectionThreshold()

> **getEjectionThreshold**(): `Promise`\<`bigint`\>

Get the ejection threshold.

###### Returns

`Promise`\<`bigint`\>

The ejection threshold.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L62)

##### getGuardians()

> **getGuardians**(): `Promise`\<readonly \`0x$\{string\}\`[]\>

Get the guardians.

###### Returns

`Promise`\<readonly \`0x$\{string\}\`[]\>

The guardians.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L71)

##### getGuardiansEnclaveAddress()

> **getGuardiansEnclaveAddress**(`guardian`): `Promise`\<\`0x$\{string\}\`\>

Get the enclave address for a guardian.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guardian` | \`0x$\{string\}\` | The guardian address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The enclave address.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L81)

##### getGuardiansEnclaveAddresses()

> **getGuardiansEnclaveAddresses**(): `Promise`\<readonly \`0x$\{string\}\`[]\>

Get the enclave addresses for all guardians.

###### Returns

`Promise`\<readonly \`0x$\{string\}\`[]\>

The enclave addresses.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:90](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L90)

##### getGuardiansEnclavePubkeys()

> **getGuardiansEnclavePubkeys**(): `Promise`\<readonly \`0x$\{string\}\`[]\>

Get the enclave pubkeys for all guardians.

###### Returns

`Promise`\<readonly \`0x$\{string\}\`[]\>

The enclave pubkeys.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L99)

##### getMrenclave()

> **getMrenclave**(): `Promise`\<\`0x$\{string\}\`\>

Get the mrenclave.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The mrenclave.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:125](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L125)

##### getMrsigner()

> **getMrsigner**(): `Promise`\<\`0x$\{string\}\`\>

Get the mrsigner.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The mrsigner.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L134)

##### getThreshold()

> **getThreshold**(): `Promise`\<`bigint`\>

Get the threshold.

###### Returns

`Promise`\<`bigint`\>

The threshold.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:143](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L143)

##### isConsumingScheduledOp()

> **isConsumingScheduledOp**(): `Promise`\<\`0x$\{string\}\`\>

Check if the guardian module is consuming scheduled operations.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

True if the guardian module is consuming scheduled operations,
false otherwise.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:153](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L153)

##### isGuardian()

> **isGuardian**(`account`): `Promise`\<`boolean`\>

Check if an account is a guardian.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account address. |

###### Returns

`Promise`\<`boolean`\>

True if the account is a guardian, false otherwise.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:163](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L163)

##### removeGuardian()

> **removeGuardian**(`guardian`, `account`): `Promise`\<\`0x$\{string\}\`\>

Remove a guardian.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guardian` | \`0x$\{string\}\` | The guardian address. |
| `account` | \`0x$\{string\}\` | The account address to make the transaction with. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction receipt.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:174](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L174)

##### validateGuardiansEnclaveSignatures()

> **validateGuardiansEnclaveSignatures**(`enclaveSignatures`, `signedMessageHash`): `Promise`\<`boolean`\>

Validate the enclave signatures for a signed message.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `enclaveSignatures` | \`0x$\{string\}\`[] | The enclave signatures. |
| `signedMessageHash` | \`0x$\{string\}\` | The signed message hash. |

###### Returns

`Promise`\<`boolean`\>

The validation result.

###### Source

[lib/contracts/handlers/guardian-module-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/handlers/guardian-module-handler.ts#L110)
