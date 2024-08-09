// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server:{
//     proxy:{
//       '/api':{
//         target:'http://localhost:5000',
//         // target:'https://ariyas-backend-test.onrender.com',
//       }
//     }
//   },
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    } : undefined,
  },
});
