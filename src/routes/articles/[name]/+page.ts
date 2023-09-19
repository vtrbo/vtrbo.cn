import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';
import type { ImportModule } from '$lib/scan/types';
import type { Article } from '$lib/scan/atricles';

/** @type {import('./$types').PageLoad} */
export async function load({ params: { name = '' } = {}, data: { articles = [] } = {} }) {
	try {
		const article: ImportModule<Article> = (await import(`../../../articles/${name}.md`))!.default;
		return {
			article,
			articles
		} as unknown as {
			article: SvelteComponent;
			articles: Article[];
		};
	} catch (e) {
		throw error(404, `post cannot be found: ${name}`);
	}
}
