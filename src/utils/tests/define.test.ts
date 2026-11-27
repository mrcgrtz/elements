/**
 * Define Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {define} from '../define';

describe('define()', () => {
	test('registers a custom element', () => {
		class TestElement extends HTMLElement {}
		define('mg-test-define', TestElement);
		expect(customElements.get('mg-test-define')).toBe(TestElement);
	});

	test('keeps an already registered custom element', () => {
		class OtherElement extends HTMLElement {}
		expect(() => {
			define('mg-test-define', OtherElement);
		}).not.toThrow();
		expect(customElements.get('mg-test-define')).not.toBe(OtherElement);
	});
});
