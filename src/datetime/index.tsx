/**
 * DateTime Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import de from 'date-fns/locale/de';
import { ISO_DATE_TIME, HOUR, MINUTE, TIME, DATE, DAY } from './date-formats';

type Props = {
  dateTime: Date | number;
};

const Wrapper = styled.time`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 0.75rem;
  line-height: 1.5;
  color: dimgrey;
  white-space: nowrap;
`;

const Svg = styled.svg`
  margin-right: 0.75ex;
  width: 1em;
  height: 1em;
  vertical-align: -2px;
  fill: currentColor;
`;

const getTimeOfDay = (hour: string) => {
  switch (Number(hour)) {
    case 0:
    case 1:
    case 2:
    case 3:
      return 'Nachts am';
    case 4:
    case 5:
    case 6:
      return 'Verdammt früh am Morgen des';
    case 7:
    case 8:
    case 9:
      return 'Morgens am';
    case 10:
      return 'Am frühen Vormittag des';
    case 11:
      return 'Vormittags am';
    case 12:
    case 13:
      return 'Zur Mittagszeit am';
    case 14:
      return 'Am frühen Nachmittag des';
    case 15:
    case 16:
      return 'Nachmittags am';
    case 17:
      return 'Am späten Nachmittag des';
    case 18:
    case 19:
      return 'Am frühen Abend des';
    case 20:
    case 21:
      return 'Abends am';
    case 22:
      return 'Spätabends am';
    case 23:
    default:
      return 'Kurz vor Mitternacht am';
  }
};

const transformHour = (hour: string) => {
  const degreesPerHour = 360 / 12;
  return Number(hour) * degreesPerHour;
};

const transformMinute = (minute: string) => {
  const degreesPerMinute = 360 / 60;
  return Number(minute) * degreesPerMinute;
};

const DateTime = ({ dateTime, ...rest }: Props): JSX.Element => {
  const f = (as: string) => format(dateTime, as, { locale: de });

  return (
    <Wrapper
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      dateTime={f(ISO_DATE_TIME)}
      title={`${f(DAY)}, der ${f(DATE)} um ${f(TIME)} Uhr`}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        aria-hidden="true"
      >
        <title>{f(TIME)} Uhr</title>
        <circle
          cx="6"
          cy="6"
          r="5.425"
          stroke="currentColor"
          strokeWidth="1.15"
          fill="none"
        />
        <line
          x1="6"
          y1="6"
          x2="6"
          y2="4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
          fill="none"
          transform={`rotate(${transformHour(f(HOUR))} 6 6)`}
        />
        <line
          x1="6"
          y1="6"
          x2="6"
          y2="2.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
          fill="none"
          transform={`rotate(${transformMinute(f(MINUTE))} 6 6)`}
        />
      </Svg>
      {getTimeOfDay(f(HOUR))} {f(DATE)}
    </Wrapper>
  );
};

export default DateTime;
