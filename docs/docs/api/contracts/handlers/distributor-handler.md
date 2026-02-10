# contracts/handlers/distributor-handler

## Classes

### DistributorHandler

Defined in: [lib/contracts/handlers/distributor-handler.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L33)

Handler for the Merkle Distributor contract, for claiming rewards, e.g. mtwCARROT.

#### Constructors

##### Constructor

> **new DistributorHandler**(`chain`, `walletClient`, `publicClient`): [`DistributorHandler`](#distributorhandler)

Defined in: [lib/contracts/handlers/distributor-handler.ts:44](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L44)

Create the handler for the Distributor contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient` | \{ \} | The public client to use for public interactions. |

###### Returns

[`DistributorHandler`](#distributorhandler)

#### Methods

##### claim()

> **claim**(`account`, `params`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:76](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L76)

Claim tokens for multiple users.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account making the claim. |
| `params` | [`ClaimParams`](#claimparams) | The claim parameters. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### claimed()

> **claimed**(`user`, `token`): `Promise`\<[`ClaimInfo`](#claiminfo)\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:93](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L93)

Get claim information for a user and token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | The user address. |
| `token` | `` `0x${string}` `` | The token address. |

###### Returns

`Promise`\<[`ClaimInfo`](#claiminfo)\>

The claim information.

##### core()

> **core**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:108](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L108)

Get the core contract address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The core contract address.

##### disputeAmount()

> **disputeAmount**(): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:117](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L117)

Get the dispute amount.

###### Returns

`Promise`\<`bigint`\>

The dispute amount.

##### disputePeriod()

> **disputePeriod**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:126](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L126)

Get the dispute period.

###### Returns

`Promise`\<`number`\>

The dispute period in seconds.

##### disputer()

> **disputer**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:158](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L158)

Get the current disputer address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The disputer address.

##### disputeToken()

> **disputeToken**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:135](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L135)

Get the dispute token address.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The dispute token address.

##### disputeTree()

> **disputeTree**(`account`, `reason`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:146](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L146)

Dispute the current tree.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account disputing the tree. |
| `reason` | `string` | The reason for the dispute. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### endOfDisputePeriod()

> **endOfDisputePeriod**(): `Promise`\<`number`\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:167](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L167)

Get the end of the dispute period.

###### Returns

`Promise`\<`number`\>

The timestamp when the dispute period ends.

##### getContract()

> **getContract**(): `object`

Defined in: [lib/contracts/handlers/distributor-handler.ts:57](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L57)

Get the contract.

###### Returns

`object`

The viem contract.

##### getMerkleRoot()

> **getMerkleRoot**(): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:176](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L176)

Get the current merkle root.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The current merkle root.

##### lastTree()

> **lastTree**(): `Promise`\<[`MerkleTree`](#merkletree)\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:185](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L185)

Get the last tree information.

###### Returns

`Promise`\<[`MerkleTree`](#merkletree)\>

The last tree information.

##### onlyOperatorCanClaim()

> **onlyOperatorCanClaim**(`user`): `Promise`\<`bigint`\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:199](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L199)

Check if only operators can claim for a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `user` | `` `0x${string}` `` | The user address to check. |

###### Returns

`Promise`\<`bigint`\>

Whether only operators can claim for the user.

##### toggleOnlyOperatorCanClaim()

> **toggleOnlyOperatorCanClaim**(`account`, `user`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:210](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L210)

Toggle whether only operators can claim for a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account toggling the setting. |
| `user` | `` `0x${string}` `` | The user address to toggle for. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### toggleOperator()

> **toggleOperator**(`account`, `user`, `operator`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:225](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L225)

Toggle an operator for a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account toggling the operator. |
| `user` | `` `0x${string}` `` | The user address. |
| `operator` | `` `0x${string}` `` | The operator address to toggle. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### toggleTrusted()

> **toggleTrusted**(`account`, `eoa`): `Promise`\<`` `0x${string}` ``\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:239](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L239)

Toggle whether an address is trusted.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `account` | `` `0x${string}` `` | The account toggling the trusted status. |
| `eoa` | `` `0x${string}` `` | The address to toggle trust for. |

###### Returns

`Promise`\<`` `0x${string}` ``\>

A promise that resolves to the transaction hash.

##### tree()

> **tree**(): `Promise`\<[`MerkleTree`](#merkletree)\>

Defined in: [lib/contracts/handlers/distributor-handler.ts:251](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L251)

Get the current tree information.

###### Returns

`Promise`\<[`MerkleTree`](#merkletree)\>

The current tree information.

## Interfaces

### ClaimInfo

Defined in: [lib/contracts/handlers/distributor-handler.ts:17](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L17)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="amount"></a> `amount` | `bigint` | [lib/contracts/handlers/distributor-handler.ts:18](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L18) |
| <a id="merkleroot"></a> `merkleRoot` | `` `0x${string}` `` | [lib/contracts/handlers/distributor-handler.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L20) |
| <a id="timestamp"></a> `timestamp` | `bigint` | [lib/contracts/handlers/distributor-handler.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L19) |

***

### ClaimParams

Defined in: [lib/contracts/handlers/distributor-handler.ts:23](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L23)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="amounts"></a> `amounts` | `bigint`[] | [lib/contracts/handlers/distributor-handler.ts:26](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L26) |
| <a id="proofs"></a> `proofs` | `` `0x${string}` ``[][] | [lib/contracts/handlers/distributor-handler.ts:27](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L27) |
| <a id="tokens"></a> `tokens` | `` `0x${string}` ``[] | [lib/contracts/handlers/distributor-handler.ts:25](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L25) |
| <a id="users"></a> `users` | `` `0x${string}` ``[] | [lib/contracts/handlers/distributor-handler.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L24) |

***

### MerkleTree

Defined in: [lib/contracts/handlers/distributor-handler.ts:12](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L12)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="ipfshash"></a> `ipfsHash` | `` `0x${string}` `` | [lib/contracts/handlers/distributor-handler.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L14) |
| <a id="merkleroot-1"></a> `merkleRoot` | `` `0x${string}` `` | [lib/contracts/handlers/distributor-handler.ts:13](https://github.com/PufferFinance/puffer-sdk/blob/f8ec7f54737214ab2700bf33b7a282ea3fc355b8/lib/contracts/handlers/distributor-handler.ts#L13) |
