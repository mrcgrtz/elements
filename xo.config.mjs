import storybook from 'eslint-plugin-storybook';
import react from 'eslint-config-xo-react';

const javaScriptFiles = '**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}';

/** @type {import('xo').FlatConfig} */
const config = [
	...react(),
	{
		// Prettier runs separately (`npm run format`, and via lint-staged), so XO
		// only needs to stand down on the rules that would conflict with it.
		// `prettier: true` would instead run Prettier with XO’s own hardcoded
		// options, which disagree with `.prettierrc.mjs` and `.editorconfig`.
		prettier: 'compat',
	},
	{
		rules: {
			// We use the conventional asterisk-prefixed JSDoc style.
			'jsdoc/require-asterisk-prefix': 'off',
		},
	},
	{
		files: javaScriptFiles,
		rules: {
			'import-x/extensions': [
				'error',
				{
					ignorePackages: true,
					patterns: {
						js: 'never',
						jsx: 'never',
						ts: 'never',
						tsx: 'never',
					},
				},
			],
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'arrow-function',
				},
			],
			// `eslint-plugin-react` still calls `context.getSourceCode()`, which
			// ESLint 10 removed, so this rule crashes. `forwardRef` is deprecated in
			// React 19 anyway.
			'react/forward-ref-uses-ref': 'off',
		},
	},
	...storybook.configs['flat/recommended'].map((config) => ({
		files: '**/*.stories.tsx',
		...config,
	})),
];

export default config;
