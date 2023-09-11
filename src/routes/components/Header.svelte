<script lang="ts">
	import BackTop from '@components/BackTop.svelte';
	import ToggleTheme from '@components/ToggleTheme.svelte';
</script>

<header class="header z-40">
	<a class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none fcc text-6 op-50" href="/static">
		<span class="i-vtr-logo" />
	</a>
	<nav class="nav">
		<div class="spacer" />
		<div class="right print:op0">
			<a href="/articles" title="Articles">
				<span class="lt-md:hidden">Articles</span>
				<span class="md:hidden i-ri-article-line" />
			</a>
			<a href="/projects" title="Project">
				<span class="lt-md:hidden">Project</span>
				<span class="md:hidden i-ri-lightbulb-line" />
			</a>
			<a class="lt-md:hidden" href="https://twitter.com/vtrbo88" target="_blank" title="Twitter">
				<span class="i-feather-twitter" />
			</a>
			<a class="lt-md:hidden" href="https://github.com/vtrbo" target="_blank" title="GitHub">
				<span class="i-uil-github-alt" />
			</a>
			<ToggleTheme />
		</div>
	</nav>
	<BackTop />
</header>

<style lang="scss">
	.nav {
		--at-apply: p-2rem w-full grid;
		grid-template-columns: auto max-content;
		box-sizing: border-box;

		& > * {
			--at-apply: m-auto;
		}

		& > img {
			--at-apply: mb-0;
		}

		& > a {
			--at-apply: cursor-pointer no-underline color-inherit op-60 outline-none;
			transition: opacity 0.2s ease;

			:hover {
				opacity: 1;
				text-decoration-color: inherit;
			}
		}

		& .right {
			display: grid;
			grid-gap: 1.2rem;
			grid-auto-flow: column;

			* {
				--at-apply: m-auto;
			}
		}
	}
</style>
