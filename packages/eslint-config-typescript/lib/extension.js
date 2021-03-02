module.exports = {
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/default-param-last': 'error',
        'default-param-last': 'off',

        '@typescript-eslint/dot-notation': 'error',
        'dot-notation': 'off',

        '@typescript-eslint/lines-between-class-members': [
          'warn',
          'always',
          {
            exceptAfterOverload: false,
          },
        ],
        'lines-between-class-members': 'off',

        '@typescript-eslint/no-array-constructor': 'error',
        'no-array-constructor': 'off',

        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-dupe-class-members': 'off',

        '@typescript-eslint/no-empty-function': 'warn',
        'no-empty-function': 'off',

        '@typescript-eslint/no-implied-eval': 'error',
        'no-implied-eval': 'off',

        '@typescript-eslint/no-shadow': 'error',
        'no-shadow': 'off',

        '@typescript-eslint/no-throw-literal': 'error',
        'no-throw-literal': 'off',

        '@typescript-eslint/no-unused-expressions': [
          'error',
          { enforceForJSX: true },
        ],
        'no-unused-expressions': 'off',

        '@typescript-eslint/no-unused-vars': [
          'warn',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        'no-unused-vars': 'off',

        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            typedefs: false,
          },
        ],
        'no-use-before-define': 'off',

        '@typescript-eslint/no-useless-constructor': 'error',
        'no-useless-constructor': 'off',

        '@typescript-eslint/require-await': 'error',
        'require-await': 'off',

        '@typescript-eslint/return-await': 'error',
        'return-await': 'off',
      },
    },
  ],
};
