// @ts-expect-error missing types
import markdownItTableOfContents from 'markdown-it-table-of-contents'
import { slugify } from './scripts/slugify'

function tableOfContents() {
  return [
    markdownItTableOfContents,
    {
      includeLevel: [1, 2, 3, 4],
      slugify,
      containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>',
    },
  ]
}

export default tableOfContents()
