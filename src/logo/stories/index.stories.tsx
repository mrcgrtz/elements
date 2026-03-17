import React from 'react';
import type {StoryFn, Meta} from '@storybook/react-vite';
import Logo from '..';

const meta = {
	title: 'Design System/Logos',
	component: Logo,
	args: {
		title: 'Marc Görtz',
		url: 'https://marcgoertz.de/',
		urlRelations: ['start', 'me'],
	},
	argTypes: {
		solidColor: {
			control: 'color',
		},
	},
} satisfies Meta<typeof Logo>;

const Template: StoryFn<typeof meta> = (properties) => <Logo {...properties} />;

export const LogoStory = Template.bind({});
LogoStory.storyName = 'Default logo';

export const SolidColorLogoStory = Template.bind({});
SolidColorLogoStory.args = {
	solidColor: '#bada55',
};
SolidColorLogoStory.storyName = 'Logo with solid color';

export default meta;
