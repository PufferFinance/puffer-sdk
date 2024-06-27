import { WalletClient, PublicClient, getContract, Address } from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { PUF_TOKEN_ABIS } from '../abis/puf-token-abis';
import { PUF_TOKEN_ADDRESSES, PufToken } from '../puf-tokens';

export class PufTokenHandler {
  private viemChain: ViemChain;
  private pufToken: PufToken;

  /**
   * Create the handler for the `PufToken` contract exposing methods to
   * interact with the contract.
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
    this.pufToken = PufToken.pufWETH;
    this.viemChain = VIEM_CHAINS[chain];
  }

  withPufToken(pufToken: PufToken) {
    this.pufToken = pufToken;
  }

  // This is a method because the typings are complex and lost when
  // trying to make it a member.
  private getContract() {
    return getContract({
      address: PUF_TOKEN_ADDRESSES[this.pufToken][this.chain],
      abi: PUF_TOKEN_ABIS[this.chain].PufToken,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  public allowance(ownerAddress: Address, spenderAddress: Address) {
    return this.getContract().read.allowance([ownerAddress, spenderAddress]);
  }

  public totalDepositCap() {
    return this.getContract().read.totalDepositCap();
  }

  public withdraw(walletAddress: Address, value: bigint) {
    return this.getContract().write.withdraw([walletAddress, value], {
      account: walletAddress,
      chain: this.viemChain,
    });
  }
}
