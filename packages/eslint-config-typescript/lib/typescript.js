module.exports = {
  extends: ['plugin:@typescript-eslint/eslint-recommended'],

  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        '@typescript-eslint/array-type': 'off',

        '@typescript-eslint/await-thenable': 'error',

        '@typescript-eslint/ban-ts-comment': 'error',

        '@typescript-eslint/ban-types': ['error'],

        '@typescript-eslint/consistent-indexed-object-style': 'warn',

        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
          },
        ],

        '@typescript-eslint/consistent-type-definitions': ['off', 'interface'],

        '@typescript-eslint/consistent-type-imports': [
          'off',
          {
            prefer: 'type-imports',
          },
        ],

        '@typescript-eslint/member-delimiter-style': 'off',

        '@typescript-eslint/method-signature-style': 'off',

        '@typescript-eslint/no-base-to-string': 'error',

        '@typescript-eslint/no-confusing-non-null-assertion': 'error',

        '@typescript-eslint/no-empty-interface': 'error',

        '@typescript-eslint/no-explicit-any': [
          'warn',
          { fixToUnknown: false, ignoreRestArgs: false },
        ],

        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        '@typescript-eslint/no-for-in-array': 'error',

        '@typescript-eslint/no-misused-new': 'error',

        '@typescript-eslint/no-misused-promises': 'error',

        '@typescript-eslint/no-namespace': 'error',

        '@typescript-eslint/no-non-null-assertion': 'off',

        '@typescript-eslint/no-parameter-properties': 'error',

        '@typescript-eslint/no-require-imports': 'error',

        '@typescript-eslint/no-unnecessary-condition': 'error',
        'no-constant-condition': 'off',

        '@typescript-eslint/no-unnecessary-qualifier': 'error',

        '@typescript-eslint/no-unnecessary-type-arguments': 'error',

        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

        '@typescript-eslint/no-unsafe-assignment': 'error',

        '@typescript-eslint/no-unsafe-call': 'error',

        '@typescript-eslint/no-unsafe-member-access': 'error',

        '@typescript-eslint/no-unsafe-return': 'error',

        '@typescript-eslint/no-var-requires': 'error',

        '@typescript-eslint/prefer-for-of': 'error',

        '@typescript-eslint/prefer-includes': 'off',

        '@typescript-eslint/prefer-nullish-coalescing': 'off',

        '@typescript-eslint/prefer-optional-chain': 'warn',

        '@typescript-eslint/prefer-readonly': [
          'error',
          { onlyInlineLambdas: false },
        ],

        '@typescript-eslint/prefer-regexp-exec': 'error',

        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowNumber: true,
          },
        ],

        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],

        '@typescript-eslint/unified-signatures': 'error',

        camelcase: 'warn',
        '@typescript-eslint/naming-convention': [
          'off',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'class',
            format: ['PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
          },
        ],

        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        '@typescript-eslint/restrict-plus-operands': 'error',

        '@typescript-eslint/sort-type-union-intersection-members': [
          'off',
          {
            checkIntersections: true,
            checkUnions: true,
            groupOrder: [
              'named',
              'keyword',
              'operator',
              'literal',
              'function',
              'import',
              'conditional',
              'object',
              'tuple',
              'intersection',
              'union',
              'nullish',
            ],
          },
        ],

        '@typescript-eslint/switch-exhaustiveness-check': 'error',
      },
    },
  ],
};
