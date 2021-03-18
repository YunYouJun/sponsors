import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import ViteComponents from "vite-plugin-components";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],

      // allow auto import and register components used in markdown
      customLoaderMatcher: (id) => id.endsWith(".md"),

      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver(),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    ViteIcons(),
  ],
});
