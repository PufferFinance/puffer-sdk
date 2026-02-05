# contracts/handlers/vl-puffer-handler

## Classes

### VLPufferHandler

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L21)

Handler for the `vlPUFFER` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new VLPufferHandler**(`chain`, `walletClient`, `publicClient`): [`VLPufferHandler`](#vlpufferhandler)

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:35](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L35)

Create the handler for the `vlPUFFER` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`VLPufferHandler`](#vlpufferhandler)

#### Methods

##### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L109)

Get the allowance of the owner for the spender.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner of the allowance. |
| `spender` | `` `0x${string}` `` | The spender of the allowance. |

###### Returns

`Promise`\<`bigint`\>

The allowance.

##### approve()

> **approve**(`spender`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:316](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L316)

Approve a spender to spend tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spender` | `` `0x${string}` `` | The spender address. |
| `value` | `bigint` | The amount to approve. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### balanceOf()

> **balanceOf**(`account`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:185](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L185)

Get the balance for an address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance.

##### checkpoints()

> **checkpoints**(`account`, `pos`): `Promise`\<\{ `_key`: `number`; `_value`: `bigint`; \}\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:355](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L355)

Get the checkpoints for an account at a specific position.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account to get checkpoints for. |
| `pos` | `number` | The position of the checkpoint. |

###### Returns

`Promise`\<\{ `_key`: `number`; `_value`: `bigint`; \}\>

The checkpoint.

##### createLock()

> **createLock**(`amount`, `multiplier`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:375](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L375)

Create a lock with the specified amount and multiplier.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to lock. |
| `multiplier` | `bigint` | The multiplier for the lock. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### createLockWithPermit()

> **createLockWithPermit**(`value`, `multiplier`, `permitData`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:390](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L390)

Create a lock with permit.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `bigint` | The amount to lock. |
| `multiplier` | `bigint` | The multiplier for the lock. |
| `permitData` | [`PermitData`](../common/lib/types.md#permitdata) | The permit data. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### decimals()

> **decimals**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:79](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L79)

Get the decimals of the token.

###### Returns

`Promise`\<`number`\>

The decimals.

##### delegate()

> **delegate**(`delegatee`, `isPreapproved`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:258](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L258)

Delegate votes to another address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `delegatee` | `` `0x${string}` `` | The delegatee address. |
| `isPreapproved` | `boolean` | Whether the PUFFER token is preapproved or should use a permit signature. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### delegateBySig()

> **delegateBySig**(`delegatee`, `nonce`, `expiry`, `v`, `r`, `s`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:220](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L220)

Delegate by signature.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `delegatee` | `` `0x${string}` `` | The delegatee address. |
| `nonce` | `bigint` | The nonce. |
| `expiry` | `bigint` | The expiry time. |
| `v` | `number` | The v component of the signature. |
| `r` | `` `0x${string}` `` | The r component of the signature. |
| `s` | `` `0x${string}` `` | The s component of the signature. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### delegatePreapproved()

> **delegatePreapproved**(`delegatee`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:243](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L243)

Delegate votes to another address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `delegatee` | `` `0x${string}` `` | The delegatee address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### delegates()

> **delegates**(`account`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L89)

Get the delegates for an account.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account to get delegates for. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The delegate address.

##### getClock()

> **getClock**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:438](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L438)

Get the current clock value.

###### Returns

`Promise`\<`number`\>

The clock value.

##### getClockMode()

> **getClockMode**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:295](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L295)

Get the clock mode.

###### Returns

`Promise`\<`string`\>

The clock mode.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:53](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L53)

Get the contract.

###### Returns

`object`

The viem contract.

##### getPastTotalSupply()

> **getPastTotalSupply**(`timepoint`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:175](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L175)

Get the past total supply at a specific timepoint.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timepoint` | `bigint` | The timepoint to get the total supply for. |

###### Returns

`Promise`\<`bigint`\>

The past total supply.

##### getPastVotes()

> **getPastVotes**(`account`, `timepoint`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:344](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L344)

Get the past votes for an account at a specific timepoint.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account to get past votes for. |
| `timepoint` | `bigint` | The timepoint to get votes for. |

###### Returns

`Promise`\<`bigint`\>

The past votes.

##### isPaused()

> **isPaused**(): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:151](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L151)

Check if the contract is paused.

###### Returns

`Promise`\<`boolean`\>

True if paused, false otherwise.

##### lock()

> **lock**(`value`, `multiplier`, `isPreapproved`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:412](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L412)

Create a lock with permit.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `bigint` | The amount to lock. |
| `multiplier` | `bigint` | The multiplier for the lock. |
| `isPreapproved` | `boolean` | Whether the PUFFER token is preapproved. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### lockInfos()

> **lockInfos**(`user`): `Promise`\<\{ `pufferAmount`: `bigint`; `unlockTime`: `bigint`; \}\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:161](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L161)

Get the lock information for a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | The user address. |

###### Returns

`Promise`\<\{ `pufferAmount`: `bigint`; `unlockTime`: `bigint`; \}\>

The lock information.

##### name()

> **name**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:364](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L364)

Get the name of the token.

###### Returns

`Promise`\<`string`\>

The name.

##### nonces()

> **nonces**(`owner`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:195](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L195)

Get the nonce for an owner.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner address. |

###### Returns

`Promise`\<`bigint`\>

The nonce.

##### numCheckpoints()

> **numCheckpoints**(`account`): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:305](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L305)

Get the number of checkpoints for an account.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account to get checkpoints for. |

###### Returns

`Promise`\<`number`\>

The number of checkpoints.

##### owner()

> **owner**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L98)

Get the owner of the contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The owner address.

##### PUFFER()

> **PUFFER**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L70)

Get the PUFFER token address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The PUFFER token address.

##### reLock()

> **reLock**(`amount`, `multiplier`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:330](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L330)

Re-lock with the specified amount and multiplier.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to re-lock. |
| `multiplier` | `bigint` | The multiplier for the re-lock. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:142](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L142)

Get the symbol of the token.

###### Returns

`Promise`\<`string`\>

The symbol.

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:133](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L133)

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

The total supply.

##### transfer()

> **transfer**(`to`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:283](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L283)

Transfer tokens to another address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `to` | `` `0x${string}` `` | The address to transfer to. |
| `value` | `bigint` | The amount to transfer. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### transferFrom()

> **transferFrom**(`from`, `to`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:121](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L121)

Transfer tokens from one address to another.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `from` | `` `0x${string}` `` | The address to transfer from. |
| `to` | `` `0x${string}` `` | The address to transfer to. |
| `value` | `bigint` | The amount to transfer. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### votes()

> **votes**(`account`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:205](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L205)

Get the votes for an account.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account to get votes for. |

###### Returns

`Promise`\<`bigint`\>

The votes.

##### withdraw()

> **withdraw**(`recipient`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/vl-puffer-handler.ts:448](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/contracts/handlers/vl-puffer-handler.ts#L448)

Withdraw tokens to a recipient.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recipient` | `` `0x${string}` `` | The recipient address. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.
