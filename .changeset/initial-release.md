---
"@rabelo-digital/ds-rd": major
---

Initial release of the Rabelo Digital Design System.

Includes:

**Design Tokens**

- Primitive and semantic color scales (brand blue #02548B, teal #16B597, orange #FF3C00)
- Spacing scale (4px base grid, 0–32 steps)
- Typography (fontFamily, fontSize xs–4xl, fontWeight, lineHeight, letterSpacing)
- Border radii, elevation shadows, z-index scale, motion duration/easing, breakpoints
- CSS custom properties exported as `tokens.css` and TypeScript constants

**Atom Components**

- `Button` — 4 variants (primary/secondary/ghost/danger), 3 sizes, loading state
- `Input` — label, error, helperText, sizes, forwardRef
- `Textarea` — label, error, maxLength with live character counter
- `Badge` — 6 variants, 2 sizes
- `Avatar` — image or name initials, 5 sizes, circle/square
- `Checkbox` — indeterminate state via Radix UI
- `RadioGroup` — options array, horizontal/vertical orientation via Radix UI
- `Select` — label, placeholder, error, sizes, portal via Radix UI
- `Tooltip` — content, side, delay via Radix UI
- `SocialIcons` — unified LinkedIn/Instagram/GitHub/X/Facebook/YouTube/WhatsApp

**Molecule Components**

- `Card` — compound pattern (Card.Header/Body/Footer), elevation/radius tokens
- `Modal` — focus-trapped dialog, 5 sizes via Radix UI Dialog
- `Drawer` — slide-in panel with 4 sides via Radix UI Dialog
- `Tabs` — roving tabindex via Radix UI Tabs
- `Accordion` — single/multiple mode via Radix UI Accordion
- `Toast` + `useToast` — notification system with 5 variants via Radix UI Toast
- `Table` — compound (Head/Body/Row/Cell), sticky header, semantic scope

**Accessibility**

- WCAG 2.1 AA compliance across all components
- WAI-ARIA patterns via Radix UI primitives
- Focus management, keyboard navigation, screen reader support

**Build**

- ESM + CJS + TypeScript declarations
- CSS Modules scoped to each component
- Tree-shakeable via tsup splitting
