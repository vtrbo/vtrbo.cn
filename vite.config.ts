import { defineConfig } from 'vite'
import svelteMd from 'vite-plugin-svelte-md'
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import anchor from './md-it-uses/anchor'
import highlighter from './md-it-uses/highlighter'
import linkAttributes from './md-it-uses/linkAttributes'
import tableOfContents from './md-it-uses/tableOfContents'

export default defineConfig({
  plugins: [
    UnoCSS(),
    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
    }),
    svelteMd({
      wrapperClasses: 'prose m-auto slide-enter-content',
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItUses: [highlighter, anchor, linkAttributes, tableOfContents],
    }),
    sveltekit(),
  ],
  server: {
    port: 9528,
    host: true,
    open: true,
  },
})
