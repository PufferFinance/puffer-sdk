import { Chain } from '../../chains/constants';
import mainnetAddresses from './anvil.json';
import holeskyAddresses from './anvil.json';
import anvilAddresses from './anvil.json';

export const CHAIN_ADDRESSES = {
  [Chain.Mainnet]: mainnetAddresses,
  [Chain.Holesky]: holeskyAddresses,
  [Chain.Anvil]: anvilAddresses,
};
