import { Chain } from '../../chains/constants';
import { L1RewardManager } from './mainnet/L1RewardManager';

export const L1_REWARD_MANAGER_ABIS = {
  [Chain.Holesky]: { L1RewardManager },
  [Chain.Bsc]: { L1RewardManager },
};
