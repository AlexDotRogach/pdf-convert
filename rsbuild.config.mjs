import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import * as path from 'node:path'

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  tools: {
    babel: {
      presetReact: {
        runtime: 'classic', // это ключ
      },
    },
  },
});
