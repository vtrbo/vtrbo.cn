<script lang="ts">
  import type { PageData } from './$types'
  import { articles, moduleName } from '@/stores/articles.store'
  import { getDate } from '@/utils/date.js'

  export let data: PageData

  const article = $articles.find(article => article.filename === data.filename)!
</script>

<div class="prose m-auto mb-8">
  <h1 class="mb-0">{article.title}</h1>
  <p class="opacity-50 !-mt-2">
    {getDate(article.date)}
    {#if article.timer}
      <span> · {article.timer}</span>
    {/if}
  </p>
</div>
<article>
  <div class="prose m-auto">
    {@html data.content}
  </div>
</article>
<a class="font-mono op50 hover:op75" href="/{moduleName}">cd ..</a>
