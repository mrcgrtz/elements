# Hamburger Button

`<mg-hamburger-button>` is a menu toggle that morphs into an X while open.

```html
<mg-hamburger-button></mg-hamburger-button>
```

```css
mg-hamburger-button {
	position: absolute;
	inset-block-start: 20px;
	inset-inline-start: 20px;
}
```

| Attribute      | Property      | Default             | Description                           |
| -------------- | ------------- | ------------------- | ------------------------------------- |
| `label`        | `label`       | `"Menü anzeigen"`   | Accessible label when closed.         |
| `label-active` | `labelActive` | `"Menü ausblenden"` | Accessible label when open.           |
| `open`         | `open`        | `false`             | Whether the menu is open (reflected). |

**Event:** `toggle` – `CustomEvent<{open: boolean}>`, bubbles and is composed.
**Part:** `button` – the inner `<button>`.

Position the element itself with CSS. The lines use `currentcolor`.
