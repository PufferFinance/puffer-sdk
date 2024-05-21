import type { Config } from 'jest';

// https://jestjs.io/docs/configuration
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  globals: {
    TextEncoder,
    TextDecoder,
    Uint8Array,
  },
};

export default config;
