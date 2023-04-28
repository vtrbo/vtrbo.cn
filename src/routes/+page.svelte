<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="prose m-auto mb-8">
  <h1 class="mb-0">Victor Bo</h1>
</div>
<article>
  <div class="prose m-auto">
    {@html data.content}
  </div>
</article>
