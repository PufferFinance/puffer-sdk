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

[lib/contracts/handlers/distributor-handler.ts:48](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L48)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### canUpdateMerkleRoot()

> **canUpdateMerkleRoot**(`address`): `Promise`\<`bigint`\>

Check if an address can update the merkle root.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string\}\` | The address to check. |

###### Returns

`Promise`\<`bigint`\>

Whether the address can update the merkle root.

###### Source

[lib/contracts/handlers/distributor-handler.ts:83](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L83)

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

[lib/contracts/handlers/distributor-handler.ts:94](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L94)

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

[lib/contracts/handlers/distributor-handler.ts:111](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L111)

##### core()

> **core**(): `Promise`\<\`0x$\{string\}\`\>

Get the core contract address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The core contract address.

###### Source

[lib/contracts/handlers/distributor-handler.ts:126](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L126)

##### disputeAmount()

> **disputeAmount**(): `Promise`\<`bigint`\>

Get the dispute amount.

###### Returns

`Promise`\<`bigint`\>

The dispute amount.

###### Source

[lib/contracts/handlers/distributor-handler.ts:135](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L135)

##### disputePeriod()

> **disputePeriod**(): `Promise`\<`number`\>

Get the dispute period.

###### Returns

`Promise`\<`number`\>

The dispute period in seconds.

###### Source

[lib/contracts/handlers/distributor-handler.ts:144](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L144)

##### disputeToken()

> **disputeToken**(): `Promise`\<\`0x$\{string\}\`\>

Get the dispute token address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The dispute token address.

###### Source

[lib/contracts/handlers/distributor-handler.ts:153](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L153)

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

[lib/contracts/handlers/distributor-handler.ts:164](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L164)

##### disputer()

> **disputer**(): `Promise`\<\`0x$\{string\}\`\>

Get the current disputer address.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The disputer address.

###### Source

[lib/contracts/handlers/distributor-handler.ts:176](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L176)

##### endOfDisputePeriod()

> **endOfDisputePeriod**(): `Promise`\<`number`\>

Get the end of the dispute period.

###### Returns

`Promise`\<`number`\>

The timestamp when the dispute period ends.

###### Source

[lib/contracts/handlers/distributor-handler.ts:185](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L185)

##### getContract()

> **getContract**(): `object`

Get the contract.

###### Returns

`object`

The viem contract.

###### Source

[lib/contracts/handlers/distributor-handler.ts:61](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L61)

##### getMerkleRoot()

> **getMerkleRoot**(): `Promise`\<\`0x$\{string\}\`\>

Get the current merkle root.

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The current merkle root.

###### Source

[lib/contracts/handlers/distributor-handler.ts:194](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L194)

##### lastTree()

> **lastTree**(): `Promise`\<[`MerkleTree`](distributor-handler.md#merkletree)\>

Get the last tree information.

###### Returns

`Promise`\<[`MerkleTree`](distributor-handler.md#merkletree)\>

The last tree information.

###### Source

[lib/contracts/handlers/distributor-handler.ts:203](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L203)

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

[lib/contracts/handlers/distributor-handler.ts:217](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L217)

##### operators()

> **operators**(`user`, `operator`): `Promise`\<`bigint`\>

Check if an address is an operator for a user.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `user` | \`0x$\{string\}\` | The user address. |
| `operator` | \`0x$\{string\}\` | The operator address. |

###### Returns

`Promise`\<`bigint`\>

Whether the address is an operator.

###### Source

[lib/contracts/handlers/distributor-handler.ts:228](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L228)

##### recoverERC20()

> **recoverERC20**(`account`, `tokenAddress`, `to`, `amountToRecover`): `Promise`\<\`0x$\{string\}\`\>

Recover ERC20 tokens sent to the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account recovering the tokens. |
| `tokenAddress` | \`0x$\{string\}\` | The token address to recover. |
| `to` | \`0x$\{string\}\` | The address to send recovered tokens to. |
| `amountToRecover` | `bigint` | The amount to recover. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:241](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L241)

##### resolveDispute()

> **resolveDispute**(`account`, `valid`): `Promise`\<\`0x$\{string\}\`\>

Resolve a dispute.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account resolving the dispute. |
| `valid` | `boolean` | Whether the disputed tree is valid. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:263](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L263)

##### revokeTree()

> **revokeTree**(`account`): `Promise`\<\`0x$\{string\}\`\>

Revoke the current tree.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account revoking the tree. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:276](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L276)

##### setDisputeAmount()

> **setDisputeAmount**(`account`, `disputeAmount`): `Promise`\<\`0x$\{string\}\`\>

Set the dispute amount.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account setting the dispute amount. |
| `disputeAmount` | `bigint` | The new dispute amount. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:290](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L290)

##### setDisputePeriod()

> **setDisputePeriod**(`account`, `disputePeriod`): `Promise`\<\`0x$\{string\}\`\>

Set the dispute period.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account setting the dispute period. |
| `disputePeriod` | `number` | The new dispute period in seconds. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:304](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L304)

##### setDisputeToken()

> **setDisputeToken**(`account`, `disputeToken`): `Promise`\<\`0x$\{string\}\`\>

Set the dispute token.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account setting the dispute token. |
| `disputeToken` | \`0x$\{string\}\` | The new dispute token address. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:318](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L318)

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

[lib/contracts/handlers/distributor-handler.ts:332](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L332)

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

[lib/contracts/handlers/distributor-handler.ts:347](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L347)

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

[lib/contracts/handlers/distributor-handler.ts:361](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L361)

##### tree()

> **tree**(): `Promise`\<[`MerkleTree`](distributor-handler.md#merkletree)\>

Get the current tree information.

###### Returns

`Promise`\<[`MerkleTree`](distributor-handler.md#merkletree)\>

The current tree information.

###### Source

[lib/contracts/handlers/distributor-handler.ts:373](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L373)

##### updateTree()

> **updateTree**(`account`, `tree`): `Promise`\<\`0x$\{string\}\`\>

Update the merkle tree.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `account` | \`0x$\{string\}\` | The account updating the tree. |
| `tree` | [`MerkleTree`](distributor-handler.md#merkletree) | The new tree information. |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash.

###### Source

[lib/contracts/handlers/distributor-handler.ts:388](https://github.com/PufferFinance/puffer-sdk/blob/3d234cf3014be723399384687b6c66e96d55c433/lib/contracts/handlers/distributor-handler.ts#L388)

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
