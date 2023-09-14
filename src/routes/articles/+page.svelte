<script lang="ts">
	import type { PageData } from './$types';
	import { getDate, getYear } from '$lib/utils/date';

	export let data: PageData;
	const articles = data.articles.articles;
</script>

<svelte:head>
	<title>Articles - VictorBo</title>
</svelte:head>

<div class="prose title">
	<h1>Articles</h1>
	<p>List of articles that I wrote.</p>
</div>

{#each articles as article, ai}
	<div class="prose m-auto">
		{#if ai === 0 || getYear(articles[ai - 1].date) !== getYear(article.date)}
			<div class="h20 pointer-events-none relative">
				<span class="absolute font-bold left--3.5rem op10 text-8em top--2rem lt-sm:left--0.5rem"
					>{getYear(article.year)}</span
				>
			</div>
		{/if}
		<ul>
			<a class="item block font-normal mb-6 mt-2 no-underline" href={`articles/${article.name}`}>
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
