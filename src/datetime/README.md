# DateTime

`<mg-date-time>` shows a German, time-of-day-flavoured date with a small clock icon.

```html
<mg-date-time datetime="1999-04-17T22:11:18"></mg-date-time>
```

| Attribute  | Property   | Type             | Description                                                            |
| ---------- | ---------- | ---------------- | ---------------------------------------------------------------------- |
| `datetime` | `dateTime` | `Date \| number` | The attribute takes a date string or a Unix timestamp in milliseconds. |

Nothing renders for a missing or invalid date.

**Part:** `time` – the `<time>` element.

**CSS custom properties:**

- `--font` – font family. Defaults to `system-ui`.
- `--muted` – text and icon colour. Defaults to the marcgoertz.de theme’s value, which follows the page’s `color-scheme` via `light-dark()`.
