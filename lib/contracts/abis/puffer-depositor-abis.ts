import { Chain } from '../../chains/constants';
import { PufferDepositor as MainnetPufferDepositor } from './mainnet/PufferDepositor';
import { PufferDepositor as HoleskyPufferDepositor } from './holesky/PufferDepositor';

export const PUFFER_DEPOSITOR_ABIS = {
  [Chain.Mainnet]: {
    PufferDepositor: MainnetPufferDepositor,
  },
  [Chain.Holesky]: {
    PufferDepositor: HoleskyPufferDepositor,
  },
};
