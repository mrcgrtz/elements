/**
 * Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

describe('<Button />', () => {
  it('renders a button', () => {
    const component = renderer.create(<Button />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
