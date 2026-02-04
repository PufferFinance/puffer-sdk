import {
  Chain as ViemChain,
  WalletClient,
  PublicClient,
  getContract,
  GetContractReturnType,
  Address,
  Hex,
} from 'viem';
import { NonRestakingWithdrawalCredentials } from '../abis/mainnet/NonRestakingWithdrawalCredentials';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { InvalidContractAddressError } from '../../errors/validation-errors';

export type ConsolidationRequest = {
  srcPubkey: Hex;
  targetPubkey: Hex;
};

export type WithdrawalRequest = {
  pubkey: Hex;
  amountGwei: bigint;
};

/**
 * Handler for the `NonRestakingWithdrawalCredentials` contract exposing methods to
 * interact with the contract.
 */
export class NonRestakingWithdrawalCredentialsHandler {
  private viemChain: ViemChain;
  private address?: Address;

  /**
   * Create the handler for the `NonRestakingWithdrawalCredentials` contract exposing
   * methods to interact with the contract.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet
   * interactions.
   * @param publicClient The public client to use for public
   * interactions.
   */
  constructor(
    chain: Chain,
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {
    this.viemChain = VIEM_CHAINS[chain];
  }

  /**
   * Set the address of the contract for this handler.
   *
   * @param address The address of the contract.
   * @returns The handler.
   */
  public withAddress(address: Address) {
    this.address = address;

    return this;
  }

  /**
   * Get the address of the contract for this handler.
   *
   * @returns The address of the contract.
   */
  public getAddress() {
    return this.address;
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    if (!this.address) {
      throw new InvalidContractAddressError(
        `No address specified for the contract`,
        {
          fixMessage: `Set the contract address in the handler by using the setAddress method`,
        },
      );
    }

    const abi = NonRestakingWithdrawalCredentials;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({
      address: this.address,
      abi,
      client,
    }) as GetContractReturnType<typeof abi, typeof client, Address>;
  }

  /**
   * Get the authority of the contract.
   *
   * @returns The authority address.
   */
  public authority() {
    return this.getContract().read.authority();
  }

  /**
   * Get the consolidation request fee.
   *
   * @returns The consolidation request fee.
   */
  public getConsolidationRequestFee() {
    return this.getContract().read.getConsolidationRequestFee();
  }

  /**
   * Get the withdrawal request fee.
   *
   * @returns The withdrawal request fee.
   */
  public getWithdrawalRequestFee() {
    return this.getContract().read.getWithdrawalRequestFee();
  }

  /**
   * Get the vault address.
   *
   * @returns The vault address.
   */
  public vault() {
    return this.getContract().read.vault();
  }

  /**
   * Request consolidation of validators.
   *
   * @param requests The consolidation requests containing srcPubkey and targetPubkey.
   * @param value The amount of ETH to send with the transaction for fees.
   */
  public requestConsolidation(requests: ConsolidationRequest[], value: bigint) {
    return this.getContract().write.requestConsolidation([requests], {
      account: this.walletClient.account!,
      chain: this.viemChain,
      value,
    });
  }

  /**
   * Request withdrawal from validators.
   *
   * @param requests The withdrawal requests containing pubkey and amountGwei.
   * @param value The amount of ETH to send with the transaction for fees.
   */
  public requestWithdrawal(requests: WithdrawalRequest[], value: bigint) {
    return this.getContract().write.requestWithdrawal([requests], {
      account: this.walletClient.account!,
      chain: this.viemChain,
      value,
    });
  }

  /**
   * Withdraw ETH from the contract.
   */
  public withdrawETH() {
    return this.getContract().write.withdrawETH({
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }
}
