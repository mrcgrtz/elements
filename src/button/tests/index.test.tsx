/**
 * Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import {render} from '@testing-library/react';
import Button from '..';

describe('<Button />', () => {
  it('renders a button', () => {
    const {container} = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
