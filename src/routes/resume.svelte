<div>svelte component</div>
{value}
<button on:click={() => value = value + 1}>加1</button>

<script>
  $: value = 1
</script>
