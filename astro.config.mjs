import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['microcms-js-sdk'],
    },
    build: {
      rollupOptions: {
        onwarn(warning) {
          if (warning.code === 'UNRESOLVED_IMPORT') {
            return;
          }
          // 他の警告も無視
          return; // これで警告を全て無視する
        },
      },
    },
  },
  site: 'https://saeyoshizaki.github.io/',
  outDir: "./docs",
  base: '/wincblog_evacuation'
});
