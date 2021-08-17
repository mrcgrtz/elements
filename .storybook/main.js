module.exports = {
  stories: ['../src/**/*.stories.@(jsx|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/dist/register',
    '@storybook/addon-a11y/register',
  ],
};
