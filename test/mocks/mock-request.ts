import { TransportProvider } from '../../lib/utils/types';

export const mockRpcRequest = (mockValues: {
  [method: string]: any;
}): TransportProvider['request'] => {
  return jest
    .fn()
    .mockImplementation(({ method }) => mockValues[method] ?? null);
};
