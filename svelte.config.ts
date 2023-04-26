import type { Config } from '@sveltejs/kit'
import { vitePreprocess } from '@sveltejs/kit/vite'

const config: Config = {
  preprocess: vitePreprocess(),

  kit: {
    alias: {
      '@/*': './src/*',
    },
  },
}

export default config
