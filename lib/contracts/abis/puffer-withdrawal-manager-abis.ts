import { Chain } from '../../chains/constants';
import { PufferWithdrawalManager } from './mainnet/PufferWithdrawalManager';

export const PUFFER_WITHDRAWAL_MANAGER_ABIS = {
  [Chain.Mainnet]: { PufferWithdrawalManager },
  [Chain.Holesky]: { PufferWithdrawalManager },
};
