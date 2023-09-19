<!-- layout can't use lang="ts" in script -->
<script>
	export let title = '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="prose blog-title">
	<h1>{title}</h1>
</div>
<article>
	<div class="prose blog-article slide-enter-content">
		<slot />
	</div>
</article>
