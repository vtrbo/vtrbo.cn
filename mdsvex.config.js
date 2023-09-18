import { bundledLanguages, getHighlighter } from 'shikiji';
import { objectKeys } from '@vtrbo/utils/object';

const extensions = ['.svelte.md', '.svx', '.md'];

const smartypants = {
	dashes: 'oldschool'
};

const langMap = {
	sveltehtml: 'svelte'
};

async function highlight(code, lang) {
	const themes = {
		light: 'vitesse-light',
		dark: 'vitesse-dark'
	};
	const langs = objectKeys(bundledLanguages);

	const shiki = await getHighlighter({
		themes: Object.values(themes),
		langs
	});

	if (objectKeys(langMap).includes(lang)) lang = langMap[lang];

	if (!langs.includes(lang)) return code;

	return shiki.codeToHtml(code, {
		lang,
		themes,
		cssVariablePrefix: '--s-'
	});
}

const layout = './src/routes/layouts/default.svelte';

export default {
	layout,
	extensions,
	smartypants,
	highlight
};
