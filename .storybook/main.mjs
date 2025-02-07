/** @type {import('@storybook/core-common').StorybookConfig} */
export default {
  stories: ['../src/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  disableTelemetry: true,
};
