/**
 * Hamburger Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HamburgerButton from '..';

describe('<HamburgerButton />', () => {
  it('renders a hamburger button', () => {
    const { container } = render(
      <HamburgerButton position={{ top: '1em', left: '1em' }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('toggles the hamburger button on change', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <HamburgerButton position={{ bottom: '1em', right: '1em' }} />
    );
    expect(container.firstChild).toMatchSnapshot();
    const input = container.querySelector('input') as Element;
    await user.click(input);
    expect(container.firstChild).toMatchSnapshot();
  });
});
