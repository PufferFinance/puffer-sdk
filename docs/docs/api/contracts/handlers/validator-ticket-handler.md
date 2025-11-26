# contracts/handlers/validator-ticket-handler

## Classes

### ValidatorTicketHandler

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L18)

Handler for the `ValidatorTicket` contract exposing methods to interact
with the contract.

#### Constructors

##### Constructor

> **new ValidatorTicketHandler**(`chain`, `walletClient`, `publicClient`): [`ValidatorTicketHandler`](#validatortickethandler)

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L31)

Create the handler for the `ValidatorTicket` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`ValidatorTicketHandler`](#validatortickethandler)

#### Methods

##### approve()

> **approve**(`spender`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:120](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L120)

Approve a spender to spend the validator ticket.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spender` | `` `0x${string}` `` | The spender of the validator ticket. |
| `amount` | `bigint` | The amount to approve. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### burn()

> **burn**(`amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:163](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L163)

Burn validator tickets.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `bigint` | The amount to burn. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### getAllowance()

> **getAllowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L134)

Get the allowance of the owner for the spender.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner of the allowance. |
| `spender` | `` `0x${string}` `` | The spender of the allowance. |

###### Returns

`Promise`\<`bigint`\>

The allowance.

##### getBalance()

> **getBalance**(`address`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:144](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L144)

Get the balance for the address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:44](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L44)

Get the contract.

###### Returns

`object`

The viem contract.

##### getDecimals()

> **getDecimals**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:298](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L298)

Get the decimals of the token.

###### Returns

`Promise`\<`number`\>

The token decimals.

##### getDomainSeparator()

> **getDomainSeparator**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:222](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L222)

Get the domain separator for EIP-712 signatures.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The domain separator.

##### getEip712Domain()

> **getEip712Domain**(): `Promise`\<readonly \[`` `0x${string}` ``, `string`, `string`, `bigint`, `` `0x${string}` ``, `` `0x${string}` ``, readonly `bigint`[]\]\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:271](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L271)

Get the EIP-712 domain information.

###### Returns

`Promise`\<readonly \[`` `0x${string}` ``, `string`, `string`, `bigint`, `` `0x${string}` ``, `` `0x${string}` ``, readonly `bigint`[]\]\>

The EIP-712 domain information.

##### getGuardiansFeeRate()

> **getGuardiansFeeRate**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:204](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L204)

Get the guardians fee rate.

###### Returns

`Promise`\<`bigint`\>

The guardians fee rate.

##### getName()

> **getName**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:280](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L280)

Get the name of the token.

###### Returns

`Promise`\<`string`\>

The token name.

##### getNonce()

> **getNonce**(`owner`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:232](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L232)

Get the nonce for an owner.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner address. |

###### Returns

`Promise`\<`bigint`\>

The nonce.

##### getProtocolFeeRate()

> **getProtocolFeeRate**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:213](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L213)

Get the protocol fee rate.

###### Returns

`Promise`\<`bigint`\>

The protocol fee rate.

##### getSymbol()

> **getSymbol**(): `Promise`\<`string`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:289](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L289)

Get the symbol of the token.

###### Returns

`Promise`\<`string`\>

The token symbol.

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:153](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L153)

Get the total supply of the validator ticket.

###### Returns

`Promise`\<`bigint`\>

The total supply.

##### permit()

> **permit**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:248](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L248)

Permit function for EIP-2612 approval.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owner` | `` `0x${string}` `` | The owner address. |
| `spender` | `` `0x${string}` `` | The spender address. |
| `value` | `bigint` | The amount to approve. |
| `deadline` | `bigint` | The deadline for the permit. |
| `v` | `number` | The v component of the signature. |
| `r` | `` `0x${string}` `` | The r component of the signature. |
| `s` | `` `0x${string}` `` | The s component of the signature. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### purchaseValidatorTicket()

> **purchaseValidatorTicket**(`recipient`, `payableAmount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:63](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L63)

Purchase validator ticket with ETH.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recipient` | `` `0x${string}` `` | The recipient of the validator ticket. |
| `payableAmount` | `bigint` | The amount of ETH to send with the transaction. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### purchaseValidatorTicketWithPufETH()

> **purchaseValidatorTicketWithPufETH**(`recipient`, `vtAmount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:78](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L78)

Purchase validator ticket with pufETH.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recipient` | `` `0x${string}` `` | The recipient of the validator ticket. |
| `vtAmount` | `bigint` | The amount of validator tickets to purchase. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### purchaseValidatorTicketWithPufETHAndPermit()

> **purchaseValidatorTicketWithPufETHAndPermit**(`recipient`, `vtAmount`, `permitData`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L99)

Purchase validator ticket with pufETH and permit.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recipient` | `` `0x${string}` `` | The recipient of the validator ticket. |
| `vtAmount` | `bigint` | The amount of validator tickets to purchase. |
| `permitData` | [`PermitData`](../common/lib/types.md#permitdata) | The permit data for pufETH approval. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### transfer()

> **transfer**(`to`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:177](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L177)

Transfer validator tickets.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `to` | `` `0x${string}` `` | The recipient address. |
| `amount` | `bigint` | The amount to transfer. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.

##### transferFrom()

> **transferFrom**(`from`, `to`, `amount`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/validator-ticket-handler.ts:192](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/validator-ticket-handler.ts#L192)

Transfer validator tickets from another address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `from` | `` `0x${string}` `` | The sender address. |
| `to` | `` `0x${string}` `` | The recipient address. |
| `amount` | `bigint` | The amount to transfer. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The transaction.
