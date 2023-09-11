<script lang="ts">
	import Header from '@components/Header.svelte';
	import Footer from '@components/Footer.svelte';
</script>

<div class="font-sans text-gray-700 dark:text-gray-200 relative">
	<Header />
	<main class="px-7 py-10">
		<slot />
	</main>
	<Footer />
</div>
