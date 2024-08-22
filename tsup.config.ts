import InlineImportPlugin from "esbuild-plugin-inline-import";
import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "bin",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  clean: true,
  external: ["change-case", "pluralize", "handlebars"],
  esbuildPlugins: [
    InlineImportPlugin({ filter: /\.hbs$/ }),
  ],
});
