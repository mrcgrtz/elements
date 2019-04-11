/**
 * Hamburger Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import userEvent from 'user-event';
import HamburgerButton from '.';

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
