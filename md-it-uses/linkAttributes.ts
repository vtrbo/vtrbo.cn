import markdownLinkAttributes from 'markdown-it-link-attributes'

function linkAttributes() {
  return [
    markdownLinkAttributes,
    {
      matcher: (link: string) => /^https?:\/\//.test(link),
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    },
  ]
}

export default linkAttributes()
