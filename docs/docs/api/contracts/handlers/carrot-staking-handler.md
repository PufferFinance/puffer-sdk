# contracts/handlers/carrot-staking-handler

## Classes

### CarrotStakingHandler

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L15)

Handler for the `CarrotStaker` contract.

#### Constructors

##### Constructor

> **new CarrotStakingHandler**(`chain`, `walletClient`, `publicClient`): [`CarrotStakingHandler`](#carrotstakinghandler)

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L28)

Create the handler for the `CarrotStaker` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`CarrotStakingHandler`](#carrotstakinghandler)

#### Methods

##### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:61](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L61)

Get the allowance for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner of the tokens. |
| `spender` | `` `0x${string}` `` | The spender of the tokens. |

###### Returns

`Promise`\<`bigint`\>

The allowance of the owner for the spender.

##### balanceOf()

> **balanceOf**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L71)

Get the balance of the address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance of the address.

##### decimals()

> **decimals**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:80](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L80)

Get the number of decimals of the token.

###### Returns

`Promise`\<`number`\>

The number of decimals of the token.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L42)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### isUnstakingAllowed()

> **isUnstakingAllowed**(): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L89)

Get whether unstaking is allowed.

###### Returns

`Promise`\<`boolean`\>

Whether unstaking is allowed.

##### stake()

> **stake**(`account`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L109)

Stake CARROT tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account to stake CARROT tokens from. |
| `amount` | `bigint` | The amount of CARROT tokens to stake. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction hash.

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L98)

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

The total supply of the token.

##### unstake()

> **unstake**(`account`, `amount`, `recipient`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/carrot-staking-handler.ts:124](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/carrot-staking-handler.ts#L124)

Unstake CARROT tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account to unstake CARROT tokens from. |
| `amount` | `bigint` | The amount of CARROT tokens to unstake. |
| `recipient` | `` `0x${string}` `` | The recipient of the unstaked tokens. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction hash.
