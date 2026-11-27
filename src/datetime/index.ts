/**
 * DateTime Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {
	LitElement,
	css,
	html,
	nothing,
	type ComplexAttributeConverter,
} from 'lit';
import {format} from 'date-fns';
import {de} from 'date-fns/locale/de';
import {
	hour,
	minute,
	time,
	date,
	day,
	isoDateTime,
} from '../constants/date-formats';
import {define} from '../utils/define';

type DateValue = Date | number | undefined;

/**
 * Accepts a timestamp (`datetime="924379878000"`) or any string `Date`
 * understands (`datetime="1999-04-17T22:11:18"`).
 */
export const dateTimeConverter: ComplexAttributeConverter<DateValue> = {
	fromAttribute(value) {
		if (value === null || value === '') {
			return undefined;
		}

		return /^-?\d+$/v.test(value) ? Number(value) : new Date(value);
	},
};

// eslint-disable-next-line complexity
const getTimeOfDay = (hours: string) => {
	switch (Number(hours)) {
		case 0:
		case 1:
		case 2:
		case 3: {
			return 'Nachts am';
		}

		case 4:
		case 5:
		case 6: {
			return 'Verdammt früh am Morgen des';
		}

		case 7:
		case 8:
		case 9: {
			return 'Morgens am';
		}

		case 10: {
			return 'Am frühen Vormittag des';
		}

		case 11: {
			return 'Vormittags am';
		}

		case 12:
		case 13: {
			return 'Zur Mittagszeit am';
		}

		case 14: {
			return 'Am frühen Nachmittag des';
		}

		case 15:
		case 16: {
			return 'Nachmittags am';
		}

		case 17: {
			return 'Am späten Nachmittag des';
		}

		case 18:
		case 19: {
			return 'Am frühen Abend des';
		}

		case 20:
		case 21: {
			return 'Abends am';
		}

		case 22: {
			return 'Spätabends am';
		}

		// eslint-disable-next-line unicorn/no-useless-switch-case
		case 23:
		default: {
			return 'Kurz vor Mitternacht am';
		}
	}
};

const transformHour = (hours: number) => hours * (360 / 12);
const transformMinute = (minutes: number) => minutes * (360 / 60);

const formatter = (dateTime: DateValue) => (as: string) => {
	try {
		return format(dateTime!, as, {locale: de});
	} catch {
		return undefined;
	}
};

export class MgDateTime extends LitElement {
	static override properties = {
		dateTime: {attribute: 'datetime', converter: dateTimeConverter},
	};

	static override styles = css`
		time {
			font-family: var(--font, system-ui);
			font-size: 0.75rem;
			line-height: 1.5;
			color: var(
				--muted,
				light-dark(
					oklab(54.718% -0.0021 -0.0103),
					oklch(69% 0.0144 95.32deg)
				)
			);
			white-space: nowrap;
		}

		svg {
			margin-inline-end: 0.75ex;
			inline-size: 1em;
			block-size: 1em;
			vertical-align: -2px;
			fill: currentcolor;
		}
	`;

	declare dateTime: DateValue;

	override render() {
		const f = formatter(this.dateTime);

		if (f(hour) === undefined || f(minute) === undefined) {
			return nothing;
		}

		const hourValue = Number(f(hour));
		const minuteValue = Number(f(minute));

		return html`
			<time
				part="time"
				datetime=${f(isoDateTime)!}
				title=${`${f(day)}, der ${f(date)} um ${f(time)} Uhr`}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 12 12"
					aria-hidden="true"
				>
					<title>${f(time)} Uhr</title>
					<circle
						cx="6"
						cy="6"
						r="5.425"
						stroke="currentColor"
						stroke-width="1.15"
						fill="none"
					/>
					<line
						x1="6"
						y1="6"
						x2="6"
						y2="4"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="1.35"
						fill="none"
						transform=${`rotate(${transformHour(hourValue)} 6 6)`}
					/>
					<line
						x1="6"
						y1="6"
						x2="6"
						y2="2.5"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="1.35"
						fill="none"
						transform=${`rotate(${transformMinute(minuteValue)} 6 6)`}
					/></svg
				>${getTimeOfDay(f(hour)!)} ${f(date)}</time
			>
		`;
	}
}

define('mg-date-time', MgDateTime);

declare global {
	// The DOM typings declare this as an interface, so it has to be merged as one.
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/naming-convention
	interface HTMLElementTagNameMap {
		'mg-date-time': MgDateTime;
	}
}
