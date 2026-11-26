import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '..';

type Arguments = {
	label: string;
	labelActive: string;
	open: boolean;
};

const meta = {
	title: 'Design System/Components',
	component: 'mg-hamburger-button',
	args: {
		label: 'Menü anzeigen',
		labelActive: 'Menü ausblenden',
		open: false,
	},
	render: ({label, labelActive, open}) => html`
		<mg-hamburger-button
			style="position: absolute; inset-block-start: 20px; inset-inline-start: 20px"
			label=${label}
			label-active=${labelActive}
			?open=${open}
		></mg-hamburger-button>
	`,
} satisfies Meta<Arguments>;

export const HamburgerButtonStory: StoryObj<Arguments> = {
	name: 'Hamburger button',
};

export default meta;
