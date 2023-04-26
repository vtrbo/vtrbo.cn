<header class="header z-40">
  <a
    class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none fxc text-6 op-50"
    href="/"
  >
    <div class="i-vtr-logo" />
  </a>
  <nav class="nav">
    <div class="spacer" />
    <div class="right">
      <a href="/posts" title="Blog">
        <span class="lt-md:hidden">Blog</span>
        <div class="md:hidden i-ri-article-line" />
      </a>
      <a href="/project" title="Project">
        <span class="lt-md:hidden">Project</span>
        <div class="md:hidden i-ri-lightbulb-line" />
      </a>
      <a class="lt-md:hidden" href="https://twitter.com/vtrbo88" target="_blank" title="Twitter">
        <div class="i-feather-twitter" />
      </a>
      <a class="lt-md:hidden" href="https://github.com/antfu" target="_blank" title="GitHub">
        <div class="i-uil-github-alt" />
      </a>
    </div>
  </nav>
</header>

<style>
.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.5;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
