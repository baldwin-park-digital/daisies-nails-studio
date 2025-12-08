// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isProduction = process.env.NODE_ENV === 'production';
const baseUrl = isProduction ? '/astro-site-starter/' : '/';

export default defineConfig({
  site: 'https://baldwin-park-digital.github.io/astro-site-starter/',
  base: baseUrl,
  vite: {
    plugins: [tailwindcss()]
  }
});