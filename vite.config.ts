import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		UnoCSS(),
		Icons({
			defaultClass: 'inline',
			defaultStyle: 'vertical-align: sub;'
		}),
		sveltekit()
	],
	server: {
		port: 9528,
		host: true,
		open: true
	}
});
