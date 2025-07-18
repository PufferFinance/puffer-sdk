import { WalletClient, PublicClient, isHash } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { InstitutionalAccessManager } from '../../abis/mainnet/InstitutionalAccessManager';
import { InstitutionalAccessManagerHandler } from '../institutional-access-manager-handler';
import { generateAddress } from '../../../../test/mocks/address';
import { InvalidContractAddressError } from '../../../errors/validation-errors';
import { Chain } from '../../../chains/constants';

describe('InstitutionalAccessManagerHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    InstitutionalAccessManager,
  );
  let handler: InstitutionalAccessManagerHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient(Chain.Holesky, undefined, mockAccount);
    publicClient = setupTestPublicClient();

    handler = new InstitutionalAccessManagerHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
  });

  it('should set and get the address used by the handler', () => {
    const address = generateAddress();
    handler.withAddress(address);

    expect(handler.getAddress()).toBe(address);
  });

  it('should throw an error if the address is not set and a method is called', () => {
    const address = generateAddress();
    contractTestingUtils.mockCall('ADMIN_ROLE', [address]);

    expect(() => handler.getAdminRole()).toThrow(InvalidContractAddressError);
  });

  describe('with address set', () => {
    beforeEach(() => {
      handler.withAddress(generateAddress());
    });

    it('should get the admin role', async () => {
      const role = 1n;
      contractTestingUtils.mockCall('ADMIN_ROLE', [role]);

      const result = await handler.getAdminRole();
      expect(result).toBe(role);
    });

    it('should get the public role', async () => {
      const role = 2n;
      contractTestingUtils.mockCall('PUBLIC_ROLE', [role]);

      const result = await handler.getPublicRole();
      expect(result).toBe(role);
    });

    it('should check if a caller can call a target with a specific selector', async () => {
      const caller = generateAddress();
      const target = generateAddress();
      const selector = '0x6056b271';
      const canCall = true;
      const canCallDelay = 1000;
      contractTestingUtils.mockCall('canCall', [canCall, canCallDelay]);

      const result = await handler.canCall(caller, target, selector);
      expect(result).toEqual({
        canCall,
        canCallDelay,
      });
    });

    it('should cancel a scheduled operation', async () => {
      const caller = generateAddress(20);
      const target = generateAddress();
      const data = '0x12345678';
      contractTestingUtils.mockTransaction('cancel');

      const txHash = await handler.cancel(caller, target, data);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should execute on target with data', async () => {
      const target = generateAddress();
      const data = '0x12345678';
      const value = 10n;
      contractTestingUtils.mockTransaction('execute');

      const txHash = await handler.execute(target, data, value);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should execute on target with data without value', async () => {
      const target = generateAddress();
      const data = '0x12345678';
      contractTestingUtils.mockTransaction('execute');

      const txHash = await handler.execute(target, data);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should get access information for a role and account', async () => {
      const roleId = 1n;
      const account = generateAddress();
      const access = {
        since: 100,
        currentDelay: 1,
        pendingDelay: 1,
        effect: 0,
      };
      const { since, currentDelay, pendingDelay, effect } = access;
      contractTestingUtils.mockCall('getAccess', [
        since,
        currentDelay,
        pendingDelay,
        effect,
      ]);

      const result = await handler.getAccess(roleId, account);
      expect(result).toEqual(access);
    });

    it('should get the nonce for an operation ID', async () => {
      const id = generateAddress(32);
      const nonce = 1;
      contractTestingUtils.mockCall('getNonce', [nonce]);

      const result = await handler.getNonce(id);
      expect(result).toBe(nonce);
    });

    it('should get the ID of the admin role for a role ID', async () => {
      const roleId = 1n;
      const adminRole = 2n;
      contractTestingUtils.mockCall('getRoleAdmin', [adminRole]);

      const result = await handler.getRoleAdmin(roleId);
      expect(result).toBe(adminRole);
    });

    it('should get the grant delay for a role ID', async () => {
      const roleId = 1n;
      const delay = 86400;
      contractTestingUtils.mockCall('getRoleGrantDelay', [delay]);

      const result = await handler.getRoleGrantDelay(roleId);
      expect(result).toBe(delay);
    });

    it('should get the guardian role for a role ID', async () => {
      const roleId = 1n;
      const guardianRole = 3n;
      contractTestingUtils.mockCall('getRoleGuardian', [guardianRole]);

      const result = await handler.getRoleGuardian(roleId);
      expect(result).toBe(guardianRole);
    });

    it('should get the schedule for an operation ID', async () => {
      const id = generateAddress(32);
      const schedule = 1000;
      contractTestingUtils.mockCall('getSchedule', [schedule]);

      const result = await handler.getSchedule(id);
      expect(result).toBe(schedule);
    });

    it('should get the admin delay for a target', async () => {
      const target = generateAddress();
      const delay = 86400;
      contractTestingUtils.mockCall('getTargetAdminDelay', [delay]);

      const result = await handler.getTargetAdminDelay(target);
      expect(result).toBe(delay);
    });

    it('should get the function role for a target and selector', async () => {
      const target = generateAddress();
      const selector = '0x6056b271';
      const roleId = 1n;
      contractTestingUtils.mockCall('getTargetFunctionRole', [roleId]);

      const result = await handler.getTargetFunctionRole(target, selector);
      expect(result).toBe(roleId);
    });

    it('should grant a role to an account', async () => {
      const roleId = 1n;
      const account = generateAddress();
      const executionDelay = 86400;
      contractTestingUtils.mockTransaction('grantRole');

      const txHash = await handler.grantRole(roleId, account, executionDelay);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should check if an account has a role', async () => {
      const roleId = 1n;
      const account = generateAddress();
      const isMember = true;
      const executionDelay = 1000;
      contractTestingUtils.mockCall('hasRole', [isMember, executionDelay]);

      const result = await handler.hasRole(roleId, account);
      expect(result).toEqual({ isMember, executionDelay });
    });

    it('should hash an operation', async () => {
      const caller = generateAddress(20);
      const target = generateAddress();
      const data = '0x12345678';
      const hash = generateAddress(32);
      contractTestingUtils.mockCall('hashOperation', [hash]);

      const result = await handler.hashOperation(caller, target, data);
      expect(result).toBe(hash);
    });

    it('should check if a target is closed', async () => {
      const target = generateAddress();
      const isClosed = false;
      contractTestingUtils.mockCall('isTargetClosed', [isClosed]);

      const result = await handler.isTargetClosed(target);
      expect(result).toBe(isClosed);
    });

    it('should label a role', async () => {
      const roleId = 1n;
      const label = 'admin';
      contractTestingUtils.mockTransaction('labelRole');

      const txHash = await handler.labelRole(roleId, label);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should get the minimum setback', async () => {
      const minSetback = 3600;
      contractTestingUtils.mockCall('minSetback', [minSetback]);

      const result = await handler.getMinSetback();
      expect(result).toBe(minSetback);
    });

    it('should execute multiple calls', async () => {
      const data: `0x${string}`[] = ['0x12345678', '0x87654321'];
      contractTestingUtils.mockTransaction('multicall');

      const txHash = await handler.multicall(data);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should renounce a role', async () => {
      const roleId = 1n;
      const callerConfirmation = generateAddress();
      contractTestingUtils.mockTransaction('renounceRole');

      const txHash = await handler.renounceRole(roleId, callerConfirmation);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should revoke a role from an account', async () => {
      const roleId = 1n;
      const account = generateAddress();
      contractTestingUtils.mockTransaction('revokeRole');

      const txHash = await handler.revokeRole(roleId, account);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should schedule an operation', async () => {
      const target = generateAddress();
      const data = '0x12345678';
      const when = 1000;
      contractTestingUtils.mockTransaction('schedule');

      const txHash = await handler.schedule(target, data, when);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should set the grant delay for a role', async () => {
      const roleId = 1n;
      const newDelay = 172800;
      contractTestingUtils.mockTransaction('setGrantDelay');

      const txHash = await handler.setGrantDelay(roleId, newDelay);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should set the admin role for a role', async () => {
      const roleId = 1n;
      const admin = 2n;
      contractTestingUtils.mockTransaction('setRoleAdmin');

      const txHash = await handler.setRoleAdmin(roleId, admin);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should set the guardian role for a role', async () => {
      const roleId = 1n;
      const guardian = 3n;
      contractTestingUtils.mockTransaction('setRoleGuardian');

      const txHash = await handler.setRoleGuardian(roleId, guardian);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should set the admin delay for a target', async () => {
      const target = generateAddress();
      const newDelay = 172800;
      contractTestingUtils.mockTransaction('setTargetAdminDelay');

      const txHash = await handler.setTargetAdminDelay(target, newDelay);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should set whether a target is closed', async () => {
      const target = generateAddress();
      const closed = true;
      contractTestingUtils.mockTransaction('setTargetClosed');

      const txHash = await handler.setTargetClosed(target, closed);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should set the function role for a target', async () => {
      const target = generateAddress();
      const selectors: `0x${string}`[] = ['0x6056b271', '0x29d85402'];
      const roleId = 1n;
      contractTestingUtils.mockTransaction('setTargetFunctionRole');

      const txHash = await handler.setTargetFunctionRole(
        target,
        selectors,
        roleId,
      );
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should update the authority for a target', async () => {
      const target = generateAddress();
      const newAuthority = generateAddress();
      contractTestingUtils.mockTransaction('updateAuthority');

      const txHash = await handler.updateAuthority(target, newAuthority);
      expect(isHash(txHash)).toBeTruthy();
    });

    describe('helper methods', () => {
      it('should convert a label to a role ID', () => {
        const label = 'admin';
        const roleId = handler.labelToRoleId(label);

        expect(typeof roleId).toBe('bigint');
        expect(roleId).toBeGreaterThan(0n);
      });

      it('should convert a role ID back to a label', () => {
        const label = 'admin';
        const roleId = handler.labelToRoleId(label);
        const convertedLabel = handler.roleIdToLabel(roleId);

        expect(convertedLabel).toBe(label);
      });

      it('should get the selector for a function name', () => {
        const functionName = 'deposit';
        const selector = handler.getSelectorFromFunctionName(functionName);

        expect(selector).toBe('0x6e553f65');
      });

      it('should get the function name for a selector', () => {
        const selector = '0x6e553f65';
        const functionName = handler.getFunctionNameFromSelector(selector);

        expect(functionName).toContain('deposit');
      });

      it('should return undefined for unknown function name', () => {
        const functionName = 'unknownFunction';
        const selector = handler.getSelectorFromFunctionName(functionName);

        expect(selector).toBeUndefined();
      });

      it('should return undefined for unknown selector', () => {
        const selector = '0x00000000';
        const functionName = handler.getFunctionNameFromSelector(selector);

        expect(functionName).toBeUndefined();
      });

      it('should process convert a role label to a role ID if needed', async () => {
        const labelToRoleIdSpy = jest.spyOn(handler, 'labelToRoleId');
        const roleLabel = 'admin';
        contractTestingUtils.mockTransaction('labelRole');

        const result = await handler.labelRole(roleLabel, 'admin');
        expect(isHash(result)).toBeTruthy();
        expect(labelToRoleIdSpy).toHaveBeenCalledWith(roleLabel);
      });

      it('should not call the labelToRoleId method if the role ID is provided', async () => {
        const labelToRoleIdSpy = jest.spyOn(handler, 'labelToRoleId');
        const roleId = 1n;
        contractTestingUtils.mockTransaction('labelRole');

        const result2 = await handler.labelRole(roleId, 'admin');
        expect(isHash(result2)).toBeTruthy();
        expect(labelToRoleIdSpy).not.toHaveBeenCalled();
      });
    });
  });
});
