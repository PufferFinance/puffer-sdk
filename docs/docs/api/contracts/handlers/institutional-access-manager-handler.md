# contracts/handlers/institutional-access-manager-handler

## Classes

### InstitutionalAccessManagerHandler

Handler for the `InstitutionalAccessManager` contract exposing methods to
interact with the contract.

#### Constructors

##### new InstitutionalAccessManagerHandler()

> **new InstitutionalAccessManagerHandler**(`chain`, `walletClient`, `publicClient`): [`InstitutionalAccessManagerHandler`](institutional-access-manager-handler.md#institutionalaccessmanagerhandler)

Create the handler for the Institutional `AccessManager` contract
exposing methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`InstitutionalAccessManagerHandler`](institutional-access-manager-handler.md#institutionalaccessmanagerhandler)

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:54](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L54)

#### Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `address?` | `private` | \`0x$\{string\}\` | `undefined` | - |
| `publicClient` | `private` | `object` | `undefined` | The public client to use for public interactions. |
| `selectorsMap` | `private` | `Record`\<\`0x$\{string\}\`, `string`\> | `...` | - |
| `viemChain` | `private` | `Chain` | `undefined` | - |
| `walletClient` | `private` | `object` | `undefined` | The wallet client to use for wallet interactions. |

#### Methods

##### canCall()

> **canCall**(`caller`, `target`, `selector`): `Promise`\<`object`\>

Check if a caller can call a target with a specific selector.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `caller` | \`0x$\{string\}\` | The caller address. |
| `target` | \`0x$\{string\}\` | The target contract address. |
| `selector` | \`0x$\{string\}\` | The function selector. |

###### Returns

`Promise`\<`object`\>

Whether the caller can call the target immediately and the delay.

###### canCall

> **canCall**: `boolean` = `immediate`

###### canCallDelay

> **canCallDelay**: `number` = `delay`

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:135](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L135)

##### cancel()

> **cancel**(`caller`, `target`, `data`): `Promise`\<\`0x$\{string\}\`\>

Cancel a scheduled operation.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `caller` | \`0x$\{string\}\` | The caller address. |
| `target` | \`0x$\{string\}\` | The target contract address. |
| `data` | \`0x$\{string\}\` | The operation data. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The nonce.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:153](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L153)

##### execute()

> **execute**(`target`, `data`, `value`?): `Promise`\<\`0x$\{string\}\`\>

Execute a target with data.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target contract address. |
| `data` | \`0x$\{string\}\` | The data to execute. |
| `value`? | `bigint` | The value to send. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The nonce.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:168](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L168)

##### getAccess()

> **getAccess**(`roleIdOrLabel`, `account`): `Promise`\<`object`\>

Get access information for a role and account.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `account` | \`0x$\{string\}\` | The account address. |

###### Returns

`Promise`\<`object`\>

The access information.

###### currentDelay

> **currentDelay**: `number`

###### effect

> **effect**: `number`

###### pendingDelay

> **pendingDelay**: `number`

###### since

> **since**: `number`

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:184](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L184)

##### getAddress()

> **getAddress**(): `undefined` \| \`0x$\{string\}\`

Get the address of the contract for this handler.

###### Returns

`undefined` \| \`0x$\{string\}\`

The address of the contract.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:79](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L79)

##### getAdminRole()

> **getAdminRole**(): `Promise`\<`bigint`\>

Get the admin role.

###### Returns

`Promise`\<`bigint`\>

The admin role.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:114](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L114)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L89)

##### getFunctionNameFromSelector()

> **getFunctionNameFromSelector**(`selector`): `undefined` \| `string`

Get the function name for a selector.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `selector` | \`0x$\{string\}\` | The selector. |

###### Returns

`undefined` \| `string`

The function name.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:587](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L587)

##### getMinSetback()

> **getMinSetback**(): `Promise`\<`number`\>

Get the minimum setback.

###### Returns

`Promise`\<`number`\>

The minimum setback.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:355](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L355)

##### getNonce()

> **getNonce**(`id`): `Promise`\<`number`\>

Get the nonce for an operation ID.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | \`0x$\{string\}\` | The operation ID. |

###### Returns

`Promise`\<`number`\>

The nonce.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:198](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L198)

##### getPublicRole()

> **getPublicRole**(): `Promise`\<`bigint`\>

Get the public role.

###### Returns

`Promise`\<`bigint`\>

The public role.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:123](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L123)

##### getRoleAdmin()

> **getRoleAdmin**(`roleIdOrLabel`): `Promise`\<`bigint`\>

Get the admin role for a role ID.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |

###### Returns

`Promise`\<`bigint`\>

The admin role ID.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:209](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L209)

##### getRoleGrantDelay()

> **getRoleGrantDelay**(`roleIdOrLabel`): `Promise`\<`number`\>

Get the grant delay for a role ID.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |

###### Returns

`Promise`\<`number`\>

The grant delay.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:221](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L221)

##### getRoleGuardian()

> **getRoleGuardian**(`roleIdOrLabel`): `Promise`\<`bigint`\>

Get the guardian role for a role ID.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |

###### Returns

`Promise`\<`bigint`\>

The guardian role ID.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:233](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L233)

##### getSchedule()

> **getSchedule**(`id`): `Promise`\<`number`\>

Get the schedule for an operation ID.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | \`0x$\{string\}\` | The operation ID. |

###### Returns

`Promise`\<`number`\>

The schedule time.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:244](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L244)

##### getSelectorFromFunctionName()

> **getSelectorFromFunctionName**(`functionName`): `undefined` \| `string`

Get the selector for a function name.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `functionName` | `string` | The function name. |

###### Returns

`undefined` \| `string`

The selector.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:575](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L575)

##### getTargetAdminDelay()

> **getTargetAdminDelay**(`target`): `Promise`\<`number`\>

Get the admin delay for a target.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target contract address. |

###### Returns

`Promise`\<`number`\>

The admin delay.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:254](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L254)

##### getTargetFunctionRole()

> **getTargetFunctionRole**(`target`, `selector`): `Promise`\<`bigint`\>

Get the function role for a target and selector.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target contract address. |
| `selector` | \`0x$\{string\}\` | The function selector. |

###### Returns

`Promise`\<`bigint`\>

The role ID.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:265](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L265)

##### grantRole()

> **grantRole**(`roleIdOrLabel`, `account`, `executionDelay`): `Promise`\<\`0x$\{string\}\`\>

Grant a role to an account.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `account` | \`0x$\{string\}\` | The account address. |
| `executionDelay` | `number` | The execution delay. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:277](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L277)

##### hasRole()

> **hasRole**(`roleIdOrLabel`, `account`): `Promise`\<`object`\>

Check if an account has a role.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `account` | \`0x$\{string\}\` | The account address. |

###### Returns

`Promise`\<`object`\>

Whether the account has the role and the execution delay.

###### executionDelay

> **executionDelay**: `number`

###### isMember

> **isMember**: `boolean`

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:301](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L301)

##### hashOperation()

> **hashOperation**(`caller`, `target`, `data`): `Promise`\<\`0x$\{string\}\`\>

Hash an operation.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `caller` | \`0x$\{string\}\` | The caller address. |
| `target` | \`0x$\{string\}\` | The target address. |
| `data` | \`0x$\{string\}\` | The operation data. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The operation hash.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:319](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L319)

##### isTargetClosed()

> **isTargetClosed**(`target`): `Promise`\<`boolean`\>

Check if a target is closed.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target contract address. |

###### Returns

`Promise`\<`boolean`\>

Whether the target is closed.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:329](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L329)

##### labelRole()

> **labelRole**(`roleIdOrLabel`, `label`): `Promise`\<\`0x$\{string\}\`\>

Label a role.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `label` | `string` | The label. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction hash.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:341](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L341)

##### labelToRoleId()

> **labelToRoleId**(`label`): `bigint`

Convert a label to a role ID. Useful if you want to create a roleId
from a label which can then be used to get the label back using
`roleIdToLabel`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The label to convert. |

###### Returns

`bigint`

The role ID.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:545](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L545)

##### multicall()

> **multicall**(`data`): `Promise`\<\`0x$\{string\}\`\>

Execute multiple calls.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | \`0x$\{string\}\`[] | Array of call data. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

Array of results.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:365](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L365)

##### processRoleIdOrLabel()

> `private` **processRoleIdOrLabel**(`roleIdOrLabel`): `bigint`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` |

###### Returns

`bigint`

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:593](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L593)

##### renounceRole()

> **renounceRole**(`roleIdOrLabel`, `callerConfirmation`): `Promise`\<\`0x$\{string\}\`\>

Renounce a role.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `callerConfirmation` | \`0x$\{string\}\` | The caller confirmation address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:379](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L379)

##### revokeRole()

> **revokeRole**(`roleIdOrLabel`, `account`): `Promise`\<\`0x$\{string\}\`\>

Revoke a role from an account.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `account` | \`0x$\{string\}\` | The account address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:398](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L398)

##### roleIdToLabel()

> **roleIdToLabel**(`roleId`): `string`

Convert a role ID to a label. Only useful if the `roleId` was
created using `labelToRoleId`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleId` | `bigint` | The role ID to convert. |

###### Returns

`string`

The label.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:561](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L561)

##### schedule()

> **schedule**(`target`, `data`, `when`): `Promise`\<\`0x$\{string\}\`\>

Schedule an operation.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target contract address. |
| `data` | \`0x$\{string\}\` | The operation data. |
| `when` | `number` | The execution time. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The operation ID and nonce.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:415](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L415)

##### setGrantDelay()

> **setGrantDelay**(`roleIdOrLabel`, `newDelay`): `Promise`\<\`0x$\{string\}\`\>

Set the grant delay for a role.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `newDelay` | `number` | The new delay. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:429](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L429)

##### setRoleAdmin()

> **setRoleAdmin**(`roleIdOrLabel`, `admin`): `Promise`\<\`0x$\{string\}\`\>

Set the admin role for a role.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `admin` | `bigint` | The admin role ID. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:445](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L445)

##### setRoleGuardian()

> **setRoleGuardian**(`roleIdOrLabel`, `guardian`): `Promise`\<\`0x$\{string\}\`\>

Set the guardian role for a role.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |
| `guardian` | `bigint` | The guardian role ID. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:461](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L461)

##### setTargetAdminDelay()

> **setTargetAdminDelay**(`target`, `newDelay`): `Promise`\<\`0x$\{string\}\`\>

Set the admin delay for a target.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target contract address. |
| `newDelay` | `number` | The new delay. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:476](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L476)

##### setTargetClosed()

> **setTargetClosed**(`target`, `closed`): `Promise`\<\`0x$\{string\}\`\>

Set whether a target is closed.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target contract address. |
| `closed` | `boolean` | Whether the target is closed. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:489](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L489)

##### setTargetFunctionRole()

> **setTargetFunctionRole**(`target`, `selectors`, `roleIdOrLabel`): `Promise`\<\`0x$\{string\}\`\>

Set the function role for a target.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target address. |
| `selectors` | \`0x$\{string\}\`[] | Array of function selectors. |
| `roleIdOrLabel` | `string` \| `bigint` | The role ID or role label generated with `labelToRoleId`. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:504](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L504)

##### updateAuthority()

> **updateAuthority**(`target`, `newAuthority`): `Promise`\<\`0x$\{string\}\`\>

Update the authority for a target.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | \`0x$\{string\}\` | The target address. |
| `newAuthority` | \`0x$\{string\}\` | The new authority address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:526](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L526)

##### withAddress()

> **withAddress**(`address`): [`InstitutionalAccessManagerHandler`](institutional-access-manager-handler.md#institutionalaccessmanagerhandler)

Set the address of the contract for this handler.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address of the contract. |

###### Returns

[`InstitutionalAccessManagerHandler`](institutional-access-manager-handler.md#institutionalaccessmanagerhandler)

The handler.

###### Source

[lib/contracts/handlers/institutional-access-manager-handler.ts:68](https://github.com/PufferFinance/puffer-sdk/blob/f4ce194cd20a53f9eba2ac9852dbc1815bb1a500/lib/contracts/handlers/institutional-access-manager-handler.ts#L68)
