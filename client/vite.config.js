import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
  server: {
    port: 3000,
    // proxy: {
    //   '/api/v1': {
    //     target: 'http://localhost:5000',
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //     rewrite: (path) => path.replace(/^\/api\/v1/, ''),
    //   },
    // },
  },
});
