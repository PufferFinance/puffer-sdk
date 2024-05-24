import {
  Abi,
  Address,
  Client,
  GetContractReturnType,
  PublicClient,
  WalletClient,
  getContract,
} from 'viem';

type KeyedClient = {
  wallet: Client;
  public: Client;
};

/**
 * Abstraction for loading contracts.
 */
export class ContractHandler {
  private memoizedContracts: {
    [address: string]: ReturnType<typeof getContract>;
  };

  constructor(
    private walletClient: WalletClient,
    private publicClient?: PublicClient,
  ) {
    this.memoizedContracts = {};
  }

  /**
   * Get contract and cache it.
   *
   * @param address Address of the contract.
   * @param abi ABI of the contract.
   * @returns The viem interface of a contract with wallet and public
   * actions.
   */
  public getContract<const TAbi extends Abi | readonly unknown[]>(
    address: Address,
    abi: TAbi,
  ) {
    if (address in this.memoizedContracts) {
      return this.memoizedContracts[address] as GetContractReturnType<
        TAbi,
        KeyedClient,
        Address
      >;
    }

    const contract = getContract({
      address,
      abi,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });

    this.memoizedContracts[address] = contract;

    return contract;
  }
}
