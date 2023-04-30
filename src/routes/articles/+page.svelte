<script lang="ts">
  import type { Article } from '@/stores/articles.store'
  import { articles, moduleName } from '@/stores/articles.store'
  import { getDate, getYear } from '@/utils/date'

  interface ComputeArticle extends Article {
    year: number
    route: string
  }

  $: computeArticles = $articles
    .sort((current, next) => {
      if (current.upper === next.upper)
        return +new Date(next.date) - +new Date(current.date)
      else if (current.upper)
        return -1
      else
        return 1
    })
    .map((article): ComputeArticle => {
      const year = getYear(article.date)
      const route = `/${moduleName}/${article.filename}`
      return {
        ...article,
        year,
        route,
      }
    })
</script>

<svelte:head>
  <title>Articles - VictorBo</title>
</svelte:head>

<div class="prose m-auto mb-8">
  <h1 class="mb-0">Articles</h1>
  <p class="opacity-50 im-mt--1.25rem italic">List of articles that I wrote.</p>
</div>
{#each computeArticles as article, ai}
  <div class="prose m-auto">
    {#if ai === 0 || computeArticles[ai - 1].year !== article.year}
      <div class="h20 pointer-events-none relative">
        <span class="absolute font-bold left--3.5rem op10 text-8em top--2rem">{article.year}</span>
      </div>
    {/if}
    <ul>
      <a class="item block font-normal mb-6 mt-2 no-underline" href={article.route}>
        <li class="no-underline">
          <div class="title text-lg leading-1.2em">
            {#if article.zh}
              <span class="text-xs border border-current rounded px-1 pb-0.2 md:ml--12 mr2 align-middle">中文</span>
            {/if}
            <span class="align-middle">{article.title}</span>
            {#if article.video}
              <span class="align-middle mx1 text-red5 i-ri-movie-line" />
            {/if}
          </div>
          <div class="time opacity-50 text-sm">
            {getDate(article.date)}
            {#if article.timer}
              <span class="op80"> · {article.timer}</span>
            {/if}
          </div>
        </li>
      </a>
    </ul>
  </div>
{/each}
