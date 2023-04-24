/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  features: {
    postcss: false,
  },
  disableTelemetry: true,
};
