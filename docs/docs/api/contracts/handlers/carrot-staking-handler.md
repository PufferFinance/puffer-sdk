# contracts/handlers/carrot-staking-handler

## Classes

### CarrotStakingHandler

Handler for the `CarrotStaker` contract.

#### Constructors

##### new CarrotStakingHandler()

> **new CarrotStakingHandler**(`chain`, `walletClient`, `publicClient`): [`CarrotStakingHandler`](carrot-staking-handler.md#carrotstakinghandler)

Create the handler for the `CarrotStaker` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`CarrotStakingHandler`](carrot-staking-handler.md#carrotstakinghandler)

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L28)

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

Get the allowance for the spender to spend the owner's tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner of the tokens. |
| `spender` | \`0x$\{string\}\` | The spender of the tokens. |

###### Returns

`Promise`\<`bigint`\>

The allowance of the owner for the spender.

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:61](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L61)

##### balanceOf()

> **balanceOf**(`address`): `Promise`\<`bigint`\>

Get the balance of the address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance of the address.

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L71)

##### decimals()

> **decimals**(): `Promise`\<`number`\>

Get the number of decimals of the token.

###### Returns

`Promise`\<`number`\>

The number of decimals of the token.

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:80](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L80)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L42)

##### isUnstakingAllowed()

> **isUnstakingAllowed**(): `Promise`\<`boolean`\>

Get whether unstaking is allowed.

###### Returns

`Promise`\<`boolean`\>

Whether unstaking is allowed.

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:89](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L89)

##### stake()

> **stake**(`account`, `amount`): `Promise`\<\`0x$\{string\}\`\>

Stake CARROT tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account to stake CARROT tokens from. |
| `amount` | `bigint` | The amount of CARROT tokens to stake. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction hash.

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L109)

##### totalSupply()

> **totalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the token.

###### Returns

`Promise`\<`bigint`\>

The total supply of the token.

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L98)

##### unstake()

> **unstake**(`account`, `amount`, `recipient`): `Promise`\<\`0x$\{string\}\`\>

Unstake CARROT tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account to unstake CARROT tokens from. |
| `amount` | `bigint` | The amount of CARROT tokens to unstake. |
| `recipient` | \`0x$\{string\}\` | The recipient of the unstaked tokens. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction hash.

###### Source

[lib/contracts/handlers/carrot-staking-handler.ts:124](https://github.com/PufferFinance/puffer-sdk/blob/0b19d29f8d30f18b7e65bfafa37030deaee6de9d/lib/contracts/handlers/carrot-staking-handler.ts#L124)
