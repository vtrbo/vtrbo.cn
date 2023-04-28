import { marked } from 'marked'
import type { PageLoad } from './$types'
import { moduleName } from '@/stores/articles.store'

export const load: PageLoad = async ({ fetch, params }) => {
  try {
    const { filename } = params

    const res = await fetch(`/${moduleName}/${filename}.md`)
    const content = await res.text()

    return {
      filename,
      content: marked.parse(content),
    }
  }
  catch (error) {
    return {
      filename: '',
      content: '',
    }
  }
}
