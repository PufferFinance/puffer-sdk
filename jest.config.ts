import type { Config } from 'jest';

// https://jestjs.io/docs/configuration
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  collectCoverageFrom: ['lib/**/*.{ts,js}'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  // Coverage is not collected for these.
  coveragePathIgnorePatterns: ['lib/errors', 'lib/main.ts'],
  // Global APIs not available in the test environment by default.
  globals: {
    TextEncoder,
    TextDecoder,
    Uint8Array,
  },
};

export default config;
