// support unocss scanning to the icon of the file
// @unocss-include
import type { ProjectGroup } from '$lib/scan/projects';

export const projects: ProjectGroup[] = [
	{
		group: 'Current Focus',
		projects: [
			{
				icon: 'i-vtr:ikun-ui',
				title: 'ikun-ui',
				description: 'A Svelte.js based UnoCSS UI library that allows you to make websites.',
				link: 'https://github.com/ikun-svelte/ikun-ui'
			}
		]
	},
	{
		group: 'Starter Templates',
		projects: [
			{
				icon: 'i-logos:npm-icon',
				title: 'starter-library',
				description: 'Starter Template For npm library.',
				link: 'https://github.com/vtrbo/starter-library'
			},
			{
				icon: 'i-logos:vitejs',
				title: 'starter-vitepress',
				description: 'Starter Template For Vitepress.',
				link: 'https://github.com/vtrbo/starter-vitepress'
			},
			{
				icon: 'i-logos:svelte-icon',
				title: 'starter-svelte-kit',
				description: 'Starter Template For SvelteKit.',
				link: 'https://github.com/vtrbo/starter-kit'
			},
			{
				icon: 'i-bi:plugin',
				title: 'starter-unplugin',
				description: 'Starter Template For Unplugin.',
				link: 'https://github.com/vtrbo/starter-unplugin'
			},
			{
				icon: 'i-akar-icons:vscode-fill',
				title: 'starter-vscode',
				description: 'Starter Template For VSCode.',
				link: 'https://github.com/vtrbo/starter-vscode'
			}
		]
	},
	{
		group: 'Utilities / CLI',
		projects: [
			{
				icon: 'i-tabler:math-function',
				title: 'utils',
				description: 'Collection of common JavaScript or TypeScript utils.',
				link: 'https://github.com/vtrbo/utils'
			},
			{
				icon: 'i-devicon-plain:powershell',
				title: 'cli',
				description: 'Start a project.',
				link: 'https://github.com/vtrbo/cli'
			},
			{
				icon: 'i-ic:outline-cloud-download',
				title: 'load-repo',
				description: 'Download git repository.',
				link: 'https://github.com/vtrbo/load-repo'
			}
		]
	},
	{
		group: 'Plugins',
		projects: [
			{
				icon: 'i-fa6-regular:images',
				title: 'unplugin-vue-images',
				description: 'Use the image resource as a component in the vue project.',
				link: 'https://github.com/vtrbo/unplugin-vue-images'
			},
			{
				icon: 'i-mingcute:plugin-2-line',
				title: 'vitepress-plugins',
				description: 'Vitepress plugins map.',
				link: 'https://github.com/vtrbo/vitepress-plugins'
			}
		]
	},
	{
		group: 'VS Code Extensions',
		projects: [
			{
				icon: 'i-clarity:settings-outline-badged',
				title: 'dot-thing',
				description: "Symbol '.' Triggered Code Input.",
				link: 'https://github.com/vtrbo/dot-thing'
			}
		]
	},
	{
		group: 'Configurations',
		projects: [
			{
				icon: 'i-logos:eslint',
				title: 'eslint-config',
				description: 'My Eslint Config Preset.',
				link: 'https://github.com/vtrbo/eslint-config'
			},
			{
				icon: 'i-tabler:brand-vscode',
				title: 'vscode-settings',
				description: 'My VS Code Settings.',
				link: 'https://github.com/vtrbo/vscode-settings'
			},
			{
				icon: 'i-mdi:bash',
				title: 'dotfiles',
				description: 'My Dot Files.',
				link: 'https://github.com/vtrbo/dotfiles'
			}
		]
	}
];
