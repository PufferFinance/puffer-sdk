import { WalletClient, PublicClient, getContract, Address } from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { PUF_LOCKER_ABIS } from '../abis/puf-locker-abis';
import { CHAIN_ADDRESSES } from '../addresses';
import { PufToken, TOKENS_ADDRESSES } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';

/**
 * Handler for the `PufLocker` contract exposing methods to interact
 * with the contract.
 */
export class PufLockerHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;

  /**
   * Create the handler for the `PufLocker` contract exposing methods to
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
    return getContract({
      address: CHAIN_ADDRESSES[this.chain].PufLocker as Address,
      abi: PUF_LOCKER_ABIS[this.chain].PufLocker,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  public getAllDeposits(pufToken: PufToken, walletAddress: Address) {
    return this.getContract().read.getAllDeposits([
      TOKENS_ADDRESSES[pufToken][this.chain],
      walletAddress,
    ]);
  }

  public getDeposits(
    userAddress: Address,
    pufToken: PufToken,
    start: bigint,
    limit: bigint,
  ) {
    return this.getContract().read.getDeposits([
      userAddress,
      TOKENS_ADDRESSES[pufToken][this.chain],
      start,
      limit,
    ]);
  }

  public getLockPeriods() {
    return this.getContract().read.getLockPeriods();
  }

  public async deposit(
    walletAddress: Address,
    pufToken: PufToken,
    value: bigint,
    lockPeriod: bigint,
  ) {
    const { r, s, v, yParity, deadline } = await this.erc20PermitHandler
      .withToken(pufToken)
      .getPermitSignature(walletAddress, value);
    const permitData = {
      r,
      s,
      v: Number(v ?? yParity),
      deadline,
      amount: value,
    };

    this.getContract().write.deposit(
      [TOKENS_ADDRESSES[pufToken][this.chain], lockPeriod, permitData],
      {
        account: walletAddress,
        chain: this.viemChain,
      },
    );
  }

  public initialize(accessManager: Address, account: Address = accessManager) {
    return this.getContract().write.initialize([accessManager], {
      account,
      chain: this.viemChain,
    });
  }

  public setLockPeriods(
    walletAddress: Address,
    minLock: bigint,
    maxLock: bigint,
  ) {
    return this.getContract().write.setLockPeriods([minLock, maxLock], {
      account: walletAddress,
      chain: this.viemChain,
    });
  }

  public withdraw(
    pufToken: PufToken,
    depositIndexes: bigint[],
    recipient: Address,
  ) {
    return this.getContract().write.withdraw(
      [TOKENS_ADDRESSES[pufToken][this.chain], depositIndexes, recipient],
      {
        account: recipient,
        chain: this.viemChain,
      },
    );
  }
}
