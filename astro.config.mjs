// @ts-check
import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";

// https://astro.build/config
export default defineConfig({
  site: "https://feindt.dev",
  vite: {
    plugins: [yaml()],
  },
});
