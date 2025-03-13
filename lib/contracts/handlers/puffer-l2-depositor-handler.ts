import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  padHex,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { TOKENS_ADDRESSES, Token } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';
import { PufferL2Depositor } from '../abis/mainnet/PufferL2Depositor';

export type L2DepositParams = {
  token: Token;
  account: Address;
  value: bigint;
  referralCode?: bigint;
  lockPeriod?: bigint;
  isPreapproved?: boolean;
};

/**
 * Handler for the `PufferL2Depositor` contract exposing methods to
 * interact with the contract.
 */
export class PufferL2DepositorHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;

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
    this.erc20PermitHandler = new ERC20PermitHandler(
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
    const address = CONTRACT_ADDRESSES[this.chain].PufferL2Depositor as Address;
    const abi = PufferL2Depositor;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Deposit the given token in exchange for the wrapped PufToken. This
   * doesn't make the transaction but returns two methods namely
   * `transact` and `estimate`.
   *
   * Note that not all token contracts support permit signatures (e.g.
   * USDC). If a token's contract doesn't support permit signatures, use
   * `Token.approve()` and be sure to set the option `isPreapproved` to
   * `true`.
   *
   * @param depositParams.token Token to deposit.
   * @param depositParams.account Wallet address to take the token from.
   * @param depositParams.value Value in wei of the token to deposit.
   * @param depositParams.referralCode Referral code for the deposit.
   * @param depositParams.lockPeriod The period for the deposit in
   * seconds.
   * @param depositParams.isPreapproved Whether the token is
   * pre-approved or needs a permit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public async deposit(depositParams: L2DepositParams) {
    const {
      token,
      account,
      value,
      referralCode = 0n,
      lockPeriod = 0n,
      isPreapproved = false,
    } = depositParams;

    // Only `amount` is needed if `Token.approve()` is already called.
    // So using mock values for other properties.
    let permitData = {
      r: padHex('0x', { size: 32 }),
      s: padHex('0x', { size: 32 }),
      v: 0,
      deadline: 0n,
      amount: value,
    };

    if (!isPreapproved) {
      const { r, s, v, yParity, deadline } = await this.erc20PermitHandler
        .withToken(token)
        .getPermitSignature(
          account,
          CONTRACT_ADDRESSES[this.chain].PufferL2Depositor as Address,
          value,
        );
      /* istanbul ignore next */
      permitData = {
        r,
        s,
        v: Number(v ?? yParity),
        deadline,
        amount: value,
      };
    }

    const depositArgs = <const>[
      TOKENS_ADDRESSES[token][this.chain],
      account,
      permitData,
      referralCode,
      lockPeriod,
    ];

    const transact = () =>
      this.getContract().write.deposit(depositArgs, {
        account,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(depositArgs, {
        account,
      });

    return { transact, estimate };
  }
}
