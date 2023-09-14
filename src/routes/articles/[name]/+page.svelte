<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ article, articles } = data);
</script>

<div>test</div>
<svelte:component this={article} {articles} />
