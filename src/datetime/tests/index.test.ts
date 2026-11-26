/**
 * DateTime Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {html} from 'lit';
import {fixture, shadowHtml} from '../../test-utils';
import {MgDateTime, dateTimeConverter} from '..';

describe('<mg-date-time>', () => {
	test('renders a date and time information', async () => {
		const mockDate = new Date(1999, 3, 17, 22, 11, 18);
		const element = await fixture<MgDateTime>(
			html`<mg-date-time .dateTime=${mockDate}></mg-date-time>`,
		);
		expect(element).toBeInstanceOf(MgDateTime);
		expect(shadowHtml(element)).toMatchSnapshot();
	});

	test('does not render an invalid date and time information', async () => {
		const mockDate = new Date('invalid date');
		const element = await fixture<MgDateTime>(
			html`<mg-date-time .dateTime=${mockDate}></mg-date-time>`,
		);
		expect(element.shadowRoot!.querySelector('time')).toBeNull();
	});

	test('does not render without a date', async () => {
		const element = await fixture<MgDateTime>(
			html`<mg-date-time></mg-date-time>`,
		);
		expect(element.shadowRoot!.querySelector('time')).toBeNull();
	});

	test('reads the date from the datetime attribute', async () => {
		const element = await fixture<MgDateTime>(
			html`<mg-date-time datetime="1999-04-17T22:11:18"></mg-date-time>`,
		);
		expect(
			element.shadowRoot!.querySelector('time')!.getAttribute('datetime'),
		).toBe('1999-04-17T22:11:18');
	});

	describe('datetime attribute converter', () => {
		test('parses a timestamp', () => {
			expect(dateTimeConverter.fromAttribute!('924379878000')).toBe(
				924_379_878_000,
			);
		});

		test('parses a date string', () => {
			expect(
				dateTimeConverter.fromAttribute!('1999-04-17T22:11:18'),
			).toEqual(new Date(1999, 3, 17, 22, 11, 18));
		});

		test('ignores a missing value', () => {
			expect(dateTimeConverter.fromAttribute!(null)).toBeUndefined();
			expect(dateTimeConverter.fromAttribute!('')).toBeUndefined();
		});
	});

	describe('on different times of the day', () => {
		for (const hour of Array.from({length: 24}).keys()) {
			test(`renders a text for ${hour} o’clock`, async () => {
				const mockDate = new Date(2020, 1, 12, hour, 0, 0);
				const element = await fixture<MgDateTime>(
					html`<mg-date-time .dateTime=${mockDate}></mg-date-time>`,
				);
				expect(
					element
						.shadowRoot!.textContent.replaceAll(/\s+/gv, ' ')
						.trim(),
				).toMatchSnapshot();
			});
		}
	});
});
