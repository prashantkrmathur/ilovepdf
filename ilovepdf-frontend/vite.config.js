import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'  // Set up the same alias in Vite
    }
  },
  plugins: [react()]
});
