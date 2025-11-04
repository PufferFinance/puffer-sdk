# contracts/handlers/nucleus-teller-handler

## Classes

### NucleusTellerHandler

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L33)

Handler for the `Teller` contract from nucleus.

#### Constructors

##### Constructor

> **new NucleusTellerHandler**(`chain`, `walletClient`, `publicClient`): [`NucleusTellerHandler`](#nucleustellerhandler)

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:47](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L47)

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

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:97](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L97)

Get the address of the `Accountant` contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The address of the `Accountant` contract.

##### deposit()

> **deposit**(`params`): `Promise`\<\{ `estimate`: () => `Promise`\<`bigint`\>; `transact`: () => `Promise`\<`` `0x${string}` ``\>; \}\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:156](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L156)

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

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:235](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L235)

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

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:79](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L79)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### isPaused()

> **isPaused**(): `Promise`\<`boolean`\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L134)

Get the paused state of the contract.

###### Returns

`Promise`\<`boolean`\>

The paused state of the contract.

##### shareLockPeriod()

> **shareLockPeriod**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:115](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L115)

Get the share lock period.

###### Returns

`Promise`\<`bigint`\>

The share lock period.

##### shareUnlockTime()

> **shareUnlockTime**(`walletAddress`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:125](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L125)

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

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:106](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L106)

Get the address of the `BoringVault` contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The address of the `BoringVault` contract.

##### withToken()

> **withToken**(`token`): [`NucleusTellerHandler`](#nucleustellerhandler)

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:68](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L68)

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

### DepositParams

> **DepositParams** = `object`

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L15)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="account"></a> `account` | `Address` | [lib/contracts/handlers/nucleus-teller-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L16) |
| <a id="amount"></a> `amount` | `bigint` | [lib/contracts/handlers/nucleus-teller-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L19) |
| <a id="ispreapproved"></a> `isPreapproved?` | `boolean` | [lib/contracts/handlers/nucleus-teller-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L21) |
| <a id="minimummint"></a> `minimumMint` | `bigint` | [lib/contracts/handlers/nucleus-teller-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L20) |
| <a id="token"></a> `token` | [`Token`](../tokens.md#token) | [lib/contracts/handlers/nucleus-teller-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L17) |
| <a id="unifitoken"></a> `unifiToken` | [`UnifiToken`](../tokens.md#unifitoken) | [lib/contracts/handlers/nucleus-teller-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L18) |

***

### DepositWithPermitParams

> **DepositWithPermitParams** = [`PermitData`](../common/lib/types.md#permitdata) & `object`

Defined in: [lib/contracts/handlers/nucleus-teller-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/contracts/handlers/nucleus-teller-handler.ts#L24)

#### Type Declaration

##### account

> **account**: `Address`

##### depositAsset

> **depositAsset**: `Address`

##### minimumMint

> **minimumMint**: `bigint`
