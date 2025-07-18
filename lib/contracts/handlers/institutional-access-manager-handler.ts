import {
  Chain as ViemChain,
  WalletClient,
  PublicClient,
  getContract,
  GetContractReturnType,
  Address,
  Hex,
} from 'viem';
import { InstitutionalAccessManager } from '../abis/mainnet/InstitutionalAccessManager';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { InvalidContractAddressError } from '../../errors/validation-errors';

/**
 * Handler for the `InstitutionalAccessManager` contract exposing methods to
 * interact with the contract.
 */
export class InstitutionalAccessManagerHandler {
  private viemChain: ViemChain;
  private address?: Address;

  /**
   * Create the handler for the Institutional `AccessManager` contract
   * exposing methods to interact with the contract.
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

    const abi = InstitutionalAccessManager;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({
      address: this.address,
      abi,
      client,
    }) as GetContractReturnType<typeof abi, typeof client, Address>;
  }

  /**
   * Get the admin role.
   *
   * @returns The admin role.
   */
  public getAdminRole() {
    return this.getContract().read.ADMIN_ROLE();
  }

  /**
   * Get the public role.
   *
   * @returns The public role.
   */
  public getPublicRole() {
    return this.getContract().read.PUBLIC_ROLE();
  }

  /**
   * Check if a caller can call a target with a specific selector.
   *
   * @param caller The caller address.
   * @param target The target contract address.
   * @param selector The function selector.
   * @returns Whether the caller can call the target and the delay.
   */
  public canCall(caller: Address, target: Address, selector: Hex) {
    return this.getContract().read.canCall([caller, target, selector]);
  }

  /**
   * Cancel a scheduled operation.
   *
   * @param caller The caller address.
   * @param target The target contract address.
   * @param data The operation data.
   * @returns The nonce.
   */
  public cancel(caller: Address, target: Address, data: Hex) {
    return this.getContract().write.cancel([caller, target, data], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Execute a target with data.
   *
   * @param target The target contract address.
   * @param data The data to execute.
   * @param value The value to send.
   * @returns The nonce.
   */
  public execute(target: Address, data: Hex, value?: bigint) {
    return this.getContract().write.execute([target, data], {
      account: this.walletClient.account!,
      chain: this.viemChain,
      value,
    });
  }

  /**
   * Get access information for a role and account.
   *
   * @param roleId The role ID.
   * @param account The account address.
   * @returns The access information.
   */
  public getAccess(roleId: bigint, account: Address) {
    return this.getContract().read.getAccess([roleId, account]);
  }

  /**
   * Get the nonce for an operation ID.
   *
   * @param id The operation ID.
   * @returns The nonce.
   */
  public getNonce(id: Hex) {
    return this.getContract().read.getNonce([id]);
  }

  /**
   * Get the admin role for a role ID.
   *
   * @param roleId The role ID.
   * @returns The admin role ID.
   */
  public getRoleAdmin(roleId: bigint) {
    return this.getContract().read.getRoleAdmin([roleId]);
  }

  /**
   * Get the grant delay for a role ID.
   *
   * @param roleId The role ID.
   * @returns The grant delay.
   */
  public getRoleGrantDelay(roleId: bigint) {
    return this.getContract().read.getRoleGrantDelay([roleId]);
  }

  /**
   * Get the guardian role for a role ID.
   *
   * @param roleId The role ID.
   * @returns The guardian role ID.
   */
  public getRoleGuardian(roleId: bigint) {
    return this.getContract().read.getRoleGuardian([roleId]);
  }

  /**
   * Get the schedule for an operation ID.
   *
   * @param id The operation ID.
   * @returns The schedule time.
   */
  public getSchedule(id: Hex) {
    return this.getContract().read.getSchedule([id]);
  }

  /**
   * Get the admin delay for a target.
   *
   * @param target The target contract address.
   * @returns The admin delay.
   */
  public getTargetAdminDelay(target: Address) {
    return this.getContract().read.getTargetAdminDelay([target]);
  }

  /**
   * Get the function role for a target and selector.
   *
   * @param target The target contract address.
   * @param selector The function selector.
   * @returns The role ID.
   */
  public getTargetFunctionRole(target: Address, selector: Hex) {
    return this.getContract().read.getTargetFunctionRole([target, selector]);
  }

  /**
   * Grant a role to an account.
   *
   * @param roleId The role ID.
   * @param account The account address.
   * @param executionDelay The execution delay.
   */
  public grantRole(roleId: bigint, account: Address, executionDelay: number) {
    return this.getContract().write.grantRole(
      [roleId, account, executionDelay],
      {
        account: this.walletClient.account!,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Check if an account has a role.
   *
   * @param roleId The role ID.
   * @param account The account address.
   * @returns Whether the account has the role and the execution delay.
   */
  public hasRole(roleId: bigint, account: Address) {
    return this.getContract().read.hasRole([roleId, account]);
  }

  /**
   * Hash an operation.
   *
   * @param caller The caller address.
   * @param target The target address.
   * @param data The operation data.
   * @returns The operation hash.
   */
  public hashOperation(caller: Address, target: Address, data: Hex) {
    return this.getContract().read.hashOperation([caller, target, data]);
  }

  /**
   * Check if a target is closed.
   *
   * @param target The target contract address.
   * @returns Whether the target is closed.
   */
  public isTargetClosed(target: Address) {
    return this.getContract().read.isTargetClosed([target]);
  }

  /**
   * Label a role.
   *
   * @param roleId The role ID.
   * @param label The label.
   * @returns The role ID.
   */
  public labelRole(roleId: bigint, label: string) {
    return this.getContract().write.labelRole([roleId, label], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Get the minimum setback.
   *
   * @returns The minimum setback.
   */
  public getMinSetback() {
    return this.getContract().read.minSetback();
  }

  /**
   * Execute multiple calls.
   *
   * @param data Array of call data.
   * @returns Array of results.
   */
  public multicall(data: Hex[]) {
    return this.getContract().write.multicall([data], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Renounce a role.
   *
   * @param roleId The role ID.
   * @param callerConfirmation The caller confirmation address.
   */
  public renounceRole(roleId: bigint, callerConfirmation: Address) {
    return this.getContract().write.renounceRole([roleId, callerConfirmation], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Revoke a role from an account.
   *
   * @param roleId The role ID.
   * @param account The account address.
   */
  public revokeRole(roleId: bigint, account: Address) {
    return this.getContract().write.revokeRole([roleId, account], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Schedule an operation.
   *
   * @param target The target contract address.
   * @param data The operation data.
   * @param when The execution time.
   * @returns The operation ID and nonce.
   */
  public schedule(target: Address, data: Hex, when: number) {
    return this.getContract().write.schedule([target, data, when], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the grant delay for a role.
   *
   * @param roleId The role ID.
   * @param newDelay The new delay.
   */
  public setGrantDelay(roleId: bigint, newDelay: number) {
    return this.getContract().write.setGrantDelay([roleId, newDelay], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the admin role for a role.
   *
   * @param roleId The role ID.
   * @param admin The admin role ID.
   */
  public setRoleAdmin(roleId: bigint, admin: bigint) {
    return this.getContract().write.setRoleAdmin([roleId, admin], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the guardian role for a role.
   *
   * @param roleId The role ID.
   * @param guardian The guardian role ID.
   */
  public setRoleGuardian(roleId: bigint, guardian: bigint) {
    return this.getContract().write.setRoleGuardian([roleId, guardian], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the admin delay for a target.
   *
   * @param target The target contract address.
   * @param newDelay The new delay.
   */
  public setTargetAdminDelay(target: Address, newDelay: number) {
    return this.getContract().write.setTargetAdminDelay([target, newDelay], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set whether a target is closed.
   *
   * @param target The target contract address.
   * @param closed Whether the target is closed.
   */
  public setTargetClosed(target: Address, closed: boolean) {
    return this.getContract().write.setTargetClosed([target, closed], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the function role for a target.
   *
   * @param target The target contract address.
   * @param selectors Array of function selectors.
   * @param roleId The role ID.
   */
  public setTargetFunctionRole(
    target: Address,
    selectors: Hex[],
    roleId: bigint,
  ) {
    return this.getContract().write.setTargetFunctionRole(
      [target, selectors, roleId],
      {
        account: this.walletClient.account!,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Update the authority for a target.
   *
   * @param target The target contract address.
   * @param newAuthority The new authority address.
   */
  public updateAuthority(target: Address, newAuthority: Address) {
    return this.getContract().write.updateAuthority([target, newAuthority], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }
}
