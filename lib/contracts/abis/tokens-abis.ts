import { Chain } from '../../chains/constants';
import { stETH as MainnetStETH } from './mainnet/stETH';
import { stETH as HoleskyStETH } from './holesky/stETH';
import { wstETH as MainnetWstETH } from './mainnet/wstETH';
import { wstETH as HoleskyWstETH } from './holesky/wstETH';

export const TOKENS_ABIS = {
  [Chain.Mainnet]: {
    stETH: MainnetStETH,
    wstETH: MainnetWstETH,
  },
  [Chain.Holesky]: {
    stETH: HoleskyStETH,
    wstETH: HoleskyWstETH,
  },
};
