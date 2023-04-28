import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../chunks/index2.js";
import { a as articles, m as moduleName } from "../../../../chunks/articles.store.js";
import { a as getDate } from "../../../../chunks/date.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $articles, $$unsubscribe_articles;
  $$unsubscribe_articles = subscribe(articles, (value) => $articles = value);
  let { data } = $$props;
  const article = $articles.find((article2) => article2.filename === data.filename);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_articles();
  return `<div class="prose m-auto mb-8"><h1 class="mb-0">${escape(article.title)}</h1>
  <p class="opacity-50 !-mt-2">${escape(getDate(article.date))}
    ${article.timer ? `<span>· ${escape(article.timer)}</span>` : ``}</p></div>
<article><div class="prose m-auto"><!-- HTML_TAG_START -->${data.content}<!-- HTML_TAG_END --></div></article>
<a class="font-mono op50 hover:op75" href="${"/" + escape(moduleName, true)}">cd ..</a>`;
});
export {
  Page as default
};
