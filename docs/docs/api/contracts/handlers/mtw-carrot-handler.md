# contracts/handlers/mtw-carrot-handler

## Classes

### MtwCarrotHandler

Handler for the `mtwCARROT` token contract.

#### Constructors

##### new MtwCarrotHandler()

> **new MtwCarrotHandler**(`chain`, `walletClient`, `publicClient`): [`MtwCarrotHandler`](mtw-carrot-handler.md#mtwcarrothandler)

Create the handler for the `mtwCARROT` token contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`MtwCarrotHandler`](mtw-carrot-handler.md#mtwcarrothandler)

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L28)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Retrieve the allowance a spender has from an owner.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The address of the token owner. |
| `spender` | \`0x$\{string\}\` | The address of the spender. |

###### Returns

`Promise`\<`bigint`\>

The amount the spender is allowed to use on behalf of the owner.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L71)

##### approve()

> **approve**(`ownerAddress`, `spenderAddress`, `amount`): `Promise`\<\`0x$\{string\}\`\>

Approve a spender to use a specific amount of the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender. |
| `amount` | `bigint` | Value to approve for the spender. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:171](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L171)

##### balanceOf()

> **balanceOf**(`address`): `Promise`\<`bigint`\>

Retrieve the balance of a given address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to query the balance for. |

###### Returns

`Promise`\<`bigint`\>

The balance of the specified address.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L60)

##### claim()

> **claim**(`account`, `user`, `maxClaimIndex`?): `Promise`\<\`0x$\{string\}\`\>

Claim tokens for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `user` | \`0x$\{string\}\` | The user's address. |
| `maxClaimIndex`? | `bigint` | The maximum index to check for claimable amount (optional). |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:192](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L192)

##### claimable()

> **claimable**(`user`, `maxClaimIndex`?): `Promise`\<`bigint`\>

Retrieve the claimable amount for a user, optionally at a specific index.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | The user's address. |
| `maxClaimIndex`? | `bigint` | - |

###### Returns

`Promise`\<`bigint`\>

The claimable amount for the user.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:84](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L84)

##### cliffDuration()

> **cliffDuration**(): `Promise`\<`number`\>

Retrieve the cliff duration of the vesting schedule.

###### Returns

`Promise`\<`number`\>

The cliff duration in seconds.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:97](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L97)

##### decreaseAllowance()

> **decreaseAllowance**(`ownerAddress`, `spenderAddress`, `subtractedValue`): `Promise`\<\`0x$\{string\}\`\>

Decrease the allowance for a spender.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender. |
| `subtractedValue` | `bigint` | The amount by which the allowance is to be decreased. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:214](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L214)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L42)

##### getUserVestings()

> **getUserVestings**(`user`): `Promise`\<`object`\>

Retrieve all vesting schedules associated with a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | The address of the user. |

###### Returns

`Promise`\<`object`\>

An array of vesting schedules.

###### allVestings

> **allVestings**: readonly `object`[]

###### nextClaimIndex

> **nextClaimIndex**: `bigint`

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:107](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L107)

##### increaseAllowance()

> **increaseAllowance**(`ownerAddress`, `spenderAddress`, `addedValue`): `Promise`\<\`0x$\{string\}\`\>

Increase the allowance for a spender.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender. |
| `addedValue` | `bigint` | The amount by which the allowance is to be increased. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:236](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L236)

##### isTokenWrapper()

> **isTokenWrapper**(): `Promise`\<`boolean`\>

Check if the contract is a token wrapper.

###### Returns

`Promise`\<`boolean`\>

True if the contract is a token wrapper, false otherwise.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:122](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L122)

##### recoverERC20()

> **recoverERC20**(`account`, `tokenAddress`, `to`, `amountToRecover`): `Promise`\<\`0x$\{string\}\`\>

Recover ERC20 tokens sent to this contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `tokenAddress` | \`0x$\{string\}\` | The address of the token to recover. |
| `to` | \`0x$\{string\}\` | The address to which the tokens should be sent. |
| `amountToRecover` | `bigint` | The amount of tokens to recover. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:259](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L259)

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Retrieve the symbol of the token.

###### Returns

`Promise`\<`string`\>

The token symbol.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:131](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L131)

##### token()

> **token**(): `Promise`\<\`0x$\{string\}\`\>

Retrieve the token address this contract wraps or represents.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The address of the token.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:140](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L140)

##### transfer()

> **transfer**(`ownerAddress`, `to`, `amount`): `Promise`\<\`0x$\{string\}\`\>

Transfer tokens to another address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `to` | \`0x$\{string\}\` | The address to transfer tokens to. |
| `amount` | `bigint` | The amount of tokens to transfer. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:282](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L282)

##### underlying()

> **underlying**(): `Promise`\<\`0x$\{string\}\`\>

Retrieve the underlying asset for the token.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The address of the underlying asset.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:149](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L149)

##### vestingData()

> **vestingData**(`address`): `Promise`\<`bigint`\>

Retrieve vesting data for a given address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to query vesting data for. |

###### Returns

`Promise`\<`bigint`\>

Next claim index.

###### Source

[lib/contracts/handlers/mtw-carrot-handler.ts:159](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/contracts/handlers/mtw-carrot-handler.ts#L159)
