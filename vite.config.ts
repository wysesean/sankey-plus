import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/sankeyPlus.ts"),
      name: "SankeyPlus",
      formats: ["umd"],
      fileName: () => "sankeyPlus.js",
    },
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
  },
});
