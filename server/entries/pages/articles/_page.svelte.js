import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute } from "../../../chunks/index2.js";
import { m as moduleName, a as articles } from "../../../chunks/articles.store.js";
import { g as getYear, a as getDate } from "../../../chunks/date.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computeArticles;
  let $articles, $$unsubscribe_articles;
  $$unsubscribe_articles = subscribe(articles, (value) => $articles = value);
  computeArticles = $articles.sort((current, next) => {
    if (current.upper === next.upper)
      return +new Date(next.date) - +new Date(current.date);
    else if (current.upper)
      return -1;
    else
      return 1;
  }).map((article) => {
    const year = getYear(article.date);
    const route = `/${moduleName}/${article.filename}`;
    return { ...article, year, route };
  });
  $$unsubscribe_articles();
  return `<div class="prose m-auto mb-8"><h1 class="mb-0">Articles</h1>
  <p class="opacity-50 im-mt--1.25rem italic">List of articles that I wrote.</p></div>
${each(computeArticles, (article, ai) => {
    return `<div class="prose m-auto">${ai === 0 || computeArticles[ai - 1].year !== article.year ? `<div class="h20 pointer-events-none relative"><span class="absolute font-bold left--3.5rem op10 text-8em top--2rem">${escape(article.year)}</span>
      </div>` : ``}
    <ul><a class="item block font-normal mb-6 mt-2 no-underline"${add_attribute("href", article.route, 0)}><li class="no-underline"><div class="title text-lg leading-1.2em">${article.zh ? `<span class="text-xs border border-current rounded px-1 pb-0.2 md:ml--12 mr2 align-middle">中文</span>` : ``}
            <span class="align-middle">${escape(article.title)}</span>
            ${article.video ? `<span class="align-middle mx1 text-red5 i-ri-movie-line"></span>` : ``}</div>
          <div class="time opacity-50 text-sm">${escape(getDate(article.date))}
            ${article.timer ? `<span class="op80">· ${escape(article.timer)}</span>` : ``}
          </div></li>
      </a></ul>
  </div>`;
  })}`;
});
export {
  Page as default
};
