import { Chain } from '../../chains/constants';
import { stETH } from './mainnet/stETH';
import { wstETH } from './mainnet/wstETH';
import { Token } from '../tokens';
import { ERC20Permit } from './mainnet/ERC20Permit';

export const TOKENS_ABIS = {
  // All chains use the same ABI.
  [Chain.Mainnet]: {
    [Token.stETH]: stETH,
    [Token.wstETH]: wstETH,
  },
  [Chain.Holesky]: {
    [Token.stETH]: stETH,
    [Token.wstETH]: wstETH,
  },
};

export const ERC20PERMIT_ABI = ERC20Permit;
