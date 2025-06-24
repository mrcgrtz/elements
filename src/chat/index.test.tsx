/**
 * Chat Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {composeStories} from '@storybook/react-vite';
import * as stories from './index.stories';

const {ChatStory} = composeStories(stories);

describe('<Chat />', () => {
	test('renders no chat by default', async () => {
		await ChatStory.run({
			args: {
				history: [],
			},
		});
		expect(document.body.firstChild?.firstChild).toBeNull();
	});

	test('renders a basic chat', async () => {
		await ChatStory.run({
			args: {
				history: [
					{
						content: 'O HAI! 👋🏼',
					},
				],
			},
		});
		expect(document.body.firstChild?.firstChild).toMatchSnapshot();
	});

	test('renders a full-featured chat', async () => {
		await ChatStory.run();
		expect(document.body.firstChild?.firstChild).toMatchSnapshot();
	});
});
