import React from 'react';
import type {StoryFn, Meta} from '@storybook/react';
import Logo from '..';

const meta: Meta = {
  title: 'Design System/Logos',
  component: Logo,
  args: {
    title: 'Marc Görtz',
    url: 'https://marcgoertz.de/',
    urlRelations: ['start', 'me'],
  },
};

const Template: StoryFn<typeof Logo> = (properties) => <Logo {...properties} />;

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
