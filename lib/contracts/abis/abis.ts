import { Chain } from '../../chains/constants';
import { PufferVaultV2 as MainnetPufferVaultV2 } from './mainnet/PufferVaultV2';
import { PufferVaultV2 as HoleskyPufferVaultV2 } from './holesky/PufferVaultV2';
import { PufferVaultV2 as AnvilPufferVaultV2 } from './anvil/PufferVaultV2';
import { PufferDepositor as MainnetPufferDepositor } from './mainnet/PufferDepositor';
import { PufferDepositor as HoleskyPufferDepositor } from './holesky/PufferDepositor';

export const CHAIN_ABIS = {
  [Chain.Mainnet]: {
    PufferVaultV2: MainnetPufferVaultV2,
    PufferDepositor: MainnetPufferDepositor,
  },
  [Chain.Holesky]: {
    PufferVaultV2: HoleskyPufferVaultV2,
    PufferDepositor: HoleskyPufferDepositor,
  },
  [Chain.Anvil]: {
    PufferVaultV2: AnvilPufferVaultV2,
  },
};
