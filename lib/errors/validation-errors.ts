import { ErrorBaseParameters } from './types';

export class AccountError extends Error {
  constructor(message: string, params?: ErrorBaseParameters) {
    super(message);

    this.message = [
      message,
      '',
      ...(params
        ? Object.entries(params).map(([key, value]) => `${key}:  ${value}`)
        : []),
    ].join('\n');
  }
}
