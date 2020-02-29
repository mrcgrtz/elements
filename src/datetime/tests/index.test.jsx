/**
 * DateTime Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import { render } from '@testing-library/react';
import DateTime from '..';

describe('<DateTime />', () => {
  it('renders a date and time information', () => {
    const mockDate = new Date(1999, 3, 17, 22, 11, 18);
    const { container } = render(<DateTime dateTime={mockDate} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('on different times of the day', () => {
    [...Array(24).keys()].forEach(hour => {
      it(`renders a date and time information for ${hour} o’clock`, () => {
        const mockDate = new Date(2020, 1, 12, hour, 0, 0);
        const { container } = render(<DateTime dateTime={mockDate} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
