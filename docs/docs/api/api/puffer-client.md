# api/puffer-client

## Classes

### PufferClient

Defined in: [lib/api/puffer-client.ts:40](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L40)

The core class and the main entry point of the Puffer SDK.

#### Constructors

##### Constructor

> **new PufferClient**(`chain`, `walletClient?`, `publicClient?`): [`PufferClient`](#pufferclient)

Defined in: [lib/api/puffer-client.ts:109](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L109)

Create the Puffer Client.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`Chain`](../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient?` | \{ \} | The wallet client to use for wallet interactions. |
| `publicClient?` | \{ \} | The public client to use for public interactions. |

###### Returns

[`PufferClient`](#pufferclient)

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="carrotstaker"></a> `carrotStaker` | `public` | [`CarrotStakingHandler`](../contracts/handlers/carrot-staking-handler.md#carrotstakinghandler) | Handler for the `CarrotStaker` contract. | [lib/api/puffer-client.ts:72](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L72) |
| <a id="carrotvesting"></a> `carrotVesting` | `public` | [`CarrotVestingHandler`](../contracts/handlers/carrot-vesting-handler.md#carrotvestinghandler) | Handler for the `CarrotVesting` contract. | [lib/api/puffer-client.ts:96](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L96) |
| <a id="concretevault"></a> `concreteVault` | `public` | [`ConcreteVaultHandler`](../contracts/handlers/concrete-vault-handler.md#concretevaulthandler) | Handler for the `ConcreteMultiStrategyVault` contract. | [lib/api/puffer-client.ts:76](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L76) |
| <a id="depositor"></a> `depositor` | `public` | [`PufferDepositorHandler`](../contracts/handlers/puffer-depositor-handler.md#pufferdepositorhandler) | Handler for the `PufferDepositor` contract. | [lib/api/puffer-client.ts:50](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L50) |
| <a id="distributor"></a> `distributor` | `public` | [`DistributorHandler`](../contracts/handlers/distributor-handler.md#distributorhandler) | Handler for the `Distributor` contract. | [lib/api/puffer-client.ts:74](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L74) |
| <a id="erc20permit"></a> `erc20Permit` | `public` | [`ERC20PermitHandler`](../contracts/handlers/erc20-permit-handler.md#erc20permithandler) | Handler for the `ERC20Permit` contract. | [lib/api/puffer-client.ts:46](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L46) |
| <a id="gaugeregistry"></a> `gaugeRegistry` | `public` | [`GaugeRegistryHandler`](../contracts/handlers/gauge-registry-handler.md#gaugeregistryhandler) | Handler for the `GaugeRegistry` contract. | [lib/api/puffer-client.ts:94](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L94) |
| <a id="guardianmodule"></a> `guardianModule` | `public` | [`GuardianModuleHandler`](../contracts/handlers/guardian-module-handler.md#guardianmodulehandler) | Handler for the `GuardianModule` contract. | [lib/api/puffer-client.ts:84](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L84) |
| <a id="institutionalaccessmanager"></a> `institutionalAccessManager` | `public` | [`InstitutionalAccessManagerHandler`](../contracts/handlers/institutional-access-manager-handler.md#institutionalaccessmanagerhandler) | Handler for the `InstitutionalAccessManager` contract. | [lib/api/puffer-client.ts:88](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L88) |
| <a id="institutionalvault"></a> `institutionalVault` | `public` | [`InstitutionalVaultHandler`](../contracts/handlers/institutional-vault-handler.md#institutionalvaulthandler) | Handler for the `InstitutionalVault` contract. | [lib/api/puffer-client.ts:86](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L86) |
| <a id="l1rewardmanager"></a> `l1RewardManager` | `public` | [`L1RewardManagerHandler`](../contracts/handlers/l1-reward-manager-handler.md#l1rewardmanagerhandler) | Handler for the `L1RewardManager` contract. | [lib/api/puffer-client.ts:58](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L58) |
| <a id="l2depositor"></a> `l2Depositor` | `public` | [`PufferL2DepositorHandler`](../contracts/handlers/puffer-l2-depositor-handler.md#pufferl2depositorhandler) | Handler for the `PufferL2Depositor` contract. | [lib/api/puffer-client.ts:52](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L52) |
| <a id="l2rewardmanager"></a> `l2RewardManager` | `public` | [`L2RewardManagerHandler`](../contracts/handlers/l2-reward-manager-handler.md#l2rewardmanagerhandler) | Handler for the `L2RewardManager` contract. | [lib/api/puffer-client.ts:56](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L56) |
| <a id="lagoonvault"></a> `lagoonVault` | `public` | [`LagoonVaultHandler`](../contracts/handlers/lagoon-vault-handler.md#lagoonvaulthandler) | Handler for the `LagoonVault` contract. | [lib/api/puffer-client.ts:90](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L90) |
| <a id="mtwcarrot"></a> `mtwCarrot` | `public` | [`MtwCarrotHandler`](../contracts/handlers/mtw-carrot-handler.md#mtwcarrothandler) | Handler for the `mtwCARROT` (Merkl Token Wrapper) contract. | [lib/api/puffer-client.ts:70](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L70) |
| <a id="nonrestakingwithdrawalcredentials"></a> `nonRestakingWithdrawalCredentials` | `public` | [`NonRestakingWithdrawalCredentialsHandler`](../contracts/handlers/non-restaking-withdrawal-credentials-handler.md#nonrestakingwithdrawalcredentialshandler) | Handler for the `NonRestakingWithdrawalCredentials` contract. | [lib/api/puffer-client.ts:98](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L98) |
| <a id="nucleusaccountant"></a> `nucleusAccountant` | `public` | [`NucleusAccountantHandler`](../contracts/handlers/nucleus-accountant-handler.md#nucleusaccountanthandler) | Handler for the `NucleusAccountant` contract. | [lib/api/puffer-client.ts:66](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L66) |
| <a id="nucleusatomicqueue"></a> `nucleusAtomicQueue` | `public` | [`NucleusAtomicQueueHandler`](../contracts/handlers/nucleus-atomic-queue-handler.md#nucleusatomicqueuehandler) | Handler for the `NucleusAtomicQueue` contract. | [lib/api/puffer-client.ts:68](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L68) |
| <a id="nucleusboringvault"></a> `nucleusBoringVault` | `public` | [`NucleusBoringVaultHandler`](../contracts/handlers/nucleus-boring-vault-handler.md#nucleusboringvaulthandler) | Handler for the `NucleusBoringVault` contract. | [lib/api/puffer-client.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L62) |
| <a id="nucleusteller"></a> `nucleusTeller` | `public` | [`NucleusTellerHandler`](../contracts/handlers/nucleus-teller-handler.md#nucleustellerhandler) | Handler for the `NucleusTeller` contract. | [lib/api/puffer-client.ts:64](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L64) |
| <a id="pufferoraclev2"></a> `pufferOracleV2` | `public` | [`PufferOracleV2Handler`](../contracts/handlers/puffer-oracle-v2-handler.md#pufferoraclev2handler) | Handler for the `PufferOracleV2` contract. | [lib/api/puffer-client.ts:80](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L80) |
| <a id="pufferprotocol"></a> `pufferProtocol` | `public` | [`PufferProtocolHandler`](../contracts/handlers/puffer-protocol-handler.md#pufferprotocolhandler) | Handler for the `PufferProtocol` contract. | [lib/api/puffer-client.ts:82](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L82) |
| <a id="pufferwithdrawalmanager"></a> `pufferWithdrawalManager` | `public` | [`PufferWithdrawalManagerHandler`](../contracts/handlers/puffer-withdrawal-manager-handler.md#pufferwithdrawalmanagerhandler) | Handler for the `PufferWithdrawalManager` contract. | [lib/api/puffer-client.ts:60](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L60) |
| <a id="puflocker"></a> `pufLocker` | `public` | [`PufLockerHandler`](../contracts/handlers/puf-locker-handler.md#puflockerhandler) | Handler for the `PufLocker` contract. | [lib/api/puffer-client.ts:54](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L54) |
| <a id="validatorticket"></a> `validatorTicket` | `public` | [`ValidatorTicketHandler`](../contracts/handlers/validator-ticket-handler.md#validatortickethandler) | Handler for the `ValidatorTicket` contract. | [lib/api/puffer-client.ts:78](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L78) |
| <a id="vault"></a> `vault` | `public` | [`PufferVaultHandler`](../contracts/handlers/puffer-vault-handler.md#puffervaulthandler) | Handler for the `PufferVaultV2` contract. | [lib/api/puffer-client.ts:48](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L48) |
| <a id="vlpuffer"></a> `vlPuffer` | `public` | [`VLPufferHandler`](../contracts/handlers/vl-puffer-handler.md#vlpufferhandler) | Handler for the `vlPUFFER` contract. | [lib/api/puffer-client.ts:92](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L92) |

#### Methods

##### requestAddresses()

> **requestAddresses**(): `Promise`\<`RequestAddressesReturnType`\>

Defined in: [lib/api/puffer-client.ts:273](https://github.com/PufferFinance/puffer-sdk/blob/9ee8ac690358c3c04505ec3826132d307d04cdec/lib/api/puffer-client.ts#L273)

Request addresses from the wallet.

###### Returns

`Promise`\<`RequestAddressesReturnType`\>

An array of wallet addresses.
