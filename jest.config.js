module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js'],
    coverageDirectory: './coverage',
    collectCoverage: true,
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
      }
  };
  