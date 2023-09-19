<script lang="ts">
  export let scroll: number = 300

  $: scrollTop = 0

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function onScroll() {
    if (!scrollContainer()) 
return;
    scrollTop = scrollContainer().scrollTop
  }

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
</script>

<svelte:window on:scroll={onScroll} />
<button
  title="Scroll to top"
  class={`full-10 rd-full fixed right-3 bottom-3 z-100 transition duration-300 print:hidden hover:(op100 bg-hex-8883) ${scrollTop > scroll ? 'op30' : 'op0! pointer-events-none'}`}
  on:click={() => toTop()}
>
  <span class="i-ri-arrow-up-line" />
</button>
