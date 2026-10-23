# contracts/handlers/l1-reward-manager-handler

## Enumerations

### IntervalStatus

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L17)

Status of a rewards interval in the `L1RewardManager` contract.

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="active"></a> `Active` | `1` | [contracts/handlers/l1-reward-manager-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L19) |
| <a id="frozen"></a> `Frozen` | `2` | [contracts/handlers/l1-reward-manager-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L20) |
| <a id="none"></a> `None` | `0` | [contracts/handlers/l1-reward-manager-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L18) |
| <a id="reverted"></a> `Reverted` | `3` | [contracts/handlers/l1-reward-manager-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L21) |

## Classes

### L1RewardManagerHandler

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:27](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L27)

Handler for the `L1RewardManager` contract.

#### Constructors

##### Constructor

> **new L1RewardManagerHandler**(`chain`, `walletClient`, `publicClient`): [`L1RewardManagerHandler`](#l1rewardmanagerhandler)

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:40](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L40)

Create the handler for the `L1RewardManager` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`L1RewardManagerHandler`](#l1rewardmanagerhandler)

#### Methods

##### authority()

> **authority**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L71)

Get the authority address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The authority address.

##### claimRewards()

> **claimRewards**(`account`, `claimOrders`): `object`

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:180](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L180)

Claims the rewards for a specific epoch range based on the
`ClaimOrder`. The pufETH is always sent to the account of the
claim order. Access to this function is controlled by the
contract's authority.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account using which to claim the rewards. |
| `claimOrders` | [`ClaimOrder`](l2-reward-manager-handler.md#claimorder)[] | One or more claim orders. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to make the
transaction.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<`` `0x${string}` ``\>

###### Returns

`Promise`\<`` `0x${string}` ``\>

###### Throws

If `claimOrders` is empty.

##### getClaimingDelay()

> **getClaimingDelay**(): `Promise`\<`bigint`\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:80](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L80)

Get the claiming delay used for new intervals.

###### Returns

`Promise`\<`bigint`\>

The claiming delay.

##### getContract()

> **getContract**(): `object`

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:54](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L54)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getCurrentIntervalEndEpoch()

> **getCurrentIntervalEndEpoch**(): `Promise`\<`bigint`\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L89)

Get the end epoch of the interval currently being processed.

###### Returns

`Promise`\<`bigint`\>

The current interval end epoch.

##### getInterval()

> **getInterval**(`intervalId`): `Promise`\<\{ `claimableAt`: `number`; `claimedPufETHAmount`: `bigint`; `endEpoch`: `bigint`; `ethAmount`: `bigint`; `ethToPufETHRate`: `bigint`; `pufETHAmount`: `bigint`; `rewardsRoot`: `` `0x${string}` ``; `startEpoch`: `bigint`; `status`: `number`; \}\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:111](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L111)

Get the record of the given interval.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `intervalId` | `` `0x${string}` `` | The interval ID for a given start and end epoch. See `getIntervalId`. |

###### Returns

`Promise`\<\{ `claimableAt`: `number`; `claimedPufETHAmount`: `bigint`; `endEpoch`: `bigint`; `ethAmount`: `bigint`; `ethToPufETHRate`: `bigint`; `pufETHAmount`: `bigint`; `rewardsRoot`: `` `0x${string}` ``; `startEpoch`: `bigint`; `status`: `number`; \}\>

The interval record with its epochs, the time it becomes
claimable, the minted and claimed amounts, the status (see
`IntervalStatus`), the exchange rate and the rewards root.

##### getIntervalId()

> **getIntervalId**(`startEpoch`, `endEpoch`): `Promise`\<`` `0x${string}` ``\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:122](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L122)

Returns the interval ID for a given start and end epoch.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `startEpoch` | `bigint` | Start epoch of the interval. |
| `endEpoch` | `bigint` | End epoch of the interval. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

Interval ID for the given start and end epoch.

##### getLastIntervalEndEpoch()

> **getLastIntervalEndEpoch**(): `Promise`\<`bigint`\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L98)

Get the end epoch of the last successfully processed interval.

###### Returns

`Promise`\<`bigint`\>

The last interval end epoch.

##### getNewestIntervalId()

> **getNewestIntervalId**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:131](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L131)

Get the ID of the newest minted interval.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The newest interval ID.

##### isClaimed()

> **isClaimed**(`account`, `intervalId`): `Promise`\<`boolean`\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:143](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L143)

Check if the reward has been claimed for an account and a specific
interval.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The address of the account to check. |
| `intervalId` | `` `0x${string}` `` | The claiming interval ID. See `getIntervalId`. |

###### Returns

`Promise`\<`boolean`\>

Whether the reward has been claimed.

##### isClaimingLocked()

> **isClaimingLocked**(`intervalId`): `Promise`\<`boolean`\>

Defined in: [contracts/handlers/l1-reward-manager-handler.ts:154](https://github.com/PufferFinance/puffer-sdk/blob/8359ed70e558c33cbc9451335df83b48ddf85652/lib/contracts/handlers/l1-reward-manager-handler.ts#L154)

Check whether the claiming is locked for the given interval.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `intervalId` | `` `0x${string}` `` | The interval to check the claiming lock for. See `getIntervalId`. |

###### Returns

`Promise`\<`boolean`\>

Whether the claiming is locked for the given interval.
