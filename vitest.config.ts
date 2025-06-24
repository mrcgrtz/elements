import {fileURLToPath} from 'node:url';
import {coverageConfigDefaults, defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import {storybookTest} from '@storybook/addon-vitest/vitest-plugin';
import {playwright} from '@vitest/browser-playwright';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [react({})],
	test: {
		projects: [
			{
				extends: true,
				test: {
					globals: true,
					environment: 'happy-dom',
					setupFiles: ['./src/setup-tests.ts'],
				},
			},
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: fileURLToPath(
							new URL('.storybook', import.meta.url),
						),
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: 'chromium',
							},
						],
					},
				},
			},
		],
		coverage: {
			provider: 'istanbul',
			exclude: [
				'./docs/**',
				'./**/*.stories.{ts,tsx}',
				'xo.config.mjs',
				...coverageConfigDefaults.exclude,
			],
			thresholds: {
				branches: 100,
				functions: 100,
				lines: 100,
				statements: 100,
			},
			reporter: ['html', 'text', 'lcov'],
		},
	},
});
