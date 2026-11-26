# Chat

`<mg-chat>` renders a conversation from a list of messages.

```js
document.querySelector('mg-chat').history = [
	{name: 'Costello', content: 'Who’s on first?', timestamp: new Date()},
	{name: 'Abbott', content: 'That’s right.', isMe: true},
	{content: 'Costello becomes exasperated.', isAction: true},
];
```

| Property  | Type            | Description                       |
| --------- | --------------- | --------------------------------- |
| `history` | `ChatMessage[]` | Messages to show (property only). |

A `ChatMessage` has `content` and optionally `name`, `timestamp`, `isMe`, `isEmoji` and `isAction`. Nothing renders while `history` is empty.

**Part:** `list` – the message list.

**CSS custom properties:**

- `--font` – font family. Defaults to `system-ui`.
- `--text` – bubble text colour.
- `--dialog` – background of other people’s bubbles.
- `--dialog-me` – background of your own bubbles.
- `--muted` – colour of actions and timestamps.

The names match the marcgoertz.de theme, so the chat picks up the site’s values automatically. The colour defaults are the theme’s values and use `light-dark()`, so they follow the page’s `color-scheme`.
