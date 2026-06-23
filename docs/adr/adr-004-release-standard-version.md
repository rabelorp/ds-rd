# ADR-004: Gestão de Releases com standard-version

**Status:** Accepted  
**Date:** 2026-06-23  
**Deciders:** Rabelo Digital Frontend Team

## Contexto

O pacote `@rabelo-digital/ds-rd` precisa de um processo claro de versionamento semântico e geração de changelog. Releases devem seguir Conventional Commits e bump SEMVER explícito (`major` | `minor` | `patch`).

## Decisão

Usar **`standard-version`** para bump de versão e changelog, **`commitizen`** + **`cz-conventional-changelog`** para commits padronizados, e o workflow **`publish.yml`** para publicar no npm quando uma tag `v*` é enviada ao GitHub.

### Scripts (`package.json`)

| Script                    | Ação                                                            |
| ------------------------- | --------------------------------------------------------------- |
| `npm run release`         | Bump automático pela análise dos commits (Conventional Commits) |
| `npm run release:major`   | Força bump `major`                                              |
| `npm run release:minor`   | Força bump `minor`                                              |
| `npm run release:patch`   | Força bump `patch`                                              |
| `npm run release:dry-run` | Simula o release sem alterar arquivos                           |
| `npm run commit`          | Abre o Commitizen (`cz`)                                        |

### Fluxo de release

1. Commits em `main` seguindo Conventional Commits (`feat`, `fix`, `chore`, etc.)
2. Rodar localmente `npm run release:patch` (ou `minor` / `major`)
3. `standard-version` atualiza `package.json`, `package-lock.json`, `CHANGELOG.md` e cria commit + tag git
4. `git push origin main --follow-tags`
5. O CI **`publish.yml`** detecta a tag `v*` e executa `npm publish`

## Consequências

### Positivas

- Sem PR automático de release nem dependência de permissões extras do GitHub Actions
- Bump SEMVER explícito quando necessário (`release:major` / `minor` / `patch`)
- Changelog gerado a partir dos commits convencionais
- Publicação no npm acoplada à tag git

### Negativas / Trade-offs

- Release é manual (dev roda `release:*` e faz push da tag)
- Qualidade do changelog depende das mensagens de commit
- `commitizen` é opcional mas recomendado para padronizar commits

## Alternativas consideradas

| Alternativa          | Por que descartada                                                                  |
| -------------------- | ----------------------------------------------------------------------------------- |
| `@changesets/cli`    | Exige PR de release; bloqueado pela política da org que impede Actions de criar PRs |
| `semantic-release`   | Totalmente automático; menos controle sobre o momento do bump                       |
| Versionamento manual | Propenso a erro; sem changelog estruturado                                          |
