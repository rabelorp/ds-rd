# Getting Started

## Instalação

```bash
npm install @rabelo-digital/ds-rd
# ou
pnpm add @rabelo-digital/ds-rd
# ou
yarn add @rabelo-digital/ds-rd
```

> **Peer dependencies:** React ≥ 18 e react-dom ≥ 18 devem estar instalados no seu projeto.

---

## 1. Importar os tokens CSS

Adicione em seu arquivo CSS global (ex: `globals.css`, `app/layout.tsx`, etc.):

```css
@import "@rabelo-digital/ds-rd/tokens.css";
```

Isso define todas as CSS custom properties (`--ds-color-primary`, `--ds-space-4`, etc.) no `:root`.

---

## 2. Usar componentes

```tsx
import { Button, Badge, Input } from "@rabelo-digital/ds-rd";

export default function Page() {
  return (
    <div>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="primary">Enviar</Button>
      <Badge variant="success">Ativo</Badge>
    </div>
  );
}
```

---

## 3. Usar tokens TypeScript

```tsx
import { semanticColors, spacing, typography } from "@rabelo-digital/ds-rd/tokens";

const primaryColor = semanticColors.primary.default; // "#02548B"
const gap = spacing[4]; // "16px"
const fontSize = typography.fontSize.lg; // "1.125rem"
```

---

## 4. Configurar Toast (notificações)

Envolva sua aplicação com `ToastProvider`:

```tsx
// app/layout.tsx ou _app.tsx
import { ToastProvider } from "@rabelo-digital/ds-rd";

export default function RootLayout({ children }) {
  return <ToastProvider>{children}</ToastProvider>;
}

// Em qualquer componente filho:
import { useToast } from "@rabelo-digital/ds-rd";

function MyComponent() {
  const { show } = useToast();
  return <button onClick={() => show({ title: "Salvo!", variant: "success" })}>Salvar</button>;
}
```

---

## 5. Tooltip Provider

Para usar Tooltips, envolva a aplicação com `TooltipProvider`:

```tsx
import { TooltipProvider, Tooltip, Button } from "@rabelo-digital/ds-rd";

<TooltipProvider>
  <Tooltip content="Editar registro" side="top">
    <Button size="sm">Editar</Button>
  </Tooltip>
</TooltipProvider>;
```

---

## Storybook

Explore todos os componentes e seus estados em:  
**[ds.rabelodigital.com.br](https://ds.rabelodigital.com.br)** _(em breve)_

Para rodar o Storybook localmente (dentro do repo `ds-rd`):

```bash
pnpm storybook
# → http://localhost:6006
```

---

## Next.js

O DS é compatível com Next.js App Router e Pages Router. Para importar `tokens.css` no App Router:

```tsx
// app/layout.tsx
import "@rabelo-digital/ds-rd/tokens.css";
```
