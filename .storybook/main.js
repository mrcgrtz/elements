module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/dist/register',
    '@storybook/addon-a11y/register',
  ],
};
