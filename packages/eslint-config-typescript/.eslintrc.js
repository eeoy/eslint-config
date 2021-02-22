module.exports = {
  extends: ['.', require.resolve('@eeoy/eslint-config-react')],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
};
