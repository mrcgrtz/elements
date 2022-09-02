import React from 'react';
import type { Story, Meta } from '@storybook/react';
import DateTime from '..';

const defaultArgs = {
  dateTime: new Date(),
};

const meta = {
  title: 'Design System/Components',
  component: DateTime,
  argTypes: {
    dateTime: {
      control: 'date',
    },
  },
  args: defaultArgs,
} as Meta;

export const DateTimeStory: Story<typeof defaultArgs> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <DateTime {...args} />
);
DateTimeStory.storyName = 'Date and time';

export default meta;
