import { defineConfig } from 'vite'
import svelteMd from 'vite-plugin-svelte-md'
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from 'unocss/vite'
import highlighter from './md-it-uses/highlighter'

export default defineConfig({
  plugins: [
    UnoCSS(),
    svelteMd({
      wrapperClasses: 'prose m-auto slide-enter-content',
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItUses: [highlighter],
    }),
    sveltekit(),
  ],
  server: {
    port: 9528,
    host: true,
    open: true,
  },
})
