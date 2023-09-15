<script lang="ts">
	export let path: string = '';
</script>

<div class="back prose">
	<span>> </span>
	<a href={path || '/'}>cd ..</a>
</div>
