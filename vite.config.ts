import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@svg': path.resolve(__dirname, './src/assets/svg'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
    }
  },
  base: './',
  build: {
    outDir: 'build',
  },
});
