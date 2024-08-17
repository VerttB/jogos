import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://verttb.github.io/jogos/",
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: "@use \"src/assets/scss/global\" as g;"
      }
    }
  }
})

