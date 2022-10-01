<script lang="ts">
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	let svg;
	let width = 960;
	let height = 500;

	onMount(() => {
		svg = d3.select('#chart').append('svg').attr('width', width).attr('height', height);
	});
</script>

<svg id="chart" />
