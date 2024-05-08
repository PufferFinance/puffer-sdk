import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      name: 'puffer-smart-contract-lib',
      entry: resolve(__dirname, './lib/main.ts'),
      fileName: 'main',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [dts()],
});
