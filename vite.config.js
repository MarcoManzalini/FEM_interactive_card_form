import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FEM_interactive_card_form/',
  plugins: [vue()],
})
