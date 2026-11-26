import type {StorybookConfig} from '@storybook/web-components-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.ts'],
	framework: '@storybook/web-components-vite',
	core: {
		builder: '@storybook/builder-vite',
		disableTelemetry: true,
	},
	addons: ['@storybook/addon-a11y'],
};

export default config;
