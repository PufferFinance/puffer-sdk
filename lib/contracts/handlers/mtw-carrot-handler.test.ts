import { Chain } from '../../chains/constants';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { MtwCarrotHandler } from './mtw-carrot-handler';
import { mtwCARROT } from '../abis/mainnet/mtwCARROT';
import { TOKENS_ADDRESSES, Token } from '../tokens';
import { isHash, padHex } from 'viem';

describe('MtwCarrotHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    mtwCARROT,
    TOKENS_ADDRESSES[Token.mtwCARROT][Chain.Mainnet],
  );
  let handler: MtwCarrotHandler;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Mainnet });
    const walletClient = setupTestWalletClient(Chain.Mainnet);
    const publicClient = setupTestPublicClient(Chain.Mainnet);

    handler = new MtwCarrotHandler(Chain.Mainnet, walletClient, publicClient);
  });

  it('should get the allowance', async () => {
    const mockAllowance = 100n;
    contractTestingUtils.mockCall('allowance', [mockAllowance]);

    const allowance = await handler.allowance(mockAccount, mockAccount);
    expect(allowance).toEqual(mockAllowance);
  });

  // it("should get user's claimable amount", async () => {
  //   const mockClaimable = 100n;
  //   contractTestingUtils.mockCall('claimable', [mockClaimable], {
  //     callValues: [mockAccount],
  //   });

  //   const claimable = await handler.claimable(mockAccount);
  //   expect(claimable).toEqual(mockClaimable);
  // });

  it('should get cliff duration', async () => {
    const mockCliffDuration = 100n;
    contractTestingUtils.mockCall('cliffDuration', [mockCliffDuration]);

    const cliffDuration = await handler.cliffDuration();
    expect(cliffDuration).toEqual(Number(mockCliffDuration));
  });

  it('should get user vestings', async () => {
    const mockVestings = {
      allVestings: [
        {
          amount: 100n,
          unlockTimestamp: 100n,
        },
      ],
      nextClaimIndex: 1n,
    };
    contractTestingUtils.mockCall('getUserVestings', [
      mockVestings.allVestings,
      mockVestings.nextClaimIndex,
    ]);

    const vestings = await handler.getUserVestings(mockAccount);
    expect(vestings).toEqual(mockVestings);
  });

  it('should check if token is wrapper', async () => {
    const mockIsWrapper = true;
    contractTestingUtils.mockCall('isTokenWrapper', [mockIsWrapper]);

    const isWrapper = await handler.isTokenWrapper();
    expect(isWrapper).toEqual(mockIsWrapper);
  });

  it('should get the symbol', async () => {
    const mockSymbol = 'mtwCARROT';
    contractTestingUtils.mockCall('symbol', [mockSymbol]);

    const symbol = await handler.symbol();
    expect(symbol).toEqual(mockSymbol);
  });

  it('should get the token address this contract wraps', async () => {
    const mockTokenAddress = padHex('0x', { size: 20 });
    contractTestingUtils.mockCall('token', [mockTokenAddress]);

    const tokenAddress = await handler.token();
    expect(tokenAddress).toEqual(mockTokenAddress);
  });

  it('should get the underlying token', async () => {
    const mockUnderlyingToken = padHex('0x', { size: 20 });
    contractTestingUtils.mockCall('underlying', [mockUnderlyingToken]);

    const underlyingToken = await handler.underlying();
    expect(underlyingToken).toEqual(mockUnderlyingToken);
  });

  it('should get vesting data', async () => {
    const mockVestingData = 100n;
    contractTestingUtils.mockCall('vestingData', [mockVestingData]);

    const vestingData = await handler.vestingData(mockAccount);
    expect(vestingData).toEqual(mockVestingData);
  });

  it('should approve the usage of token for a spender', async () => {
    contractTestingUtils.mockTransaction('approve');
    const mockSpender = padHex('0x', { size: 20 });

    const txHash = await handler.approve(mockAccount, mockSpender, 1n);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should decrease allowance', async () => {
    contractTestingUtils.mockTransaction('decreaseAllowance');
    const mockSpender = padHex('0x', { size: 20 });

    const txHash = await handler.decreaseAllowance(
      mockAccount,
      mockSpender,
      1n,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should increase allowance', async () => {
    contractTestingUtils.mockTransaction('increaseAllowance');
    const mockSpender = padHex('0x', { size: 20 });

    const txHash = await handler.increaseAllowance(
      mockAccount,
      mockSpender,
      1n,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should recover ERC20 tokens', async () => {
    contractTestingUtils.mockTransaction('recoverERC20');
    const mockTokenAddress = padHex('0x', { size: 20 });
    const mockTo = padHex('0x', { size: 20 });
    const mockAmountToRecover = 1n;

    const txHash = await handler.recoverERC20(
      mockAccount,
      mockTokenAddress,
      mockTo,
      mockAmountToRecover,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should transfer tokens to another address', async () => {
    contractTestingUtils.mockTransaction('transfer');
    const mockTo = padHex('0x', { size: 20 });
    const mockAmount = 1n;

    const txHash = await handler.transfer(mockAccount, mockTo, mockAmount);
    expect(isHash(txHash)).toBeTruthy();
  });

  // it('should claim tokens', async () => {
  //   contractTestingUtils.mockTransaction('claim');
  //   const mockUser = padHex('0x', { size: 20 });
  //   const mockMaxClaimIndex = 1n;

  //   const txHash = await handler.claim(
  //     mockAccount,
  //     mockUser,
  //     mockMaxClaimIndex,
  //   );
  //   expect(isHash(txHash)).toBeTruthy();
  // });

  // it('should claim tokens without max claim index', async () => {
  //   contractTestingUtils.mockTransaction('claim');
  //   const mockUser = padHex('0x', { size: 20 });

  //   const txHash = await handler.claim(mockAccount, mockUser);
  //   expect(isHash(txHash)).toBeTruthy();
  // });
});
