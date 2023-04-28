import { marked } from 'marked'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
  try {
    const res = await fetch('/resume.md')
    const content = await res.text()

    return {
      content: marked.parse(content),
    }
  }
  catch (error) {
    return {
      content: '',
    }
  }
}
