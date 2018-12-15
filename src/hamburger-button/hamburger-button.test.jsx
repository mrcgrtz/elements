/**
 * Hamburger Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import HamburgerButton from '.';

describe('<HamburgerButton />', () => {
  it('renders a hamburger button', () => {
    const component = renderer.create(
      <HamburgerButton position={{ top: '1em', left: '1em' }} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('toggles the hamburger button on change', () => {
    const mockFn = jest.fn();
    const component = mount(
      <HamburgerButton
        position={{ bottom: '1em', right: '1em' }}
        onChange={mockFn()}
      />
    );
    expect(component.state('checked')).toBe(false);
    component.find('input').simulate('change');
    expect(component.state('checked')).toBe(true);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
