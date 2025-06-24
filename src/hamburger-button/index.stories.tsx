import React from 'react';
import type {Meta, StoryFn} from '@storybook/react';
import HamburgerButton from '.';

const meta: Meta = {
	title: 'Design System/Components',
	component: HamburgerButton,
	args: {
		label: 'Menü anzeigen',
		labelActive: 'Menü ausblenden',
		position: {blockStart: '20px', inlineStart: '20px'},
	},
};

export const HamburgerButtonStory: StoryFn<typeof HamburgerButton> = (
	properties,
) => <HamburgerButton {...properties} />;
HamburgerButtonStory.storyName = 'Hamburger button';

export default meta;
