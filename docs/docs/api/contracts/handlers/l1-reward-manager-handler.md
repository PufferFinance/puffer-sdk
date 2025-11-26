# contracts/handlers/l1-reward-manager-handler

## Classes

### L1RewardManagerHandler

Defined in: [lib/contracts/handlers/l1-reward-manager-handler.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l1-reward-manager-handler.ts#L15)

Handler for the `L1RewardManager` contract.

#### Constructors

##### Constructor

> **new L1RewardManagerHandler**(`chain`, `walletClient`, `publicClient`): [`L1RewardManagerHandler`](#l1rewardmanagerhandler)

Defined in: [lib/contracts/handlers/l1-reward-manager-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l1-reward-manager-handler.ts#L28)

Create the handler for the `L1RewardManager` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`L1RewardManagerHandler`](#l1rewardmanagerhandler)

#### Methods

##### getBridge()

> **getBridge**(`bridgeAddress`): `Promise`\<\{ `destinationDomainId`: `number`; \}\>

Defined in: [lib/contracts/handlers/l1-reward-manager-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l1-reward-manager-handler.ts#L60)

Get the bridge data for the given bridge address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bridgeAddress` | `` `0x${string}` `` | Address of the bridge. |

###### Returns

`Promise`\<\{ `destinationDomainId`: `number`; \}\>

The bridge data.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/l1-reward-manager-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l1-reward-manager-handler.ts#L42)

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

##### setL2RewardClaimer()

> **setL2RewardClaimer**(`account`, `bridge`, `claimer`): `object`

Defined in: [lib/contracts/handlers/l1-reward-manager-handler.ts:78](https://github.com/PufferFinance/puffer-sdk/blob/39dec897eb96a4855c431a4d5bd7f14243882190/lib/contracts/handlers/l1-reward-manager-handler.ts#L78)

Sets the rewards claimer on L2. Smart contracts might not be able
to to own the same address on L2. This function allows to set a
different address as the claimer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account to make the transaction with. |
| `bridge` | `` `0x${string}` `` | Address of the bridge. |
| `claimer` | `` `0x${string}` `` | Address of the new claimer. |

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

> **transact**: () => `Promise`\<`` `0x${string}` ``\>

###### Returns

`Promise`\<`` `0x${string}` ``\>
