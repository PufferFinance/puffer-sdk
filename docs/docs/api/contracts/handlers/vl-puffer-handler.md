# contracts/handlers/vl-puffer-handler

## Classes

### VLPufferHandler

Handler for the `vlPUFFER` contract exposing methods to interact
with the contract.

#### Constructors

##### new VLPufferHandler()

> **new VLPufferHandler**(`chain`, `walletClient`, `publicClient`): [`VLPufferHandler`](vl-puffer-handler.md#vlpufferhandler)

Create the handler for the `vlPUFFER` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`VLPufferHandler`](vl-puffer-handler.md#vlpufferhandler)

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:35](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L35)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `erc20PermitHandler` | `private` | [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler) | - |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### PUFFER()

> **PUFFER**(): `Promise`\<\`0x$\{string\}\`\>

Get the PUFFER token address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The PUFFER token address.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L70)

##### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Get the allowance of the owner for the spender.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner of the allowance. |
| `spender` | \`0x$\{string\}\` | The spender of the allowance. |

###### Returns

`Promise`\<`bigint`\>

The allowance.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L109)

##### approve()

> **approve**(`spender`, `value`): `Promise`\<\`0x$\{string\}\`\>

Approve a spender to spend tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `spender` | \`0x$\{string\}\` | The spender address. |
| `value` | `bigint` | The amount to approve. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:316](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L316)

##### balanceOf()

> **balanceOf**(`account`): `Promise`\<`bigint`\>

Get the balance for an address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:185](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L185)

##### checkpoints()

> **checkpoints**(`account`, `pos`): `Promise`\<`object`\>

Get the checkpoints for an account at a specific position.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account to get checkpoints for. |
| `pos` | `number` | The position of the checkpoint. |

###### Returns

`Promise`\<`object`\>

The checkpoint.

###### \_key

> **\_key**: `number`

###### \_value

> **\_value**: `bigint`

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:355](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L355)

##### createLock()

> **createLock**(`amount`, `multiplier`): `Promise`\<\`0x$\{string\}\`\>

Create a lock with the specified amount and multiplier.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to lock. |
| `multiplier` | `bigint` | The multiplier for the lock. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:375](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L375)

##### createLockWithPermit()

> **createLockWithPermit**(`value`, `multiplier`, `permitData`): `Promise`\<\`0x$\{string\}\`\>

Create a lock with permit.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | The amount to lock. |
| `multiplier` | `bigint` | The multiplier for the lock. |
| `permitData` | [`PermitData`](../common/lib/types.md#permitdata) | The permit data. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:390](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L390)

##### decimals()

> **decimals**(): `Promise`\<`number`\>

Get the decimals of the token.

###### Returns

`Promise`\<`number`\>

The decimals.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:79](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L79)

##### delegate()

> **delegate**(`delegatee`, `isPreapproved`): `Promise`\<\`0x$\{string\}\`\>

Delegate votes to another address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `delegatee` | \`0x$\{string\}\` | The delegatee address. |
| `isPreapproved` | `boolean` | Whether the PUFFER token is preapproved or should use a permit signature. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:258](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L258)

##### delegateBySig()

> **delegateBySig**(`delegatee`, `nonce`, `expiry`, `v`, `r`, `s`): `Promise`\<\`0x$\{string\}\`\>

Delegate by signature.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `delegatee` | \`0x$\{string\}\` | The delegatee address. |
| `nonce` | `bigint` | The nonce. |
| `expiry` | `bigint` | The expiry time. |
| `v` | `number` | The v component of the signature. |
| `r` | \`0x$\{string\}\` | The r component of the signature. |
| `s` | \`0x$\{string\}\` | The s component of the signature. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:220](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L220)

##### delegatePreapproved()

> **delegatePreapproved**(`delegatee`): `Promise`\<\`0x$\{string\}\`\>

Delegate votes to another address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `delegatee` | \`0x$\{string\}\` | The delegatee address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:243](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L243)

##### delegates()

> **delegates**(`account`): `Promise`\<\`0x$\{string\}\`\>

Get the delegates for an account.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account to get delegates for. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The delegate address.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L89)

##### getClock()

> **getClock**(): `Promise`\<`number`\>

Get the current clock value.

###### Returns

`Promise`\<`number`\>

The clock value.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:438](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L438)

##### getClockMode()

> **getClockMode**(): `Promise`\<`string`\>

Get the clock mode.

###### Returns

`Promise`\<`string`\>

The clock mode.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:295](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L295)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:53](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L53)

##### getPastTotalSupply()

> **getPastTotalSupply**(`timepoint`): `Promise`\<`bigint`\>

Get the past total supply at a specific timepoint.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `timepoint` | `bigint` | The timepoint to get the total supply for. |

###### Returns

`Promise`\<`bigint`\>

The past total supply.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:175](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L175)

##### getPastVotes()

> **getPastVotes**(`account`, `timepoint`): `Promise`\<`bigint`\>

Get the past votes for an account at a specific timepoint.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account to get past votes for. |
| `timepoint` | `bigint` | The timepoint to get votes for. |

###### Returns

`Promise`\<`bigint`\>

The past votes.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:344](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L344)

##### isPaused()

> **isPaused**(): `Promise`\<`boolean`\>

Check if the contract is paused.

###### Returns

`Promise`\<`boolean`\>

True if paused, false otherwise.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:151](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L151)

##### lock()

> **lock**(`value`, `multiplier`, `isPreapproved`): `Promise`\<\`0x$\{string\}\`\>

Create a lock with permit.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | The amount to lock. |
| `multiplier` | `bigint` | The multiplier for the lock. |
| `isPreapproved` | `boolean` | Whether the PUFFER token is preapproved. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:412](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L412)

##### lockInfos()

> **lockInfos**(`user`): `Promise`\<`object`\>

Get the lock information for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | The user address. |

###### Returns

`Promise`\<`object`\>

The lock information.

###### pufferAmount

> **pufferAmount**: `bigint`

###### unlockTime

> **unlockTime**: `bigint`

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:161](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L161)

##### name()

> **name**(): `Promise`\<`string`\>

Get the name of the token.

###### Returns

`Promise`\<`string`\>

The name.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:364](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L364)

##### nonces()

> **nonces**(`owner`): `Promise`\<`bigint`\>

Get the nonce for an owner.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner address. |

###### Returns

`Promise`\<`bigint`\>

The nonce.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:195](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L195)

##### numCheckpoints()

> **numCheckpoints**(`account`): `Promise`\<`number`\>

Get the number of checkpoints for an account.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account to get checkpoints for. |

###### Returns

`Promise`\<`number`\>

The number of checkpoints.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:305](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L305)

##### owner()

> **owner**(): `Promise`\<\`0x$\{string\}\`\>

Get the owner of the contract.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The owner address.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L98)

##### reLock()

> **reLock**(`amount`, `multiplier`): `Promise`\<\`0x$\{string\}\`\>

Re-lock with the specified amount and multiplier.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to re-lock. |
| `multiplier` | `bigint` | The multiplier for the re-lock. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:330](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L330)

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Get the symbol of the token.

###### Returns

`Promise`\<`string`\>

The symbol.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:142](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L142)

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

The total supply.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:133](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L133)

##### transfer()

> **transfer**(`to`, `value`): `Promise`\<\`0x$\{string\}\`\>

Transfer tokens to another address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `to` | \`0x$\{string\}\` | The address to transfer to. |
| `value` | `bigint` | The amount to transfer. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:283](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L283)

##### transferFrom()

> **transferFrom**(`from`, `to`, `value`): `Promise`\<\`0x$\{string\}\`\>

Transfer tokens from one address to another.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `from` | \`0x$\{string\}\` | The address to transfer from. |
| `to` | \`0x$\{string\}\` | The address to transfer to. |
| `value` | `bigint` | The amount to transfer. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:121](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L121)

##### votes()

> **votes**(`account`): `Promise`\<`bigint`\>

Get the votes for an account.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account to get votes for. |

###### Returns

`Promise`\<`bigint`\>

The votes.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:205](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L205)

##### withdraw()

> **withdraw**(`recipient`): `Promise`\<\`0x$\{string\}\`\>

Withdraw tokens to a recipient.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `recipient` | \`0x$\{string\}\` | The recipient address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/vl-puffer-handler.ts:448](https://github.com/PufferFinance/puffer-sdk/blob/0b3b86252c1edc6f41ebb27b139566f820c8b43f/lib/contracts/handlers/vl-puffer-handler.ts#L448)
