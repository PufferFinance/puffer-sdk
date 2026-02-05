# contracts/handlers/non-restaking-withdrawal-credentials-handler

## Classes

### NonRestakingWithdrawalCredentialsHandler

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L28)

Handler for the `NonRestakingWithdrawalCredentials` contract exposing methods to
interact with the contract.

#### Constructors

##### Constructor

> **new NonRestakingWithdrawalCredentialsHandler**(`chain`, `walletClient`, `publicClient`): [`NonRestakingWithdrawalCredentialsHandler`](#nonrestakingwithdrawalcredentialshandler)

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L42)

Create the handler for the `NonRestakingWithdrawalCredentials` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`NonRestakingWithdrawalCredentialsHandler`](#nonrestakingwithdrawalcredentialshandler)

#### Methods

##### authority()

> **authority**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:102](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L102)

Get the authority of the contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The authority address.

##### getAddress()

> **getAddress**(): `` `0x${string}` `` \| `undefined`

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:67](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L67)

Get the address of the contract for this handler.

###### Returns

`` `0x${string}` `` \| `undefined`

The address of the contract.

##### getConsolidationRequestFee()

> **getConsolidationRequestFee**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:111](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L111)

Get the consolidation request fee.

###### Returns

`Promise`\<`bigint`\>

The consolidation request fee.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:77](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L77)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### getWithdrawalRequestFee()

> **getWithdrawalRequestFee**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:120](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L120)

Get the withdrawal request fee.

###### Returns

`Promise`\<`bigint`\>

The withdrawal request fee.

##### requestConsolidation()

> **requestConsolidation**(`requests`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:139](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L139)

Request consolidation of validators.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requests` | [`ConsolidationRequest`](#consolidationrequest)[] | The consolidation requests containing srcPubkey and targetPubkey. |
| `value` | `bigint` | The amount of ETH to send with the transaction for fees. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### requestWithdrawal()

> **requestWithdrawal**(`requests`, `value`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:153](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L153)

Request withdrawal from validators.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requests` | [`WithdrawalRequest`](#withdrawalrequest)[] | The withdrawal requests containing pubkey and amountGwei. |
| `value` | `bigint` | The amount of ETH to send with the transaction for fees. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

##### vault()

> **vault**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:129](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L129)

Get the vault address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The vault address.

##### withAddress()

> **withAddress**(`address`): [`NonRestakingWithdrawalCredentialsHandler`](#nonrestakingwithdrawalcredentialshandler)

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:56](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L56)

Set the address of the contract for this handler.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `` `0x${string}` `` | The address of the contract. |

###### Returns

[`NonRestakingWithdrawalCredentialsHandler`](#nonrestakingwithdrawalcredentialshandler)

The handler.

##### withdrawETH()

> **withdrawETH**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:164](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L164)

Withdraw ETH from the contract.

###### Returns

`Promise`\<`` `0x${string}` ``\>

## Type Aliases

### ConsolidationRequest

> **ConsolidationRequest** = `object`

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L14)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="srcpubkey"></a> `srcPubkey` | `Hex` | [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L15) |
| <a id="targetpubkey"></a> `targetPubkey` | `Hex` | [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:16](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L16) |

***

### WithdrawalRequest

> **WithdrawalRequest** = `object`

Defined in: [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L19)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="amountgwei"></a> `amountGwei` | `bigint` | [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L21) |
| <a id="pubkey"></a> `pubkey` | `Hex` | [lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/9d2f7fbaf009892d79773bce1ebb2080bfa02347/lib/contracts/handlers/non-restaking-withdrawal-credentials-handler.ts#L20) |
