import React from 'react';
import { Story, Meta } from '@storybook/react';
import DateTime from '..';

const defaultArgs = {
  dateTime: new Date(),
};

const meta = {
  title: 'Date and time',
  component: DateTime,
  argTypes: {
    dateTime: {
      control: 'date',
    },
  },
  args: defaultArgs,
} as Meta;

export const DefaultStory: Story<typeof defaultArgs> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <DateTime {...args} />
);
DefaultStory.storyName = meta.title;

export default meta;
