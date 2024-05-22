import { MockRequestFn } from '../utils/types';

export const mockRpcRequest = (mockValues: {
  [method: string]: any;
}): MockRequestFn => {
  return jest
    .fn()
    .mockImplementation(({ method }) => mockValues[method] ?? null);
};
