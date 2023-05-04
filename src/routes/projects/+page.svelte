<script lang="ts">
  import { projectGroups } from '@/stores/projects.store'
</script>

<svelte:head>
  <title>Projects - VictorBo</title>
</svelte:head>

<div class="prose m-auto mb-8">
  <h1 class="mb-0">Projects</h1>
  <p class="opacity-50 im-mt--1.25rem italic">List of projects that I am proud of.</p>
  {#each $projectGroups as group}
    {#if group.projects.length}
      <h4 class="mt-10 font-bold">{group.group}</h4>
    {/if}
    {#each group.projects as project}
      <div class="project-grid py-2 -mx-3 gap-2">
        <a class="item relative flex items-center" href={project.link}>
          <div class="pt-2 pr-5">
            <div class={`text-3xl opacity-50 saturate-0 ${project.icon}`} />
          </div>
          <div class="flex-auto">
            <div class="title">{project.title}</div>
            <div class="desc text-sm opacity-50 font-normal">{project.description}</div>
          </div>
        </a>
      </div>
    {/each}
  {/each}
</div>
<div class="prose m-auto mt-8 mb-4">
  <span class="font-mono op50">> </span>
  <a class="font-mono op50 hover:op75" href="/">cd ..</a>
</div>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.project-grid a.item {
  padding: 0.8em 1em;
  background: transparent;
  font-size: 1.1rem;
}

.project-grid a.item:hover {
  background: #88888808;
}
</style>
