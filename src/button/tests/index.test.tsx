/**
 * Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import {render} from '@testing-library/react';
import Button from '../index.tsx';

describe('<Button />', () => {
	test('renders a button', () => {
		const {container} = render(<Button />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
