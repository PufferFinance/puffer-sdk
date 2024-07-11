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

[lib/contracts/handlers/puffer-l2-depositor-handler.ts:26](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L26)

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

> **deposit**(`token`, `walletAddress`, `value`, `referralCode`): `Promise`\<`object`\>

Deposit the given token in exchange for pufETH. This doesn't make
the transaction but returns two methods namely `transact` and
`estimate`.

Note that not all token contracts support permit signatures (e.g.
USDC). If a token's contract doesn't support permit signatures, use
`Token.approve()` and call `depositAfterApproval()` instead.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | [`NonPufToken`](../tokens.md#nonpuftoken) | Token to deposit. |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to take the token from. |
| `value` | `bigint` | Value in wei of the token to deposit. |
| `referralCode` | `bigint` | Referral code for the deposit. |

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

[lib/contracts/handlers/puffer-l2-depositor-handler.ts:123](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L123)

##### depositAfterApproval()

> **depositAfterApproval**(`token`, `walletAddress`, `value`): `object`

Deposit the given token which is pre-approved using
`token.approve()` in exchange for pufETH. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | [`NonPufToken`](../tokens.md#nonpuftoken) | Token to deposit. |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to take the token from. |
| `value` | `bigint` | Value in wei of the token to deposit. |

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

###### Source

[lib/contracts/handlers/puffer-l2-depositor-handler.ts:71](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L71)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/puffer-l2-depositor-handler.ts:45](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/handlers/puffer-l2-depositor-handler.ts#L45)
