/**
 * Hamburger Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {html} from 'lit';
import {userEvent} from '@testing-library/user-event';
import {fixture, shadowHtml} from '../../test-utils';
import {MgHamburgerButton} from '..';

describe('<mg-hamburger-button>', () => {
	test('renders a hamburger button', async () => {
		const element = await fixture<MgHamburgerButton>(
			html`<mg-hamburger-button></mg-hamburger-button>`,
		);
		expect(element).toBeInstanceOf(MgHamburgerButton);
		expect(shadowHtml(element)).toMatchSnapshot();
	});

	test('toggles the hamburger button on click', async () => {
		const user = userEvent.setup();
		const element = await fixture<MgHamburgerButton>(
			html`<mg-hamburger-button></mg-hamburger-button>`,
		);
		const handleToggle = vi.fn<(event: Event) => void>();
		element.addEventListener('toggle', handleToggle);
		const button = element.shadowRoot!.querySelector('button')!;

		await user.click(button);
		await element.updateComplete;
		expect(element.hasAttribute('open')).toBe(true);
		expect(handleToggle).toHaveBeenLastCalledWith(
			expect.objectContaining({detail: {open: true}}),
		);
		expect(shadowHtml(element)).toMatchSnapshot();

		await user.click(button);
		await element.updateComplete;
		expect(element.hasAttribute('open')).toBe(false);
		expect(button.getAttribute('aria-label')).toBe('Menü anzeigen');
		expect(handleToggle).toHaveBeenCalledTimes(2);
	});

	test('uses custom labels', async () => {
		const element = await fixture<MgHamburgerButton>(
			html`<mg-hamburger-button
				label="Show menu"
				label-active="Hide menu"
				open
			></mg-hamburger-button>`,
		);
		const button = element.shadowRoot!.querySelector('button')!;
		expect(button.getAttribute('aria-label')).toBe('Hide menu');
		expect(button.getAttribute('aria-expanded')).toBe('true');
	});
});
