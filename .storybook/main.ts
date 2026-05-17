import type {StorybookConfig} from '@storybook/react-vite';
import react from '@vitejs/plugin-react';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.tsx'],
	framework: '@storybook/react-vite',
	core: {
		builder: '@storybook/builder-vite',
		disableTelemetry: true,
	},
	addons: ['@storybook/addon-a11y', '@storybook/addon-vitest'],
	async viteFinal(config) {
		// Type mismatch between Storybook and Vite UserConfig
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		const plugins = [...(config.plugins ?? []), react()];

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return {...config, plugins};
	},
};

export default config;
