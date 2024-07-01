import { Chain } from '../../chains/constants';
import { PufferDepositor as MainnetPufferDepositor } from './mainnet/PufferDepositor';
import { PufferDepositor as HoleskyPufferDepositor } from './holesky/PufferDepositor';
import { PufferL2Depositor } from './mainnet/PufferL2Depositor';

export const PUFFER_DEPOSITOR_ABIS = {
  [Chain.Mainnet]: {
    PufferDepositor: MainnetPufferDepositor,
  },
  [Chain.Holesky]: {
    PufferDepositor: HoleskyPufferDepositor,
  },
};

export const PUFFER_L2_DEPOSITOR_ABIS = {
  [Chain.Mainnet]: { PufferL2Depositor },
  [Chain.Holesky]: { PufferL2Depositor },
};
