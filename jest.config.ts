import type { Config } from 'jest';

// https://jestjs.io/docs/configuration
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  prettierPath: null,
  collectCoverageFrom: ['<rootDir>/lib/**/*.{ts,js}'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-tests.ts'],
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
};

export default config;
