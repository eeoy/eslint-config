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
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/default': 'off',
        'import/no-cycle': 'off',
        'import/extensions': [0, { ts: 'never', tsx: 'never' }],

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

        camelcase: 'off',
        '@typescript-eslint/camelcase': [
          'warn',
          { properties: 'always', ignoreDestructuring: false },
        ],

        '@typescript-eslint/class-name-casing': [
          'error',
          { allowUnderscorePrefix: true },
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
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': [
          'warn',
          { fixToUnknown: true, ignoreRestArgs: false },
        ],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',

        // TODO: prefer optional chaning?
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',

        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',

        'no-constant-condition': 'off',
        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          { ignoreRhs: true },
        ],

        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
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

        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',

        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowNumber: true,
          },
        ],

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',

        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],

        '@typescript-eslint/unified-signatures': 'error',

        // Checked by Typescript - ts(2378)
        'getter-return': 'off',
        // Checked by Typescript - ts(2300)
        'no-dupe-args': 'off',
        // Checked by Typescript - ts(1117)
        'no-dupe-keys': 'off',
        // Checked by Typescript - ts(7027)
        'no-unreachable': 'off',
        // Checked by Typescript - ts(2367)
        'valid-typeof': 'off',
        // Checked by Typescript - ts(2588)
        'no-const-assign': 'off',
        // Checked by Typescript - ts(2588)
        'no-new-symbol': 'off',
        // Checked by Typescript - ts(2376)
        'no-this-before-super': 'off',
        // This is checked by Typescript using the option `strictNullChecks`.
        'no-undef': 'off',
        // This is already checked by Typescript.
        'no-dupe-class-members': 'off',
        // This is already checked by Typescript.
        'no-redeclare': 'off',
      },
    },
  ],
};
