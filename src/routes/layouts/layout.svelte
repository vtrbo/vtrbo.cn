<script lang="ts">
	export let title: string = '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="prose m-auto mb-8">
	<h1 class="mb-0 slide-enter-50">{title}</h1>
</div>
<article>
	<div class="prose m-auto slide-enter-content">
		<slot />
	</div>
</article>
