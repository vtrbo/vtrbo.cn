<script lang="ts">
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { type Article, articles, moduleName } from '@/stores/articles.store'
  import { getDate } from '@/utils/date'

  let ArticleComponent: any
  let article: Article | undefined

  const loadPage = () => {
    const filename = $page.url.searchParams.get('filename')

    const modules = import.meta.glob<{ default: any }>('../markdown/*.md', { eager: true })
    ArticleComponent = modules[`../markdown/${filename}.md`].default

    article = $articles.find(article => article.filename === filename)
  }

  onMount(() => {
    loadPage()
  })
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
    <svelte:component this={ArticleComponent} />
  </div>
</article>
<div class="prose m-auto mt-8 mb-4">
  <span class="font-mono op50">> </span>
  <a class="font-mono op50 hover:op75" href={`/${moduleName}`}>cd ..</a>
</div>
