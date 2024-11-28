/** @type {import('xo').Options} */
module.exports = {
  prettier: true,
  extends: 'xo-react',
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'n/file-extension-in-import': ['error', 'never'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    {
      files: '**/*.stories.tsx',
      extends: 'plugin:storybook/recommended',
    },
  ],
};
