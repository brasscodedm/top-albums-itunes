import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['src'],
  testMatch: ['<rootDir>/src/**/*.spec.(ts|tsx)'],
  coverageReporters: ['text-summary', 'cobertura'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(ol)/.*)'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgrMock.ts',
  },
};

export default config;
