/**
 * Chat Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React, {StrictMode} from 'react';
import {styled} from 'styled-components';
import {format, formatRelative} from 'date-fns';
import {isoDate} from '../constants/date-formats';

type Props = {
  history?: Array<{
    content: string;
    name?: string;
    timestamp?: Date;
    isMe?: boolean;
    isEmoji?: boolean;
    isAction?: boolean;
  }>;
};

const List = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
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
  inset-inline-start: ${(p) => (p.$isMe ? '' : '0.666667em')};
  inset-inline-end: ${(p) => (p.$isMe ? '0.666667em' : '')};
  margin-block-start: 0.25em;
  text-align: ${(p) => (p.$isMe ? 'end' : 'start')};
  font-size: 0.75rem;
  color: gray;
  opacity: 0.75;
  white-space: nowrap;
`;

const Chat = ({history}: Props) => {
  if (!history || history.length === 0) {
    return null;
  }

  return (
    <StrictMode>
      <List>
        {history.map(
          ({
            content,
            name,
            timestamp,
            isEmoji = false,
            isMe = false,
            isAction = false,
          }) => {
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
                  {name && <Name hidden>{name}</Name>}
                  <Quote>{content}</Quote>
                  {timestamp && (
                    <Time $isMe={isMe} dateTime={format(timestamp, isoDate)}>
                      {formatRelative(timestamp, new Date())}
                    </Time>
                  )}
                </EmojiBubble>
              );
            }

            return (
              <Bubble
                key={content}
                $isMe={isMe}
                tabIndex={timestamp ? 0 : undefined}
              >
                {name && <Name>{name}</Name>}
                <Quote>{content}</Quote>
                {timestamp && (
                  <Time $isMe={isMe} dateTime={format(timestamp, isoDate)}>
                    {formatRelative(timestamp, new Date())}
                  </Time>
                )}
              </Bubble>
            );
          }
        )}
      </List>
    </StrictMode>
  );
};

Chat.defaultProps = {
  history: [],
};

export default Chat;
