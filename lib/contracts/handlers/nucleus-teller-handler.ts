import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { NUCLEUS_TELLER_ABIS } from '../abis/nucleus-teller-abis';
import { Token, TOKENS_ADDRESSES } from '../tokens';

/**
 * Handler for the `Teller` contract from nucleus.
 */
export class NucleusTellerHandler {
  private viemChain: ViemChain;

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
  ) {
    this.viemChain = VIEM_CHAINS[chain];
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].NucleusTeller as Address;
    const abi = NUCLEUS_TELLER_ABIS[this.chain].Teller;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Deposit the given token for staking.
   *
   * @param walletAddress Address of the caller of the transaction.
   * @param token Token to deposit.
   * @param amount Amount of the token to deposit.
   * @param minimumMint Minimum amount of shares to mint.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public deposit(
    walletAddress: Address,
    token: Token,
    amount: bigint,
    minimumMint: bigint,
  ) {
    const tokenAddress = TOKENS_ADDRESSES[token][this.chain];

    const transact = () =>
      this.getContract().write.deposit([tokenAddress, amount, minimumMint], {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(
        [tokenAddress, amount, minimumMint],
        {
          account: walletAddress,
        },
      );

    return { transact, estimate };
  }
}
