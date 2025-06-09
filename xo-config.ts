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
				'ignorePackages',
				{
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
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
