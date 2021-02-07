const EXT = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
  settings: {
    'import/extensions': EXT,
    'import/resolver': {
      node: {
        extensions: EXT,
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        'import/default': 'off',
        'import/extensions': [0, { ts: 'never', tsx: 'never' }],
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-cycle': 'off',
        'import/no-unresolved': 'off',
        'import/no-unused-modules': 'off',
        'import/no-deprecated': 'off',
        'import/export': 'off',
        // typescript
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': ['error'],

        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
          },
        ],

        // TODO: prefer interface?
        '@typescript-eslint/consistent-type-definitions': ['off', 'interface'],

        // optional
        '@typescript-eslint/member-delimiter-style': 'off',

        // TODO: more detailed
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': [
          'warn',
          { fixToUnknown: false, ignoreRestArgs: false },
        ],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',

        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',

        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',

        'no-constant-condition': 'off',
        '@typescript-eslint/no-unnecessary-condition': ['error'],

        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',

        // TODO: enable?
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

        // TODO: more?
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
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'warn',

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            typedefs: false,
          },
        ],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',

        'return-await': 'off',
        '@typescript-eslint/return-await': 'error',

        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/no-base-to-string': 'error',

        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'error',

        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',

        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'warn',
          'always',
          {
            exceptAfterOverload: false,
          },
        ],

        '@typescript-eslint/ban-ts-comment': 'error',

        '@typescript-eslint/no-confusing-non-null-assertion': 'error',

        '@typescript-eslint/consistent-indexed-object-style': 'warn',

        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

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

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
      },
    },
  ],
};
