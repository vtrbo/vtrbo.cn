import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-static'

const extensions = ['.svelte', '.md']

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions,

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions,
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
