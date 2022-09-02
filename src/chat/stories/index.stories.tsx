import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Chat from '..';

const meta = {
  title: 'Features/Chat',
  component: Chat,
  args: {
    history: [
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
    ],
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
export const ChatStory: Story = (args) => <Chat {...args} />;
ChatStory.storyName = 'Chat';

export default meta;
