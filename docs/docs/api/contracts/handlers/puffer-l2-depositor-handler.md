# contracts/handlers/puffer-l2-depositor-handler

## Classes

### PufferL2DepositorHandler

Handler for the `PufferL2Depositor` contract exposing methods to
interact with the contract.

#### Constructors

##### new PufferL2DepositorHandler()

> **new PufferL2DepositorHandler**(`chain`, `walletClient`, `publicClient`): [`PufferL2DepositorHandler`](puffer-l2-depositor-handler.md#pufferl2depositorhandler)

Create the handler for the `PufferL2Depositor` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufferL2DepositorHandler`](puffer-l2-depositor-handler.md#pufferl2depositorhandler)

###### Source

[lib/contracts/handlers/puffer-l2-depositor-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/f115cf3efeddd486916ab654a3cda79a22042ad4/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L42)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `erc20PermitHandler` | `private` | [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler) | - |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### deposit()

> **deposit**(`depositParams`): `Promise`\<`object`\>

Deposit the given token in exchange for the wrapped PufToken. This
doesn't make the transaction but returns two methods namely
`transact` and `estimate`.

Note that not all token contracts support permit signatures (e.g.
USDC). If a token's contract doesn't support permit signatures, use
`Token.approve()` and be sure to set the option `isPreapproved` to
`true`.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `depositParams` | [`L2DepositParams`](puffer-l2-depositor-handler.md#l2depositparams) |

###### Returns

`Promise`\<`object`\>

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

###### Source

[lib/contracts/handlers/puffer-l2-depositor-handler.ts:97](https://github.com/PufferFinance/puffer-sdk/blob/f115cf3efeddd486916ab654a3cda79a22042ad4/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L97)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puffer-l2-depositor-handler.ts:61](https://github.com/PufferFinance/puffer-sdk/blob/f115cf3efeddd486916ab654a3cda79a22042ad4/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L61)

## Type Aliases

### L2DepositParams

> **L2DepositParams**: `object`

#### Type declaration

##### account

> **account**: `Address`

##### isPreapproved?

> `optional` **isPreapproved**: `boolean`

##### lockPeriod?

> `optional` **lockPeriod**: `bigint`

##### referralCode?

> `optional` **referralCode**: `bigint`

##### token

> **token**: [`Token`](../tokens.md#token)

##### value

> **value**: `bigint`

#### Source

[lib/contracts/handlers/puffer-l2-depositor-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/f115cf3efeddd486916ab654a3cda79a22042ad4/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L15)
