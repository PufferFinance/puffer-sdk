import { Chain } from '../../chains/constants';
import { PufferVaultV2 as MainnetPufferVaultV2 } from './mainnet/PufferVaultV2';
import { PufferVaultV2 as HoleskyPufferVaultV2 } from './holesky/PufferVaultV2';

export const PUFFER_VAULT_ABIS = {
  [Chain.Mainnet]: {
    PufferVaultV2: MainnetPufferVaultV2,
  },
  [Chain.Holesky]: {
    PufferVaultV2: HoleskyPufferVaultV2,
  },
};
