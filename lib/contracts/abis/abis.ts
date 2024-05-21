import { Chain } from '../../chains/constants';
import { PufferVaultV2 as MainnetPufferVaultV2 } from './mainnet/PufferVaultV2';
import { PufferVaultV2 as HoleskyPufferVaultV2 } from './holesky/PufferVaultV2';
import { PufferVaultV2 as AnvilPufferVaultV2 } from './anvil/PufferVaultV2';

export const CHAIN_ABIS = {
  [Chain.Mainnet]: {
    PufferVaultV2: MainnetPufferVaultV2,
  },
  [Chain.Holesky]: {
    PufferVaultV2: HoleskyPufferVaultV2,
  },
  [Chain.Anvil]: {
    PufferVaultV2: AnvilPufferVaultV2,
  },
};
