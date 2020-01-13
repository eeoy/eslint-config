module.exports = {
  extends: ['./lib/eslint', './lib/import'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
  reportUnusedDisableDirectives: true,
};
