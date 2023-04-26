<script lang="ts">
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
</script>

<div>
  <Header />
  <main class="px-7 py-10">
    <slot />
  </main>
  <Footer />
</div>
