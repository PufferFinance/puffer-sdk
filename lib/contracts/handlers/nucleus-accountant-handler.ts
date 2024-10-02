import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { NUCLEUS_ACCOUNTANT_ABIS } from '../abis/nucleus-accountant-abis';

/**
 * Handler for the `Accountant` contract from nucleus.
 */
export class NucleusAccountantHandler {
  /**
   * Create the handler for processing tokens.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet
   * interactions.
   * @param publicClient The public client to use for public
   * interactions.
   */
  constructor(
    private chain: Chain,
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {}

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].NucleusAccountant as Address;
    const abi = NUCLEUS_ACCOUNTANT_ABIS[this.chain].Accountant;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the rate provider data for the given token address.
   *
   * @param tokenAddress Address of the token.
   * @returns Rate provider data for the given token address.
   */
  public async rateProviderData(tokenAddress: Address) {
    const [isPeggedToBase, rateProvider] =
      await this.getContract().read.rateProviderData([tokenAddress]);

    return { isPeggedToBase, rateProvider };
  }

  /**
   * Get the vault for the given token address.
   *
   * @returns Vault for the given token address.
   */
  public vault() {
    return this.getContract().read.vault();
  }

  /**
   * Get the rate for the given token address.
   *
   * @returns Rate for the given token address.
   */
  public getRate() {
    return this.getContract().read.getRate();
  }

  /**
   * Get the rate for the given token address for safe.
   *
   * @returns Rate for the given token address for safe.
   */
  public getRateSafe() {
    return this.getContract().read.getRateSafe();
  }

  /**
   * Get the rate from the given quote address.
   *
   * @returns Rate for the given quote address.
   */
  public getRateInQuote(quoteAddress: Address) {
    return this.getContract().read.getRateInQuote([quoteAddress]);
  }

  /**
   * Get the rate from the given quote address for safe.
   *
   * @returns Rate for the given quote address for safe.
   */
  public getRateInQuoteSafe(quoteAddress: Address) {
    return this.getContract().read.getRateInQuoteSafe([quoteAddress]);
  }
}
