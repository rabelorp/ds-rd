# @rabelodigital/ds-rd

## 0.1.0

### Minor Changes

Initial release of the Rabelo Digital Design System.

**Design Tokens**
- Primitive and semantic color scales (brand blue `#02548B`, teal `#16B597`, orange `#FF3C00`)
- Spacing scale (4px base grid), typography, radii, elevation, z-index, motion, breakpoints
- `tokens.css` with all CSS custom properties for `:root`

**Atom Components**
- `Button` — 4 variants, 3 sizes, loading state, forwardRef
- `Input` — label, error, helperText, sizes, forwardRef
- `Textarea` — label, error, live character counter
- `Badge` — 6 variants, 2 sizes
- `Avatar` — image or name initials, 5 sizes, circle/square
- `Checkbox` — indeterminate state (Radix UI)
- `RadioGroup` — options array, horizontal/vertical (Radix UI)
- `Select` — label, placeholder, error, sizes, portal (Radix UI)
- `Tooltip` — content, side, delay (Radix UI)
- `SocialIcons` — LinkedIn/Instagram/GitHub/X/Facebook/YouTube/WhatsApp unified

**Molecule Components**
- `Card` — compound pattern (Card.Header/Body/Footer)
- `Modal` — focus-trapped, 5 sizes (Radix UI Dialog)
- `Drawer` — slide-in, 4 sides (Radix UI Dialog)
- `Tabs` — roving tabindex (Radix UI)
- `Accordion` — single/multiple mode (Radix UI)
- `Toast` + `useToast` — 5 variants, auto-dismiss (Radix UI)
- `Table` — compound (Head/Body/Row/Cell), sticky header

**Accessibility:** WCAG 2.1 AA via Radix UI primitives across all interactive components.
