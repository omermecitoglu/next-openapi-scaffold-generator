import InlineImportPlugin from "esbuild-plugin-inline-import";
import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "bin",
  entry: ["src/index.ts"],
  format: ["esm"],
  splitting: false,
  clean: true,
  external: ["prompts", "change-case", "pluralize", "handlebars"],
  esbuildPlugins: [
    InlineImportPlugin({ filter: /\.hbs$/ }),
  ],
});
