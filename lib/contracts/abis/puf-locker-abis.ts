import { Chain } from '../../chains/constants';
import { PufLocker } from './mainnet/PufLocker';

export const PUF_LOCKER_ABIS = {
  [Chain.Mainnet]: { PufLocker },
  [Chain.Holesky]: { PufLocker },
};
