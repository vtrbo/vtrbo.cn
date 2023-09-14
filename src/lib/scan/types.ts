import type { SvelteComponent } from 'svelte';

export interface ImportModule<T> {
	default: SvelteComponent;
	metadata: T;
}
