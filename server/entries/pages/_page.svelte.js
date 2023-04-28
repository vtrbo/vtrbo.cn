import { c as create_ssr_component } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="prose m-auto mb-8"><h1 class="mb-0">Victor Bo</h1></div>
<article><div class="prose m-auto"><!-- HTML_TAG_START -->${data.content}<!-- HTML_TAG_END --></div></article>`;
});
export {
  Page as default
};
