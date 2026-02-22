# Svelte SVG Genart

[![github](https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/github_vector.svg)](https://github.com/zax71/svelte-svg-genart)
[![npm](https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/npm_vector.svg)](https://www.npmjs.com/package/svelte-svg-genart)

Easily create generative SVG art with Svelte. Highly inspired by [Creating Generative SVG Grids on Frontend Horse](https://frontend.horse/articles/generative-grids/) although with new shapes & an algorithm to generate the grid dimensions

## Usage

Install the package with your favourite node package manager (I'm partial to `pnpm`)

```sh
pnpm i svelte-svg-genart
```

Then add the following to your `+page.svelte`

```svelte
<script lang="ts">
	import Gengrid from 'svelte-svg-genart';
</script>

<Gengrid />
```

## Dev instructions

You can run the demo locally with `pnpm run dev`

## Demo

A live demo of the library can be found at https://svelte-svg-genart.pages.dev/
