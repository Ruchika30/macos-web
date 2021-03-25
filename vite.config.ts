import { resolve } from 'path';
import { babel } from '@rollup/plugin-babel';
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    preact(),
    {
      ...babel({
        babelHelpers: 'bundled',
        plugins: [
          [
            'styled-components',
            {
              minify: true,
              transpileTemplateLiterals: true,
              pure: true,
            },
          ],
        ],
      }),
      enforce: 'pre',
      apply: 'build',
    },
  ],
  resolve: {
    alias: {
      __: resolve(__dirname, './src'),
    },
  },
});
