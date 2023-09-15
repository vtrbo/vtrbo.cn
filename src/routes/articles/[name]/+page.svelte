<script lang="ts">
	import BackBefore from '@components/BackBefore.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ article, articles } = data);
</script>

<svelte:component this={article} {articles} />
<BackBefore path="/articles" />
