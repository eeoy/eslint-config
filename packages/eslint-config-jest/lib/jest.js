module.exports = {
  overrides: [
    {
      files: ['*.test.{js,jsx,ts,tsx}'],
      plugins: ['jest'],
      env: { 'jest/globals': true },
      rules: {
        'jest/expect-expect': 'error',
        'jest/no-alias-methods': 'warn',
        'jest/no-commented-out-tests': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',

        // TODO: enable?
        'jest/no-large-snapshots': ['off', { maxSize: 12 }],

        // TODO: enable?
        'jest/no-mocks-import': 'off',

        'jest/no-restricted-matchers': [
          'error',
          {
            resolves: 'Use `expect(await promise)` instead.',
            // toThrowErrorMatchingSnapshot:
            //   'Use `toThrowErrorMatchingInlineSnapshot()` instead',
            // toMatchSnapshot: 'Use `toMatchInlineSnapshot()` instead',
          },
        ],

        'jest/no-standalone-expect': 'error',

        'jest/no-done-callback': 'error',

        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-top-level-describe': 'error',
        // TODO: enable?
        'jest/require-to-throw-message': 'off',
        'jest/valid-describe': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',

        'jest/no-conditional-expect': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-deprecated-functions': 'error',
      },
    },
  ],
};
