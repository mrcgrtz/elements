// @flow

/**
 * Chat Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import * as React from 'react';
import styled from 'styled-components';
import { format, formatRelative } from 'date-fns';

type Props = {
  history?: Array<{
    content: string,
    name?: string,
    timestamp?: Date,
    isMe?: boolean,
    isEmoji?: boolean,
    isAction?: boolean,
  }>,
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

const Bubble = (styled.li`
  position: relative;
  align-self: ${(p): string => (p.isMe ? 'flex-end' : 'flex-start')};
  padding: 0.5rem;
  border-radius: 0.75rem;
  outline: 0;
  max-width: 60%;
  color: ${(p): string => (p.isMe ? 'white' : 'black')};
  background-color: ${(p): string => (p.isMe ? 'dodgerblue' : 'gainsboro')};
  box-sizing: border-box;
  & + li {
    margin-top: 0.5rem;
  }
  &:active time {
    display: block;
  }
`: React.ComponentType<{ isMe: boolean }>);

const EmojiBubble = styled(Bubble)`
  padding: 0;
  font-size: 4em;
  background-color: transparent;
`;

const Name = (styled.span`
  display: ${(p): string => (p.hidden ? 'none' : 'block')};
  margin-bottom: 0.25em;
  font-size: 0.75rem;
  font-weight: bold;
`: React.ComponentType<{ hidden?: boolean }>);

const Quote = styled.q`
  display: block;
  quotes: none;
`;

const Time = (styled.time`
  display: none;
  position: absolute;
  top: 100%;
  left: ${(p): string => (p.isMe ? '' : '0.666667em')};
  right: ${(p): string => (p.isMe ? '0.666667em' : '')};
  margin-top: 0.25em;
  text-align: ${(p): string => (p.isMe ? 'right' : 'left')};
  font-size: 0.75rem;
  color: gray;
  opacity: 0.75;
  white-space: nowrap;
`: React.ComponentType<{ isMe: boolean }>);

const Chat = ({ history = [] }: Props) => {
  if (history.length === 0) {
    return null;
  }
  return (
    <List>
      {history.map(
        ({
          content,
          name = '',
          timestamp = '',
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
                tabIndex={timestamp !== '' ? '0' : undefined}
              >
                {name !== '' && <Name hidden>{name}</Name>}
                <Quote>{content}</Quote>
                {timestamp !== '' && (
                  <Time isMe={isMe} dateTime={format(timestamp, 'yyyy-MM-dd')}>
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
              tabIndex={timestamp !== '' ? '0' : undefined}
            >
              {name !== '' && <Name>{name}</Name>}
              <Quote>{content}</Quote>
              {timestamp !== '' && (
                <Time isMe={isMe} dateTime={format(timestamp, 'yyyy-MM-dd')}>
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

export default Chat;
