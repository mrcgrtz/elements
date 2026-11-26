import storybook from 'eslint-plugin-storybook';

const javaScriptFiles = '**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}';

/**
 * @type {import('xo').FlatConfig}
 */
const config = [
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
	{
		files: ['src/*/index.ts', 'src/test-utils.ts'],
		rules: {
			// Custom elements register themselves when their module is imported,
			// and the test helper registers its cleanup hook the same way.
			'unicorn/no-top-level-side-effects': 'off',
		},
	},
	...storybook.configs['flat/recommended'].map((config) => ({
		files: '**/*.stories.ts',
		...config,
	})),
	{
		files: '**/*.stories.ts',
		rules: {
			// Stories import an element’s module only to register it.
			'import-x/no-unassigned-import': 'off',
			// Storybook’s Component Story Format names stories in PascalCase.
			'@typescript-eslint/naming-convention': 'off',
		},
	},
];

export default config;
