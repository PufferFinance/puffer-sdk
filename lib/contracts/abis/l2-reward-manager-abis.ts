import { Chain } from '../../chains/constants';
import { L2RewardManager } from './mainnet/L2RewardManager';

export const L2_REWARD_MANAGER_ABIS = {
  [Chain.Mainnet]: { L2RewardManager },
  [Chain.Holesky]: { L2RewardManager },
  [Chain.Base]: { L2RewardManager },
};
