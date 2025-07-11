/**
 * Chat Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, {type FC, StrictMode, useCallback} from 'react';
import {styled} from 'styled-components';
import {format, formatRelative} from 'date-fns';
import {isoDate} from '../constants/date-formats';

/* eslint-disable react/no-unused-prop-types -- This is a false positive. */
type ChatMessage = {
	readonly content: string;
	readonly name?: string;
	readonly timestamp?: Date;
	readonly isMe?: boolean;
	readonly isEmoji?: boolean;
	readonly isAction?: boolean;
};
/* eslint-enable react/no-unused-prop-types */

type Properties = {
	readonly history?: ChatMessage[];
};

const List = styled.ol`
	display: flex;
	flex-direction: column;
	padding: 0;
	list-style: none;
	font-family:
		system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	line-height: 1.25;
`;

const Action = styled.li`
	align-self: center;
	margin: 0.5rem 0;
	text-align: center;
	max-inline-size: 80%;
	font-size: 0.75rem;
	font-weight: bold;
	color: gray;

	& i {
		font-style: normal;
	}
`;

const Bubble = styled.li<{$isMe: boolean}>`
	position: relative;
	align-self: ${(p) => (p.$isMe ? 'flex-end' : 'flex-start')};
	padding: 0.5rem;
	border-radius: 0.75rem;
	outline: 0;
	max-inline-size: 60%;
	color: ${(p) => (p.$isMe ? 'white' : 'black')};
	background-color: ${(p) => (p.$isMe ? 'dodgerblue' : 'gainsboro')};
	box-sizing: border-box;

	& + li {
		margin-block-start: 0.5rem;
	}

	&:active time {
		display: block;
	}
`;

const EmojiBubble = styled(Bubble)`
	padding: 0;
	font-size: 4em;
	background-color: transparent;
`;

const Name = styled.span<{hidden?: boolean}>`
	display: ${(p) => (p.hidden ? 'none' : 'block')};
	margin-block-end: 0.25em;
	font-size: 0.75rem;
	font-weight: bold;
`;

const Quote = styled.q`
	display: block;
	quotes: none;
`;

const Time = styled.time<{$isMe: boolean}>`
	display: none;
	position: absolute;
	inset-block-start: 100%;
	inset-inline: ${(p) => (p.$isMe ? 'auto 0.666667em' : '0.666667em auto')};
	margin-block-start: 0.25em;
	text-align: ${(p) => (p.$isMe ? 'end' : 'start')};
	font-size: 0.75rem;
	color: gray;
	opacity: 0.75;
	white-space: nowrap;
`;

const Chat: FC<Properties> = ({history}) => {
	const renderMessage = useCallback(
		({
			content,
			name,
			timestamp,
			isEmoji = false,
			isMe = false,
			isAction = false,
		}: ChatMessage) => {
			if (isAction) {
				return <Action key={content}>{content}</Action>;
			}

			if (isEmoji) {
				return (
					<EmojiBubble
						key={content}
						$isMe={isMe}
						tabIndex={timestamp ? 0 : undefined}
					>
						{name ? <Name hidden>{name}</Name> : null}
						<Quote>{content}</Quote>
						{timestamp ? (
							<Time
								$isMe={isMe}
								dateTime={format(timestamp, isoDate)}
							>
								{formatRelative(timestamp, new Date())}
							</Time>
						) : null}
					</EmojiBubble>
				);
			}

			return (
				<Bubble
					key={content}
					$isMe={isMe}
					tabIndex={timestamp ? 0 : undefined}
				>
					{name ? <Name>{name}</Name> : null}
					<Quote>{content}</Quote>
					{timestamp ? (
						<Time
							$isMe={isMe}
							dateTime={format(timestamp, isoDate)}
						>
							{formatRelative(timestamp, new Date())}
						</Time>
					) : null}
				</Bubble>
			);
		},
		[],
	);

	if (!Array.isArray(history) || history.length === 0) {
		return null;
	}

	return (
		<StrictMode>
			<List>{history.map((message) => renderMessage(message))}</List>
		</StrictMode>
	);
};

export default Chat;
