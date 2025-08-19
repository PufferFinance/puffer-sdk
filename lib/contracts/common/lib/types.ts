import { Address } from 'viem';

export type PermitData = {
  deadline: bigint;
  amount: bigint;
  v: number;
  r: Address;
  s: Address;
};
