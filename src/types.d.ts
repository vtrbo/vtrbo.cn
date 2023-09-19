declare module '*.md' {
	import { SvelteComponent } from 'svelte';
	const attributes: Record<string, unknown>;
	const frontmatter: Record<string, unknown>;
	export { attributes, frontmatter, SvelteComponent };
}

declare namespace svelteHTML {
	import type { AttributifyAttributes } from '@unocss/preset-attributify';

	type HTMLAttributes = AttributifyAttributes;
}
