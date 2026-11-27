import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {expect, fn, userEvent} from 'storybook/test';
import {getElement, shadow} from '../../test-utils';
import {MgButton} from '..';

type Arguments = {
	label: string;
	type: 'button' | 'submit' | 'reset';
	disabled: boolean;
	onSubmit: (event: SubmitEvent) => void;
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

type Story = StoryObj<Arguments>;

const getInnerButton = (element: MgButton) =>
	shadow(element).querySelector('button')!;

// Renders the button inside a form whose submissions are captured.
const renderInForm: Story['render'] = ({label, type, onSubmit}) => html`
	<form
		@submit=${(event: SubmitEvent) => {
			event.preventDefault();
			onSubmit(event);
		}}
	>
		<mg-button type=${type}>${label}</mg-button>
	</form>
`;

export const ButtonStory: Story = {
	name: 'Button',
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-button');
		await expect(element).toBeInstanceOf(MgButton);
		await expect(element).toHaveAttribute('type', 'button');
		await expect(element).toHaveTextContent('Lorem ipsum');
		await expect(getInnerButton(element)).toBeEnabled();
	},
};

export const DisabledButtonStory: Story = {
	name: 'Button, disabled',
	tags: ['test-only'],
	args: {disabled: true},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-button');
		await expect(getInnerButton(element)).toBeDisabled();
	},
};

export const FieldsetButtonStory: Story = {
	name: 'Button, in a disabled fieldset',
	tags: ['test-only'],
	render: ({label}) => html`
		<fieldset disabled><mg-button>${label}</mg-button></fieldset>
	`,
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-button');
		await expect(getInnerButton(element)).toBeDisabled();

		canvasElement.querySelector('fieldset')!.disabled = false;
		await element.updateComplete;
		await expect(getInnerButton(element)).toBeEnabled();
	},
};

export const SubmitButtonStory: Story = {
	name: 'Button, submitting a form',
	tags: ['test-only'],
	args: {type: 'submit', onSubmit: fn<Arguments['onSubmit']>()},
	render: renderInForm,
	async play({args, canvasElement}) {
		const element = await getElement(canvasElement, 'mg-button');
		await userEvent.click(getInnerButton(element));
		await expect(args.onSubmit).toHaveBeenCalledOnce();
	},
};

export const PlainButtonStory: Story = {
	name: 'Button, inside a form',
	tags: ['test-only'],
	args: {onSubmit: fn<Arguments['onSubmit']>()},
	render: renderInForm,
	async play({args, canvasElement}) {
		const element = await getElement(canvasElement, 'mg-button');
		await userEvent.click(getInnerButton(element));
		await expect(args.onSubmit).not.toHaveBeenCalled();
	},
};

export const ResetButtonStory: Story = {
	name: 'Button, resetting a form',
	tags: ['test-only'],
	args: {type: 'reset', label: 'Reset'},
	render: ({label, type}) => html`
		<form>
			<input name="name" value="Abbott" aria-label="Name" />
			<mg-button type=${type}>${label}</mg-button>
		</form>
	`,
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-button');
		const input = canvasElement.querySelector('input')!;
		await userEvent.clear(input);
		await userEvent.type(input, 'Costello');
		await expect(input).toHaveValue('Costello');

		await userEvent.click(getInnerButton(element));
		await expect(input).toHaveValue('Abbott');
	},
};

export const FormlessButtonStory: Story = {
	name: 'Button, outside of a form',
	tags: ['test-only'],
	args: {type: 'submit'},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-button');
		await userEvent.click(getInnerButton(element));

		element.type = 'reset';
		await element.updateComplete;
		await userEvent.click(getInnerButton(element));
	},
};

export default meta;
