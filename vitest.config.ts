import {coverageConfigDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'happy-dom',
		coverage: {
			provider: 'istanbul',
			exclude: [
				'./docs/**',
				'./**/*.stories.ts',
				'./src/test-utils.ts',
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
