import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Optional: specify a port
  },
  // We need to specify the root to be the parent directory
  // so that vite can find the index.html file
  root: './',
});
