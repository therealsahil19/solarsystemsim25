import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  base: '/solarsystemsim25/',
  server: {
    port: 3000,
  },
  plugins: [
    checker({
      typescript: true,
    }),
  ],
});
