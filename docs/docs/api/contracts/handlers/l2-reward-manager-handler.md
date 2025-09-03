# contracts/handlers/l2-reward-manager-handler

## Classes

### L2RewardManagerHandler

Handler for the `L2RewardManager` contract.

#### Constructors

##### new L2RewardManagerHandler()

> **new L2RewardManagerHandler**(`chain`, `walletClient`, `publicClient`): [`L2RewardManagerHandler`](l2-reward-manager-handler.md#l2rewardmanagerhandler)

Create the handler for the `L2RewardManager` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`L2RewardManagerHandler`](l2-reward-manager-handler.md#l2rewardmanagerhandler)

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:37](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L37)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### authority()

> **authority**(): `Promise`\<\`0x$\{string\}\`\>

Get the authority address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The authority address.

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:68](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L68)

##### claimRewards()

> **claimRewards**(`account`, `claimOrders`): `object`

Claims the rewards for a specific epoch range based on the
`ClaimOrder`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account using which to claim the rewards. |
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

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Throws

If `claimOrders` is empty.

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:156](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L156)

##### getClaimingDelay()

> **getClaimingDelay**(): `Promise`\<`bigint`\>

Get the claiming delay.

###### Returns

`Promise`\<`bigint`\>

The claiming delay.

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:77](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L77)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L51)

##### getEpochRecord()

> **getEpochRecord**(`intervalId`): `Promise`\<`object`\>

Get the epoch record for a specific period.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `intervalId` | \`0x$\{string\}\` | The interval ID for a given start and end epoch. See `getInternvalId`. |

###### Returns

`Promise`\<`object`\>

The epoch record of exchange rate and reward root.

###### endEpoch

> **endEpoch**: `bigint`

###### ethAmount

> **ethAmount**: `bigint`

###### ethToPufETHRate

> **ethToPufETHRate**: `bigint`

###### pufETHAmount

> **pufETHAmount**: `bigint`

###### rewardRoot

> **rewardRoot**: \`0x$\{string\}\`

###### startEpoch

> **startEpoch**: `bigint`

###### timeBridged

> **timeBridged**: `number`

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:88](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L88)

##### getIntervalId()

> **getIntervalId**(`startEpoch`, `endEpoch`): `Promise`\<\`0x$\{string\}\`\>

Returns the interval ID for a given start and end epoch.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `startEpoch` | `bigint` | Start epoch of the interval. |
| `endEpoch` | `bigint` | End epoch of the interval. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

Interval ID for the given start and end epoch.

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L99)

##### getRewardsClaimer()

> **getRewardsClaimer**(`account`): `Promise`\<\`0x$\{string\}\`\>

Get the rewards claimer for a specific `account`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | Account for which to get the rewards claimer. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

Rewards claimer address.

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L109)

##### isClaimed()

> **isClaimed**(`account`, `intervalId`): `Promise`\<`boolean`\>

Check if the reward has been claimed for an account and a specific
interval.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The address of the account to check. |
| `intervalId` | \`0x$\{string\}\` | The claiming interval ID. See `getIntervalId`. |

###### Returns

`Promise`\<`boolean`\>

Whether the reward has been claimed.

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:121](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L121)

##### isClaimingLocked()

> **isClaimingLocked**(`intervalId`): `Promise`\<`boolean`\>

Check whether the claiming is locked for the given interval.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `intervalId` | \`0x$\{string\}\` | The interval to check the claiming lock for. See `getIntervalId`. |

###### Returns

`Promise`\<`boolean`\>

Whether the claiming is locked for the given interval.

###### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:132](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L132)

## Type Aliases

### ClaimOrder

> **ClaimOrder**: `object`

#### Type declaration

##### account

> **account**: `Address`

##### amount

> **amount**: `bigint`

##### intervalId

> **intervalId**: `Address`

##### isL1Contract

> **isL1Contract**: `boolean`

##### merkleProof

> **merkleProof**: `Address`[]

#### Source

[lib/contracts/handlers/l2-reward-manager-handler.ts:13](https://github.com/PufferFinance/puffer-sdk/blob/aefe0b10082fca662f07e13dcc79dde5767cf806/lib/contracts/handlers/l2-reward-manager-handler.ts#L13)
