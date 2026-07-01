## Setup

No provider or root wrapper is required — components are self-contained (CSS Modules, no React context). Just import `styles.css` once and render components directly:

```jsx
import { Button, Card, Input } from "@rabelo-digital/ds-rd";
import "@rabelo-digital/ds-rd/styles.css";

<Button variant="primary">Confirmar</Button>;
```

`ToastProvider` is the one exception — it's a real context provider (paired with the `useToast` hook), not a global theming wrapper. Only wrap the subtree that needs toasts:

```jsx
import { ToastProvider, useToast } from "@rabelo-digital/ds-rd";

<ToastProvider>
  <YourApp />
</ToastProvider>;
```

## Styling idiom — no utility classes

This is a **prop-driven** design system, not a utility-class system. Never invent class names — every visual variant is a component prop (e.g. `variant="primary" | "secondary" | "ghost" | "danger"`, `size="sm" | "md" | "lg"`). Components self-style via internal CSS Modules (compiled classnames like `Button_primary` are private, scoped, and not meant to be referenced or overridden from outside).

For your own layout glue (spacing between components, custom containers), use the shipped design tokens as CSS custom properties — never hardcode colors, spacing, or radii:

```css
.my-layout {
  padding: var(--ds-space-4);
  gap: var(--ds-space-2);
  border-radius: var(--ds-radius-md);
  color: var(--ds-color-text);
  background: var(--ds-color-bg);
}
```

Common token families: `--ds-color-*` (semantic: `bg`, `text`, `border`, `accent`, `error`, `success`, `warning`, `info`, each with `-hover`/`-muted`/`-subtle`/`-on-*` variants), `--ds-space-*`, `--ds-radius-*`, `--ds-font-family-*` / `--ds-font-size-*` / `--ds-font-weight-*`, `--ds-elevation-*` (shadows), `--ds-motion-duration-*` / `--ds-motion-easing-*`.

**Known gap**: `--ds-font-family-base` ("Inter") and `--ds-font-family-mono` ("JetBrains Mono"/"Fira Code") are referenced but the DS ships no font files or CDN links for them — they were never loaded anywhere in the source repo either. Designs render with system-font substitutes; this is a real gap in the source design system, not a sync artifact.

## Where the truth lives

- `_ds/styles.css` and its `@import` closure (`_ds_bundle.css`, `tokens/tokens.css`) — the full compiled styling surface.
- `_ds/components/<group>/<Name>/<Name>.d.ts` — exact prop types per component.
- `_ds/components/<group>/<Name>/<Name>.prompt.md` — variants and usage examples per component, generated from the real Storybook stories.

## Example — Card with Button

```jsx
<Card>
  <h3>Título do Card</h3>
  <p style={{ color: "var(--ds-color-text)" }}>Conteúdo principal do card.</p>
  <div style={{ display: "flex", gap: "var(--ds-space-2)" }}>
    <Button variant="secondary">Cancelar</Button>
    <Button variant="primary">Confirmar</Button>
  </div>
</Card>
```
