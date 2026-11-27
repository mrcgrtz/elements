import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {expect, fn, userEvent} from 'storybook/test';
import {getElement, shadow} from '../../test-utils';
import {MgHamburgerButton} from '..';

type Arguments = {
	label: string;
	labelActive: string;
	open: boolean;
	onToggle: (event: Event) => void;
};

const meta = {
	title: 'Design System/Components',
	component: 'mg-hamburger-button',
	args: {
		label: 'Menü anzeigen',
		labelActive: 'Menü ausblenden',
		open: false,
		onToggle: fn<Arguments['onToggle']>(),
	},
	render: ({label, labelActive, open, onToggle}) => html`
		<mg-hamburger-button
			style="position: absolute; inset-block-start: 20px; inset-inline-start: 20px"
			label=${label}
			label-active=${labelActive}
			?open=${open}
			@toggle=${onToggle}
		></mg-hamburger-button>
	`,
} satisfies Meta<Arguments>;

type Story = StoryObj<Arguments>;

export const HamburgerButtonStory: Story = {
	name: 'Hamburger button',
	async play({args, canvasElement, step}) {
		const element = await getElement(canvasElement, 'mg-hamburger-button');
		const button = shadow(element).querySelector('button')!;
		await expect(element).toBeInstanceOf(MgHamburgerButton);
		await expect(button).toHaveAccessibleName('Menü anzeigen');
		await expect(button).toHaveAttribute('aria-expanded', 'false');

		await step('opens on click', async () => {
			await userEvent.click(button);
			await element.updateComplete;
			await expect(element).toHaveAttribute('open');
			await expect(button).toHaveAccessibleName('Menü ausblenden');
			await expect(button).toHaveAttribute('aria-expanded', 'true');
			await expect(args.onToggle).toHaveBeenLastCalledWith(
				expect.objectContaining({detail: {open: true}}),
			);
		});

		await step('closes on another click', async () => {
			await userEvent.click(button);
			await element.updateComplete;
			await expect(element).not.toHaveAttribute('open');
			await expect(button).toHaveAccessibleName('Menü anzeigen');
			await expect(args.onToggle).toHaveBeenLastCalledWith(
				expect.objectContaining({detail: {open: false}}),
			);
			await expect(args.onToggle).toHaveBeenCalledTimes(2);
		});
	},
};

export const CustomLabelsHamburgerButtonStory: Story = {
	name: 'Hamburger button, with custom labels',
	tags: ['test-only'],
	args: {label: 'Show menu', labelActive: 'Hide menu', open: true},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-hamburger-button');
		const button = shadow(element).querySelector('button')!;
		await expect(button).toHaveAccessibleName('Hide menu');
		await expect(button).toHaveAttribute('aria-expanded', 'true');
	},
};

export default meta;
