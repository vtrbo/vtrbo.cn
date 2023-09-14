import { getArticles } from '$lib/scan/atricles';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const articles = getArticles();
	return { articles };
}
