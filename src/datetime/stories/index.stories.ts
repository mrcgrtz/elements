import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {expect} from 'storybook/test';
import {getElement, shadow} from '../../test-utils';
import {MgDateTime} from '..';

type Arguments = {
	dateTime: Date | number;
};

const meta = {
	title: 'Design System/Components',
	component: 'mg-date-time',
	argTypes: {
		dateTime: {
			control: 'date',
		},
	},
	args: {
		dateTime: new Date(),
	},
	render: ({dateTime}) =>
		html`<mg-date-time .dateTime=${dateTime}></mg-date-time>`,
} satisfies Meta<Arguments>;

type Story = StoryObj<Arguments>;

const getTime = (element: MgDateTime) => shadow(element).querySelector('time');

const getText = (element: MgDateTime) =>
	shadow(element).textContent.replaceAll(/\s+/gv, ' ').trim();

export const DateTimeStory: Story = {
	name: 'Date and time',
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-date-time');
		await expect(element).toBeInstanceOf(MgDateTime);
		await expect(getTime(element)).toBeVisible();
	},
};

export const FixedDateTimeStory: Story = {
	name: 'Date and time, fixed',
	tags: ['test-only'],
	args: {dateTime: new Date(1999, 3, 17, 22, 11, 18)},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-date-time');
		const time = getTime(element)!;
		await expect(time).toHaveAttribute('datetime', '1999-04-17T22:11:18');
		await expect(time).toHaveAttribute(
			'title',
			'Samstag, der 17. April 1999 um 22:11 Uhr',
		);
		await expect(getText(element)).toBe(
			'22:11 Uhr Spätabends am 17. April 1999',
		);

		const [hourHand, minuteHand] = time.querySelectorAll('line');
		await expect(hourHand).toHaveAttribute('transform', 'rotate(660 6 6)');
		await expect(minuteHand).toHaveAttribute('transform', 'rotate(66 6 6)');
	},
};

export const InvalidDateTimeStory: Story = {
	name: 'Date and time, invalid',
	tags: ['test-only'],
	args: {dateTime: new Date('invalid date')},
	async play({canvasElement}) {
		const element = await getElement(canvasElement, 'mg-date-time');
		await expect(getTime(element)).toBeNull();
	},
};

export const AttributeDateTimeStory: Story = {
	name: 'Date and time, from attribute',
	tags: ['test-only'],
	render: () =>
		html`<mg-date-time datetime="1999-04-17T22:11:18"></mg-date-time>`,
	async play({canvasElement, step}) {
		const element = await getElement(canvasElement, 'mg-date-time');

		await step('parses a date string', async () => {
			await expect(element.dateTime).toEqual(
				new Date(1999, 3, 17, 22, 11, 18),
			);
			await expect(getTime(element)).toHaveAttribute(
				'datetime',
				'1999-04-17T22:11:18',
			);
		});

		await step('parses a timestamp', async () => {
			element.setAttribute('datetime', '924379878000');
			await element.updateComplete;
			await expect(element.dateTime).toBe(924_379_878_000);
			await expect(getTime(element)).not.toBeNull();
		});

		await step('ignores an empty value', async () => {
			element.setAttribute('datetime', '');
			await element.updateComplete;
			await expect(element.dateTime).toBeUndefined();
			await expect(getTime(element)).toBeNull();
		});

		await step('ignores a missing value', async () => {
			element.removeAttribute('datetime');
			await element.updateComplete;
			await expect(element.dateTime).toBeUndefined();
			await expect(getTime(element)).toBeNull();
		});
	},
};

const timesOfDay = [
	...Array.from({length: 4}, () => 'Nachts am'),
	...Array.from({length: 3}, () => 'Verdammt früh am Morgen des'),
	...Array.from({length: 3}, () => 'Morgens am'),
	'Am frühen Vormittag des',
	'Vormittags am',
	...Array.from({length: 2}, () => 'Zur Mittagszeit am'),
	'Am frühen Nachmittag des',
	...Array.from({length: 2}, () => 'Nachmittags am'),
	'Am späten Nachmittag des',
	...Array.from({length: 2}, () => 'Am frühen Abend des'),
	...Array.from({length: 2}, () => 'Abends am'),
	'Spätabends am',
	'Kurz vor Mitternacht am',
];

export const TimesOfDayStory: Story = {
	name: 'Date and time, on different times of the day',
	tags: ['test-only'],
	args: {dateTime: new Date(2020, 1, 12, 0, 0, 0)},
	async play({canvasElement, step}) {
		const element = await getElement(canvasElement, 'mg-date-time');

		for (const [hour, timeOfDay] of timesOfDay.entries()) {
			// Steps have to run one after another on the same element.
			// eslint-disable-next-line no-await-in-loop
			await step(`renders a text for ${hour} o’clock`, async () => {
				element.dateTime = new Date(2020, 1, 12, hour, 0, 0);
				await element.updateComplete;
				const time = `${String(hour).padStart(2, '0')}:00 Uhr`;
				await expect(getText(element)).toBe(
					`${time} ${timeOfDay} 12. Februar 2020`,
				);
			});
		}
	},
};

export default meta;
