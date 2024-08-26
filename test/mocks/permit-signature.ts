import { generateAddress } from './address';

export const mockPermitSignature = {
  r: generateAddress(32),
  s: generateAddress(32),
  v: 0n,
  yParity: 1,
  deadline: 0n,
};
