// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import solidJs from '@astrojs/solid-js';
import icon from "astro-icon";

import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro'

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output:'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [solidJs({ devtools: true }), sitemap(), AstroPWA(), icon()],
  adapter: vercel()
});