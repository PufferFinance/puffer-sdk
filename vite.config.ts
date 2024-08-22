import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      name: 'puffer-sdk',
      entry: Object.fromEntries(
        // This is to keep the directory structure in the output.
        glob
          .sync(path.resolve(__dirname, 'lib/**/*.ts'), {
            ignore: ['lib/**/*.{d,test}.ts', 'node_modules/**'],
          })
          .map((file) => [
            // 1. The name of the entry point.
            // `lib/nested/foo.js` becomes `nested/foo`
            path.relative(
              'lib',
              file.slice(0, file.length - path.extname(file).length),
            ),
            // 2. The absolute path to the entry file.
            // `lib/nested/foo.ts` becomes `/project/lib/nested/foo.ts`
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      // ES modules have `.js` extension and CommonJS modules have `.cjs`.
      fileName: (format, name) => `${name}.${{ es: 'js', cjs: 'cjs' }[format]}`,
      formats: ['es', 'cjs'],
    },
  },
  plugins: [dts({ entryRoot: './lib', exclude: ['lib/**/*.test.ts'] })],
});
