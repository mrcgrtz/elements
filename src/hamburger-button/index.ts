/**
 * Hamburger Button Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {LitElement, css, html} from 'lit';
import {define} from '../utils/define';

export type HamburgerToggleEvent = CustomEvent<{open: boolean}>;

export class MgHamburgerButton extends LitElement {
	static override shadowRootOptions = {
		...LitElement.shadowRootOptions,
		delegatesFocus: true,
	};

	static override properties = {
		label: {type: String},
		labelActive: {type: String, attribute: 'label-active'},
		open: {type: Boolean, reflect: true},
	};

	static override styles = css`
		:host {
			display: inline-block;
			inline-size: 2em;
			block-size: 1.5em;
		}

		button {
			position: relative;
			margin: 0;
			padding: 0;
			border: 0;
			inline-size: 100%;
			block-size: 100%;
			color: inherit;
			background: none;
			appearance: none;
			cursor: pointer;
		}

		.lines,
		.lines::before,
		.lines::after {
			display: block;
			position: absolute;
			border-radius: 4px;
			inline-size: 100%;
			block-size: 4px;
			background-color: currentcolor;
			transition-property: transform;
			transition-duration: 0.2s;
			transition-timing-function: ease;
		}

		.lines {
			inset-block-start: 50%;
			margin-block-start: -2px;
		}

		.lines::before,
		.lines::after {
			content: '';
		}

		.lines::before {
			inset-block-start: -10px;
			transition:
				inset-block-start 0.1s 0.25s ease-in,
				opacity 0.1s ease-in;
		}

		.lines::after {
			inset-block-end: -10px;
			transition:
				inset-block-end 0.1s 0.25s ease-in,
				transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}

		:host([open]) .lines {
			transform: rotate(225deg);
			transition-delay: 0.12s;
			transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		:host([open]) .lines::before {
			inset-block-start: 0;
			opacity: 0;
			transition:
				inset-block-start 0.1s ease-out,
				opacity 0.1s 0.12s ease-out;
		}

		:host([open]) .lines::after {
			inset-block-end: 0;
			transform: rotate(-90deg);
			transition:
				inset-block-end 0.1s ease-out,
				transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	`;

	private readonly handleClick = () => {
		this.open = !this.open;
		this.dispatchEvent(
			new CustomEvent('toggle', {
				detail: {open: this.open},
				bubbles: true,
				composed: true,
			}),
		);
	};

	declare label: string;
	declare labelActive: string;
	declare open: boolean;

	constructor() {
		super();
		this.label = 'Menü anzeigen';
		this.labelActive = 'Menü ausblenden';
		this.open = false;
	}

	override render() {
		return html`
			<button
				part="button"
				type="button"
				aria-expanded=${this.open ? 'true' : 'false'}
				aria-label=${this.open ? this.labelActive : this.label}
				@click=${this.handleClick}
			>
				<span class="lines" aria-hidden="true"></span>
			</button>
		`;
	}
}

define('mg-hamburger-button', MgHamburgerButton);

declare global {
	// The DOM typings declare this as an interface, so it has to be merged as one.
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/naming-convention
	interface HTMLElementTagNameMap {
		'mg-hamburger-button': MgHamburgerButton;
	}
}
