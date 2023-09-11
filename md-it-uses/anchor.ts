import markdownItAnchor from 'markdown-it-anchor'
import { slugify } from './scripts/slugify'

function anchor() {
  return [
    markdownItAnchor,
    {
      slugify,
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        symbol: '#',
        renderAttrs: () => ({ 'aria-hidden': 'true' }),
      }),
    },
  ]
}

export default anchor()
