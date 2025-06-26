# api/puffer-client

## Classes

### PufferClient

The core class and the main entry point of the Puffer SDK.

#### Constructors

##### new PufferClient()

> **new PufferClient**(`chain`, `walletClient`?, `publicClient`?): [`PufferClient`](puffer-client.md#pufferclient)

Create the Puffer Client.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient`? | `object` | The wallet client to use for wallet interactions. |
| `publicClient`? | `object` | The public client to use for public interactions. |

###### Returns

[`PufferClient`](puffer-client.md#pufferclient)

###### Source

[lib/api/puffer-client.ts:85](https://github.com/PufferFinance/puffer-sdk/blob/8cd293b6144cbed8dff4ec3dab0566e7c809d098/lib/api/puffer-client.ts#L85)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `carrotStaker` | `public` | [`CarrotStakingHandler`](../contracts/handlers/carrot-staking-handler.md#carrotstakinghandler) | Handler for the `CarrotStaker` contract. |
| `concreteVault` | `public` | [`ConcreteVaultHandler`](../contracts/handlers/concrete-vault-handler.md#concretevaulthandler) | Handler for the `ConcreteMultiStrategyVault` contract. |
| `depositor` | `public` | [`PufferDepositorHandler`](../contracts/handlers/puffer-depositor-handler.md#pufferdepositorhandler) | Handler for the `PufferDepositor` contract. |
| `distributor` | `public` | [`DistributorHandler`](../contracts/handlers/distributor-handler.md#distributorhandler) | Handler for the `Distributor` contract. |
| `erc20Permit` | `public` | [`ERC20PermitHandler`](../contracts/handlers/erc20-permit-handler.md#erc20permithandler) | Handler for the `ERC20Permit` contract. |
| `l1RewardManager` | `public` | [`L1RewardManagerHandler`](../contracts/handlers/l1-reward-manager-handler.md#l1rewardmanagerhandler) | Handler for the `L1RewardManager` contract. |
| `l2Depositor` | `public` | [`PufferL2DepositorHandler`](../contracts/handlers/puffer-l2-depositor-handler.md#pufferl2depositorhandler) | Handler for the `PufferL2Depositor` contract. |
| `l2RewardManager` | `public` | [`L2RewardManagerHandler`](../contracts/handlers/l2-reward-manager-handler.md#l2rewardmanagerhandler) | Handler for the `L2RewardManager` contract. |
| `mtwCarrot` | `public` | [`MtwCarrotHandler`](../contracts/handlers/mtw-carrot-handler.md#mtwcarrothandler) | Handler for the `mtwCARROT` (Merkl Token Wrapper) contract. |
| `nucleusAccountant` | `public` | [`NucleusAccountantHandler`](../contracts/handlers/nucleus-accountant-handler.md#nucleusaccountanthandler) | Handler for the `NucleusAccountant` contract. |
| `nucleusAtomicQueue` | `public` | [`NucleusAtomicQueueHandler`](../contracts/handlers/nucleus-atomic-queue-handler.md#nucleusatomicqueuehandler) | Handler for the `NucleusAtomicQueue` contract. |
| `nucleusBoringVault` | `public` | [`NucleusBoringVaultHandler`](../contracts/handlers/nucleus-boring-vault-handler.md#nucleusboringvaulthandler) | Handler for the `NucleusBoringVault` contract. |
| `nucleusTeller` | `public` | [`NucleusTellerHandler`](../contracts/handlers/nucleus-teller-handler.md#nucleustellerhandler) | Handler for the `NucleusTeller` contract. |
| `publicClient` | `private` | `object` | - |
| `pufLocker` | `public` | [`PufLockerHandler`](../contracts/handlers/puf-locker-handler.md#puflockerhandler) | Handler for the `PufLocker` contract. |
| `pufferOracleV2` | `public` | [`PufferOracleV2Handler`](../contracts/handlers/puffer-oracle-v2-handler.md#pufferoraclev2handler) | Handler for the `PufferOracleV2` contract. |
| `pufferProtocol` | `public` | [`PufferProtocolHandler`](../contracts/handlers/puffer-protocol-handler.md#pufferprotocolhandler) | Handler for the `PufferProtocol` contract. |
| `pufferWithdrawalManager` | `public` | [`PufferWithdrawalManagerHandler`](../contracts/handlers/puffer-withdrawal-manager-handler.md#pufferwithdrawalmanagerhandler) | Handler for the `PufferWithdrawalManager` contract. |
| `validatorTicket` | `public` | [`ValidatorTicketHandler`](../contracts/handlers/validator-ticket-handler.md#validatortickethandler) | Handler for the `ValidatorTicket` contract. |
| `vault` | `public` | [`PufferVaultHandler`](../contracts/handlers/puffer-vault-handler.md#puffervaulthandler) | Handler for the `PufferVaultV2` contract. |
| `walletClient` | `private` | `object` | - |

#### Methods

##### requestAddresses()

> **requestAddresses**(): `Promise`\<`RequestAddressesReturnType`\>

Request addresses from the wallet.

###### Returns

`Promise`\<`RequestAddressesReturnType`\>

An array of wallet addresses.

###### Source

[lib/api/puffer-client.ts:208](https://github.com/PufferFinance/puffer-sdk/blob/8cd293b6144cbed8dff4ec3dab0566e7c809d098/lib/api/puffer-client.ts#L208)
