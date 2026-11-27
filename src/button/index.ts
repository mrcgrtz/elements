/**
 * Button Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {LitElement, css, html} from 'lit';
import {define} from '../utils/define';

type ButtonType = 'button' | 'submit' | 'reset';

export class MgButton extends LitElement {
	static formAssociated = true;

	static override shadowRootOptions = {
		...LitElement.shadowRootOptions,
		delegatesFocus: true,
	};

	static override properties = {
		type: {type: String, reflect: true},
		disabled: {type: Boolean, reflect: true},
		formDisabled: {state: true},
	};

	static override styles = css`
		:host {
			--button-branding: var(--branding, oklch(55% 0.2211 349.43deg));

			display: inline-block;
		}

		button {
			display: inline-block;
			margin: 0;
			padding: 0.25rem 1rem;
			border: 0;
			border-radius: 0.25rem;
			font-size: inherit;
			font-family: var(--font, system-ui);
			font-weight: 600;
			line-height: inherit;
			color: oklch(100% 0 0deg);
			background-color: var(--button-branding);
			box-sizing: border-box;
			appearance: none;
			cursor: pointer;
			transition:
				background-color 0.15s,
				translate 0.1s;
		}

		button:hover {
			background-color: color-mix(
				in oklch,
				var(--button-branding),
				oklch(0% 0 0deg) 18%
			);
		}

		button:active {
			translate: 0 1px;
		}

		button:focus-visible {
			outline: 2px solid var(--button-branding);
			outline-offset: 2px;
		}

		@media (prefers-reduced-motion: reduce) {
			button {
				transition: none;
			}
		}
	`;

	// A `<button>` inside a shadow root can’t reach the outer form, so the
	// host forwards submit and reset itself.
	private readonly handleClick = () => {
		const form = this.closest('form');

		if (this.type === 'submit') {
			form?.requestSubmit();
		} else if (this.type === 'reset') {
			form?.reset();
		}
	};

	declare type: ButtonType;
	declare disabled: boolean;
	declare formDisabled: boolean;

	constructor() {
		super();
		this.type = 'button';
		this.disabled = false;
		this.formDisabled = false;
	}

	/**
	 * Called by the browser when an ancestor `<fieldset>` is (un)disabled.
	 */
	formDisabledCallback(isDisabled: boolean) {
		this.formDisabled = isDisabled;
	}

	override render() {
		return html`
			<button
				part="button"
				type="button"
				?disabled=${this.disabled || this.formDisabled}
				@click=${this.handleClick}
			>
				<slot></slot>
			</button>
		`;
	}
}

define('mg-button', MgButton);

declare global {
	// The DOM typings declare this as an interface, so it has to be merged as one.
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/naming-convention
	interface HTMLElementTagNameMap {
		'mg-button': MgButton;
	}
}
