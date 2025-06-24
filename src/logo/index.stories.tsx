import React from 'react';
import type {StoryFn, Meta} from '@storybook/react';
import Logo from '.';

const meta: Meta = {
	title: 'Design System/Logos',
	component: Logo,
	args: {
		title: 'Marc Görtz',
		url: 'https://marcgoertz.de/',
		urlRelations: ['start', 'me'],
		solidColor: undefined,
	},
	argTypes: {
		solidColor: {
			control: 'color',
			description: 'A solid color for the logo, if desired.',
		},
	},
};

export const LogoStory: StoryFn<typeof Logo> = (properties) => (
	<Logo {...properties} />
);
LogoStory.storyName = 'Logo';

export default meta;
