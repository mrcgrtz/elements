import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '..';

type Arguments = {
	label: string;
	type: 'button' | 'submit' | 'reset';
	disabled: boolean;
};

const meta = {
	title: 'Design System/Components',
	component: 'mg-button',
	argTypes: {
		type: {
			options: ['button', 'submit', 'reset'],
			control: {type: 'radio'},
		},
	},
	args: {
		label: 'Lorem ipsum',
		type: 'button',
		disabled: false,
	},
	render: ({label, type, disabled}) => html`
		<mg-button type=${type} ?disabled=${disabled}>${label}</mg-button>
	`,
} satisfies Meta<Arguments>;

export const ButtonStory: StoryObj<Arguments> = {
	name: 'Button',
};

export default meta;
