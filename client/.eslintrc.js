module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
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
    'default-param-last': 0,
    'no-console': 0,
    camelcase: 'off',
    'react/prop-types': 0,
    'no-restricted-exports': 0,
    'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
  },
};
