<script lang="ts">
  import { page } from '$app/stores'
  import { articles } from '@/stores/articles.store'
  import { getDate } from '@/utils/date'

  const { filename } = $page.params

  const modules = import.meta.glob<{ default: any }>('../markdown/*.md', { eager: true })
  const Article = modules[`../markdown/${filename}.md`].default

  const article = $articles.find(article => article.filename === filename)
</script>

<svelte:head>
  {#if article}
    <title>{article.title} - VictorBo</title>
  {/if}
</svelte:head>

{#if article}
  <div class="prose m-auto mb-8">
    <h1 class="mb-0">{article.title}</h1>
    <p class="opacity-50 im-mt-2">
      {getDate(article.date)}
      {#if article.timer}
        <span> · {article.timer}</span>
      {/if}
    </p>
  </div>
{/if}
<article>
  <div class="prose m-auto">
    <svelte:component this={Article} />
  </div>
</article>
