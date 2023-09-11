// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

declare module '*.md' {
  import { SvelteComponent } from "svelte";
  const attributes: Record<string, unknown>;
  const frontmatter: Record<string, unknown>;
  export { attributes, frontmatter, SvelteComponent };
}

declare namespace svelteHTML {
  import type { AttributifyAttributes } from '@unocss/preset-attributify';

  type HTMLAttributes = AttributifyAttributes;
}

export {};
