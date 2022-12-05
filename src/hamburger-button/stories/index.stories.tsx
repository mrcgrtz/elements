import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
} as Meta<typeof HamburgerButton>;

export const HamburgerButtonStory: StoryObj<typeof HamburgerButton> = (
  args: typeof defaultArgs
) => <HamburgerButton {...args} />;
HamburgerButtonStory.storyName = 'Hamburger button';

export default meta;
