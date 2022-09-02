import React from 'react';
import type { Story, Meta } from '@storybook/react';
import HamburgerButton from '..';

const defaultArgs = {
  label: 'Menü anzeigen',
  labelActive: 'Menü ausblenden',
  position: { top: '20px', left: '20px' },
};

const meta = {
  title: 'Design System/Components',
  component: HamburgerButton,
  args: defaultArgs,
} as Meta;

export const HamburgerButtonStory: Story<typeof defaultArgs> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <HamburgerButton {...args} />
);
HamburgerButtonStory.storyName = 'Hamburger button';

export default meta;
