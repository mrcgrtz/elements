/**
 * Logo Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import {render} from '@testing-library/react';
import Logo from '..';

describe('<Logo />', () => {
  it('renders a logo', () => {
    const {container} = render(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders a logo with a solid color', () => {
    const {container} = render(<Logo solidColor="#BADA55" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
