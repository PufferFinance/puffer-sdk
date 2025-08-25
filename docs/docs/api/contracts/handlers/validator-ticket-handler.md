# contracts/handlers/validator-ticket-handler

## Classes

### ValidatorTicketHandler

Handler for the `ValidatorTicket` contract exposing methods to interact
with the contract.

#### Constructors

##### new ValidatorTicketHandler()

> **new ValidatorTicketHandler**(`chain`, `walletClient`, `publicClient`): [`ValidatorTicketHandler`](validator-ticket-handler.md#validatortickethandler)

Create the handler for the `ValidatorTicket` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`ValidatorTicketHandler`](validator-ticket-handler.md#validatortickethandler)

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L31)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### approve()

> **approve**(`spender`, `amount`): `Promise`\<\`0x$\{string\}\`\>

Approve a spender to spend the validator ticket.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `spender` | \`0x$\{string\}\` | The spender of the validator ticket. |
| `amount` | `bigint` | The amount to approve. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:120](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L120)

##### burn()

> **burn**(`amount`): `Promise`\<\`0x$\{string\}\`\>

Burn validator tickets.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount to burn. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:163](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L163)

##### getAllowance()

> **getAllowance**(`owner`, `spender`): `Promise`\<`bigint`\>

Get the allowance of the owner for the spender.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner of the allowance. |
| `spender` | \`0x$\{string\}\` | The spender of the allowance. |

###### Returns

`Promise`\<`bigint`\>

The allowance.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L134)

##### getBalance()

> **getBalance**(`address`): `Promise`\<`bigint`\>

Get the balance for the address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to get the balance of. |

###### Returns

`Promise`\<`bigint`\>

The balance.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:144](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L144)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:44](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L44)

##### getDecimals()

> **getDecimals**(): `Promise`\<`number`\>

Get the decimals of the token.

###### Returns

`Promise`\<`number`\>

The token decimals.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:298](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L298)

##### getDomainSeparator()

> **getDomainSeparator**(): `Promise`\<\`0x$\{string\}\`\>

Get the domain separator for EIP-712 signatures.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The domain separator.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:222](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L222)

##### getEip712Domain()

> **getEip712Domain**(): `Promise`\<readonly [\`0x$\{string\}\`, `string`, `string`, `bigint`, \`0x$\{string\}\`, \`0x$\{string\}\`, readonly `bigint`[]]\>

Get the EIP-712 domain information.

###### Returns

`Promise`\<readonly [\`0x$\{string\}\`, `string`, `string`, `bigint`, \`0x$\{string\}\`, \`0x$\{string\}\`, readonly `bigint`[]]\>

The EIP-712 domain information.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:271](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L271)

##### getGuardiansFeeRate()

> **getGuardiansFeeRate**(): `Promise`\<`bigint`\>

Get the guardians fee rate.

###### Returns

`Promise`\<`bigint`\>

The guardians fee rate.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:204](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L204)

##### getName()

> **getName**(): `Promise`\<`string`\>

Get the name of the token.

###### Returns

`Promise`\<`string`\>

The token name.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:280](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L280)

##### getNonce()

> **getNonce**(`owner`): `Promise`\<`bigint`\>

Get the nonce for an owner.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner address. |

###### Returns

`Promise`\<`bigint`\>

The nonce.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:232](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L232)

##### getProtocolFeeRate()

> **getProtocolFeeRate**(): `Promise`\<`bigint`\>

Get the protocol fee rate.

###### Returns

`Promise`\<`bigint`\>

The protocol fee rate.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:213](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L213)

##### getSymbol()

> **getSymbol**(): `Promise`\<`string`\>

Get the symbol of the token.

###### Returns

`Promise`\<`string`\>

The token symbol.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:289](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L289)

##### getTotalSupply()

> **getTotalSupply**(): `Promise`\<`bigint`\>

Get the total supply of the validator ticket.

###### Returns

`Promise`\<`bigint`\>

The total supply.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:153](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L153)

##### permit()

> **permit**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`): `Promise`\<\`0x$\{string\}\`\>

Permit function for EIP-2612 approval.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `owner` | \`0x$\{string\}\` | The owner address. |
| `spender` | \`0x$\{string\}\` | The spender address. |
| `value` | `bigint` | The amount to approve. |
| `deadline` | `bigint` | The deadline for the permit. |
| `v` | `number` | The v component of the signature. |
| `r` | \`0x$\{string\}\` | The r component of the signature. |
| `s` | \`0x$\{string\}\` | The s component of the signature. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:248](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L248)

##### purchaseValidatorTicket()

> **purchaseValidatorTicket**(`recipient`, `payableAmount`): `Promise`\<\`0x$\{string\}\`\>

Purchase validator ticket with ETH.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `recipient` | \`0x$\{string\}\` | The recipient of the validator ticket. |
| `payableAmount` | `bigint` | The amount of ETH to send with the transaction. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:63](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L63)

##### purchaseValidatorTicketWithPufETH()

> **purchaseValidatorTicketWithPufETH**(`recipient`, `vtAmount`): `Promise`\<\`0x$\{string\}\`\>

Purchase validator ticket with pufETH.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `recipient` | \`0x$\{string\}\` | The recipient of the validator ticket. |
| `vtAmount` | `bigint` | The amount of validator tickets to purchase. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:78](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L78)

##### purchaseValidatorTicketWithPufETHAndPermit()

> **purchaseValidatorTicketWithPufETHAndPermit**(`recipient`, `vtAmount`, `permitData`): `Promise`\<\`0x$\{string\}\`\>

Purchase validator ticket with pufETH and permit.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `recipient` | \`0x$\{string\}\` | The recipient of the validator ticket. |
| `vtAmount` | `bigint` | The amount of validator tickets to purchase. |
| `permitData` | [`PermitData`](../common/lib/types.md#permitdata) | The permit data for pufETH approval. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L99)

##### transfer()

> **transfer**(`to`, `amount`): `Promise`\<\`0x$\{string\}\`\>

Transfer validator tickets.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `to` | \`0x$\{string\}\` | The recipient address. |
| `amount` | `bigint` | The amount to transfer. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:177](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L177)

##### transferFrom()

> **transferFrom**(`from`, `to`, `amount`): `Promise`\<\`0x$\{string\}\`\>

Transfer validator tickets from another address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `from` | \`0x$\{string\}\` | The sender address. |
| `to` | \`0x$\{string\}\` | The recipient address. |
| `amount` | `bigint` | The amount to transfer. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction.

###### Source

[lib/contracts/handlers/validator-ticket-handler.ts:192](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/validator-ticket-handler.ts#L192)
