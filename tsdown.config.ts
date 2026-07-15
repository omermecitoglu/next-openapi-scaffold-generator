import { defineConfig } from "tsdown";
import Raw from "unplugin-raw/rolldown";

export default defineConfig({
  outDir: "bin",
  entry: ["src/index.ts"],
  fixedExtension: false,
  plugins: [
    Raw(),
  ],
  deps: {
    neverBundle: ["prompts", "change-case", "pluralize", "handlebars"],
  },
  dts: false, // because this package builds an executable script
});
