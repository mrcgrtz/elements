import React from 'react';
import type {Meta, StoryFn} from '@storybook/react';
import Button from '..';

const meta: Meta = {
  title: 'Design System/Components',
  component: Button,
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset'],
      control: {type: 'radio'},
    },
  },
  args: {
    children: 'Lorem ipsum',
    type: 'button',
    disabled: false,
  },
};

export const ButtonStory: StoryFn<typeof Button> = (properties) => (
  <Button {...properties} />
);
ButtonStory.storyName = 'Button';

export default meta;
