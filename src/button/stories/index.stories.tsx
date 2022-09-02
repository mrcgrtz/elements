import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Button from '..';

const meta = {
  title: 'Design System/Components',
  component: Button,
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'Lorem ipsum',
    type: 'button',
    disabled: false,
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
export const ButtonStory: Story = (args) => <Button {...args} />;
ButtonStory.storyName = 'Button';

export default meta;
