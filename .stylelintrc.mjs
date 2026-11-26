/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import('stylelint').Config}
 */
const config = {
	customSyntax: 'postcss-styled-syntax',
	extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
	plugins: ['stylelint-use-logical'],
	rules: {
		'csstools/use-logical': 'always',
	},
};

export default config;
