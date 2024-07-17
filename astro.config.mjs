import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
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
  integrations: [sitemap(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    gfm: false
  }), tailwind(), markdoc()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkReadingTime]
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: true
    // directRenderScript: true
  },
});