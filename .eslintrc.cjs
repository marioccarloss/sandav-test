module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jest', 'prettier'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/no-commented-out-tests': 'off',
      },
    },
    {
      files: ['src/utils/test-utils.jsx'],
      rules: {
        'react-refresh/only-export-components': 'off',
      },
    },
  ],
};
