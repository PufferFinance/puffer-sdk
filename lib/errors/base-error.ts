import { version } from '../utils/version';
import { ErrorBaseParameters } from './types';

// The parameters for the error can be extended for specific error types
// to include more information.
export abstract class BaseError<
  T extends { [key: string]: string } = ErrorBaseParameters,
> extends Error {
  constructor(message: string, params: T) {
    super(message);
    this.message = this.compileMessage(message, params);
  }

  protected compileMessage(message: string, params: T) {
    const hasParams = params && Object.keys(params).length > 0;

    return [
      message,
      ...(hasParams ? [''] : []), // New line to make log more readable.
      ...(hasParams
        ? Object.entries(params).map(([key, value]) => `${key}: ${value}`)
        : []),
      '', // New line to make log more readable.
      `v${version}`,
    ].join('\n');
  }
}
