<script lang="ts">
	import Gengrid from '$lib/gengrid.svelte';
</script>

<h1>Svelte SVG Generative Art</h1>

<div class="gengrid-wrapper">
	<Gengrid />
</div>

<style>
	.gengrid-wrapper {
		width: 30rem;
		height: 30rem;
		resize: both;
		overflow: hidden;
	}

	h1 {
		color: white;
	}
</style>
