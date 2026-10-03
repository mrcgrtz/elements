import storybook from 'eslint-plugin-storybook';
import react from 'eslint-config-xo-react';

const javaScriptFiles = '**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}';

/**
 * @type {import('xo').FlatConfig}
 */
const config = [
	// `eslint-config-xo-react` owns the JSX formatting rules, so it needs the same
	// `prettier` value as XO itself to stand down on the conflicting ones.
	...react({prettier: 'compat'}),
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
			'jsdoc/require-asterisk-prefix': ['error', 'always'],
			// Vite, Vitest and Storybook all resolve extensionless imports, so we
			// keep them extensionless. XO turns `import-x/extensions` off for
			// TypeScript projects and enforces extensions through this rule instead.
			'n/file-extension-in-import': ['error', 'never'],
		},
	},
	...storybook.configs['flat/recommended'].map((config) => ({
		files: '**/*.stories.tsx',
		...config,
	})),
];

export default config;
