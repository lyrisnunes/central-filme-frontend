import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['componentes estilizados'], // Substitua 'componentes estilizados' pelo nome correto do módulo
    },
  },
})
