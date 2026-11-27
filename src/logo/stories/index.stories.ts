import {html} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '..';

type Arguments = {
	label: string;
	url: string;
	rel: string;
	logoColor?: string;
};

const meta = {
	title: 'Design System/Logos',
	component: 'mg-logo',
	args: {
		label: 'Marc Görtz',
		url: 'https://marcgoertz.de/',
		rel: 'start me',
	},
	argTypes: {
		logoColor: {
			name: '--logo-color',
			control: 'color',
		},
	},
	render: ({label, url, rel, logoColor}) => html`
		<mg-logo
			label=${label}
			url=${url}
			rel=${rel}
			style=${styleMap({'--logo-color': logoColor})}
		></mg-logo>
	`,
} satisfies Meta<Arguments>;

type Story = StoryObj<Arguments>;

export const LogoStory: Story = {
	name: 'Default logo',
};

export const SolidColorLogoStory: Story = {
	name: 'Logo with solid color',
	args: {
		logoColor: '#bada55',
	},
};

export default meta;
