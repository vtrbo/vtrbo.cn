import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-static'
import { getHighlighter } from 'shiki'

const extensions = ['.svelte', '.svx', '.md']

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions,

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions,
      highlight: {
        highlighter: async (code, lang) => {
          const shiKiHighLighter = await getHighlighter({
            theme: 'vitesse-light',
          })
          const transformCode = shiKiHighLighter
            .codeToHtml(code, { lang })
            // 处理 { }
            .replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')
          return transformCode
        },
      },
    }),
  ],

  kit: {
    adapter: adapter(),

    alias: {
      '@/*': './src/*',
    },
  },
}

export default config
