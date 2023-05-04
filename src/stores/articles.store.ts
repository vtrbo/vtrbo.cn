import { readable } from 'svelte/store'

export interface Article {
  // 标题
  title: string
  // 文件名称
  filename: string
  // 时间
  date: Date
  // 阅读时长
  timer?: string
  // 中文
  zh?: boolean
  // 置顶
  upper?: boolean
  // 视频
  video?: boolean
}

export const moduleName = 'articles'

export const articles = readable<Article[]>([
  // 需要解决 code 高亮的问题
  // {
  //   title: '渲染Markdown(sveltekit/mdsvex)',
  //   filename: 'render-markdown-sveltekit-mdsvex-zh',
  //   date: new Date('2023-05-04'),
  //   zh: true,
  // },
])
