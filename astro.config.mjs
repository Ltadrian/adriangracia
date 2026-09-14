import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import icon from "astro-icon";
import remarkGfm from 'remark-gfm';
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://adriangracia.me",
  image: {
    domains: ["meta.adriangracia.me", "cdn.adriangracia.me", "dulce.adriangracia.me", "lax.adriangracia.me", "sfo.adriangracia.me", "ord-70424.adriangracia.me"],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  integrations: [icon(), sitemap(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    gfm: false
  }), tailwind(), markdoc()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm, remarkReadingTime],
      gfm: false,
    }),
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: true,
    incrementalBuild: true,
    // directRenderScript: true
  },
});
