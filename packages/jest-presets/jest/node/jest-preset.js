// Any custom config you want to pass to Jest
const customJestConfig = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  moduleDirectories: [
    'node_modules',
    '<rootDir>',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['/(node_modules|.next|cypress)/'],
  transformIgnorePatterns: ['/node_modules/.+\\.(ts|tsx)$'],
  transform: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '.+\\.svg\\?url$': 'jest-transform-stub',
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
};

module.exports = customJestConfig