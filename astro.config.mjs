// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://zoyaa26.github.io",
  base: "/portofolio",

  vite: {
    plugins: [tailwindcss()],
  },
});