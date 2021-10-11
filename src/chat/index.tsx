/**
 * Chat Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import styled from 'styled-components';
import { format, formatRelative } from 'date-fns';
import { ISO_DATE } from '../constants/date-formats';

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
  max-width: 80%;
  font-size: 0.75rem;
  font-weight: bold;
  color: gray;

  & i {
    font-style: normal;
  }
`;

const Bubble = styled.li`
  position: relative;
  align-self: ${(p: { isMe: boolean }): string =>
    p.isMe ? 'flex-end' : 'flex-start'};
  padding: 0.5rem;
  border-radius: 0.75rem;
  outline: 0;
  max-width: 60%;
  color: ${(p: { isMe: boolean }): string => (p.isMe ? 'white' : 'black')};
  background-color: ${(p: { isMe: boolean }): string =>
    p.isMe ? 'dodgerblue' : 'gainsboro'};
  box-sizing: border-box;
  & + li {
    margin-top: 0.5rem;
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

const Name = styled.span`
  display: ${(p: { hidden?: boolean }): string =>
    p.hidden ? 'none' : 'block'};
  margin-bottom: 0.25em;
  font-size: 0.75rem;
  font-weight: bold;
`;

const Quote = styled.q`
  display: block;
  quotes: none;
`;

const Time = styled.time`
  display: none;
  position: absolute;
  top: 100%;
  left: ${(p: { isMe: boolean }): string => (p.isMe ? '' : '0.666667em')};
  right: ${(p: { isMe: boolean }): string => (p.isMe ? '0.666667em' : '')};
  margin-top: 0.25em;
  text-align: ${(p: { isMe: boolean }): string => (p.isMe ? 'right' : 'left')};
  font-size: 0.75rem;
  color: gray;
  opacity: 0.75;
  white-space: nowrap;
`;

const Chat = ({ history }: Props): JSX.Element | null => {
  if (!history || history.length === 0) {
    return null;
  }

  return (
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
                isMe={isMe}
                tabIndex={timestamp ? 0 : undefined}
              >
                {name && <Name hidden>{name}</Name>}
                <Quote>{content}</Quote>
                {timestamp && (
                  <Time isMe={isMe} dateTime={format(timestamp, ISO_DATE)}>
                    {formatRelative(timestamp, new Date())}
                  </Time>
                )}
              </EmojiBubble>
            );
          }
          return (
            <Bubble
              key={content}
              isMe={isMe}
              tabIndex={timestamp ? 0 : undefined}
            >
              {name && <Name>{name}</Name>}
              <Quote>{content}</Quote>
              {timestamp && (
                <Time isMe={isMe} dateTime={format(timestamp, ISO_DATE)}>
                  {formatRelative(timestamp, new Date())}
                </Time>
              )}
            </Bubble>
          );
        }
      )}
    </List>
  );
};

Chat.defaultProps = {
  history: [],
};

export default Chat;
