import { version } from '../utils/version';
import { AccountError } from './validation-errors';

describe('ValidatorErrors', () => {
  it('should throw a formatted error', () => {
    const accountError = new AccountError('Random account error.', {
      fixMessage: 'Fix the account',
    });

    expect(accountError.message).toMatchInlineSnapshot(`
"Random account error.

fixMessage: Fix the account

v${version}"
`);
  });
});
