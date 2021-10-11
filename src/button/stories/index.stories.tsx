import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '..';

const meta = {
  title: 'Button',
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
export const DefaultStory: Story = (args) => <Button {...args} />;
DefaultStory.storyName = meta.title;

export default meta;
