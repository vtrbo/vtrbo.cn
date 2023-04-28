import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute, n as null_to_empty } from "../../../chunks/index2.js";
import { r as readable } from "../../../chunks/index.js";
const projectGroups = readable([
  {
    group: "Starter Templates",
    projects: []
  },
  {
    group: "VS Code Extensions",
    projects: []
  },
  {
    group: "Utilities / CLI",
    projects: []
  },
  {
    group: "Configurations",
    projects: []
  }
]);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project-grid.svelte-1qwa8wy.svelte-1qwa8wy{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr))}.project-grid.svelte-1qwa8wy a.item.svelte-1qwa8wy{padding:0.8em 1em;background:transparent;font-size:1.1rem}.project-grid.svelte-1qwa8wy a.item.svelte-1qwa8wy:hover{background:#88888808}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projectGroups, $$unsubscribe_projectGroups;
  $$unsubscribe_projectGroups = subscribe(projectGroups, (value) => $projectGroups = value);
  $$result.css.add(css);
  $$unsubscribe_projectGroups();
  return `<div class="prose m-auto mb-8"><h1 class="mb-0">Projects</h1>
  <p class="opacity-50 im-mt--1.25rem italic">List of projects that I am proud of.</p>
  ${each($projectGroups, (group) => {
    return `${group.projects.length ? `<h4 class="mt-10 font-bold">${escape(group.group)}</h4>` : ``}
    ${each(group.projects, (project) => {
      return `<div class="project-grid py-2 -mx-3 gap-2 svelte-1qwa8wy"><a class="item relative flex items-center svelte-1qwa8wy"${add_attribute("href", project.link, 0)}><div class="pt-2 pr-5"><div class="${escape(null_to_empty(`text-3xl opacity-50 saturate-0 ${project.icon}`), true) + " svelte-1qwa8wy"}"></div></div>
          <div class="flex-auto"><div class="title">${escape(project.title)}</div>
            <div class="desc text-sm opacity-50 font-normal">${escape(project.description)}</div>
          </div></a>
      </div>`;
    })}`;
  })}
</div>`;
});
export {
  Page as default
};
