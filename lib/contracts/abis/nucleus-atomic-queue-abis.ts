import { Chain } from '../../chains/constants';
import { AtomicQueue } from './mainnet/AtomicQueue';

export const NUCLEUS_ATOMIC_QUEUE_ABIS = {
  [Chain.Mainnet]: { AtomicQueue },
};
