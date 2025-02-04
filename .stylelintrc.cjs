/** @type {import('stylelint').Config} */
module.exports = {
  customSyntax: 'postcss-styled-syntax',
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    // disabled as this messes up template string interpolation in Styled Components
    'comment-empty-line-before': null,
  },
};
