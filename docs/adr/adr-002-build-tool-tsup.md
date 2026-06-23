# ADR-002: Build Tool — tsup em vez de Rollup ou Vite library mode

**Status:** Accepted  
**Date:** 2026-06-23  
**Deciders:** Rabelo Digital Frontend Team

## Contexto

O pacote `@rabelo-digital/ds-rd` precisa ser publicado no npm gerando saídas ESM, CJS e declarações TypeScript (`.d.ts`). A escolha do bundler afeta tempo de build, complexidade de configuração e compatibilidade com consumidores.

## Decisão

Usar **tsup** como bundler da biblioteca DS.

Configuração em `tsup.config.ts`:

```ts
defineConfig({
  entry: { index: "src/index.ts", "tokens/index": "src/tokens/index.ts" },
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  treeshake: true,
  external: ["react", "react-dom"]
});
```

## Consequências

### Positivas

- Configuração mínima: `dts: true` já gera declarations sem plugin adicional
- Baseado em esbuild: builds extremamente rápidos (~50ms para este tamanho de lib)
- `splitting: true` gera chunks por componente, habilitando tree-shaking granular
- Padrão de mercado para React component libraries em 2024–2025

### Negativas / Trade-offs

- Menos plugins do ecossistema vs Rollup (não é problema para esta lib)
- `splitting` gera múltiplos arquivos `.mjs` em vez de um único bundle (aceitável — tree-shaking melhora)

## Alternativas consideradas

| Alternativa       | Por que descartada                                                                   |
| ----------------- | ------------------------------------------------------------------------------------ |
| Rollup            | Requer `rollup-plugin-typescript2` + `rollup-plugin-dts`; config verbosa; mais lento |
| Vite library mode | Otimizado para apps, não bibliotecas; `vite-plugin-dts` menos maduro que tsup `dts`  |
| tsc apenas        | Não faz bundling nem tree-shaking; gera muitos arquivos individuais não otimizados   |
