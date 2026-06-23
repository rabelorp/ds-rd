# ADR-005: Repositório Separado para o Design System

**Status:** Accepted  
**Date:** 2026-06-23  
**Deciders:** Rabelo Digital Frontend Team

## Contexto

O Design System poderia viver dentro do `site-rd-frontend` como um pacote local (`packages/design-system/`) em uma estrutura de monorepo (Turborepo/pnpm workspaces), ou em um repositório independente (`ds-rd.git`).

## Decisão

**Repositório separado**: `git@github.com:rabelo-digital/ds-rd.git`

O DS é publicado como `@rabelo-digital/ds-rd` no npm e consumido como dependência externa pelo `site-rd-frontend` e futuros projetos.

## Consequências

### Positivas

- **Ciclo de release independente**: o DS pode ser atualizado sem deploys do site
- **Consumo por múltiplos projetos** sem acesso ao repo do site (ex: futuros clientes Rabelo Digital)
- **CI/CD isolado**: testes e publicação do DS não bloqueiam deploys do site
- **Menor acoplamento**: equipe do DS pode evoluir tokens/componentes sem interferir no site

### Negativas / Trade-offs

- Overhead de versionar e publicar para testar mudanças do DS no site durante desenvolvimento
  - _Mitigação_: `pnpm link` ou `yalc` para desenvolvimento local antes de publicar
- Dois repositórios para gerenciar

## Alternativas consideradas

| Alternativa                   | Por que descartada                                                                                                                                       |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monorepo com Turborepo        | Adiciona complexidade de tooling (Turborepo, pnpm workspaces) sem benefício claro no tamanho atual da equipe; acopla o ciclo de release do DS ao do site |
| Pasta `packages/` sem publish | Não permite consumo por outros projetos sem acesso ao repo                                                                                               |
