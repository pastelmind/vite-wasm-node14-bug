import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./index.js",
      fileName: () => "index.js",
      formats: ["es"],
    },
  },
});
