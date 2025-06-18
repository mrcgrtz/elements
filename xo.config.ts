import {type FlatXoConfig} from 'xo';
import storybook from 'eslint-plugin-storybook';

const config: FlatXoConfig = [
	{
		ignores: ['!.storybook'],
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
	{
		files: '**/*.stories.tsx',
		...storybook.configs['flat/recommended'],
	},
];

export default config;
