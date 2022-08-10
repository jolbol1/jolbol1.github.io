<script>
	import Email from './Icons/Email.svelte';

	import Github from './Icons/Github.svelte';
	import LinkedIn from './Icons/LinkedIn.svelte';
	import Twitter from './Icons/Twitter.svelte';
</script>

<section
	class="snap-start grid grid-cols-4 gap-4 h-screen max-h-screen auto-rows-fr grid-rows-6 sm:grid-cols-8 w-screen"
	id="screen-1"
>
	<header
		class="px-6 sm:pl-0 col-span-4 h-fit sm:col-span-6 row-start-2 sm:col-start-2 flex flex-col items-start"
	>
		<h1 class="text-blue-400 header-text text-6xl sm:text-7xl md:text-8xl font-display font-bold ">
			James
		</h1>
		<h1 class="text-gray-200 header-text text-6xl sm:text-7xl md:text-8xl font-display font-bold">
			Shopland
		</h1>
		<p class="text-white pt-6 sm:text-2xl pl-1">
			C# | .NET | React | Redux | TypeScript | and more...
		</p>
		<nav aria-label="Quick Links" class="z-10 flex flex-row gap-4 mt-4">
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/jolbol1"><Github /></a>
			<a target="_blank" rel="noopener noreferrer" href="mailto:website@jamesshopland.com"
				><Email /></a
			>
			<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jollyshopland"
				><Twitter /></a
			>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://uk.linkedin.com/in/james-shopland-b48543153"><LinkedIn /></a
			>
		</nav>
	</header>
</section>
