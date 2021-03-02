module.exports = {
  extends: 'plugin:import/typescript',
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      plugins: ['import'],
      rules: {
        'import/default': 'off',
        'import/export': 'off',
        'import/extensions': [0, { ts: 'never', tsx: 'never' }],
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-cycle': 'off',
        'import/no-deprecated': 'off',
        'import/no-unresolved': 'off',
        'import/no-unused-modules': 'off',
      },
    },
  ],
};
