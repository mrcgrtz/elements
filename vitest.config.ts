import {fileURLToPath} from 'node:url';
import {coverageConfigDefaults, defineConfig} from 'vitest/config';
import {storybookTest} from '@storybook/addon-vitest/vitest-plugin';
import {playwright} from '@vitest/browser-playwright';

const configDir = fileURLToPath(new URL('.storybook', import.meta.url));

export default defineConfig({
	test: {
		projects: [
			{
				// Plain modules that don’t render anything.
				extends: true,
				test: {
					name: 'unit',
					include: ['src/**/*.test.ts'],
					globals: true,
					environment: 'happy-dom',
				},
			},
			{
				// Every story is a test: it has to render, and its play function
				// has to pass, in a real browser.
				extends: true,
				plugins: [storybookTest({configDir})],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: playwright(),
						instances: [{browser: 'chromium'}],
					},
				},
			},
		],
		coverage: {
			provider: 'istanbul',
			include: ['src/**/*.ts'],
			exclude: [
				'./**/*.stories.ts',
				'./src/test-utils.ts',
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
