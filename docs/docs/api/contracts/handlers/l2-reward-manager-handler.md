# contracts/handlers/l2-reward-manager-handler

## Classes

### L2RewardManagerHandler

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L24)

Handler for the `L2RewardManager` contract.

#### Constructors

##### Constructor

> **new L2RewardManagerHandler**(`chain`, `walletClient`, `publicClient`): [`L2RewardManagerHandler`](#l2rewardmanagerhandler)

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:37](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L37)

Create the handler for the `L2RewardManager` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`L2RewardManagerHandler`](#l2rewardmanagerhandler)

#### Methods

##### authority()

> **authority**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:68](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L68)

Get the authority address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The authority address.

##### claimRewards()

> **claimRewards**(`account`, `claimOrders`): `object`

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:156](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L156)

Claims the rewards for a specific epoch range based on the
`ClaimOrder`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account using which to claim the rewards. |
| `claimOrders` | [`ClaimOrder`](#claimorder)[] | One or more claim orders. |

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

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:77](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L77)

Get the claiming delay.

###### Returns

`Promise`\<`bigint`\>

The claiming delay.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L51)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getEpochRecord()

> **getEpochRecord**(`intervalId`): `Promise`\<\{ `endEpoch`: `bigint`; `ethAmount`: `bigint`; `ethToPufETHRate`: `bigint`; `pufETHAmount`: `bigint`; `rewardRoot`: `` `0x${string}` ``; `startEpoch`: `bigint`; `timeBridged`: `number`; \}\>

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:88](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L88)

Get the epoch record for a specific period.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `intervalId` | `` `0x${string}` `` | The interval ID for a given start and end epoch. See `getInternvalId`. |

###### Returns

`Promise`\<\{ `endEpoch`: `bigint`; `ethAmount`: `bigint`; `ethToPufETHRate`: `bigint`; `pufETHAmount`: `bigint`; `rewardRoot`: `` `0x${string}` ``; `startEpoch`: `bigint`; `timeBridged`: `number`; \}\>

The epoch record of exchange rate and reward root.

##### getIntervalId()

> **getIntervalId**(`startEpoch`, `endEpoch`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L99)

Returns the interval ID for a given start and end epoch.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `startEpoch` | `bigint` | Start epoch of the interval. |
| `endEpoch` | `bigint` | End epoch of the interval. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

Interval ID for the given start and end epoch.

##### getRewardsClaimer()

> **getRewardsClaimer**(`account`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L109)

Get the rewards claimer for a specific `account`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | Account for which to get the rewards claimer. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

Rewards claimer address.

##### isClaimed()

> **isClaimed**(`account`, `intervalId`): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:121](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L121)

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

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:132](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L132)

Check whether the claiming is locked for the given interval.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `intervalId` | `` `0x${string}` `` | The interval to check the claiming lock for. See `getIntervalId`. |

###### Returns

`Promise`\<`boolean`\>

Whether the claiming is locked for the given interval.

## Type Aliases

### ClaimOrder

> **ClaimOrder** = `object`

Defined in: [lib/contracts/handlers/l2-reward-manager-handler.ts:13](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L13)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="account"></a> `account` | `Address` | [lib/contracts/handlers/l2-reward-manager-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L14) |
| <a id="amount"></a> `amount` | `bigint` | [lib/contracts/handlers/l2-reward-manager-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L15) |
| <a id="intervalid"></a> `intervalId` | `Address` | [lib/contracts/handlers/l2-reward-manager-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L16) |
| <a id="isl1contract"></a> `isL1Contract` | `boolean` | [lib/contracts/handlers/l2-reward-manager-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L17) |
| <a id="merkleproof"></a> `merkleProof` | `Address`[] | [lib/contracts/handlers/l2-reward-manager-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l2-reward-manager-handler.ts#L18) |
