import { Chain } from '../chains/constants';

// Source of truth:
// https://github.com/PufferFinance/Deployments-and-ACL/tree/main/docs/deployments
export const CONTRACT_ADDRESSES = {
  [Chain.Mainnet]: {
    PufferVault: '0xD9A442856C234a39a81a089C06451EBAa4306a72',
    PufferDepositor: '0x4aa799c5dfc01ee7d790e3bf1a7c2257ce1dceff',
    // TODO: Update the addresses once the contracts are deployed on chain.
    // See https://dev.azure.com/pufferfi/Frontend/_workitems/edit/1797.
    PufferL2Depositor: '0x0000000000000000000000000000000000000000',
    PufLocker: '0x0000000000000000000000000000000000000000',
  },
  [Chain.Holesky]: {
    PufferVault: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
    PufferDepositor: '0x824AC05aeb86A0aD770b8acDe0906d2d4a6c4A8c',
    // TODO: Update the addresses once the contracts are deployed on chain.
    // See https://dev.azure.com/pufferfi/Frontend/_workitems/edit/1797.
    PufferL2Depositor: '0x300480bf80b1ad93a9f6349623646142776e9156',
    PufLocker: '0x367551e0834c26e29e0a17ce3ed4dca87ff0c204',
  },
};
