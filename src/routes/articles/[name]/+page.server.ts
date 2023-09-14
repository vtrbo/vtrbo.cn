import { getArticles } from '$lib/scan/atricles';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { name = '' } = {} }) {
	try {
		const { articles = [] } = getArticles();
		return { articles };
	} catch (e) {
		throw error(404, `article can't be found: ${name}`);
	}
}
