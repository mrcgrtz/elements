/**
 * Hamburger Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HamburgerButton from '../hamburger-button';

describe('<HamburgerButton />', () => {
  it('renders a hamburger button', () => {
    const container = renderer.create(
      <HamburgerButton position={{ top: '1em', left: '1em' }} />
    );
    expect(container.toJSON()).toMatchSnapshot();
  });
  it('toggles the hamburger button on change', () => {
    const { container } = render(
      <HamburgerButton position={{ bottom: '1em', right: '1em' }} />
    );
    expect(container).toMatchSnapshot();
    const input = container.querySelector('input');
    userEvent.click(input);
    expect(container).toMatchSnapshot();
  });
});
