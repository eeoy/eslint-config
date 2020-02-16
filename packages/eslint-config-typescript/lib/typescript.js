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

        // typescript
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Object: { message: 'Use {} instead', fixWith: '{}' },
            },
          },
        ],

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
        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          { ignoreRhs: true, checkArrayPredicates: true },
        ],

        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',

        // TODO: enable?
        '@typescript-eslint/prefer-includes': 'off',

        '@typescript-eslint/prefer-nullish-coalescing': 'warn',

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
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'warn',
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

        // TODO: enable?
        // 'no-dupe-class-members': 'off',
        // '@typescript-eslint/no-dupe-class-members': 'off',

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

        // rules checked by tsc
        'getter-return': 'off',
        'no-dupe-args': 'off',
        'no-dupe-keys': 'off',
        'no-unreachable': 'off',
        'valid-typeof': 'off',
        'no-const-assign': 'off',
        'no-new-symbol': 'off',
        'no-this-before-super': 'off',
        // enable option `strictNullChecks`.
        'no-undef': 'off',
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
      },
    },
  ],
};
