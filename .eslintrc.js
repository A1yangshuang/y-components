module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'react', 'babel'],
  settings: {
    react: {
      version: '17.0',
    },
    polyfills: ['Promise', 'URL'],
  },
  rules: {
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: false,
          Boolean: false,
          Number: false,
          Symbol: false,
          '{}': false,
          Object: false,
          object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
