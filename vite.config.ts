import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        coin: 'src/coin.html',
        about: 'src/about.html',
				nowb4tmrw: 'src/nowb4tmrw.html'
      },
    },
  },
})
