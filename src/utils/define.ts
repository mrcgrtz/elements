/**
 * Registers a custom element unless the tag is already taken, e.g. when two
 * bundles include the same element.
 * @author Marc Görtz <https://marcgoertz.de/>
 */

export const define = (name: string, constructor: CustomElementConstructor) => {
	if (!customElements.get(name)) {
		customElements.define(name, constructor);
	}
};
