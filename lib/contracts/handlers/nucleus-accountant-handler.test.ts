import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { NUCLEUS_ACCOUNTANT_ABIS } from '../abis/nucleus-accountant-abis';
import { Chain } from '../../chains/constants';
import { NucleusAccountantHandler } from './nucleus-accountant-handler';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { generateAddress } from '../../../test/mocks/address';
import { Address } from 'viem';
import { UnifiToken } from '../tokens';
import { NUCLEUS_CONTRACT_ADDRESSES } from '../addresses';

describe('NucleusAccountantHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    NUCLEUS_ACCOUNTANT_ABIS[Chain.Mainnet].Accountant,
  );
  let handler: NucleusAccountantHandler;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Mainnet });
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new NucleusAccountantHandler(
      Chain.Mainnet,
      walletClient,
      publicClient,
    );
  });

  it('should get the rate provider data', async () => {
    const tokenAddress = generateAddress();
    const mockRateProviderData = {
      isPeggedToBase: true,
      rateProvider: generateAddress(),
    };
    contractTestingUtils.mockCall('rateProviderData', [
      mockRateProviderData.isPeggedToBase,
      mockRateProviderData.rateProvider,
    ]);

    const rateProviderData = await handler.rateProviderData(tokenAddress);
    rateProviderData.rateProvider =
      rateProviderData.rateProvider.toLowerCase() as Address;
    expect(rateProviderData).toEqual(mockRateProviderData);
  });

  it('should get the vault', async () => {
    const mockVault = generateAddress();
    contractTestingUtils.mockCall('vault', [mockVault]);

    const vault = await handler.vault();
    expect(vault.toLowerCase()).toEqual(mockVault);
  });

  it('should get the different types of rates', async () => {
    const mockRate = 100n;
    const tokenAddress = generateAddress();

    contractTestingUtils.mockCall('getRate', [mockRate]);
    const rate = await handler.getRate();
    expect(rate).toEqual(mockRate);

    contractTestingUtils.mockCall('getRateSafe', [mockRate]);
    const rateSafe = await handler.getRateSafe();
    expect(rateSafe).toEqual(mockRate);

    contractTestingUtils.mockCall('getRateInQuote', [mockRate]);
    const rateInQuote = await handler.getRateInQuote(tokenAddress);
    expect(rateInQuote).toEqual(mockRate);

    contractTestingUtils.mockCall('getRateInQuoteSafe', [mockRate]);
    const rateInQuoteSafe = await handler.getRateInQuoteSafe(tokenAddress);
    expect(rateInQuoteSafe).toEqual(mockRate);
  });

  it('should use the given token to call contract functions', async () => {
    const unifiBTCAccountant = handler
      .withToken(UnifiToken.unifiBTC)
      .getContract();
    expect(unifiBTCAccountant.address).toEqual(
      NUCLEUS_CONTRACT_ADDRESSES[UnifiToken.unifiBTC][Chain.Mainnet]
        .NucleusAccountant,
    );

    const unifiUSDAcountant = handler
      .withToken(UnifiToken.unifiUSD)
      .getContract();
    expect(unifiUSDAcountant.address).toEqual(
      NUCLEUS_CONTRACT_ADDRESSES[UnifiToken.unifiUSD][Chain.Mainnet]
        .NucleusAccountant,
    );
  });
});
