module.exports = {
  rules: {
    'react/default-props-match-prop-types': 'error',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': [
      'error',
      { forbid: ['any', 'array', 'object'] },
    ],
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true },
    ],
    'react/sort-prop-types': 'off',
  },
};
