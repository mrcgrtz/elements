/**
 * Chat Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import {LitElement, css, html, nothing} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {format, formatRelative} from 'date-fns';
import {isoDate} from '../constants/date-formats';
import {define} from '../utils/define';
import type {ChatMessage} from './types';

export type {ChatMessage} from './types';

export class MgChat extends LitElement {
	static override properties = {
		history: {attribute: false},
	};

	static override styles = css`
		:host {
			--chat-font: var(--font, system-ui);
			--chat-text: var(
				--text,
				light-dark(
					oklch(49% 0.0102 248.04deg),
					oklch(84% 0.0102 95.19deg)
				)
			);
			--chat-dialog: var(
				--dialog,
				light-dark(
					oklch(65% 0.0144 251.62deg / 10%),
					oklch(24% 0.0189 262.13deg)
				)
			);
			--chat-dialog-me: var(
				--dialog-me,
				light-dark(
					oklch(60% 0.2606 301.75deg / 20%),
					oklch(48% 0.0732 305.7deg)
				)
			);
			--chat-muted: var(
				--muted,
				light-dark(
					oklab(54.718% -0.0021 -0.0103),
					oklch(69% 0.0144 95.32deg)
				)
			);
		}

		ol {
			display: flex;
			flex-direction: column;
			padding: 0;
			list-style: none;
			font-family: var(--chat-font);
			line-height: 1.25;
		}

		.action {
			align-self: center;
			margin: 0.5rem 0;
			text-align: center;
			max-inline-size: 80%;
			font-size: 0.75rem;
			font-weight: bold;
			color: var(--chat-muted);
		}

		.bubble {
			position: relative;
			align-self: flex-start;
			padding: 0.5rem;
			border-radius: 0.75rem;
			outline: 0;
			max-inline-size: 60%;
			color: var(--chat-text);
			background-color: var(--chat-dialog);
			box-sizing: border-box;
		}

		.bubble.me {
			align-self: flex-end;
			background-color: var(--chat-dialog-me);
		}

		.bubble.emoji {
			padding: 0;
			font-size: 4em;
			background-color: transparent;
		}

		.bubble + li {
			margin-block-start: 0.5rem;
		}

		.name {
			display: block;
			margin-block-end: 0.25em;
			font-size: 0.75rem;
			font-weight: bold;
		}

		.name[hidden] {
			display: none;
		}

		q {
			display: block;
			quotes: none;
		}

		time {
			display: none;
			position: absolute;
			inset-block-start: 100%;
			inset-inline: 0.6667em auto;
			margin-block-start: 0.25em;
			text-align: start;
			font-size: 0.75rem;
			color: var(--chat-muted);
			opacity: 0.75;
			white-space: nowrap;
		}

		.me time {
			inset-inline: auto 0.6667em;
			text-align: end;
		}

		.bubble:active time,
		.bubble:focus-visible time {
			display: block;
		}
	`;

	declare history?: ChatMessage[];

	private renderMessage({
		content,
		name,
		timestamp,
		isEmoji = false,
		isMe = false,
		isAction = false,
	}: ChatMessage) {
		if (isAction) {
			return html`<li class="action">${content}</li>`;
		}

		return html`
			<li
				class=${classMap({bubble: true, me: isMe, emoji: isEmoji})}
				tabindex=${ifDefined(timestamp ? 0 : undefined)}
			>
				${
					name === undefined || name === ''
						? nothing
						: html`<span class="name" ?hidden=${isEmoji}
								>${name}</span
							>`
				}
				<q>${content}</q>
				${
					timestamp
						? html`<time datetime=${format(timestamp, isoDate)}
								>${formatRelative(timestamp, new Date())}</time
							>`
						: nothing
				}
			</li>
		`;
	}

	override render() {
		if (!Array.isArray(this.history) || this.history.length === 0) {
			return nothing;
		}

		return html`
			<ol part="list">
				${this.history.map((message) => this.renderMessage(message))}
			</ol>
		`;
	}
}

define('mg-chat', MgChat);

declare global {
	// The DOM typings declare this as an interface, so it has to be merged as one.
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/naming-convention
	interface HTMLElementTagNameMap {
		'mg-chat': MgChat;
	}
}
