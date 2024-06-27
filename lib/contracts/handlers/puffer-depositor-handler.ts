import { Address, PublicClient, WalletClient, getContract } from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { PUFFER_DEPOSITOR_ABIS } from '../abis/puffer-depositor-abis';
import { CHAIN_ADDRESSES } from '../addresses';
import { TokensHandler } from './tokens-handler';
import { Token } from '../tokens';

/**
 * Handler for the `PufferDepositor` contract exposing methods to
 * interact with the contract.
 */
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

  /**
   * Deposit stETH in exchange for pufETH. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param walletAddress Wallet address to get the stETH from.
   * @param value Value in wei of the stETH to deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
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

  /**
   * Deposit wstETH in exchange for pufETH. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param walletAddress Wallet address to get the stETH from.
   * @param value Value in wei of the wstETH to deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public async depositWstETH(walletAddress: Address, value: bigint) {
    const { r, s, v, yParity, deadline } =
      await this.tokensHandler.getPermitSignature(
        Token.wstETH,
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
      await this.getContract().write.depositWstETH(
        [permitData, walletAddress],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );
    const estimate = async () =>
      await this.getContract().estimateGas.depositWstETH(
        [permitData, walletAddress],
        { account: walletAddress },
      );

    return { transact, estimate };
  }
}
