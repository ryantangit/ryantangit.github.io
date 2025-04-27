import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        coin: 'src/coin.html',
        about: 'src/about.html',
      },
    },
  },
})
