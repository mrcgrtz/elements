/**
 * Chat Test
 * @author Marc Görtz <https://marcgoertz.de/>
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Chat from '.';

const mockHistory = [
  {
    content: 'O HAI! 👋🏼',
  },
];

const mockFullHistory = [
  {
    name: 'Costello',
    content: 'Look, you gotta first baseman?',
    timestamp: new Date(1938, 2, 24, 12, 11, 10),
  },
  {
    name: 'Abbott',
    content: 'Certainly.',
    timestamp: new Date(1938, 2, 24, 12, 11, 35),
    isMe: true,
  },
  {
    name: 'Costello',
    content: 'Who’s playing first?',
    timestamp: new Date(1938, 2, 24, 12, 11, 50),
  },
  {
    name: 'Abbott',
    content: 'That’s right.',
    timestamp: new Date(1938, 2, 24, 12, 12, 4),
    isMe: true,
  },
  { content: 'Costello becomes exasperated.', isAction: true },
  {
    name: 'Costello',
    content:
      'When you pay off the first baseman every month, who gets the money?',
    timestamp: new Date(1938, 2, 24, 12, 12, 39),
  },
  {
    name: 'Abbott',
    content: 'Every dollar of it.',
    timestamp: new Date(1938, 2, 24, 12, 12, 50),
    isMe: true,
  },
  {
    name: 'Abbott',
    content: '😁',
    timestamp: new Date(1938, 2, 24, 12, 13, 0),
    isMe: true,
    isEmoji: true,
  },
];

describe('<Chat />', () => {
  it('renders no chat by default', () => {
    const component = renderer.create(<Chat />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders a basic chat', () => {
    const component = renderer.create(<Chat history={mockHistory} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders a full-featured chat', () => {
    const component = renderer.create(<Chat history={mockFullHistory} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
