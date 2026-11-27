/**
 * Logo Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {html} from 'lit';
import {fixture, shadowHtml} from '../../test-utils';
import {MgLogo} from '..';

describe('<mg-logo>', () => {
	test('renders a logo', async () => {
		const element = await fixture<MgLogo>(html`<mg-logo></mg-logo>`);
		expect(element).toBeInstanceOf(MgLogo);
		expect(shadowHtml(element)).toMatchSnapshot();
	});

	test('renders both the artwork and the solid logo', async () => {
		const element = await fixture<MgLogo>(html`<mg-logo></mg-logo>`);
		const svg = element.shadowRoot!.querySelector('svg')!;
		expect(svg.querySelector('.artwork')).not.toBeNull();
		expect(svg.querySelector('.solid')!.getAttribute('d')).toBe(
			svg.querySelector(':scope mask path')!.getAttribute('d'),
		);
	});

	test('uses custom link attributes', async () => {
		const element = await fixture<MgLogo>(
			html`<mg-logo
				label="MG"
				url="https://example.com/"
				rel="me"
			></mg-logo>`,
		);
		const link = element.shadowRoot!.querySelector('a')!;
		expect(link.getAttribute('href')).toBe('https://example.com/');
		expect(link.getAttribute('rel')).toBe('me');
		expect(link.getAttribute('aria-label')).toBe('MG');
		expect(element.shadowRoot!.querySelector('title')!.textContent).toBe(
			'MG',
		);
	});
});
