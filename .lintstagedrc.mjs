/**
 * @see https://github.com/lint-staged/lint-staged#configuration
 * @type {import('lint-staged').Configuration}
 */
const config = {
	'*.?({c,m}){j,t}s?(x)': ['prettier --write', 'xo --fix'],
	'*.{j,t}sx': ['prettier --write', 'stylelint --fix'],
	'./src/*/*.(j|t)sx': ['npm test'],
	'*.(html|json|md?(x)|y?(a)ml)': 'prettier --write',
};

export default config;
