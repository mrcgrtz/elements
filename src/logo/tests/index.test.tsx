/**
 * Logo Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import {render} from '@testing-library/react';
import Logo from '../index.tsx';

describe('<Logo />', () => {
	test('renders a logo', () => {
		const {container} = render(<Logo />);
		expect(container.firstChild).toMatchSnapshot();
	});
	test('renders a logo with a solid color', () => {
		const {container} = render(<Logo solidColor="#BADA55" />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
