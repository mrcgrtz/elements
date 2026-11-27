/**
 * Button Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {html} from 'lit';
import {fixture, shadowHtml} from '../../test-utils';
import {MgButton} from '..';

const getInnerButton = (element: MgButton) =>
	element.shadowRoot!.querySelector('button')!;

describe('<mg-button>', () => {
	test('renders a button', async () => {
		const element = await fixture<MgButton>(html`<mg-button></mg-button>`);
		expect(element).toBeInstanceOf(MgButton);
		expect(element.getAttribute('type')).toBe('button');
		expect(shadowHtml(element)).toMatchSnapshot();
	});

	test('renders a disabled button', async () => {
		const element = await fixture<MgButton>(
			html`<mg-button disabled>Lorem ipsum</mg-button>`,
		);
		expect(getInnerButton(element).disabled).toBe(true);
	});

	test('is disabled by a disabled fieldset', async () => {
		const element = await fixture<MgButton>(html`<mg-button></mg-button>`);
		element.formDisabledCallback(true);
		await element.updateComplete;
		expect(getInnerButton(element).disabled).toBe(true);
		element.formDisabledCallback(false);
		await element.updateComplete;
		expect(getInnerButton(element).disabled).toBe(false);
	});

	test('submits its form', async () => {
		const form = await fixture<HTMLFormElement>(
			html`<form><mg-button type="submit">Send</mg-button></form>`,
		);
		const handleSubmit = vi.fn((event: Event) => {
			event.preventDefault();
		});
		form.addEventListener('submit', handleSubmit);
		const element = form.querySelector('mg-button')!;
		await element.updateComplete;
		getInnerButton(element).click();
		expect(handleSubmit).toHaveBeenCalledOnce();
	});

	test('resets its form', async () => {
		const form = await fixture<HTMLFormElement>(
			html`<form>
				<input name="name" value="Abbott" />
				<mg-button type="reset">Reset</mg-button>
			</form>`,
		);
		const input = form.querySelector('input')!;
		input.value = 'Costello';
		const element = form.querySelector('mg-button')!;
		await element.updateComplete;
		getInnerButton(element).click();
		expect(input.value).toBe('Abbott');
	});

	test('does nothing outside of a form', async () => {
		const element = await fixture<MgButton>(
			html`<mg-button type="submit"></mg-button>`,
		);
		expect(() => {
			getInnerButton(element).click();
		}).not.toThrow();
		element.type = 'reset';
		await element.updateComplete;
		expect(() => {
			getInnerButton(element).click();
		}).not.toThrow();
	});

	test('does not submit as a plain button', async () => {
		const form = await fixture<HTMLFormElement>(
			html`<form><mg-button>Click</mg-button></form>`,
		);
		const handleSubmit = vi.fn((event: Event) => {
			event.preventDefault();
		});
		form.addEventListener('submit', handleSubmit);
		const element = form.querySelector('mg-button')!;
		await element.updateComplete;
		getInnerButton(element).click();
		expect(handleSubmit).not.toHaveBeenCalled();
	});
});
