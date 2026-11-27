import {html} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {expect} from 'storybook/test';
import {getElement, shadow} from '../../test-utils';
import {MgLogo} from '..';

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

const expectLink = async (
	element: MgLogo,
	{label, url, rel}: Pick<Arguments, 'label' | 'url' | 'rel'>,
) => {
	const link = shadow(element).querySelector('a')!;
	await expect(link).toHaveAttribute('href', url);
	await expect(link).toHaveAttribute('rel', rel);
	await expect(link).toHaveAccessibleName(label);
	await expect(shadow(element).querySelector('title')).toHaveTextContent(
		label,
	);
};

export const LogoStory: Story = {
	name: 'Default logo',
	async play({args, canvasElement}) {
		const element = await getElement(canvasElement, 'mg-logo');
		const svg = shadow(element).querySelector('svg')!;
		await expect(element).toBeInstanceOf(MgLogo);
		await expectLink(element, args);
		await expect(svg.querySelector('.artwork')).toBeVisible();
		await expect(svg.querySelector('.solid')).not.toBeVisible();
		// The solid logo and the artwork’s mask share the same shape.
		await expect(svg.querySelector('.solid')!.getAttribute('d')).toBe(
			svg.querySelector(':scope mask path')!.getAttribute('d'),
		);
	},
};

export const SolidColorLogoStory: Story = {
	name: 'Logo with solid color',
	args: {
		logoColor: '#bada55',
	},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-logo');
		const svg = shadow(element).querySelector('svg')!;
		await expect(svg.querySelector('.artwork')).not.toBeVisible();
		await expect(svg.querySelector('.solid')).toBeVisible();
		await expect(svg.querySelector('.solid')).toHaveStyle({
			fill: 'rgb(186, 218, 85)',
		});
	},
};

export const BareLogoStory: Story = {
	name: 'Logo without attributes',
	tags: ['test-only'],
	render: () => html`<mg-logo></mg-logo>`,
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-logo');
		await expectLink(element, {
			label: 'Marc Görtz',
			url: 'https://marcgoertz.de/',
			rel: 'start me',
		});
	},
};

export default meta;
