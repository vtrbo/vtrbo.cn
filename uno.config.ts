import type { UserShortcuts } from 'unocss';
import type { Theme } from '@unocss/preset-uno';
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import { collectionIcons } from './src/lib/icons';

export default defineConfig({
	shortcuts: [
		{
			'bg-base': 'bg-white dark:bg-black',
			'border-base': 'border-[#8884]'
		},
		{
			fs: 'flex justify-start',
			fsc: 'flex justify-start items-center',
			fc: 'flex justify-center',
			fcc: 'flex justify-center items-center'
		},
		[
			/^btn-(\w+)$/,
			([_, color]: UserShortcuts<Theme>) =>
				`op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`
		],
		[/^full-(.*)$/, ([_, size]: UserShortcuts<Theme>) => `w-${size} h-${size}`]
	],
	rules: [
		[
			/^slide-enter-(\d+)$/,
			([_, n]: UserShortcuts<Theme>) => ({
				'--enter-stage': n
			})
		]
	],
	presets: [
		presetIcons({
			mode: 'mask',
			extraProperties: {
				display: 'inline-block',
				height: '1.2em',
				width: '1.2em',
				'vertical-align': 'text-bottom'
			},
			collections: {
				vtr: collectionIcons()
			}
		}),
		presetAttributify(),
		presetUno(),
		presetWebFonts({
			fonts: {
				sans: 'Inter:400,600,800',
				mono: 'DM Mono:400,600'
			}
		})
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],
	safelist: ['i-ri-menu-2-fill'],
	extractors: [extractorSvelte()]
});
