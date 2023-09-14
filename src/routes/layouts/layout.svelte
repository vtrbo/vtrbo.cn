<!-- layout can't use lang="ts" in script -->
<script>
	export let title = '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="prose title">
	<h1>{title}</h1>
</div>
<article>
	<div class="prose article">
		<slot />
	</div>
</article>
