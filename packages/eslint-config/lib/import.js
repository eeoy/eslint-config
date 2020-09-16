const EXT_GLOB = '{js,jsx,ts,tsx}';

module.exports = {
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
  plugins: ['import'],
  rules: {
    // import
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'error',
    'import/default': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'warn',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/no-useless-path-segments': [
      'error',
      { commonjs: true, noUselessIndex: true },
    ],

    // TODO
    'import/no-unused-modules': [
      'off',
      {
        missingExports: true,
        unusedExports: true,
        // src: process.cwd()
      },
    ],
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'tests/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          `**/*.test.${EXT_GLOB}`,
          `**/*.stories.${EXT_GLOB}`,
          '**/.storybook/**',
          '**/jest.config.js',
          '**/webpack.config.js',
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        json: 'ignorePackages',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
      },
    ],
    'import/newline-after-import': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    // TODO
    'import/dynamic-import-chunkname': 'off',
    'import/prefer-default-export': 'warn',
  },
};
