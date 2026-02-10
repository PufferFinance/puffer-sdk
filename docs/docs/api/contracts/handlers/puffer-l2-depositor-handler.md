# contracts/handlers/puffer-l2-depositor-handler

## Classes

### PufferL2DepositorHandler

Defined in: [lib/contracts/handlers/puffer-l2-depositor-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L28)

Handler for the `PufferL2Depositor` contract exposing methods to
interact with the contract.

#### Constructors

##### Constructor

> **new PufferL2DepositorHandler**(`chain`, `walletClient`, `publicClient`): [`PufferL2DepositorHandler`](#pufferl2depositorhandler)

Defined in: [lib/contracts/handlers/puffer-l2-depositor-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L42)

Create the handler for the `PufferL2Depositor` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`PufferL2DepositorHandler`](#pufferl2depositorhandler)

#### Methods

##### deposit()

> **deposit**(`depositParams`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/puffer-l2-depositor-handler.ts:97](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L97)

Deposit the given token in exchange for the wrapped PufToken. This
doesn't make the transaction but returns two methods namely
`transact` and `estimate`.

Note that not all token contracts support permit signatures (e.g.
USDC). If a token's contract doesn't support permit signatures, use
`Token.approve()` and be sure to set the option `isPreapproved` to
`true`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `depositParams` | [`L2DepositParams`](#l2depositparams) |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

`transact: () => Promise<Address>` - Used to make the
transaction.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/puffer-l2-depositor-handler.ts:61](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L61)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

## Type Aliases

### L2DepositParams

> **L2DepositParams** = `object`

Defined in: [lib/contracts/handlers/puffer-l2-depositor-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L15)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="account"></a> `account` | `Address` | [lib/contracts/handlers/puffer-l2-depositor-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L17) |
| <a id="ispreapproved"></a> `isPreapproved?` | `boolean` | [lib/contracts/handlers/puffer-l2-depositor-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L21) |
| <a id="lockperiod"></a> `lockPeriod?` | `bigint` | [lib/contracts/handlers/puffer-l2-depositor-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L20) |
| <a id="referralcode"></a> `referralCode?` | `bigint` | [lib/contracts/handlers/puffer-l2-depositor-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L19) |
| <a id="token"></a> `token` | [`Token`](../tokens.md#token) | [lib/contracts/handlers/puffer-l2-depositor-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L16) |
| <a id="value"></a> `value` | `bigint` | [lib/contracts/handlers/puffer-l2-depositor-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L18) |
