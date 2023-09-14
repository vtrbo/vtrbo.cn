<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ article, articles } = data);
</script>

<svelte:component this={article} {articles} />
