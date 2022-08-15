<script lang="ts">
	import IntroSection from '../components/IntroSection.svelte';
	import AboutSection from '../components/AboutSection.svelte';
	import ProjectsSection from '../components/ProjectsSection.svelte';
	import Seo from '../components/Seo.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Seo />

<IntroSection />

<AboutSection />

<ProjectsSection />
