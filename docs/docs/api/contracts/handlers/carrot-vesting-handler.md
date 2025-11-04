# contracts/handlers/carrot-vesting-handler

## Classes

### CarrotVestingHandler

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L21)

Handler for the `CarrotVesting` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new CarrotVestingHandler**(`chain`, `walletClient`, `publicClient`): [`CarrotVestingHandler`](#carrotvestinghandler)

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:35](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L35)

Create the handler for the `CarrotVesting` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`CarrotVestingHandler`](#carrotvestinghandler)

#### Methods

##### calculateClaimableAmount()

> **calculateClaimableAmount**(`user`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:80](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L80)

Calculate the claimable amount for a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | The user address. |

###### Returns

`Promise`\<`bigint`\>

The claimable amount.

##### claim()

> **claim**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L98)

Claim vested tokens.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### exchangeRate()

> **exchangeRate**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L89)

Get the exchange rate.

###### Returns

`Promise`\<`bigint`\>

The exchange rate.

##### getCarrotAddress()

> **getCarrotAddress**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L110)

Get the CARROT token address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The CARROT token address.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:53](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L53)

Get the contract.

###### Returns

`object`

The viem contract.

##### getDuration()

> **getDuration**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:231](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L231)

Get the duration of the vesting period.

###### Returns

`Promise`\<`number`\>

The duration of the vesting period.

##### getNewDuration()

> **getNewDuration**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:241](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L241)

Get the new duration of the vesting period. This is a new function
added after contract upgrade.

###### Returns

`Promise`\<`number`\>

The new duration of the vesting period.

##### getNewSteps()

> **getNewSteps**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:251](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L251)

Get the upgrade timestamp. This is a new function added after
contract upgrade.

###### Returns

`Promise`\<`number`\>

The upgrade timestamp.

##### getPufferAddress()

> **getPufferAddress**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:119](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L119)

Get the PUFFER token address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The PUFFER token address.

##### getStartTimestamp()

> **getStartTimestamp**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:166](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L166)

Get the start timestamp.

###### Returns

`Promise`\<`number`\>

The start timestamp.

##### getSteps()

> **getSteps**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:137](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L137)

Get the number of vesting steps.

###### Returns

`Promise`\<`number`\>

The number of vesting steps.

##### getTotalDepositedAmount()

> **getTotalDepositedAmount**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:222](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L222)

Get the total deposited amount.

###### Returns

`Promise`\<`bigint`\>

The total deposited amount.

##### getUpgradeTimestamp()

> **getUpgradeTimestamp**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:261](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L261)

Get the upgrade timestamp. This is a new function added after
contract upgrade.

###### Returns

`Promise`\<`number`\>

The upgrade timestamp.

##### getVestings()

> **getVestings**(`user`): `Promise`\<readonly `object`[]\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:157](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L157)

Get vesting information for a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | The user address. |

###### Returns

`Promise`\<readonly `object`[]\>

The vesting information including deposited amount,
claimed amount, last claimed timestamp, and deposited timestamp.

##### maxCarrotAmount()

> **maxCarrotAmount**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:146](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L146)

Get the maximum carrot amount.

###### Returns

`Promise`\<`bigint`\>

The maximum carrot amount.

##### owner()

> **owner**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L70)

Get the owner of the contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The owner address.

##### startVesting()

> **startVesting**(`amount`, `isPreapproved`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:204](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L204)

Start vesting.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to vest. |
| `isPreapproved` | `boolean` | Whether the CARROT token is preapproved or should use permit. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### startVestingPreapproved()

> **startVestingPreapproved**(`amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:176](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L176)

Start vesting for a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to vest. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### startVestingWithPermit()

> **startVestingWithPermit**(`permitData`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:189](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L189)

Start vesting with permit.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `permitData` | [`PermitData`](../common/lib/types.md#permitdata) | The permit data including deadline, amount, v, r, and s values. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### totalPufferRewards()

> **totalPufferRewards**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/carrot-vesting-handler.ts:128](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/carrot-vesting-handler.ts#L128)

Get the total puffer rewards.

###### Returns

`Promise`\<`bigint`\>

The total puffer rewards.
