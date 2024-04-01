import React from 'react';
import type {Meta, StoryFn} from '@storybook/react';
import DateTime from '..';

const meta: Meta = {
  title: 'Design System/Components',
  component: DateTime,
  argTypes: {
    dateTime: {
      control: 'date',
    },
  },
  args: {
    dateTime: new Date(),
  },
};

export const DateTimeStory: StoryFn<typeof DateTime> = (properties) => (
  <DateTime {...properties} />
);
DateTimeStory.storyName = 'Date and time';

export default meta;
