import type {StorybookConfig} from '@storybook/web-components-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.ts'],
	framework: '@storybook/web-components-vite',
	core: {
		builder: '@storybook/builder-vite',
		disableTelemetry: true,
	},
	addons: ['@storybook/addon-a11y', '@storybook/addon-vitest'],
	tags: {
		// Edge cases that exist to be tested, not browsed. They stay reachable
		// through the sidebar’s tag filter.
		'test-only': {
			defaultFilterSelection: 'exclude',
			excludeFromDocsStories: true,
		},
	},
};

export default config;
