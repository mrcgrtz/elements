# Button

`<mg-button>` wraps a native `<button>` and takes part in its surrounding `<form>`.

```html
<form>
	<mg-button type="submit">Send</mg-button>
</form>
```

| Attribute  | Property   | Default    | Description                    |
| ---------- | ---------- | ---------- | ------------------------------ |
| `type`     | `type`     | `"button"` | `button`, `submit` or `reset`. |
| `disabled` | `disabled` | `false`    | Disables the button.           |

The element finds its form via its closest `<form>` ancestor, so the `form="…"` attribute isn’t supported. A disabled ancestor `<fieldset>` disables it.

**Slot:** the button label.
**Part:** `button` – the inner `<button>`.
**CSS custom properties:**

- `--branding` – background, hover and focus colour. Defaults to the marcgoertz.de branding magenta, `oklch(55% 0.2211 349.43deg)`.
- `--font` – font family. Defaults to `system-ui`.

Both match the variable names of the marcgoertz.de theme, so the button picks up the site’s values automatically.
