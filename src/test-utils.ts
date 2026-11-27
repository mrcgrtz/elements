/**
 * Test Utilities
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import type {ReactiveElement} from 'lit';

/**
 * Finds the first matching element in a story’s canvas and waits for it to
 * finish updating.
 */
export const getElement = async <K extends keyof HTMLElementTagNameMap>(
	canvasElement: HTMLElement,
	selector: K,
): Promise<HTMLElementTagNameMap[K]> => {
	const element = canvasElement.querySelector(selector)!;
	await (element as unknown as ReactiveElement).updateComplete;

	return element;
};

/**
 * Shorthand for querying an element’s shadow root.
 */
export const shadow = (element: Element) => element.shadowRoot!;
