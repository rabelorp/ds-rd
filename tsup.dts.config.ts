import { defineConfig } from "tsup";

/** Type declarations only — JS bundles come from scripts/build-bundle.mjs (esbuild local-css). */
export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tokens/index": "src/tokens/index.ts",
  },
  dts: {
    only: true,
  },
  format: ["esm", "cjs"],
  clean: false,
});
