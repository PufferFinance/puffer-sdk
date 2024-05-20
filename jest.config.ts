import type { Config } from 'jest';

// https://jestjs.io/docs/configuration
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/lib/testing/setup-tests.ts'],
};

export default config;
