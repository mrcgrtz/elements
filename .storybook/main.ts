import type {StorybookConfig} from '@storybook/react-vite';
import react from '@vitejs/plugin-react';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.tsx'],
	framework: '@storybook/react-vite',
	core: {
		builder: '@storybook/builder-vite',
		disableTelemetry: true,
	},
	addons: ['@storybook/addon-a11y'],
	async viteFinal(viteConfig) {
		const plugins = [...(viteConfig.plugins ?? []), react()];

		return {...viteConfig, plugins};
	},
};

export default config;
