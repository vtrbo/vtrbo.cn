<script lang="ts">
	import BackBefore from '@components/BackBefore.svelte';
	import { projects } from '@projects/list';
</script>

<svelte:head>
	<title>Projects - VictorBo</title>
</svelte:head>

<div class="prose blog-title text-center">
	<h1>Projects</h1>
	<p>List of projects that I am proud of.</p>
</div>

<article>
	{#if !projects.length}
		<div class="prose m-auto text-center py20 op30">
			<div class="text-20 i-iconoir:glass-empty"></div>
			<div class="my-2">Nothing Here Yet</div>
		</div>
	{:else}
		<div class="max-w-300 mx-auto">
			{#each projects as projectGroup, projectGroupDx}
				<div class="slide-enter" style={`--enter-stage: ${projectGroupDx + 1}`}>
					{#if projectGroup.projects.length}
						<h4 class="mt-15 mb-2 font-bold text-center op75">{projectGroup.group}</h4>
					{/if}
					<div
						class={`project-grid py-2 max-w-500 w-max mx-auto grid cols-1 md:cols-2 gap-4 ${
							projectGroup.projects.length === 1 ? 'flex' : projectGroup.projects.length > 1 ? 'lg:grid-cols-3' : ''
						}`}
					>
						{#each projectGroup.projects as project}
							<a
								class={`item relative flex items-center ${
									!project.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''
								}`}
								href={project.link}
							>
								<div class="pt-2 pr-5">
									<div class={`text-4xl opacity-50 ${project.icon || 'i-carbon-unknown'} saturate-0`} />
								</div>
								<div class="flex-auto">
									<div class="text-normal">{project.title}</div>
									<div class="desc text-sm opacity-50 font-normal">{@html project.description}</div>
								</div>
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</article>
<BackBefore path="/" />

<style lang="scss">
	.project-grid a.item {
		background: transparent;
		font-size: 1.1rem;
		width: 350px;
		max-width: 100%;
		padding: 0.5rem 0.875rem 0.875rem;
		border-radius: 6px;
	}

	.project-grid a.item:hover {
		background: #88888811;
	}
</style>
