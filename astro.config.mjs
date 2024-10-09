import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import dotenv from 'dotenv'; // 修正：'.env'を'dotenv'に変更
// .envファイルを読み込む
dotenv.config();

export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['microcms-js-sdk'],  // microcms-js-sdkを外部依存として扱わない
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // UNRESOLVED_IMPORTの警告を無視
          if (warning.code === 'UNRESOLVED_IMPORT') {
            return;
          }
          warn(warning);
        }
      }
    }
  },
  site: 'https://saeyoshizaki.github.io/',
  outDir: "./docs",
  base: '/wincblog_evacuation'
});
