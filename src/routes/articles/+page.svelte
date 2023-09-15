<script lang="ts">
	import BackBefore from '@components/BackBefore.svelte';
	import type { PageData } from './$types';
	import { getDate, getYear } from '$lib/utils/date';

	export let data: PageData;
	const articles = data.articles;
</script>

<svelte:head>
	<title>Articles - VictorBo</title>
</svelte:head>

<div class="prose blog-title text-center">
	<h1>Articles</h1>
	<p>List of articles that I wrote.</p>
</div>

<article>
	<div class="prose m-auto slide-enter-content">
		{#if !articles.length}
			<div class="prose m-auto text-center py20 op30">
				<div class="text-20 i-iconoir:glass-empty"></div>
				<div class="my-2">Nothing Here Yet</div>
			</div>
		{:else}
			{#each articles as article, ai}
				{#if ai === 0 || getYear(articles[ai - 1].date) !== getYear(article.date)}
					<div
						class="select-none relative h20 pointer-events-none slide-enter"
						style={`--enter-stage: ${ai - 2}; --enter-step: 60ms`}
					>
						<span
							class="text-8em color-transparent absolute left--3rem top--2rem font-bold text-stroke-2 text-stroke-hex-aaa op10"
							>{getYear(article.date)}</span
						>
					</div>
				{/if}

				<div class="slide-enter" style={`--enter-stage: ${ai}; --enter-step: '60ms`}>
					<a class="item block font-normal mb-6 mt-2 no-underline" href={`articles/${article.name}`}>
						<li class="no-underline flex flex-col md:flex-row flex-gap-2 md:items-center">
							<div class="title text-lg leading-1.2em flex flex-gap-2 flex-wrap relative">
								{#if article.upper}
									<span
										class="absolute left--20 align-middle flex-none op50 hidden md:block i-fluent:keyboard-shift-uppercase-16-regular"
									></span>
								{/if}
								{#if article.zh}
									<span
										class="align-middle flex-none text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 ml--12 mr2 my-auto hidden md:block"
										>中文</span
									>
								{/if}
								<span class="align-middle">{article.title}</span>
							</div>

							<div class="flex flex-gap-2 items-center">
								{#if article.video}
									<span class="align-middle op50 flex-none i-ri-movie-line" />
								{/if}

								<div class="text-sm op40 ws-nowrap">
									{getDate(article.date)}
									{#if article.timer}
										<span class="op80"> · {article.timer}</span>
									{/if}
								</div>

								{#if article.zh}
									<span
										class="align-middle flex-none text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden"
										>中文</span
									>
								{/if}
							</div>
						</li>
					</a>
				</div>
			{/each}
		{/if}
	</div>
</article>
<BackBefore path="/" />
