import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.tsx'],
	framework: '@storybook/react-vite',
	core: {
		builder: '@storybook/builder-vite',
		disableTelemetry: true,
	},
	addons: ['@storybook/addon-a11y'],
};

export default config;
