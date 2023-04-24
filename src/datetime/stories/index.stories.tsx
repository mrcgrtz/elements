import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import DateTime from '..';

const defaultArgs = {
  dateTime: new Date(),
};

const meta: Meta = {
  title: 'Design System/Components',
  component: DateTime,
  argTypes: {
    dateTime: {
      control: 'date',
    },
  },
  args: defaultArgs,
};

export const DateTimeStory: StoryObj<typeof DateTime> = (
  args: typeof defaultArgs
) => <DateTime {...args} />;
DateTimeStory.storyName = 'Date and time';

export default meta;
