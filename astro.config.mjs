import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import dotenv from 'dotenv'; // 修正：'.env'を'dotenv'に変更
// .envファイルを読み込む
dotenv.config();

export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['microcms-js-sdk'],  
    },
    build: {
      rollupOptions: {
        onwarn(warning) {
          // UNRESOLVED_IMPORTの警告を無視
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
