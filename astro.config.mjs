import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['microcms-js-sdk'],  // microcms-js-sdkを外部依存として扱わない
    },
  },
  site: 'https://saeyoshizaki.github.io/',
  outDir: "./docs",
  base: '/wincblog-wordpress'
});