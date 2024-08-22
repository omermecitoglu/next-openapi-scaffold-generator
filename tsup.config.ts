import InlineImportPlugin from "esbuild-plugin-inline-import";
import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "bin",
  entry: ["src/index.ts"],
  splitting: false,
  clean: true,
  esbuildPlugins: [
    InlineImportPlugin({ filter: /\.hbs$/ }),
  ],
});
