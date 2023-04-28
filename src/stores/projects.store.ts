import { readable } from 'svelte/store'

export interface Project {
  // 标题
  title: string
  // 描述
  description: string
  // 地址
  link: string
  // 图标
  icon?: string
}

export interface ProjectGroup {
  // 组名
  group: string
  // 项目
  projects: Project[]
}

export const projectGroups = readable<ProjectGroup[]>([
  {
    group: 'Starter Templates',
    projects: [],
  },
  {
    group: 'VS Code Extensions',
    projects: [],
  },
  {
    group: 'Utilities / CLI',
    projects: [],
  },
  {
    group: 'Configurations',
    projects: [],
  },
])
