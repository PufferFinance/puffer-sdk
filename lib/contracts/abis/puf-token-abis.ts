import { Chain } from '../../chains/constants';
import { PufToken } from './mainnet/PufToken';

export const PUF_TOKEN_ABIS = {
  [Chain.Mainnet]: {
    PufferDepositor: PufToken,
  },
  [Chain.Holesky]: {
    PufferDepositor: PufToken,
  },
};
