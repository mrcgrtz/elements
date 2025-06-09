/**
 * DateTime Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, {type FC, StrictMode, useMemo} from 'react';
import {styled} from 'styled-components';
import {format} from 'date-fns';
import {de} from 'date-fns/locale/de';
import {
	hour,
	minute,
	time,
	date,
	day,
	isoDateTime,
} from '../constants/date-formats.ts';

type Properties = {
	readonly dateTime: Date | number;
};

const Wrapper = styled.time`
	font-family:
		system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	font-size: 0.75rem;
	line-height: 1.5;
	color: dimgrey;
	white-space: nowrap;
`;

const Svg = styled.svg`
	margin-inline-end: 0.75ex;
	inline-size: 1em;
	block-size: 1em;
	vertical-align: -2px;
	fill: currentcolor;
`;

// eslint-disable-next-line complexity
const getTimeOfDay = (hour: string) => {
	switch (Number(hour)) {
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

const transformHour = (hour: number) => hour * (360 / 12);
const transformMinute = (minute: number) => minute * (360 / 60);

const DateTime: FC<Properties> = ({dateTime, ...rest}) => {
	const f = useMemo(
		() => (as: string) => format(dateTime, as, {locale: de}),
		[dateTime],
	);

	const hourValue = Number(f(hour));
	const minuteValue = Number(f(minute));

	return (
		<StrictMode>
			<Wrapper
				{...rest}
				dateTime={f(isoDateTime)}
				title={`${f(day)}, der ${f(date)} um ${f(time)} Uhr`}
			>
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width='12'
					height='12'
					viewBox='0 0 12 12'
					aria-hidden='true'
				>
					<title>{f(time)} Uhr</title>
					<circle
						cx='6'
						cy='6'
						r='5.425'
						stroke='currentColor'
						strokeWidth='1.15'
						fill='none'
					/>
					<line
						x1='6'
						y1='6'
						x2='6'
						y2='4'
						stroke='currentColor'
						strokeLinecap='round'
						strokeWidth='1.35'
						fill='none'
						transform={`rotate(${transformHour(hourValue)} 6 6)`}
					/>
					<line
						x1='6'
						y1='6'
						x2='6'
						y2='2.5'
						stroke='currentColor'
						strokeLinecap='round'
						strokeWidth='1.35'
						fill='none'
						transform={`rotate(${transformMinute(minuteValue)} 6 6)`}
					/>
				</Svg>
				{getTimeOfDay(f(hour))} {f(date)}
			</Wrapper>
		</StrictMode>
	);
};

export default DateTime;
