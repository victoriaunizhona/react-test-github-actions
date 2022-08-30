module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['src/**/*.test.js', 'src/**/*.test.jsx'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
