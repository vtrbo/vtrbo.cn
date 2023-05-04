---
title: 渲染Markdown(sveltekit/mdsvex)
date: 2023-05-04T00:00:00Z
lang: zh
---

> 感谢 [@antfu](https://github.com/antfu/)，样式参考 [antfu.me](https://antfu.me/)  

我一直有一个写 Blog 的想法，可能是因为我比较懒，或者是没有好看的UI设计，又或者是已经有很多 Blog 的 [React](https://react.dev/)/[Vue](https://vuejs.org/) 的模板等等原因，一直都没有着手写。  

最近一直在看 [svelte](https://www.svelte.cn/) 和 [sveltekit](https://kit.svelte.dev/) ，因此想使用svelte来实现我的Blog，过程中遇到了一些问题，在这里记录及分享一下。

## 你可能需要获取一个sveltekit项目

你可以在文档中看到获取项目的指令，或者你可以戳 [这里](https://kit.svelte.dev/docs/creating-a-project) 。

```bash
npm create svelte@latest svelte-blog

cd svelte-blog
npm install

# 默认端口 5173
npm run dev
```
