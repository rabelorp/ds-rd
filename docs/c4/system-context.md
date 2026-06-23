# C4 — Nível 1: Contexto do Sistema

```mermaid
C4Context
    title "Rabelo Digital — Design System: Contexto do Sistema"

    Person(dev, "Desenvolvedor Frontend", "Usa o DS para construir interfaces")
    Person(designer, "Designer", "Cria designs no Figma usando tokens do DS")

    System(ds, "@rabelo-digital/ds-rd", "Design System publicado no npm. Fornece tokens, componentes React, Storybook e documentação.")

    System_Ext(npm, "npm Registry", "Hospeda o pacote @rabelo-digital/ds-rd publicamente")
    System_Ext(github, "GitHub (rabelo-digital/ds-rd)", "Repositório de código, CI/CD e releases")
    System_Ext(figma, "Figma", "Ferramenta de design sincronizada com os tokens do DS")
    System_Ext(site, "site-rd-frontend", "Site da Rabelo Digital. Consome o DS via npm.")
    System_Ext(storybook, "Storybook (ds.rabelodigital.com.br)", "Documentação viva dos componentes e tokens")

    Rel(dev, ds, "Instala e usa componentes e tokens")
    Rel(designer, figma, "Cria designs usando variáveis do DS")
    Rel(ds, npm, "Publicado como @rabelo-digital/ds-rd")
    Rel(ds, github, "Código-fonte, PRs, CI/CD, Releases")
    Rel(ds, storybook, "Stories servidas como site estático")
    Rel(site, ds, "Consome como dependência npm")
    Rel(figma, ds, "Tokens sincronizados via MCP/plugin")
```

## Descrição

O **Design System Rabelo Digital** (`@rabelo-digital/ds-rd`) é um sistema centralizado que serve como fonte da verdade para tokens visuais (cores, espaçamento, tipografia) e componentes React reutilizáveis.

### Atores externos

| Ator                   | Papel                                                              |
| ---------------------- | ------------------------------------------------------------------ |
| Desenvolvedor Frontend | Consome componentes e tokens para construir páginas e features     |
| Designer               | Usa variáveis Figma sincronizadas com os tokens para criar layouts |

### Sistemas externos

| Sistema          | Relação                                     |
| ---------------- | ------------------------------------------- |
| npm Registry     | Hospedagem pública do pacote                |
| GitHub           | Código-fonte, CI/CD e automação de releases |
| Figma            | Design sincronizado com tokens via MCP      |
| site-rd-frontend | Primeiro consumidor do DS                   |
| Storybook        | Documentação interativa dos componentes     |
