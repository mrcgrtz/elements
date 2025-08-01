import storybook from 'eslint-plugin-storybook';

/** @type {import('xo').FlatConfig} */
const config = [
	{
		prettier: true,
		react: true,
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
		},
	},
	...storybook.configs['flat/recommended'].map((config) => ({
		files: '**/*.stories.tsx',
		...config,
	})),
];

export default config;
