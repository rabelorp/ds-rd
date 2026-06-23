# C4 — Nível 2: Containers do Design System

```mermaid
C4Container
    title "@rabelo-digital/ds-rd — Containers"

    Container(tokens, "tokens/", "TypeScript + CSS", "Design tokens: cores, espaçamento, tipografia, radii, elevation, z-index, motion, breakpoints. Exportados como constantes TS e CSS custom properties (tokens.css).")

    Container(components, "components/", "React + CSS Modules", "Biblioteca de componentes React. Atoms (Button, Input, Badge, Avatar...) e Molecules (Card, Modal, Drawer, Tabs, Toast, Table...) usando tokens e Radix UI primitives.")

    Container(hooks, "hooks/", "TypeScript", "Hooks React compartilhados (ex: useToast). Sem dependência de componentes visuais.")

    Container(storybook, ".storybook/", "Storybook 8", "Ambiente de desenvolvimento e documentação. Stories para cada componente. Autodocs, Controls, a11y addon.")

    Container(dist, "dist/", "ESM + CJS + .d.ts", "Saída do build (tsup). index.mjs, index.cjs, index.d.ts, tokens/index.{mjs,cjs,d.ts}. Publicado no npm junto com tokens.css.")

    Container(docs, "docs/", "Markdown", "ADRs, diagramas C4, getting started, referência de tokens e componentes, guia de migração.")

    Rel(components, tokens, "Usa CSS vars de tokens.css")
    Rel(hooks, components, "Provê lógica (ex: ToastProvider usa useToast)")
    Rel(storybook, tokens, "Importa tokens.css no preview")
    Rel(storybook, components, "Renderiza stories de cada componente")
    Rel(dist, tokens, "Inclui tokens/index compilado")
    Rel(dist, components, "Inclui componentes compilados")
```

## Estrutura de arquivos

```
ds-rd/
├── src/
│   ├── index.ts              # Entry point principal
│   ├── tokens/               # Design tokens
│   │   ├── colors.primitive.ts
│   │   ├── colors.semantic.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   ├── radii.ts
│   │   ├── elevation.ts
│   │   ├── zIndex.ts
│   │   ├── motion.ts
│   │   ├── breakpoints.ts
│   │   └── index.ts
│   ├── components/
│   │   ├── atoms/            # Button, Input, Textarea, Badge, Avatar,
│   │   │                     # Checkbox, Radio, Select, Tooltip, SocialIcons
│   │   ├── molecules/        # Card, Modal, Drawer, Tabs, Accordion,
│   │   │                     # Toast, Table
│   │   └── index.ts
│   ├── hooks/                # useToast e futuros hooks compartilhados
│   └── test/setup.ts         # @testing-library/jest-dom
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── theme.ts
├── docs/
│   ├── adr/                  # Architecture Decision Records
│   └── c4/                   # Diagramas C4
├── tokens.css                # CSS custom properties geradas dos tokens
├── tsup.config.ts
├── tsconfig.json
├── vitest.config.ts
└── .github/workflows/
    ├── ci.yml
    └── release.yml
```
