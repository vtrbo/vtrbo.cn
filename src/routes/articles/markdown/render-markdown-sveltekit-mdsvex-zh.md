> 感谢 [@antfu](https://github.com/antfu/)，样式参考 [antfu.me](https://antfu.me/)  

我一直有一个写 Blog 的想法，可能是因为我比较懒，或者是没有好看的UI设计，又或者是已经有很多 Blog 的 [React](https://react.dev/)/[Vue](https://vuejs.org/) 的模板等等原因，一直都没有着手写。  

最近一直在看 [svelte](https://www.svelte.cn/) 和 [sveltekit](https://kit.svelte.dev/) ，因此想使用svelte来实现我的Blog，过程中遇到了一些问题，在这里记录及分享一下。

## 你可能需要获取一个 sveltekit 项目

你可以在文档中看到获取项目的指令，或者你可以戳 [这里](https://kit.svelte.dev/docs/creating-a-project) 。

```bash
# 创建一个项目
npm create svelte@latest svelte-blog

# 进入项目目录并安装依赖
cd svelte-blog
npm install

# 启动项目 默认端口 5173
npm run dev
```

## 你可能需要使用 mdsvex 来支持 md

你可以先选择去看一下文档，或者你可以戳 [这里](https://mdsvex.com/docs)

### 必然是先安装

```bash
npm install mdsvex -DS
```

### 然后是配置

在 <em>`svelte.config.js`</em> 文件中配置

```js
// ...
import { mdsvex } from 'mdsvex'

const extensions = ['.svelte', '.svx', '.md']

const config = {
  // ...
  extensions,
  preprocess: [
    // ...
    mdsvex({
      extensions,
    }),
  ],
}

export default config
```

如果你使用 `ts` ，那么你还需要一个 <em>`src/globbal.d.ts`</em> 声明文件

```ts
declare module '*.svx' {
  const content: any
  export default content
}

declare module '*.md' {
  const content: any
  export default content
}
```

### 接下来是使用

你可以写一个 <em>`src/routes/Test.md`</em> 组件

```markdown
## 这就是个演示组件

> 写个表格吧

| 姓名 | 年龄 |
| --- | --- |
| 小王 | 40 |
| 小李 | 35 |
| 小赵 | 41 |
```

你还有一个 <em>`src/routes/Test.svelte`</em> 组件

```svelte
<div>这是一个 svelte 组件</div>
<div>只是用于演示的</div>
<div>为了表示尊重凑三行</div>
```

在 <em>`src/routes/First.svx`</em> 文件中，你可以这么用

```svelte
<script>
  import TestMD from './Test.md'
</script>

## 这里你可以直接写 md 的标题

- 列表也能写
- 这个也是列表

<TestMD />
```

在 <em>`src/routes/Second.svelte`</em> 文件中，你还可以这么用

```svelte
<script>
  import TestMD from './Test.md'
</script>

<TestMD />
```

在 <em>`src/routes/Three.md`</em> 文件中，你甚至可以这么用

```markdown
## 我是一个 markdown 文件

> 这个时候，我有了一个 script 脚本，并且引入了一个 svelte 组件  
> 我甚至想引入一个 md 组件，说干就干

<script>
  import TestSvelte from './test.svelte'
  import TestMD from './test.md'
</script>

<TestSvelte />
<TestMD />
```

当然，你想怎么混着用，就怎么混着用，这里就不一一列举了...  

最最最关键的一步，就是在 <em>`src/routes/+page.svelte`</em> 文件中使用

```svelte
<script>
  import FirstPage from './First.svx'
  import SecondPage from './Second.svelte'
  import ThreePage from './Three.md'
</script>

<div style:margin="80px">
  <FirstPage />
  <SecondPage />
  <ThreePage />
</div>
```

## 到这里基本就结束了

从结果上来看，配置 sveltekit 中适用 mdsvex 还是蛮简单的。  

mdsvex 有几项配置，就我个人搭建这个博客而言，还是有很多力不从心的地方。  

就唠到这里吧，希望我的配置是可以被你轻松使用的，可能有很多的错误，欢迎交流...  

## 填坑之旅

### 代码格式化 [@vtrbo/eslint-config](https://github.com/vtrbo/eslint-config)

<sup>Fork <a href="https://github.com/antfu">antfu</a> 大佬的 <a href="https://github.com/antfu/eslint-config">@antfu/eslint-config</a>，扩展了对 `svelte` 文件的支持，当然还不是很完善，欢迎PR。</sup>

#### 安装 @vtrbo/eslint-config

```bash
npm install @vtrbo/eslint-config -DS
```

#### 在 <em>`.eslintrc`</em> 中配置

```json
{
  "extends": "@vtrbo",
  // 只是为了保留在使用过程中规则有问题时，可以重写规则，也欢迎有问题的时候提PR
  "overrides": [
    {
      "files": ["*.svelte"],
      "rules": {
      }
    }
  ]
}
```

#### 在 <em>`.vscode/settings.json`</em> 中配置

```json
{
  // 关闭 prettier, 我和 antfu 大佬的观点一致
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "svelte",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5"
  ]
}
```

### 原子化CSS [unocss](https://github.com/unocss/unocss)

<sup>使用 unocss 来尽可能减少 css 的书写，可惜的是截至目前，我没有办法在同时使用 eslint 的情况下，使用 unocss 的属性化(Attributify Mode)，请大佬指点我。</sup>

#### 安装 unocss

```bash
npm install unocss @unocss/reset @unocss/extractor-svelte @iconify/json -DS
```

#### 在 <em>`uno.config.ts`</em> 中配置

```ts
import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
  extractors: [
    // 支持 class:bg="red"
    extractorSvelte(),
  ],
  presets: [
    presetUno({
      dark: 'class',
    }),
    // iconify 图标
    presetIcons({
      warn: true,
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    // 支持 @apply bg-red
    transformerDirectives(),
    // 支持 <div class="hover:(bg-red font-400)"/>
    transformerVariantGroup(),
  ],
})
```

#### 在 <em>`src/routes/+layout.ts`</em> 中引入

```ts
import '@unocss/reset/tailwind.css'
import 'uno.css'
```

### 代码块高亮 [shiki](https://github.com/shikijs/shiki)

<sup>使用 shiki 来进行渲染的代码块高亮显示。</sup>

#### 安装 shiki

```bash
npm install shiki -DS
```

#### 在 mdsvex 配置

<sup><em>`svelte.config.js`</em></sup>

```js
// ...
import { getHighlighter } from 'shiki'

const config = {
  // ...
  preprocess: [
    // ...
    mdsvex({
      // ...
      highlight: {
        // ...
        highlighter: async (code, lang) => {
          // 这里可以更换其他主题
          const shiKiHighLighter = await getHighlighter({ theme: 'vitesse-light', })
          const transformCode = shiKiHighLighter
            .codeToHtml(code, { lang })
            // 处理 { }
            .replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')
          return transformCode
        },
      },
    }),
  ],
}

export default config
```
