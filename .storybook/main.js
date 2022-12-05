/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  features: {
    postcss: false,
  }
};
