import Web3, { Contract } from 'web3';

import { Network, networkEnumToString } from '../../config/networks';
import { useNetworkConfig } from '../context/NetworkConfig';
import { useWeb3 } from '../context/Web3Context';

const useContracts = (web3: Web3, selector: Network) => {
  const { networkName } = useWeb3();
  const config = useNetworkConfig();

  const loadContract = async (
    contractName: string,
    address: string,
  ): Promise<Contract<any>> => {
    if (!config) {
      throw new Error('Network configuration is not available.');
    }
    const network = networkEnumToString(networkName).toLowerCase();
    const path = `../constants/abis/${network}/${contractName}.json`;

    try {
      // eslint-disable-next-line @next/next/no-assign-module-variable
      const module = await import(
        `../constants/abis/${network}/${contractName}.json`
      );
      const abi = module.default ? module.default : module;
      return new web3.eth.Contract(abi, address);
    } catch (error) {
      throw new Error(`Failed to load ABI from path: ${path}`);
    }
  };

  const guardianModuleContract = (): Promise<Contract<any>> =>
    loadContract('GuardianModule', config.GUARDIAN_MODULE_ADDRESS);
  const pufferProtocolContract = (): Promise<Contract<any>> =>
    loadContract('PufferProtocol', config.PUFFER_PROTOCOL_CONTRACT_ADDRESS);
  const validatorTicketContract = (): Promise<Contract<any>> =>
    loadContract('ValidatorTicket', config.VALIDATOR_TICKET_CONTRACT_ADDRESS);
  const pufETHContract = (): Promise<Contract<any>> =>
    loadContract('PufferVaultV2', config.PUFFER_VAULT_CONTRACT_ADDRESS);
  const pufferOracleContract = (): Promise<Contract<any>> =>
    loadContract('PufferOracleV2', config.PUFFER_ORACLE_CONTRACT_ADDRESS);

  return {
    guardianModuleContract,
    pufferProtocolContract,
    validatorTicketContract,
    pufETHContract,
    pufferOracleContract,
  };
};

export default useContracts;
