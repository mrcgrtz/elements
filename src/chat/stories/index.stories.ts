import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {expect} from 'storybook/test';
import {getElement, shadow} from '../../test-utils';
import {MgChat} from '..';
import type {ChatMessage} from '../types';

type Arguments = {
	history: ChatMessage[];
};

const meta = {
	title: 'Features/Chat',
	component: 'mg-chat',
	args: {
		history: [
			{
				name: 'Costello',
				content: 'Look, you gotta first baseman?',
				timestamp: new Date(1938, 2, 24, 12, 11, 10),
			},
			{
				name: 'Abbott',
				content: 'Certainly.',
				timestamp: new Date(1938, 2, 24, 12, 11, 35),
				isMe: true,
			},
			{
				name: 'Costello',
				content: 'Who’s playing first?',
				timestamp: new Date(1938, 2, 24, 12, 11, 50),
			},
			{
				name: 'Abbott',
				content: 'That’s right.',
				timestamp: new Date(1938, 2, 24, 12, 12, 4),
				isMe: true,
			},
			{content: 'Costello becomes exasperated.', isAction: true},
			{
				name: 'Costello',
				content:
					'When you pay off the first baseman every month, who gets the money?',
				timestamp: new Date(1938, 2, 24, 12, 12, 39),
			},
			{
				name: 'Abbott',
				content: 'Every dollar of it.',
				timestamp: new Date(1938, 2, 24, 12, 12, 50),
				isMe: true,
			},
			{
				name: 'Abbott',
				content: '😁',
				timestamp: new Date(1938, 2, 24, 12, 13, 0),
				isMe: true,
				isEmoji: true,
			},
		],
	},
	render: ({history}) => html`<mg-chat .history=${history}></mg-chat>`,
} satisfies Meta<Arguments>;

type Story = StoryObj<Arguments>;

export const ChatStory: Story = {
	name: 'Chat',
	async play({canvasElement, step}) {
		const element = await getElement(canvasElement, 'mg-chat');
		const root = shadow(element);
		await expect(element).toBeInstanceOf(MgChat);
		await expect(root.querySelectorAll('li')).toHaveLength(8);

		await step('renders actions', async () => {
			const actions = root.querySelectorAll('.action');
			await expect(actions).toHaveLength(1);
			await expect(actions[0]).toHaveTextContent(
				'Costello becomes exasperated.',
			);
		});

		await step('renders own messages', async () => {
			await expect(root.querySelectorAll('.bubble')).toHaveLength(7);
			await expect(root.querySelectorAll('.bubble.me')).toHaveLength(4);
		});

		await step('renders names, but hides them for emoji', async () => {
			const names = root.querySelectorAll<HTMLElement>('.name');
			await expect(names).toHaveLength(7);
			await expect(names[0]).toHaveTextContent('Costello');
			await expect(names[0]).toBeVisible();
			await expect(
				root.querySelector('.emoji')!.querySelector('.name'),
			).not.toBeVisible();
		});

		await step('makes timestamps reachable by keyboard', async () => {
			const bubble = root.querySelector<HTMLElement>('.bubble')!;
			const time = bubble.querySelector('time')!;
			await expect(bubble).toHaveAttribute('tabindex', '0');
			await expect(time).toHaveAttribute('datetime', '1938-03-24');
			await expect(time).not.toBeVisible();
			bubble.focus({focusVisible: true});
			await expect(time).toBeVisible();
		});
	},
};

export const BasicChatStory: Story = {
	name: 'Chat, basic',
	tags: ['test-only'],
	args: {history: [{content: 'O HAI! 👋🏼'}]},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-chat');
		const bubble = shadow(element).querySelector('.bubble')!;
		await expect(bubble).not.toHaveClass('me', 'emoji');
		await expect(bubble).not.toHaveAttribute('tabindex');
		await expect(bubble.querySelector('.name')).toBeNull();
		await expect(bubble.querySelector('time')).toBeNull();
		await expect(bubble.querySelector('q')).toHaveTextContent('O HAI! 👋🏼');
	},
};

export const RepeatedChatStory: Story = {
	name: 'Chat, repeated messages',
	tags: ['test-only'],
	args: {history: [{content: 'OK'}, {content: 'OK', isMe: true}]},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-chat');
		await expect(shadow(element).querySelectorAll('q')).toHaveLength(2);
	},
};

export const EmptyChatStory: Story = {
	name: 'Chat, empty',
	tags: ['test-only'],
	args: {history: []},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-chat');
		await expect(shadow(element).querySelector('ol')).toBeNull();
	},
};

export const NoHistoryChatStory: Story = {
	name: 'Chat, without history',
	tags: ['test-only'],
	render: () => html`<mg-chat></mg-chat>`,
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-chat');
		await expect(shadow(element).querySelector('ol')).toBeNull();
	},
};

export default meta;
