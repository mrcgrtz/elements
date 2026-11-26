import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '..';
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

export const ChatStory: StoryObj<Arguments> = {
	name: 'Chat',
};

export default meta;
