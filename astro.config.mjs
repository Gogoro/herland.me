// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://herland.me",
  integrations: [
    sitemap({
      serialize(item) {
        // Add last modification date to all URLs
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
