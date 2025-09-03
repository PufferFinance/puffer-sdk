# contracts/handlers/carrot-vesting-handler

## Classes

### CarrotVestingHandler

Handler for the `CarrotVesting` contract exposing methods to interact
with the contract.

#### Constructors

##### new CarrotVestingHandler()

> **new CarrotVestingHandler**(`chain`, `walletClient`, `publicClient`): [`CarrotVestingHandler`](carrot-vesting-handler.md#carrotvestinghandler)

Create the handler for the `CarrotVesting` contract exposing methods to
interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`CarrotVestingHandler`](carrot-vesting-handler.md#carrotvestinghandler)

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:35](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L35)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `erc20PermitHandler` | `private` | [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler) | - |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### calculateClaimableAmount()

> **calculateClaimableAmount**(`user`): `Promise`\<`bigint`\>

Calculate the claimable amount for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | The user address. |

###### Returns

`Promise`\<`bigint`\>

The claimable amount.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:80](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L80)

##### claim()

> **claim**(): `Promise`\<\`0x$\{string\}\`\>

Claim vested tokens.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L98)

##### duration()

> **duration**(): `Promise`\<`number`\>

Get the duration of the vesting period.

###### Returns

`Promise`\<`number`\>

The duration of the vesting period.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:242](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L242)

##### exchangeRate()

> **exchangeRate**(): `Promise`\<`bigint`\>

Get the exchange rate.

###### Returns

`Promise`\<`bigint`\>

The exchange rate.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L89)

##### getCarrotAddress()

> **getCarrotAddress**(): `Promise`\<\`0x$\{string\}\`\>

Get the CARROT token address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The CARROT token address.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L110)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:53](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L53)

##### getPufferAddress()

> **getPufferAddress**(): `Promise`\<\`0x$\{string\}\`\>

Get the PUFFER token address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The PUFFER token address.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:119](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L119)

##### maxCarrotAmount()

> **maxCarrotAmount**(): `Promise`\<`bigint`\>

Get the maximum carrot amount.

###### Returns

`Promise`\<`bigint`\>

The maximum carrot amount.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:146](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L146)

##### owner()

> **owner**(): `Promise`\<\`0x$\{string\}\`\>

Get the owner of the contract.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The owner address.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L70)

##### startTimestamp()

> **startTimestamp**(): `Promise`\<`number`\>

Get the start timestamp.

###### Returns

`Promise`\<`number`\>

The start timestamp.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:177](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L177)

##### startVesting()

> **startVesting**(`amount`, `isPreapproved`): `Promise`\<\`0x$\{string\}\`\>

Start vesting.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to vest. |
| `isPreapproved` | `boolean` | Whether the CARROT token is preapproved or should use permit. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:215](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L215)

##### startVestingPreapproved()

> **startVestingPreapproved**(`amount`): `Promise`\<\`0x$\{string\}\`\>

Start vesting for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to vest. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:187](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L187)

##### startVestingWithPermit()

> **startVestingWithPermit**(`permitData`): `Promise`\<\`0x$\{string\}\`\>

Start vesting with permit.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `permitData` | [`PermitData`](../common/lib/types.md#permitdata) | The permit data including deadline, amount, v, r, and s values. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:200](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L200)

##### steps()

> **steps**(): `Promise`\<`number`\>

Get the number of vesting steps.

###### Returns

`Promise`\<`number`\>

The number of vesting steps.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:137](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L137)

##### totalDepositedAmount()

> **totalDepositedAmount**(): `Promise`\<`bigint`\>

Get the total deposited amount.

###### Returns

`Promise`\<`bigint`\>

The total deposited amount.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:233](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L233)

##### totalPufferRewards()

> **totalPufferRewards**(): `Promise`\<`bigint`\>

Get the total puffer rewards.

###### Returns

`Promise`\<`bigint`\>

The total puffer rewards.

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:128](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L128)

##### vestings()

> **vestings**(`user`): `Promise`\<`object`\>

Get vesting information for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | The user address. |

###### Returns

`Promise`\<`object`\>

The vesting information including deposited amount, claimed amount, last claimed timestamp, and deposited timestamp.

###### claimedAmount

> **claimedAmount**: `bigint`

###### depositedAmount

> **depositedAmount**: `bigint`

###### depositedTimestamp

> **depositedTimestamp**: `number`

###### lastClaimedTimestamp

> **lastClaimedTimestamp**: `number`

###### Source

[lib/contracts/handlers/carrot-vesting-handler.ts:156](https://github.com/PufferFinance/puffer-sdk/blob/c064685e03985a72986243aa59553d521eb404e7/lib/contracts/handlers/carrot-vesting-handler.ts#L156)
