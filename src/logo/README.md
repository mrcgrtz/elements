# Logo

`<mg-logo>` renders the logo as a link.

```html
<mg-logo></mg-logo>
```

| Attribute | Property | Default                    | Description      |
| --------- | -------- | -------------------------- | ---------------- |
| `label`   | `label`  | `"Marc Görtz"`             | Accessible name. |
| `url`     | `url`    | `"https://marcgoertz.de/"` | Link target.     |
| `rel`     | `rel`    | `"start me"`               | Link relations.  |

**CSS custom property:** `--logo-color` – when set, the gradient artwork is replaced by a single-colour logo:

```css
mg-logo {
	--logo-color: #bada55;
}
```

Setting it to `initial` brings the artwork back. The switch uses a container style query (`@container style(--logo-color)`), which is Baseline since May 2026. Older browsers always show the artwork.

**Part:** `link` – the `<a>` element.

The `h-card` microformat markup lives in the shadow DOM, where microformat parsers can’t see it.
