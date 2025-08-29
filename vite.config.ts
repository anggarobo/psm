import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: __dirname,
  plugins: [
    react(), 
    tailwindcss(),
    svgr()
  ],
  build: {
    outDir: './_dist/public',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '')
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  }
});
