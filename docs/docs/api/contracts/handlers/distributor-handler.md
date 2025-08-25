# contracts/handlers/distributor-handler

## Classes

### DistributorHandler

Handler for the Merkle Distributor contract, for claiming rewards, e.g. mtwCARROT.

#### Constructors

##### new DistributorHandler()

> **new DistributorHandler**(`chain`, `walletClient`, `publicClient`): [`DistributorHandler`](distributor-handler.md#distributorhandler)

Create the handler for the Distributor contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`DistributorHandler`](distributor-handler.md#distributorhandler)

###### Source

[lib/contracts/handlers/distributor-handler.ts:44](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L44)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### claim()

> **claim**(`account`, `params`): `Promise`\<\`0x$\{string\}\`\>

Claim tokens for multiple users.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account making the claim. |
| `params` | [`ClaimParams`](distributor-handler.md#claimparams) | The claim parameters. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:76](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L76)

##### claimed()

> **claimed**(`user`, `token`): `Promise`\<[`ClaimInfo`](distributor-handler.md#claiminfo)\>

Get claim information for a user and token.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | The user address. |
| `token` | \`0x$\{string\}\` | The token address. |

###### Returns

`Promise`\<[`ClaimInfo`](distributor-handler.md#claiminfo)\>

The claim information.

###### Source

[lib/contracts/handlers/distributor-handler.ts:93](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L93)

##### core()

> **core**(): `Promise`\<\`0x$\{string\}\`\>

Get the core contract address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The core contract address.

###### Source

[lib/contracts/handlers/distributor-handler.ts:108](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L108)

##### disputeAmount()

> **disputeAmount**(): `Promise`\<`bigint`\>

Get the dispute amount.

###### Returns

`Promise`\<`bigint`\>

The dispute amount.

###### Source

[lib/contracts/handlers/distributor-handler.ts:117](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L117)

##### disputePeriod()

> **disputePeriod**(): `Promise`\<`number`\>

Get the dispute period.

###### Returns

`Promise`\<`number`\>

The dispute period in seconds.

###### Source

[lib/contracts/handlers/distributor-handler.ts:126](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L126)

##### disputeToken()

> **disputeToken**(): `Promise`\<\`0x$\{string\}\`\>

Get the dispute token address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The dispute token address.

###### Source

[lib/contracts/handlers/distributor-handler.ts:135](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L135)

##### disputeTree()

> **disputeTree**(`account`, `reason`): `Promise`\<\`0x$\{string\}\`\>

Dispute the current tree.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account disputing the tree. |
| `reason` | `string` | The reason for the dispute. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:146](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L146)

##### disputer()

> **disputer**(): `Promise`\<\`0x$\{string\}\`\>

Get the current disputer address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The disputer address.

###### Source

[lib/contracts/handlers/distributor-handler.ts:158](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L158)

##### endOfDisputePeriod()

> **endOfDisputePeriod**(): `Promise`\<`number`\>

Get the end of the dispute period.

###### Returns

`Promise`\<`number`\>

The timestamp when the dispute period ends.

###### Source

[lib/contracts/handlers/distributor-handler.ts:167](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L167)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/distributor-handler.ts:57](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L57)

##### getMerkleRoot()

> **getMerkleRoot**(): `Promise`\<\`0x$\{string\}\`\>

Get the current merkle root.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The current merkle root.

###### Source

[lib/contracts/handlers/distributor-handler.ts:176](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L176)

##### lastTree()

> **lastTree**(): `Promise`\<[`MerkleTree`](distributor-handler.md#merkletree)\>

Get the last tree information.

###### Returns

`Promise`\<[`MerkleTree`](distributor-handler.md#merkletree)\>

The last tree information.

###### Source

[lib/contracts/handlers/distributor-handler.ts:185](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L185)

##### onlyOperatorCanClaim()

> **onlyOperatorCanClaim**(`user`): `Promise`\<`bigint`\>

Check if only operators can claim for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | The user address to check. |

###### Returns

`Promise`\<`bigint`\>

Whether only operators can claim for the user.

###### Source

[lib/contracts/handlers/distributor-handler.ts:199](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L199)

##### toggleOnlyOperatorCanClaim()

> **toggleOnlyOperatorCanClaim**(`account`, `user`): `Promise`\<\`0x$\{string\}\`\>

Toggle whether only operators can claim for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account toggling the setting. |
| `user` | \`0x$\{string\}\` | The user address to toggle for. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:210](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L210)

##### toggleOperator()

> **toggleOperator**(`account`, `user`, `operator`): `Promise`\<\`0x$\{string\}\`\>

Toggle an operator for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account toggling the operator. |
| `user` | \`0x$\{string\}\` | The user address. |
| `operator` | \`0x$\{string\}\` | The operator address to toggle. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:225](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L225)

##### toggleTrusted()

> **toggleTrusted**(`account`, `eoa`): `Promise`\<\`0x$\{string\}\`\>

Toggle whether an address is trusted.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account toggling the trusted status. |
| `eoa` | \`0x$\{string\}\` | The address to toggle trust for. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:239](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L239)

##### tree()

> **tree**(): `Promise`\<[`MerkleTree`](distributor-handler.md#merkletree)\>

Get the current tree information.

###### Returns

`Promise`\<[`MerkleTree`](distributor-handler.md#merkletree)\>

The current tree information.

###### Source

[lib/contracts/handlers/distributor-handler.ts:251](https://github.com/PufferFinance/puffer-sdk/blob/45c6e132498ca94bfbd9c6e7764db129c3651333/lib/contracts/handlers/distributor-handler.ts#L251)

## Interfaces

### ClaimInfo

#### Properties

| Property | Type |
| :------ | :------ |
| `amount` | `bigint` |
| `merkleRoot` | \`0x$\{string\}\` |
| `timestamp` | `bigint` |

***

### ClaimParams

#### Properties

| Property | Type |
| :------ | :------ |
| `amounts` | `bigint`[] |
| `proofs` | \`0x$\{string\}\`[][] |
| `tokens` | \`0x$\{string\}\`[] |
| `users` | \`0x$\{string\}\`[] |

***

### MerkleTree

#### Properties

| Property | Type |
| :------ | :------ |
| `ipfsHash` | \`0x$\{string\}\` |
| `merkleRoot` | \`0x$\{string\}\` |
