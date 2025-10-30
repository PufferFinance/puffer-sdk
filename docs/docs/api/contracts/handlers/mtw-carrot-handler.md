# contracts/handlers/mtw-carrot-handler

## Classes

### MtwCarrotHandler

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L15)

Handler for the `mtwCARROT` token contract.

#### Constructors

##### Constructor

> **new MtwCarrotHandler**(`chain`, `walletClient`, `publicClient`): [`MtwCarrotHandler`](#mtwcarrothandler)

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L28)

Create the handler for the `mtwCARROT` token contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`MtwCarrotHandler`](#mtwcarrothandler)

#### Methods

##### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L71)

Retrieve the allowance a spender has from an owner.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The address of the token owner. |
| `spender` | `` `0x${string}` `` | The address of the spender. |

###### Returns

`Promise`\<`bigint`\>

The amount the spender is allowed to use on behalf of the owner.

##### approve()

> **approve**(`ownerAddress`, `spenderAddress`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:171](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L171)

Approve a spender to use a specific amount of the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `spenderAddress` | `` `0x${string}` `` | Address of the spender. |
| `amount` | `bigint` | Value to approve for the spender. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### balanceOf()

> **balanceOf**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L60)

Retrieve the balance of a given address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to query the balance for. |

###### Returns

`Promise`\<`bigint`\>

The balance of the specified address.

##### claim()

> **claim**(`account`, `user`, `maxClaimIndex?`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:192](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L192)

Claim tokens for a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `user` | `` `0x${string}` `` | The user's address. |
| `maxClaimIndex?` | `bigint` | The maximum index to check for claimable amount (optional). |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### claimable()

> **claimable**(`user`, `maxClaimIndex?`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:84](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L84)

Retrieve the claimable amount for a user, optionally at a specific index.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | The user's address. |
| `maxClaimIndex?` | `bigint` | - |

###### Returns

`Promise`\<`bigint`\>

The claimable amount for the user.

##### cliffDuration()

> **cliffDuration**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:97](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L97)

Retrieve the cliff duration of the vesting schedule.

###### Returns

`Promise`\<`number`\>

The cliff duration in seconds.

##### decreaseAllowance()

> **decreaseAllowance**(`ownerAddress`, `spenderAddress`, `subtractedValue`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:214](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L214)

Decrease the allowance for a spender.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `spenderAddress` | `` `0x${string}` `` | Address of the spender. |
| `subtractedValue` | `bigint` | The amount by which the allowance is to be decreased. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L42)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getUserVestings()

> **getUserVestings**(`user`): `Promise`\<\{ `allVestings`: readonly `object`[]; `nextClaimIndex`: `bigint`; \}\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:107](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L107)

Retrieve all vesting schedules associated with a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | The address of the user. |

###### Returns

`Promise`\<\{ `allVestings`: readonly `object`[]; `nextClaimIndex`: `bigint`; \}\>

An array of vesting schedules.

##### increaseAllowance()

> **increaseAllowance**(`ownerAddress`, `spenderAddress`, `addedValue`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:236](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L236)

Increase the allowance for a spender.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `spenderAddress` | `` `0x${string}` `` | Address of the spender. |
| `addedValue` | `bigint` | The amount by which the allowance is to be increased. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### isTokenWrapper()

> **isTokenWrapper**(): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:122](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L122)

Check if the contract is a token wrapper.

###### Returns

`Promise`\<`boolean`\>

True if the contract is a token wrapper, false otherwise.

##### recoverERC20()

> **recoverERC20**(`account`, `tokenAddress`, `to`, `amountToRecover`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:259](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L259)

Recover ERC20 tokens sent to this contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `tokenAddress` | `` `0x${string}` `` | The address of the token to recover. |
| `to` | `` `0x${string}` `` | The address to which the tokens should be sent. |
| `amountToRecover` | `bigint` | The amount of tokens to recover. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### symbol()

> **symbol**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:131](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L131)

Retrieve the symbol of the token.

###### Returns

`Promise`\<`string`\>

The token symbol.

##### token()

> **token**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:140](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L140)

Retrieve the token address this contract wraps or represents.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The address of the token.

##### transfer()

> **transfer**(`ownerAddress`, `to`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:282](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L282)

Transfer tokens to another address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ownerAddress` | `` `0x${string}` `` | Address of the caller of the transaction. |
| `to` | `` `0x${string}` `` | The address to transfer tokens to. |
| `amount` | `bigint` | The amount of tokens to transfer. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### underlying()

> **underlying**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:149](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L149)

Retrieve the underlying asset for the token.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The address of the underlying asset.

##### vestingData()

> **vestingData**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/mtw-carrot-handler.ts:159](https://github.com/PufferFinance/puffer-sdk/blob/223ebcacaaa7a75a3bf8ba08116f6393411fc0ab/lib/contracts/handlers/mtw-carrot-handler.ts#L159)

Retrieve vesting data for a given address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to query vesting data for. |

###### Returns

`Promise`\<`bigint`\>

Next claim index.
