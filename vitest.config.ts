import {coverageConfigDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/setup-tests.ts'],
    coverage: {
      provider: 'istanbul',
      exclude: [
        './docs/**',
        './**/*.stories.{ts,tsx}',
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
