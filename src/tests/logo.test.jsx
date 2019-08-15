/**
 * Logo Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../logo';

describe('<Logo />', () => {
  it('renders a logo', () => {
    const component = renderer.create(<Logo />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('renders a logo with a solid color', () => {
    const component = renderer.create(<Logo solidColor="#BADA55" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
