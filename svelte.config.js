import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [...mdsvexConfig.extensions, '.svelte'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			'@components/*': './src/routes/components/*',
			'@layouts/*': './src/routes/layouts/*',
			'@routes/*': './src/routes/*',
			'@stores/*': './src/stores/*',
			'@articles/*': './src/articles/*',
			'@projects/*': './src/projects/*'
		}
	}
};

export default config;
