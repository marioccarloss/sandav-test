import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
