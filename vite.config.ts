import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jogos/",
  plugins: [react()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: "@use \"src/assets/scss/global\" as g;"
      }
    }
  }
})

