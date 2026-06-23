# Guia de Migração — site-rd-frontend → @rabelodigital/ds-rd

Este guia mapeia os caminhos de import legados do `site-rd-frontend` para os novos imports do Design System.

---

## Estratégia de Migração

A migração é **incremental por componente**:

1. Instalar `@rabelodigital/ds-rd` no `site-rd-frontend`
2. Importar `tokens.css` no `globals.css` (valide visualmente)
3. Para cada componente: substituir o import legacy pelo import do DS
4. Testar a página que usa o componente
5. Após todos os imports migrados, remover os arquivos legados

---

## Mapa de Imports

### Atoms

| Import legado | Import novo |
|---------------|-------------|
| `@/components/atoms/Badge` | `@rabelodigital/ds-rd` |
| `@/components/atoms/Input` | `@rabelodigital/ds-rd` |
| `@/components/atoms/Textarea` | `@rabelodigital/ds-rd` |
| `@/components/atoms/Toast` | `@rabelodigital/ds-rd` (useToast + ToastProvider) |
| `@/components/SocialIcons` | `@rabelodigital/ds-rd` (SocialIcons) |
| `@/components/TeamSocialIcons` | `@rabelodigital/ds-rd` (SocialIcons com prop `links`) |

### Molecules / Organisms

| Import legado | Import novo |
|---------------|-------------|
| `@/components/organisms/ToastProvider` | `@rabelodigital/ds-rd` (ToastProvider + useToast) |
| `@/components/molecules/ToastContainer` | Incluído no ToastProvider do DS |

---

## Exemplos de Migração

### Badge

```tsx
// Antes
import Badge from "@/components/atoms/Badge";
<Badge text="Ativo" color="green" />

// Depois
import { Badge } from "@rabelodigital/ds-rd";
<Badge variant="success">Ativo</Badge>
```

### SocialIcons

```tsx
// Antes — dois componentes separados
import SocialIcons from "@/components/SocialIcons";
import TeamSocialIcons from "@/components/TeamSocialIcons";

// Depois — um componente unificado com prop links
import { SocialIcons } from "@rabelodigital/ds-rd";

<SocialIcons links={[
  { platform: "linkedin", url: "https://linkedin.com/company/rabelodigital" },
  { platform: "instagram", url: "https://instagram.com/rabelodigital" },
]} />
```

### Toast / Notificações

```tsx
// Antes
import { useToast } from "@/components/atoms/Toast";
import ToastContainer from "@/components/molecules/ToastContainer";

// Depois — no layout raiz
import { ToastProvider } from "@rabelodigital/ds-rd";
<ToastProvider>{children}</ToastProvider>

// Em qualquer componente filho
import { useToast } from "@rabelodigital/ds-rd";
const { show } = useToast();
show({ title: "Sucesso!", variant: "success" });
```

### Input / Textarea

```tsx
// Antes
import Input from "@/components/atoms/Input";
<Input label="Nome" />

// Depois
import { Input } from "@rabelodigital/ds-rd";
<Input label="Nome" />
// API idêntica — migração transparente
```

---

## Tokens — Substituição de Cores Hardcoded

Substitua os valores hardcoded pelos tokens CSS:

| Valor antigo | Token CSS |
|-------------|-----------|
| `#02548B` | `var(--ds-color-primary)` |
| `rgb(2, 84, 139)` | `var(--ds-color-primary)` |
| `#16B597` / `rgb(22, 181, 151)` | `var(--ds-color-secondary)` |
| `#FF3C00` | `var(--ds-color-accent)` |
| `#FFEAE3` | `var(--ds-color-accent-subtle)` |
| `#007bff` | `var(--ds-color-primary)` |
| `#6c757d` | `var(--ds-color-text-muted)` |
| `#dee2e6` | `var(--ds-color-border)` |
| `#e9ecef` | `var(--ds-color-bg-muted)` |
| `#f8f9fa` | `var(--ds-color-bg-subtle)` |
| `#212529` | `var(--ds-color-text)` |

---

## Componentes que Permanecem no site-rd-frontend

Os seguintes componentes são **específicos do negócio** e não devem ser migrados para o DS:

- `HeroSection`, `AboutSection`, `CEOSection` — conteúdo da landing page
- `BlogSection`, `BlogSidebar`, `PopularPosts` — lógica de blog
- `ContactForm`, `Consultation` — formulários de negócio com validação Zod
- `CaseStudies`, `CaseStudies2` — isotope com conteúdo hardcoded
- `ClientLogoCarousel`, `TestimonialsSection` — seções com dados da empresa
- `CategoryManagement`, `CategoryList`, `CategoryForm` — admin
- Todos os componentes em `organisms/` que contêm fetch de dados

---

## Checklist por Componente

- [ ] Badge
- [ ] Input  
- [ ] Textarea
- [ ] Toast / useToast / ToastProvider
- [ ] SocialIcons (unifica SocialIcons + TeamSocialIcons)
- [ ] ImageUpload (avaliar se sobe para o DS)
- [ ] MarkdownRenderer (avaliar se sobe para o DS)
