/**
 * Test Utilities
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {render, type ReactiveElement, type TemplateResult} from 'lit';

const containers = new Set<HTMLElement>();

afterEach(() => {
	for (const container of containers) {
		container.remove();
	}

	containers.clear();
});

/**
 * Renders a Lit template into the document and waits for its first element
 * to finish updating.
 */
export const fixture = async <T extends Element>(
	template: TemplateResult,
): Promise<T> => {
	const container = document.createElement('div');
	document.body.append(container);
	containers.add(container);
	render(template, container);

	const element = container.firstElementChild as T;
	await (element as unknown as ReactiveElement).updateComplete;

	return element;
};

/**
 * Returns the shadow root markup without Lit’s part markers, so snapshots
 * stay stable.
 */
export const shadowHtml = (element: Element) =>
	// Happy DOM doesn’t implement `ShadowRoot.getHTML()` yet.
	// eslint-disable-next-line unicorn/prefer-dom-node-html-methods
	(element.shadowRoot?.innerHTML ?? '').replaceAll(/<!--[^>]*?-->/gv, '');
