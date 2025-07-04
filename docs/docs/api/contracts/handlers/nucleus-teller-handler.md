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

[lib/contracts/handlers/nucleus-teller-handler.ts:51](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L51)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `erc20PermitHandler` | `private` | [`ERC20PermitHandler`](erc20-permit-handler.md#erc20permithandler) | - |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `token` | `private` | [`UnifiToken`](../tokens.md#unifitoken) | - |
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

[lib/contracts/handlers/nucleus-teller-handler.ts:101](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L101)

##### deposit()

> **deposit**(`params`): `Promise`\<`object`\>

Deposit the given token for staking. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`DepositParams`](nucleus-teller-handler.md#depositparams) | Deposit parameters. |

###### Returns

`Promise`\<`object`\>

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

[lib/contracts/handlers/nucleus-teller-handler.ts:160](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L160)

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

[lib/contracts/handlers/nucleus-teller-handler.ts:239](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L239)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:83](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L83)

##### isPaused()

> **isPaused**(): `Promise`\<`boolean`\>

Get the paused state of the contract.

###### Returns

`Promise`\<`boolean`\>

The paused state of the contract.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:138](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L138)

##### shareLockPeriod()

> **shareLockPeriod**(): `Promise`\<`bigint`\>

Get the share lock period.

###### Returns

`Promise`\<`bigint`\>

The share lock period.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:119](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L119)

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

[lib/contracts/handlers/nucleus-teller-handler.ts:129](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L129)

##### vault()

> **vault**(): `Promise`\<\`0x$\{string\}\`\>

Get the address of the `BoringVault` contract.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The address of the `BoringVault` contract.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:110](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L110)

##### withToken()

> **withToken**(`token`): [`NucleusTellerHandler`](nucleus-teller-handler.md#nucleustellerhandler)

Set the UniFi token to use for executing transactions on the
contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | [`UnifiToken`](../tokens.md#unifitoken) | UniFi token to use for the handler. |

###### Returns

[`NucleusTellerHandler`](nucleus-teller-handler.md#nucleustellerhandler)

The handler.

###### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:72](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L72)

## Type Aliases

### DepositParams

> **DepositParams**: `object`

#### Type declaration

##### account

> **account**: `Address`

##### amount

> **amount**: `bigint`

##### isPreapproved?

> `optional` **isPreapproved**: `boolean`

##### minimumMint

> **minimumMint**: `bigint`

##### token

> **token**: [`Token`](../tokens.md#token)

##### unifiToken

> **unifiToken**: [`UnifiToken`](../tokens.md#unifitoken)

#### Source

[lib/contracts/handlers/nucleus-teller-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L14)

***

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

[lib/contracts/handlers/nucleus-teller-handler.ts:23](https://github.com/PufferFinance/puffer-sdk/blob/df6b26991d48f80bae5309e3ae8ac28e944bf013/lib/contracts/handlers/nucleus-teller-handler.ts#L23)
