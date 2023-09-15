import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerAttributifyJsx,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import { collectionIcons } from './src/lib/icons';

export default defineConfig({
	shortcuts: [
		{
			'bg-base': 'bg-white dark:bg-black',
			'bd-base': 'border-[#8884]'
		},
		{
			fs: 'flex justify-start',
			fsc: 'flex justify-start items-center',
			fc: 'flex justify-center',
			fcc: 'flex justify-center items-center'
		},
		{
			'blog-title': 'm-auto mb-8 [&>h1]:mb-0 [&>p]:(opacity-50 im-mt--1.1rem italic)',
			'blog-article': 'm-auto slide-enter-content',
			'blog-back': 'm-auto mt-8 mb-4 [&>span]:(font-mono op50) [&>a]:(font-mono op50 hover:op75)'
		},
		[
			/^btn-(\w+)$/,
			([_, color]) =>
				`op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border bd-base! rounded`
		],
		[/^full-(.*)$/, ([_, size]) => `w-${size} h-${size}`]
	],
	rules: [
		[
			/^slide-enter-(\d+)$/,
			([_, n]) => ({
				'--enter-stage': n
			})
		]
	],
	presets: [
		presetIcons({
			warn: true,
			scale: 1.2,
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			},
			collections: {
				vtr: collectionIcons()
			}
		}),
		presetAttributify(),
		presetUno({
			dark: 'class'
		}),
		presetWebFonts({
			fonts: {
				sans: 'Inter:400,600,800',
				mono: 'DM Mono:400,600'
			}
		})
	],
	transformers: [
		transformerVariantGroup(),
		transformerDirectives(),
		transformerCompileClass(),
		transformerAttributifyJsx()
	],
	safelist: ['i-ri-menu-2-fill'],
	extractors: [extractorSvelte()]
});
