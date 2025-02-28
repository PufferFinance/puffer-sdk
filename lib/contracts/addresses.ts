import { Chain } from '../chains/constants';

// Source of truth:
// https://github.com/PufferFinance/Deployments-and-ACL/tree/main/docs/deployments
export const CONTRACT_ADDRESSES = {
  [Chain.Mainnet]: {
    PufferVault: '0xD9A442856C234a39a81a089C06451EBAa4306a72',
    PufferDepositor: '0x4aa799c5dfc01ee7d790e3bf1a7c2257ce1dceff',
    PufferL2Depositor: '0x3436E0B85cd929929F5802e792CFE282166E0259',
    PufLocker: '0x48e8dE138C246c14248C94d2D616a2F9eb4590D2',
    L1RewardManager: '0x157788cc028Ac6405bD406f2D1e0A8A22b3cf17b',
    // L2RewardManager is not deployed to mainnet but base.
    L2RewardManager: '0x0000000000000000000000000000000000000000',
    PufferWithdrawalManager: '0xDdA0483184E75a5579ef9635ED14BacCf9d50283',
    NucleusAtomicQueue: '0x228c44bb4885c6633f4b6c83f14622f37d5112e5',
    CarrotStaker: '0x99c599227c65132822f0290d9e5b4b0430d6c0d6',
    Distributor: '0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae', //'0x0e6590f64a82cbc838b2a087281689de1a5bc8e0',
  },
  [Chain.Holesky]: {
    PufferVault: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
    PufferDepositor: '0x824AC05aeb86A0aD770b8acDe0906d2d4a6c4A8c',
    PufferL2Depositor: '0x0af6998e4828ad8ef8f79a9288d0a861890f791d',
    PufLocker: '0xa58983ad0899a452b7420bc57228e329d7ba92b6',
    L1RewardManager: '0x10f970bcb84B82B82a65eBCbF45F26dD26D69F12',
    L2RewardManager: '0x58C046794f69A8830b0BE737022a45b4acd01dE5',
    PufferWithdrawalManager: '0x5A3E1069B66800c0ecbc91bd81b1AE4D1804DBc4',
  },
  [Chain.Base]: {
    L2RewardManager: '0xF9Dd335bF363b2E4ecFe3c94A86EBD7Dd3Dcf0e7',
  },
};
