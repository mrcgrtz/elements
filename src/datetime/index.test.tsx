/**
 * DateTime Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {composeStories} from '@storybook/react-vite';
import * as stories from './index.stories';

const {DateTimeStory} = composeStories(stories);

describe('<DateTime />', () => {
	test('renders a date and time information', async () => {
		const mockDate = new Date(1999, 3, 17, 22, 11, 18);
		await DateTimeStory.run({args: {dateTime: mockDate}});
		expect(document.body.firstChild?.firstChild).toMatchSnapshot();
	});

	describe('on different times of the day', () => {
		for (const hour of Array.from({length: 24}).keys()) {
			// eslint-disable-next-line @typescript-eslint/no-loop-func
			test(`renders a text for ${hour} o’clock`, async () => {
				const mockDate = new Date(2020, 1, 12, hour, 0, 0);
				await DateTimeStory.run({args: {dateTime: mockDate}});
				expect(document.body.firstChild?.textContent).toMatchSnapshot();
			});
		}
	});
});
