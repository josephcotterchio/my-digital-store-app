import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Set root directory to the current folder
  build: {
    outDir: 'dist', 
  },
  server: {
    open: true, 
  },
});
