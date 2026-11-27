import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '..';

type Arguments = {
	dateTime: Date | number;
};

const meta = {
	title: 'Design System/Components',
	component: 'mg-date-time',
	argTypes: {
		dateTime: {
			control: 'date',
		},
	},
	args: {
		dateTime: new Date(),
	},
	render: ({dateTime}) =>
		html`<mg-date-time .dateTime=${dateTime}></mg-date-time>`,
} satisfies Meta<Arguments>;

export const DateTimeStory: StoryObj<Arguments> = {
	name: 'Date and time',
};

export default meta;
