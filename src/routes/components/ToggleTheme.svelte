<script>
	$: isDark = false;
	const toggle = () => {
		isDark = window.document.documentElement.classList.toggle('dark');
	};
</script>

<button on:click={toggle}>
	<span class="i-ri-sun-line dark:i-ri-moon-line" />
</button>
