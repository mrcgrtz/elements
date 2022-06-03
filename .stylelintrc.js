module.exports = {
  customSyntax: '@stylelint/postcss-css-in-js',
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  rules: {
    // temporary disable `function-no-unknown` for interpolations
    'function-no-unknown': [true, { ignoreFunctions: '${' }],
  },
};
