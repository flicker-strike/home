// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://flicker-strike.github.io',
  base: '/home',
  vite: {
    plugins: [tailwindcss()],
  },
})