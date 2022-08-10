<script lang="ts">
	import { onMount } from 'svelte';
	import animate, { makeFullscreenCanvas, type MatterAnimation } from '../util/Animate';
	export let disabled = true;
	let render: MatterAnimation;
	let resizeId: string | number | NodeJS.Timeout | undefined;
	let svg: HTMLElement;

	const startAnimation = () => {
		render && render.delete();
		clearTimeout(resizeId);
		if (!disabled && svg) {
			resizeId = setTimeout(() => (render = animate(makeFullscreenCanvas(), svg)), 1000);
		}
	};

	const stop = () => {
		render && render.delete();
		clearTimeout(resizeId);
	};

	$: disabled ? stop() : startAnimation();

	onMount(() => {
		svg = document.getElementById('white-line')!;
		if (!svg) return;
		startAnimation();

		//On resize, delete and re-animate for new width
		window.addEventListener('resize', function () {
			startAnimation();
		});
	});
</script>

<div
	id="splash-holder"
	class="lg:w-3/5 md:w-4/5 w-5/6 flex flex-col fixed bottom-0 right-0 pr-4 pb-2 z-0"
>
	<svg class="w-full" width="100%" preserveAspectRatio="none" id="white-line" height="2">
		<line x1="0" y1="0" x2="100%" y2="0" style="stroke:#fff;stroke-width:100%" />
	</svg>
	<h2 class="text-white font-sans text-right pt-2 sm:text-2xl md:text-3xl" id="splash-text">
		Software Engineer, Surrey UK
	</h2>
</div>
