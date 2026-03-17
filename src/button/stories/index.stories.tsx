import React from 'react';
import type {Meta, StoryFn} from '@storybook/react-vite';
import Button from '..';

const meta = {
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
} satisfies Meta<typeof Button>;

export const ButtonStory: StoryFn<typeof meta> = (properties) => (
	<Button {...properties} />
);
ButtonStory.storyName = 'Button';

export default meta;
