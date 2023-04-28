import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nav.svelte-14s9u22.svelte-14s9u22.svelte-14s9u22{padding:2rem;width:100%;display:grid;grid-template-columns:auto max-content;box-sizing:border-box}.nav.svelte-14s9u22>.svelte-14s9u22.svelte-14s9u22{margin:auto}.nav.svelte-14s9u22 a.svelte-14s9u22.svelte-14s9u22{cursor:pointer;text-decoration:none;color:inherit;transition:opacity 0.2s ease;opacity:0.5;outline:none}.nav.svelte-14s9u22 a.svelte-14s9u22.svelte-14s9u22:hover{opacity:1;text-decoration-color:inherit}.nav.svelte-14s9u22 .right.svelte-14s9u22.svelte-14s9u22{display:grid;grid-gap:1.2rem;grid-auto-flow:column}.nav.svelte-14s9u22 .right.svelte-14s9u22>.svelte-14s9u22{margin:auto}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header z-40"><a class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none fxc text-6 op-50" href="/"><div class="i-vtr-logo"></div></a>
  <nav class="nav svelte-14s9u22"><div class="spacer svelte-14s9u22"></div>
    <div class="right svelte-14s9u22"><a href="/articles" title="Articles" class="svelte-14s9u22"><span class="lt-md:hidden">Articles</span>
        <div class="md:hidden i-ri-article-line"></div></a>
      <a href="/projects" title="Project" class="svelte-14s9u22"><span class="lt-md:hidden">Project</span>
        <div class="md:hidden i-ri-lightbulb-line"></div></a>
      <a class="lt-md:hidden svelte-14s9u22" href="https://twitter.com/vtrbo88" target="_blank" title="Twitter"><div class="i-feather-twitter"></div></a>
      <a class="lt-md:hidden svelte-14s9u22" href="https://github.com/vtrbo" target="_blank" title="GitHub"><div class="i-uil-github-alt"></div></a></div></nav>
</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer z-40"><div class="mt-10 mb-6 m-auto opacity-50 fxc"><span class="text-sm">2023-PRESENT © VictorBo</span></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <main class="px-7 py-10">${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
