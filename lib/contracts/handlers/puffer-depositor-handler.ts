import {
  Address,
  PublicClient,
  Chain as ViemChain,
  WalletClient,
  getContract,
} from 'viem';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { PUFFER_DEPOSITOR_ABIS } from '../abis/puffer-depositor-abis';
import { CHAIN_ADDRESSES } from '../addresses';
import { TokensHandler } from './tokens-handler';
import { Token } from '../tokens';

export class PufferDepositorHandler {
  private viemChain: ViemChain;
  public tokensHandler: TokensHandler;

  /**
   * Create the handler for the `PufferDepositor` contract exposing
   * methods to interact with the contract.
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
    this.tokensHandler = new TokensHandler(chain, walletClient, publicClient);
  }

  private getContract() {
    return getContract({
      address: CHAIN_ADDRESSES[this.chain].PufferDepositor as Address,
      abi: PUFFER_DEPOSITOR_ABIS[this.chain].PufferDepositor,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  public async depositStETH(walletAddress: Address, value: bigint) {
    const { r, s, v, yParity, deadline } =
      await this.tokensHandler.getPermitSignature(
        Token.stETH,
        walletAddress,
        value,
      );
    const permitData = {
      r,
      s,
      v: Number(v ?? yParity),
      deadline,
      amount: value,
    };

    const transact = async () =>
      await this.getContract().write.depositStETH([permitData, walletAddress], {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = async () =>
      await this.getContract().estimateGas.depositStETH(
        [permitData, walletAddress],
        { account: walletAddress },
      );

    return { transact, estimate };
  }
}
