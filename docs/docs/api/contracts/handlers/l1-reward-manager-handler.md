# contracts/handlers/l1-reward-manager-handler

## Classes

### L1RewardManagerHandler

Handler for the `L1RewardManager` contract.

#### Constructors

##### new L1RewardManagerHandler()

> **new L1RewardManagerHandler**(`chain`, `walletClient`, `publicClient`): [`L1RewardManagerHandler`](l1-reward-manager-handler.md#l1rewardmanagerhandler)

Create the handler for the `L1RewardManager` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`L1RewardManagerHandler`](l1-reward-manager-handler.md#l1rewardmanagerhandler)

###### Source

[lib/contracts/handlers/l1-reward-manager-handler.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/fdee675745314d4bdd8ce8a62cebad3f5d73a957/lib/contracts/handlers/l1-reward-manager-handler.ts#L28)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### getBridge()

> **getBridge**(`bridgeAddress`): `Promise`\<`object`\>

Get the bridge data for the given bridge address.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bridgeAddress` | \`0x$\{string\}\` | Address of the bridge. |

###### Returns

`Promise`\<`object`\>

The bridge data.

###### destinationDomainId

> **destinationDomainId**: `number`

###### Source

[lib/contracts/handlers/l1-reward-manager-handler.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/fdee675745314d4bdd8ce8a62cebad3f5d73a957/lib/contracts/handlers/l1-reward-manager-handler.ts#L60)

##### getContract()

> **getContract**(): `object`

Get the contract. This is a method because the typings are complex
and lost when trying to make it a member.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/l1-reward-manager-handler.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/fdee675745314d4bdd8ce8a62cebad3f5d73a957/lib/contracts/handlers/l1-reward-manager-handler.ts#L42)

##### setL2RewardClaimer()

> **setL2RewardClaimer**(`account`, `bridge`, `claimer`): `object`

Sets the rewards claimer on L2. Smart contracts might not be able
to to own the same address on L2. This function allows to set a
different address as the claimer.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account to make the transaction with. |
| `bridge` | \`0x$\{string\}\` | Address of the bridge. |
| `claimer` | \`0x$\{string\}\` | Address of the new claimer. |

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

[lib/contracts/handlers/l1-reward-manager-handler.ts:78](https://github.com/PufferFinance/puffer-sdk/blob/fdee675745314d4bdd8ce8a62cebad3f5d73a957/lib/contracts/handlers/l1-reward-manager-handler.ts#L78)
