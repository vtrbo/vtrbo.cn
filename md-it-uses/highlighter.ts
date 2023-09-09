import type MarkdownIt from 'markdown-it'
import { bundledLanguages, getHighlighter } from 'shikiji'
import { objectKeys } from '@vtrbo/utils/object'

const langMap: Record<string, string> = {
  sveltehtml: 'svelte',
}

async function highlighter(md: MarkdownIt) {
  const themes = {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  }
  const langs: string[] = objectKeys(bundledLanguages)

  const shiki = await getHighlighter({
    themes: Object.values(themes),
    langs,
  })

  md.options.highlight = (code: string, lang: string) => {
    if (objectKeys(langMap).includes(lang))
      lang = langMap[lang]

    if (!langs.includes(lang))
      return code

    return shiki.codeToHtml(code, {
      lang,
      themes,
      cssVariablePrefix: '--s-',
    })
  }
}

export default highlighter
