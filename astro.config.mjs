import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [vue()],
  site: 'https://buttered-buns.netlify.app', // Update with your actual domain when available
  compressHTML: true,
  build: {
    assets: 'assets',
  },
});
