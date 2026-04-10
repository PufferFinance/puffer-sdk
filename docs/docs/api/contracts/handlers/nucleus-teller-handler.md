# contracts/handlers/nucleus-teller-handler

## Classes

### NucleusTellerHandler

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:47](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L47)

Handler for the `Teller` contract from nucleus.

#### Constructors

##### Constructor

> **new NucleusTellerHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusTellerHandler`](#nucleustellerhandler)

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:61](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L61)

Create the handler for processing tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`NucleusTellerHandler`](#nucleustellerhandler)

#### Methods

##### accountant()

> **accountant**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:111](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L111)

Get the address of the `Accountant` contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The address of the `Accountant` contract.

##### bulkDeposit()

> **bulkDeposit**(`params`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:284](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L284)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BulkDepositParams`](#bulkdepositparams) |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

##### bulkWithdraw()

> **bulkWithdraw**(`params`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:267](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L267)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BulkWithdrawParams`](#bulkwithdrawparams) |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

##### deposit()

> **deposit**(`params`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:170](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L170)

Deposit the given token for staking. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`DepositParams`](#depositparams) | Deposit parameters. |

###### Returns

`Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

`transact: () => Promise<Address>` - Used to make the
transaction with the given value.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

##### depositWithPermit()

> **depositWithPermit**(`params`): `object`

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:249](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L249)

Deposit an asset/token for staking with a permit.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`DepositWithPermitParams`](#depositwithpermitparams) | Permit parameters. |

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

> **transact**: () => `Promise`\<`` `0x${string}` ``\>

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:93](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L93)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### isPaused()

> **isPaused**(): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:148](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L148)

Get the paused state of the contract.

###### Returns

`Promise`\<`boolean`\>

The paused state of the contract.

##### shareLockPeriod()

> **shareLockPeriod**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:129](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L129)

Get the share lock period.

###### Returns

`Promise`\<`bigint`\>

The share lock period.

##### shareUnlockTime()

> **shareUnlockTime**(`walletAddress`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:139](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L139)

Get the share unlock time for the given wallet address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `walletAddress` | `` `0x${string}` `` | Address of the wallet. |

###### Returns

`Promise`\<`bigint`\>

The share unlock time.

##### vault()

> **vault**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:120](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L120)

Get the address of the `BoringVault` contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The address of the `BoringVault` contract.

##### withToken()

> **withToken**(`token`): [`NucleusTellerHandler`](#nucleustellerhandler)

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:82](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L82)

Set the UniFi token to use for executing transactions on the
contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | [`UnifiToken`](../tokens.md#unifitoken) | UniFi token to use for the handler. |

###### Returns

[`NucleusTellerHandler`](#nucleustellerhandler)

The handler.

## Type Aliases

### BulkDepositParams

> **BulkDepositParams** = `object`

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L30)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="account"></a> `account` | `Address` | [lib/contracts/handlers/nucleus-teller-handler.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L31) |
| <a id="depositamount"></a> `depositAmount` | `bigint` | [lib/contracts/handlers/nucleus-teller-handler.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L33) |
| <a id="depositasset"></a> `depositAsset` | `Address` | [lib/contracts/handlers/nucleus-teller-handler.ts:32](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L32) |
| <a id="minimummint"></a> `minimumMint` | `bigint` | [lib/contracts/handlers/nucleus-teller-handler.ts:34](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L34) |

***

### BulkWithdrawParams

> **BulkWithdrawParams** = `object`

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:37](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L37)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="account-1"></a> `account` | `Address` | [lib/contracts/handlers/nucleus-teller-handler.ts:38](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L38) |
| <a id="minimumassets"></a> `minimumAssets` | `bigint` | [lib/contracts/handlers/nucleus-teller-handler.ts:41](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L41) |
| <a id="shareamount"></a> `shareAmount` | `bigint` | [lib/contracts/handlers/nucleus-teller-handler.ts:40](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L40) |
| <a id="withdrawasset"></a> `withdrawAsset` | `Address` | [lib/contracts/handlers/nucleus-teller-handler.ts:39](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L39) |

***

### DepositParams

> **DepositParams** = `object`

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L15)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="account-2"></a> `account` | `Address` | [lib/contracts/handlers/nucleus-teller-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L16) |
| <a id="amount"></a> `amount` | `bigint` | [lib/contracts/handlers/nucleus-teller-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L19) |
| <a id="ispreapproved"></a> `isPreapproved?` | `boolean` | [lib/contracts/handlers/nucleus-teller-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L21) |
| <a id="minimummint-1"></a> `minimumMint` | `bigint` | [lib/contracts/handlers/nucleus-teller-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L20) |
| <a id="token"></a> `token` | [`Token`](../tokens.md#token) | [lib/contracts/handlers/nucleus-teller-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L17) |
| <a id="unifitoken"></a> `unifiToken` | [`UnifiToken`](../tokens.md#unifitoken) | [lib/contracts/handlers/nucleus-teller-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L18) |

***

### DepositWithPermitParams

> **DepositWithPermitParams** = [`PermitData`](../common/lib/types.md#permitdata) & `object`

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/da3bc029eaf436ff4f37983a273cb326446efd46/lib/contracts/handlers/nucleus-teller-handler.ts#L24)

#### Type Declaration

##### account

> **account**: `Address`

##### depositAsset

> **depositAsset**: `Address`

##### minimumMint

> **minimumMint**: `bigint`
