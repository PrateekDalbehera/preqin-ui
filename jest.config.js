export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@config/(.*)$': '<rootDir>/src/config/$1',
      '^@core/(.*)$': '<rootDir>/src/core/$1',
      '^@features/(.*)$': '<rootDir>/src/features/$1',
      '^@shared/(.*)$': '<rootDir>/src/shared/$1',
      '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};