<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Java from './Icons/Java.svelte';
	import JavaScript from './Icons/JavaScript.svelte';
	import Php from './Icons/PHP.svelte';
	import Python from './Icons/Python.svelte';
	import React from './Icons/React.svelte';
	import Svelte from './Icons/Svelte.svelte';
	import TypeScript from './Icons/TypeScript.svelte';

	export let icons: string[] = [];

	const iconComponents: { [key: string]: ComponentType } = {
		Svelte: Svelte,
		TypeScript: TypeScript,
		Java: Java,
		JavaScript: JavaScript,
		PHP: Php,
		Python: Python,
		React: React
	};
	let selected: ComponentType[];
	$: selected = icons.map((iconName) => iconComponents[iconName]);
</script>

<article
	class="w-full shadow-2xl m-4 p-4 flex flex-col justify-between lg:h-[338px] z-10 max-w-sm glass-blue"
>
	<h3 class="text-white font-mono text-xl"><slot name="title" /></h3>
	<h4 class="text-sm lg:text-base text-gray-200 my-2">
		<slot name="desc" />
	</h4>
	<div>
		<nav aria-label="project links" class="text-white text-sm lg:text-base font-bold pt-2">
			<slot name="links" />
		</nav>
		<aside class="flex flex-row justify-end items-end text-xs lg:text-sm gap-2 mt-6 flex-grow">
			<p class="text-white font-mono h-fit">Made with:</p>
			{#each selected as icon}
				<svelte:component this={icon} />
			{/each}
		</aside>
	</div>
</article>

<style>
	.glass-blue {
		background: rgba(0, 0, 0, 0.4);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(13.5px);
		-webkit-backdrop-filter: blur(13.5px);
		border: 1px solid rgba(0, 0, 0, 0.99);
	}
</style>
