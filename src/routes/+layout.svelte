<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import '../styles/app.css';
	import Matter from '../components/Matter.svelte';
	import { onMount } from 'svelte';
	let disable = true;
	onMount(() => {
		disable = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});
</script>

<Nav bind:disable />

<main>
	<slot />
</main>

<Matter disabled={disable} />
