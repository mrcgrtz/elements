import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Logo from '..';

const meta = {
  title: 'Design System/Logos',
  component: Logo,
  args: {
    title: 'Marc Görtz',
    url: 'https://marcgoertz.de/',
    urlRelations: ['start', 'me'],
  },
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const LogoStory = Template.bind({});
LogoStory.storyName = 'Default logo';

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
