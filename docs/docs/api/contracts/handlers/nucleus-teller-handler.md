# contracts/handlers/nucleus-teller-handler

## Classes

### NucleusTellerHandler

Handler for the `Teller` contract from nucleus.

#### Constructors

##### new NucleusTellerHandler()

> **new NucleusTellerHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusTellerHandler`](nucleus-teller-handler.md#nucleustellerhandler)

Create the handler for processing tokens.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`NucleusTellerHandler`](nucleus-teller-handler.md#nucleustellerhandler)

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:41](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L41)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### accountant()

> **accountant**(): `Promise`\<\`0x$\{string\}\`\>

Get the address of the `Accountant` contract.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The address of the `Accountant` contract.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:72](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L72)

##### deposit()

> **deposit**(`walletAddress`, `token`, `amount`, `minimumMint`): `object`

Deposit the given token for staking.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Address of the caller of the transaction. |
| `token` | [`Token`](../tokens.md#token) | Token to deposit. |
| `amount` | `bigint` | Amount of the token to deposit. |
| `minimumMint` | `bigint` | Minimum amount of shares to mint. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to make the
transaction with the given value.

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

[lib/contracts/handlers/nucleus-teller-handler.ts:126](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L126)

##### depositWithPermit()

> **depositWithPermit**(`params`): `object`

Deposit an asset/token for staking with a permit.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`DepositWithPermitParams`](nucleus-teller-handler.md#depositwithpermitparams) | Permit parameters. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to make the
transaction with the given value.

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

[lib/contracts/handlers/nucleus-teller-handler.ts:168](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L168)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:55](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L55)

##### isPaused()

> **isPaused**(): `Promise`\<`boolean`\>

Get the paused state of the contract.

###### Returns

`Promise`\<`boolean`\>

The paused state of the contract.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L109)

##### shareLockPeriod()

> **shareLockPeriod**(): `Promise`\<`bigint`\>

Get the share lock period.

###### Returns

`Promise`\<`bigint`\>

The share lock period.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:90](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L90)

##### shareUnlockTime()

> **shareUnlockTime**(`walletAddress`): `Promise`\<`bigint`\>

Get the share unlock time for the given wallet address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Address of the wallet. |

###### Returns

`Promise`\<`bigint`\>

The share unlock time.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:100](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L100)

##### vault()

> **vault**(): `Promise`\<\`0x$\{string\}\`\>

Get the address of the `BoringVault` contract.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The address of the `BoringVault` contract.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:81](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L81)

## Type Aliases

### DepositWithPermitParams

> **DepositWithPermitParams**: `object`

#### Type declaration

##### account

> **account**: `Address`

##### deadline

> **deadline**: `bigint`

##### depositAmount

> **depositAmount**: `bigint`

##### depositAsset

> **depositAsset**: `Address`

##### minimumMint

> **minimumMint**: `bigint`

##### r

> **r**: `Address`

##### s

> **s**: `Address`

##### v

> **v**: `number`

#### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/cbf6163a8a17b3c450cff07d167e090f549dc689/lib/contracts/handlers/nucleus-teller-handler.ts#L15)
