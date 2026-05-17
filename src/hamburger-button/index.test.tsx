/**
 * Hamburger Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {composeStories} from '@storybook/react-vite';
import * as stories from './index.stories';

const {HamburgerButtonStory} = composeStories(stories);

import React from 'react';
import {render} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import HamburgerButton from '.';

describe('<HamburgerButton />', () => {
	test('renders a hamburger button', async () => {
		await HamburgerButtonStory.run({
			args: {
				position: {blockStart: '1em', inlineStart: '1em'},
			},
		});
		expect(document.body.firstChild).toMatchSnapshot();
	});

	test('toggles the hamburger button on change', async () => {
		const user = userEvent.setup();
		await HamburgerButtonStory.run({
			args: {
				position: {blockEnd: '1em', inlineEnd: '1em'},
			},
		});
		expect(document.body.firstChild).toMatchSnapshot();
		const input = document.querySelector('input') as HTMLInputElement;
		await user.click(input);
		expect(document.body.firstChild).toMatchSnapshot();
	});
});
