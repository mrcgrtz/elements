// @flow

/**
 * Dialog Component
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import styled from '@emotion/styled/macro';
import { format, formatRelative } from 'date-fns';

type Props = {
  history?: Array<{
    content: string,
    name?: string,
    timestamp?: Date,
    isMe?: boolean,
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

const Bubble = styled.li`
  position: relative;
  align-self: ${p => (p.isMe ? 'flex-end' : 'flex-start')};
  padding: 0.5rem;
  border-radius: 0.75rem;
  outline: 0;
  max-width: 60%;
  color: ${p => (p.isMe ? 'white' : 'black')};
  background-color: ${p => (p.isMe ? 'dodgerblue' : 'gainsboro')};
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
  display: ${p => (p.hidden ? 'none' : 'block')};
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
  left: ${p => (p.isMe ? null : '0.666667em')};
  right: ${p => (p.isMe ? '0.666667em' : null)};
  margin-top: 0.25em;
  text-align: ${p => (p.isMe ? 'right' : 'left')};
  font-size: 0.75rem;
  color: gray;
  opacity: 0.75;
  white-space: nowrap;
`;

const Dialog = ({ history = [] }: Props) => {
  if (history.length === 0) {
    return null;
  }
  return (
    <List>
      {history.map(
        ({
          content,
          name = null,
          timestamp = null,
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
                tabIndex={timestamp && '0'}
              >
                {name && <Name hidden>{name}</Name>}
                <Quote>{content}</Quote>
                {timestamp && (
                  <Time isMe={isMe} dateTime={format(timestamp, 'yyyy-MM-dd')}>
                    {formatRelative(timestamp, new Date())}
                  </Time>
                )}
              </EmojiBubble>
            );
          }
          return (
            <Bubble key={content} isMe={isMe} tabIndex={timestamp && '0'}>
              {name && <Name>{name}</Name>}
              <Quote>{content}</Quote>
              {timestamp && (
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

export default Dialog;
