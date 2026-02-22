<script lang="ts">
	import Gengrid from '$lib/gengrid.svelte';
</script>

<h1 class="text-4xl p-2 text-white">Svelte SVG Generative Art</h1>

<div class="w-lg h-128 resize overflow-hidden">
	<Gengrid />
</div>

<div class="w-16 absolute bottom-3 right-3 hover:scale-105 transition-all bg-white rounded-full">
	<a href="https://github.com/zax71/svelte-svg-genart">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
			alt="GitHub"
			class="w-full"
		/></a
	>
</div>
