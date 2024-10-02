import { Chain } from '../../chains/constants';
import { Accountant } from './mainnet/Accountant';

export const NUCLEUS_ACCOUNTANT_ABIS = {
  [Chain.Mainnet]: { Accountant },
  [Chain.Holesky]: { Accountant },
};
