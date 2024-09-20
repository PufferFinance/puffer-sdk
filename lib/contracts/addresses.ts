import { Chain } from '../chains/constants';

// Source of truth:
// https://github.com/PufferFinance/Deployments-and-ACL/tree/main/docs/deployments
export const CONTRACT_ADDRESSES = {
  [Chain.Mainnet]: {
    PufferVault: '0xD9A442856C234a39a81a089C06451EBAa4306a72',
    PufferDepositor: '0x4aa799c5dfc01ee7d790e3bf1a7c2257ce1dceff',
    PufferL2Depositor: '0x3436E0B85cd929929F5802e792CFE282166E0259',
    PufLocker: '0x48e8dE138C246c14248C94d2D616a2F9eb4590D2',
    L2RewardManager: '0xb4dBcf934558d7b647A7FB21bbcd6b8370318A5c',
    L1RewardManager: '0x5A0B37ce6c5b90B634B2AD32E3d909B545De8BB7',
  },
  [Chain.Holesky]: {
    PufferVault: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
    PufferDepositor: '0x824AC05aeb86A0aD770b8acDe0906d2d4a6c4A8c',
    PufferL2Depositor: '0x0af6998e4828ad8ef8f79a9288d0a861890f791d',
    PufLocker: '0xa58983ad0899a452b7420bc57228e329d7ba92b6',
    L1RewardManager: '0x10f970bcb84B82B82a65eBCbF45F26dD26D69F12',
    L2RewardManager: '0x58C046794f69A8830b0BE737022a45b4acd01dE5',
    // This is deployed on a fork at the moment:
    // https://rpc.tenderly.co/fork/f7fd7621-7280-47e5-8521-81b24142814f
    PufferWithdrawalManager: '0xd3978c299A430a49D838429A4E50b1b5AE2aAa2f',
  },
};
