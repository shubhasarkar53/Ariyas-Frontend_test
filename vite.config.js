import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        // target:'https://ariyas-backend-test.onrender.com',
      }
    }
  },
  plugins: [react()],
})
