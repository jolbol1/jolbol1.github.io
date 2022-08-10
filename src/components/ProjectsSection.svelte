<script>
	import Project from './Project.svelte';
</script>

<section
	class="overscroll-auto snap-always snap-start min-h-screen h-fit flex flex-col items-center w-full"
>
	<h2 class="subheading-text text-5xl text-white font-bold text-center py-4 z-10">Projects</h2>
	<div class="flex flex-row flex-wrap justify-center max-w-screen-2xl w-full mb-6 text-justify">
		<Project icons={['TypeScript', 'Svelte']}>
			<svelte:fragment slot="title">F1-CALC</svelte:fragment>
			<svelte:fragment slot="desc">
				F1 Game 2022 AI Difficulty Calculator. Input your best lap times and the site will calculate
				the reccommended AI level to play at. Chart will show you the times to beat if you want to
				challenge yourself.
			</svelte:fragment>
			<svelte:fragment slot="links">
				<a target="_blank" rel="noopener noreferrer" href="https://jamesshopland.com/f1-calc"
					>Demo</a
				>
				|
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/jolbol1/f1-calc"
					>GitHub</a
				>
			</svelte:fragment>
		</Project>
		<Project icons={['JavaScript']}>
			<svelte:fragment slot="title">CZ-GITMOJIS</svelte:fragment>
			<svelte:fragment slot="desc">
				A commitizen adaptor that follows the gitmoji convention. This aids by showing you all of
				them and a description, and helps to format your commits in a standardised format.
			</svelte:fragment>
			<svelte:fragment slot="links">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.npmjs.com/package/cz-gitmojis">NPM</a
				>
				|
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/jolbol1/cz-gitmojis"
					>GitHub</a
				>
			</svelte:fragment>
		</Project>
		<Project icons={['Java']}>
			<svelte:fragment slot="title">RANDOM-COORDS</svelte:fragment>
			<svelte:fragment slot="desc">
				A Minecraft plugin to teleport users to random locations. Includes a dive into the flaws of
				randomness in computing, lots of customizability and an extensive Wiki. Since it started the
				plugin has amassed 100,000 downloads.
			</svelte:fragment>
			<svelte:fragment slot="links">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.spigotmc.org/resources/randomcoords-rtp-advanced-random-teleporter.1680/"
					>Page</a
				>
				|
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="hhttps://github.com/jolbol1/RandomCoordinatesV2">GitHub</a
				>
			</svelte:fragment>
		</Project>
		<Project icons={['Python', 'PHP']}>
			<svelte:fragment slot="title">BEDTIME</svelte:fragment>
			<svelte:fragment slot="desc">
				A custom script for a plex server. Enter a time, and it will end the video stream. Made so a
				TV wouldnt carry on playing if you had left it on.
			</svelte:fragment>
			<svelte:fragment slot="links">
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/jolbol1/bedTime"
					>GitHub</a
				>
			</svelte:fragment>
		</Project>
		<Project icons={['React', 'JavaScript']}>
			<svelte:fragment slot="title">JAMMMING</svelte:fragment>
			<svelte:fragment slot="desc">
				Codecademy react course project. This app lets you search songs and add them to a playlist
				you can save to spotify.
			</svelte:fragment>
			<svelte:fragment slot="links">
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/jolbol1/jammming"
					>GitHub</a
				>
			</svelte:fragment>
		</Project>
		<Project icons={['Svelte', 'TypeScript']}>
			<svelte:fragment slot="title">JAMESSHOPLAND.COM</svelte:fragment>
			<svelte:fragment slot="desc">
				This site! I use my personal site as a playground for new skills and new web end
				technologies. It started as pure HTML and CSS, the Gatsby and React, and is now SvelteKit
				and TypeScript.
			</svelte:fragment>
			<svelte:fragment slot="links">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/jolbol1/jolbol1.github.io">GitHub</a
				>
			</svelte:fragment>
		</Project>
	</div>
</section>

<style>
	a {
		text-decoration: underline;
	}
</style>
