/**
 * Logo Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {composeStories} from '@storybook/react-vite';
import * as stories from './index.stories';

const {LogoStory} = composeStories(stories);

describe('<Logo />', () => {
	test('renders a logo', async () => {
		await LogoStory.run();
		expect(document.body.firstChild?.firstChild).toMatchSnapshot();
	});

	test('renders a logo with default properties', async () => {
		await LogoStory.run({
			args: {
				title: undefined,
				url: undefined,
				urlRelations: undefined,
				solidColor: undefined,
			},
		});
		expect(document.body.firstChild?.firstChild).toMatchSnapshot();
	});

	test('renders a logo with a solid color', async () => {
		await LogoStory.run({
			args: {
				solidColor: '#bada55',
			},
		});
		expect(document.body.firstChild?.firstChild).toMatchSnapshot();
	});
});
