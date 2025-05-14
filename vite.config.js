import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    electron({
      entry: "main.js",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  base: "./",
});
