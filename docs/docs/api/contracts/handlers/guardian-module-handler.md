# contracts/handlers/guardian-module-handler

## Classes

### GuardianModuleHandler

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L18)

Handler for the `GuardianModule` contract exposing methods to
interact with the contract.

#### Constructors

##### Constructor

> **new GuardianModuleHandler**(`chain`, `walletClient`, `publicClient`): [`GuardianModuleHandler`](#guardianmodulehandler)

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L31)

Create the handler for the `PufLocker` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`GuardianModuleHandler`](#guardianmodulehandler)

#### Methods

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:45](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L45)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getEjectionThreshold()

> **getEjectionThreshold**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L62)

Get the ejection threshold.

###### Returns

`Promise`\<`bigint`\>

The ejection threshold.

##### getGuardians()

> **getGuardians**(): `Promise`\<readonly `` `0x${string}` ``[]\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L71)

Get the guardians.

###### Returns

`Promise`\<readonly `` `0x${string}` ``[]\>

The guardians.

##### getGuardiansEnclaveAddress()

> **getGuardiansEnclaveAddress**(`guardian`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L81)

Get the enclave address for a guardian.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `guardian` | `` `0x${string}` `` | The guardian address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The enclave address.

##### getGuardiansEnclaveAddresses()

> **getGuardiansEnclaveAddresses**(): `Promise`\<readonly `` `0x${string}` ``[]\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:90](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L90)

Get the enclave addresses for all guardians.

###### Returns

`Promise`\<readonly `` `0x${string}` ``[]\>

The enclave addresses.

##### getGuardiansEnclavePubkeys()

> **getGuardiansEnclavePubkeys**(): `Promise`\<readonly `` `0x${string}` ``[]\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L99)

Get the enclave pubkeys for all guardians.

###### Returns

`Promise`\<readonly `` `0x${string}` ``[]\>

The enclave pubkeys.

##### getMrenclave()

> **getMrenclave**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:125](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L125)

Get the mrenclave.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The mrenclave.

##### getMrsigner()

> **getMrsigner**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L134)

Get the mrsigner.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The mrsigner.

##### getThreshold()

> **getThreshold**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:143](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L143)

Get the threshold.

###### Returns

`Promise`\<`bigint`\>

The threshold.

##### isConsumingScheduledOp()

> **isConsumingScheduledOp**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:153](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L153)

Check if the guardian module is consuming scheduled operations.

###### Returns

`Promise`\<`` `0x${string}` ``\>

True if the guardian module is consuming scheduled operations,
false otherwise.

##### isGuardian()

> **isGuardian**(`account`): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:163](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L163)

Check if an account is a guardian.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account address. |

###### Returns

`Promise`\<`boolean`\>

True if the account is a guardian, false otherwise.

##### removeGuardian()

> **removeGuardian**(`guardian`, `account`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:174](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L174)

Remove a guardian.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `guardian` | `` `0x${string}` `` | The guardian address. |
| `account` | `` `0x${string}` `` | The account address to make the transaction with. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction receipt.

##### validateGuardiansEnclaveSignatures()

> **validateGuardiansEnclaveSignatures**(`enclaveSignatures`, `signedMessageHash`): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/guardian-module-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/4c59271734406b6bfb4654c6b8aa006219d80994/lib/contracts/handlers/guardian-module-handler.ts#L110)

Validate the enclave signatures for a signed message.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enclaveSignatures` | `` `0x${string}` ``[] | The enclave signatures. |
| `signedMessageHash` | `` `0x${string}` `` | The signed message hash. |

###### Returns

`Promise`\<`boolean`\>

The validation result.
