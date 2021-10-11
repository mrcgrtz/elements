import React from 'react';
import { Story, Meta } from '@storybook/react';
import Logo from '..';

const meta = {
  title: 'Logo',
  component: Logo,
  args: {
    title: 'Marc Görtz',
    url: 'https://marcgoertz.de/',
    urlRelations: ['start', 'me'],
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story = (args) => <Logo {...args} />;

export const LogoStory = Template.bind({});
LogoStory.storyName = meta.title;

export const SolidColorLogoStory = Template.bind({});
SolidColorLogoStory.argTypes = {
  solidColor: {
    control: 'color',
  },
};
SolidColorLogoStory.args = {
  solidColor: '#bada55',
};
SolidColorLogoStory.storyName = 'Logo with solid color';

export default meta;
