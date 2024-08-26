import { Address } from 'viem';
import { randomBytes } from 'crypto';

export const generateAddress = (size = 20): Address =>
  `0x${randomBytes(size).toString('hex').toLowerCase()}`;
