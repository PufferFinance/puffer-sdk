import { Address } from 'viem';

export const mockPermitSignature = {
  r: `0x${new Array(64).fill(0).join('')}` as Address,
  s: `0x${new Array(64).fill(0).join('')}` as Address,
  v: 0n,
  yParity: 1,
  deadline: 0n,
};
