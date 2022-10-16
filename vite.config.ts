import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path');

export default defineConfig({
  base: '/victoresg.github.io//',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()]
})
