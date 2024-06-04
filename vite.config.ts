import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      name: 'puffer-sdk',
      entry: resolve(__dirname, './lib/main.ts'),
      fileName: 'main',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [dts({ entryRoot: './lib', exclude: 'lib/*/**.test.ts' })],
});
