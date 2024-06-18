# contracts/handlers/puffer-vault-handler

## Classes

### PufferVaultHandler

Handler for the `PufferVaultV2` contract exposing methods to interact
with the contract.

#### Constructors

##### new PufferVaultHandler()

> **new PufferVaultHandler**(`chain`, `walletClient`, `publicClient`): [`PufferVaultHandler`](puffer-vault-handler.md#puffervaulthandler)

Create the handler for the `PufferVaultV2` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufferVaultHandler`](puffer-vault-handler.md#puffervaulthandler)

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:29](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/puffer-vault-handler.ts#L29)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### balanceOf()

> **balanceOf**(`walletAddress`): `Promise`\<`bigint`\>

Check the pufETH balance of the wallet.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to check the balance of. |

###### Returns

`Promise`\<`bigint`\>

pufETH balance in wei.

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:84](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/puffer-vault-handler.ts#L84)

##### depositETH()

> **depositETH**(`walletAddress`): `object`

Deposit ETH in exchange for pufETH. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to get the ETH from. |

###### Returns

`object`

`transact: (value: bigint) => Promise<Address>` - Used to
make the transaction with the given value.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: (`value`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `bigint` |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/puffer-vault-handler.ts#L62)

##### getAllowance()

> **getAllowance**(`ownerAddress`, `spenderAddress`): `Promise`\<`bigint`\>

Get the allowance for the given owner and spender.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the owner. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender. |

###### Returns

`Promise`\<`bigint`\>

Allowance for the given owner and spender.

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:105](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/puffer-vault-handler.ts#L105)

##### getContract()

> `private` **getContract**(): `object`

###### Returns

`object`

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:39](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/puffer-vault-handler.ts#L39)

##### getPufETHRate()

> **getPufETHRate**(): `Promise`\<`bigint`\>

Get the rate of pufETH compared to ETH.

###### Returns

`Promise`\<`bigint`\>

Rate of pufETH compared to 1 ETH.

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:93](https://github.com/PufferFinance/puffer-sdk/blob/49289dd3a68f3eafb8bf707b94cb3a9f817f71ef/lib/contracts/handlers/puffer-vault-handler.ts#L93)
