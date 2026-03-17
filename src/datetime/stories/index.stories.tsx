import React from 'react';
import type {Meta, StoryFn} from '@storybook/react-vite';
import DateTime from '..';

const meta = {
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
} satisfies Meta<typeof DateTime>;

export const DateTimeStory: StoryFn<typeof meta> = (properties) => (
	<DateTime {...properties} />
);
DateTimeStory.storyName = 'Date and time';

export default meta;
