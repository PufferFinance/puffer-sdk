# contracts/handlers/institutional-access-manager-handler

## Classes

### InstitutionalAccessManagerHandler

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L24)

Handler for the `InstitutionalAccessManager` contract exposing methods to
interact with the contract.

#### Constructors

##### Constructor

> **new InstitutionalAccessManagerHandler**(`chain`, `walletClient`, `publicClient`): [`InstitutionalAccessManagerHandler`](#institutionalaccessmanagerhandler)

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:54](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L54)

Create the handler for the Institutional `AccessManager` contract
exposing methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`InstitutionalAccessManagerHandler`](#institutionalaccessmanagerhandler)

#### Methods

##### canCall()

> **canCall**(`caller`, `target`, `selector`): `Promise`\<\{ `canCall`: `boolean`; `canCallDelay`: `number`; \}\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:135](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L135)

Check if a caller can call a target with a specific selector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `` `0x${string}` `` | The caller address. |
| `target` | `` `0x${string}` `` | The target contract address. |
| `selector` | `` `0x${string}` `` | The function selector. |

###### Returns

`Promise`\<\{ `canCall`: `boolean`; `canCallDelay`: `number`; \}\>

Whether the caller can call the target immediately and the delay.

##### cancel()

> **cancel**(`caller`, `target`, `data`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:153](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L153)

Cancel a scheduled operation.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `` `0x${string}` `` | The caller address. |
| `target` | `` `0x${string}` `` | The target contract address. |
| `data` | `` `0x${string}` `` | The operation data. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The nonce.

##### execute()

> **execute**(`target`, `data`, `value?`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:168](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L168)

Execute a target with data.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target contract address. |
| `data` | `` `0x${string}` `` | The data to execute. |
| `value?` | `bigint` | The value to send. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The nonce.

##### getAccess()

> **getAccess**(`roleIdOrLabel`, `account`): `Promise`\<\{ `currentDelay`: `number`; `effect`: `number`; `pendingDelay`: `number`; `since`: `number`; \}\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:184](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L184)

Get access information for a role and account.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `account` | `` `0x${string}` `` | The account address. |

###### Returns

`Promise`\<\{ `currentDelay`: `number`; `effect`: `number`; `pendingDelay`: `number`; `since`: `number`; \}\>

The access information.

##### getAddress()

> **getAddress**(): `` `0x${string}` `` \| `undefined`

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:79](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L79)

Get the address of the contract for this handler.

###### Returns

`` `0x${string}` `` \| `undefined`

The address of the contract.

##### getAdminRole()

> **getAdminRole**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:114](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L114)

Get the admin role.

###### Returns

`Promise`\<`bigint`\>

The admin role.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L89)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getFunctionNameFromSelector()

> **getFunctionNameFromSelector**(`selector`): `string` \| `undefined`

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:587](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L587)

Get the function name for a selector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `` `0x${string}` `` | The selector. |

###### Returns

`string` \| `undefined`

The function name.

##### getMinSetback()

> **getMinSetback**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:355](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L355)

Get the minimum setback.

###### Returns

`Promise`\<`number`\>

The minimum setback.

##### getNonce()

> **getNonce**(`id`): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:198](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L198)

Get the nonce for an operation ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `` `0x${string}` `` | The operation ID. |

###### Returns

`Promise`\<`number`\>

The nonce.

##### getPublicRole()

> **getPublicRole**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:123](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L123)

Get the public role.

###### Returns

`Promise`\<`bigint`\>

The public role.

##### getRoleAdmin()

> **getRoleAdmin**(`roleIdOrLabel`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:209](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L209)

Get the admin role for a role ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |

###### Returns

`Promise`\<`bigint`\>

The admin role ID.

##### getRoleGrantDelay()

> **getRoleGrantDelay**(`roleIdOrLabel`): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:221](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L221)

Get the grant delay for a role ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |

###### Returns

`Promise`\<`number`\>

The grant delay.

##### getRoleGuardian()

> **getRoleGuardian**(`roleIdOrLabel`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:233](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L233)

Get the guardian role for a role ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |

###### Returns

`Promise`\<`bigint`\>

The guardian role ID.

##### getSchedule()

> **getSchedule**(`id`): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:244](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L244)

Get the schedule for an operation ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `` `0x${string}` `` | The operation ID. |

###### Returns

`Promise`\<`number`\>

The schedule time.

##### getSelectorFromFunctionName()

> **getSelectorFromFunctionName**(`functionName`): `string` \| `undefined`

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:575](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L575)

Get the selector for a function name.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `functionName` | `string` | The function name. |

###### Returns

`string` \| `undefined`

The selector.

##### getTargetAdminDelay()

> **getTargetAdminDelay**(`target`): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:254](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L254)

Get the admin delay for a target.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target contract address. |

###### Returns

`Promise`\<`number`\>

The admin delay.

##### getTargetFunctionRole()

> **getTargetFunctionRole**(`target`, `selector`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:265](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L265)

Get the function role for a target and selector.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target contract address. |
| `selector` | `` `0x${string}` `` | The function selector. |

###### Returns

`Promise`\<`bigint`\>

The role ID.

##### grantRole()

> **grantRole**(`roleIdOrLabel`, `account`, `executionDelay`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:277](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L277)

Grant a role to an account.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `account` | `` `0x${string}` `` | The account address. |
| `executionDelay` | `number` | The execution delay. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### hashOperation()

> **hashOperation**(`caller`, `target`, `data`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:319](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L319)

Hash an operation.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `` `0x${string}` `` | The caller address. |
| `target` | `` `0x${string}` `` | The target address. |
| `data` | `` `0x${string}` `` | The operation data. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The operation hash.

##### hasRole()

> **hasRole**(`roleIdOrLabel`, `account`): `Promise`\<\{ `executionDelay`: `number`; `isMember`: `boolean`; \}\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:301](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L301)

Check if an account has a role.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `account` | `` `0x${string}` `` | The account address. |

###### Returns

`Promise`\<\{ `executionDelay`: `number`; `isMember`: `boolean`; \}\>

Whether the account has the role and the execution delay.

##### isTargetClosed()

> **isTargetClosed**(`target`): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:329](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L329)

Check if a target is closed.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target contract address. |

###### Returns

`Promise`\<`boolean`\>

Whether the target is closed.

##### labelRole()

> **labelRole**(`roleIdOrLabel`, `label`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:341](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L341)

Label a role.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `label` | `string` | The label. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction hash.

##### labelToRoleId()

> **labelToRoleId**(`label`): `bigint`

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:545](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L545)

Convert a label to a role ID. Useful if you want to create a roleId
from a label which can then be used to get the label back using
`roleIdToLabel`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `label` | `string` | The label to convert. |

###### Returns

`bigint`

The role ID.

##### multicall()

> **multicall**(`data`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:365](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L365)

Execute multiple calls.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `` `0x${string}` ``[] | Array of call data. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

Array of results.

##### renounceRole()

> **renounceRole**(`roleIdOrLabel`, `callerConfirmation`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:379](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L379)

Renounce a role.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `callerConfirmation` | `` `0x${string}` `` | The caller confirmation address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### revokeRole()

> **revokeRole**(`roleIdOrLabel`, `account`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:398](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L398)

Revoke a role from an account.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `account` | `` `0x${string}` `` | The account address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### roleIdToLabel()

> **roleIdToLabel**(`roleId`): `string`

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:561](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L561)

Convert a role ID to a label. Only useful if the `roleId` was
created using `labelToRoleId`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleId` | `bigint` | The role ID to convert. |

###### Returns

`string`

The label.

##### schedule()

> **schedule**(`target`, `data`, `when`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:415](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L415)

Schedule an operation.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target contract address. |
| `data` | `` `0x${string}` `` | The operation data. |
| `when` | `number` | The execution time. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The operation ID and nonce.

##### setGrantDelay()

> **setGrantDelay**(`roleIdOrLabel`, `newDelay`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:429](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L429)

Set the grant delay for a role.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `newDelay` | `number` | The new delay. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### setRoleAdmin()

> **setRoleAdmin**(`roleIdOrLabel`, `admin`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:445](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L445)

Set the admin role for a role.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `admin` | `bigint` | The admin role ID. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### setRoleGuardian()

> **setRoleGuardian**(`roleIdOrLabel`, `guardian`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:461](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L461)

Set the guardian role for a role.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `guardian` | `bigint` | The guardian role ID. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### setTargetAdminDelay()

> **setTargetAdminDelay**(`target`, `newDelay`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:476](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L476)

Set the admin delay for a target.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target contract address. |
| `newDelay` | `number` | The new delay. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### setTargetClosed()

> **setTargetClosed**(`target`, `closed`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:489](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L489)

Set whether a target is closed.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target contract address. |
| `closed` | `boolean` | Whether the target is closed. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### setTargetFunctionRole()

> **setTargetFunctionRole**(`target`, `selectors`, `roleIdOrLabel`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:504](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L504)

Set the function role for a target.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target address. |
| `selectors` | `` `0x${string}` ``[] | Array of function selectors. |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### updateAuthority()

> **updateAuthority**(`target`, `newAuthority`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:526](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L526)

Update the authority for a target.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `` `0x${string}` `` | The target address. |
| `newAuthority` | `` `0x${string}` `` | The new authority address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### withAddress()

> **withAddress**(`address`): [`InstitutionalAccessManagerHandler`](#institutionalaccessmanagerhandler)

Defined in: [lib/contracts/handlers/institutional-access-manager-handler.ts:68](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/institutional-access-manager-handler.ts#L68)

Set the address of the contract for this handler.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address of the contract. |

###### Returns

[`InstitutionalAccessManagerHandler`](#institutionalaccessmanagerhandler)

The handler.
