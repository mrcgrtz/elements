import React from 'react';
import { Story, Meta } from '@storybook/react';
import HamburgerButton from '..';

const defaultArgs = {
  label: 'Menü anzeigen',
  labelActive: 'Menü ausblenden',
  position: { top: '20px', left: '20px' },
};

const meta = {
  title: 'Hamburger Button',
  component: HamburgerButton,
  args: defaultArgs,
} as Meta;

export const DefaultStory: Story<typeof defaultArgs> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <HamburgerButton {...args} />
);
DefaultStory.storyName = meta.title;

export default meta;
