/**
 * Chat Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {html} from 'lit';
import {fixture, shadowHtml} from '../../test-utils';
import {MgChat} from '..';

const mockHistory = [
	{
		content: 'O HAI! 👋🏼',
	},
];

const mockFullHistory = [
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
		content: '😁',
		timestamp: new Date(1938, 2, 24, 12, 13, 0),
		isMe: true,
		isEmoji: true,
	},
	{
		name: 'Costello',
		content: '😒',
		isMe: true,
		isEmoji: true,
	},
];

describe('<mg-chat>', () => {
	test('renders no chat by default', async () => {
		const element = await fixture<MgChat>(html`<mg-chat></mg-chat>`);
		expect(element).toBeInstanceOf(MgChat);
		expect(element.shadowRoot!.querySelector('ol')).toBeNull();
	});

	test('renders no chat for an empty history', async () => {
		const element = await fixture<MgChat>(
			html`<mg-chat .history=${[]}></mg-chat>`,
		);
		expect(element.shadowRoot!.querySelector('ol')).toBeNull();
	});

	test('renders a basic chat', async () => {
		const element = await fixture<MgChat>(
			html`<mg-chat .history=${mockHistory}></mg-chat>`,
		);
		expect(shadowHtml(element)).toMatchSnapshot();
	});

	test('renders a full-featured chat', async () => {
		const element = await fixture<MgChat>(
			html`<mg-chat .history=${mockFullHistory}></mg-chat>`,
		);
		expect(shadowHtml(element)).toMatchSnapshot();
	});

	test('renders repeated messages', async () => {
		const element = await fixture<MgChat>(
			html`<mg-chat
				.history=${[{content: 'OK'}, {content: 'OK', isMe: true}]}
			></mg-chat>`,
		);
		expect(element.shadowRoot!.querySelectorAll('q')).toHaveLength(2);
	});
});
