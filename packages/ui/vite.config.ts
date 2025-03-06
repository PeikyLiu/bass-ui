import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
console.log(path.resolve(__dirname, "src/"), path.resolve(__dirname, "./src"));
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        silenceDeprecations: ["import"],
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "bass-ui",
      name: "bass-ui",
      cssFileName: "bass-ui",
    },
    outDir: "./dist",
    watch: {},
  },
});
