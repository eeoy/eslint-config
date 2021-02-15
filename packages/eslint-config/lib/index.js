module.exports = {
  extends: [
    require.resolve('@eeoy/eslint-config/lib/eslint'),
    require.resolve('@eeoy/eslint-config/lib/import'),
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
  reportUnusedDisableDirectives: true,
};
