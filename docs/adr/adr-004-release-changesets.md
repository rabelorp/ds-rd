# ADR-004: Gestão de Releases com Changesets

**Status:** Accepted  
**Date:** 2026-06-23  
**Deciders:** Rabelo Digital Frontend Team

## Contexto

O pacote `@rabelo-digital/ds-rd` precisa de um processo claro de versionamento semântico e geração de changelog. Cada PR que altera componentes ou tokens deve resultar em uma versão publicável com notas claras das mudanças.

## Decisão

Usar **`@changesets/cli`** para gestão de releases:

- Cada PR que altera a lib adiciona um arquivo `.changeset/*.md` descrevendo o tipo de bump (`patch` | `minor` | `major`) e a mudança
- O **Changesets GitHub Bot** comenta em PRs sem changeset, pedindo que o autor adicione um
- O workflow `release.yml` usa `changesets/action` para: agregar changesets pendentes → bump de versão → atualizar `CHANGELOG.md` → publicar no npm

## Consequências

### Positivas

- Decisão explícita de bump por PR (não automática por mensagem de commit)
- Changelog gerado automaticamente e estruturado por PR
- Suporta multi-package (útil se o DS escalar para monorepo)
- Integração nativa com GitHub Actions

### Negativas / Trade-offs

- Desenvolvedores precisam lembrar de adicionar o changeset no PR
- `semantic-release` automatizaria isso via mensagens de commit (mas é mais rígido)

## Alternativas consideradas

| Alternativa          | Por que descartada                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------ |
| `semantic-release`   | Requer convenções rígidas de commit (Conventional Commits obrigatório); menos flexível para equipes pequenas |
| Versionamento manual | Propenso a erro humano; sem changelog automático                                                             |
| `release-it`         | Menor ecossistema de integrações GitHub; sem bot nativo                                                      |
