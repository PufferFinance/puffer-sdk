import { WalletClient, PublicClient, getContract, Address } from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { PUFFER_L2_DEPOSITOR_ABIS } from '../abis/puffer-depositor-abis';
import { CHAIN_ADDRESSES } from '../addresses';
import { NonPufToken, TOKENS_ADDRESSES } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';

export class PufferL2Depositor {
  private viemChain: ViemChain;
  public tokensHandler: ERC20PermitHandler;

  /**
   * Create the handler for the `PufferL2Depositor` contract exposing
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
    this.tokensHandler = new ERC20PermitHandler(
      chain,
      walletClient,
      publicClient,
    );
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    return getContract({
      address: CHAIN_ADDRESSES[this.chain].PufferL2Depositor as Address,
      abi: PUFFER_L2_DEPOSITOR_ABIS[this.chain].PufferL2Depositor,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  /**
   * Deposit the given token which is pre-approved using
   * `token.approve()` in exchange for pufETH. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param token Token to deposit.
   * @param walletAddress Wallet address to take the token from.
   * @param value Value in wei of the token to deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public depositAfterApproval(
    token: NonPufToken,
    walletAddress: Address,
    value: bigint,
  ) {
    const depositArgs = <const>[
      TOKENS_ADDRESSES[token][this.chain],
      walletAddress,
      // Only `amount` is needed if `token.approve()` is already called.
      { amount: 0n } as any,
      value,
    ];

    const transact = () =>
      this.getContract().write.deposit(depositArgs, {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(depositArgs, {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  /**
   * Deposit the given token in exchange for pufETH. This doesn't make
   * the transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param token Token to deposit.
   * @param walletAddress Wallet address to take the token from.
   * @param value Value in wei of the token to deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public async deposit(
    token: NonPufToken,
    walletAddress: Address,
    value: bigint,
  ) {
    const { r, s, v, yParity, deadline } = await this.tokensHandler
      .withToken(token)
      .getPermitSignature(walletAddress, value);
    const permitData = {
      r,
      s,
      v: Number(v ?? yParity),
      deadline,
      amount: value,
    };

    const depositArgs = <const>[
      TOKENS_ADDRESSES[token][this.chain],
      walletAddress,
      permitData,
      value,
    ];

    const transact = () =>
      this.getContract().write.deposit(depositArgs, {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(depositArgs, {
        account: walletAddress,
      });

    return { transact, estimate };
  }
}
