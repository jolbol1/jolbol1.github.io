<script lang="ts">
	import IntroSection from '../components/IntroSection.svelte';
	import AboutSection from '../components/AboutSection.svelte';
	import ProjectsSection from '../components/ProjectsSection.svelte';
	import SEO from '../components/SEO/index.svelte';
	import website from '../components/SEO/website.js';
	import ogSquareImageSrc from '../components/SEO/JSLogo.png';
	import ogImageSrc from '../components/SEO/JSLogo.png';
	import twitterImageSrc from '../components/SEO/JSLogo.png';
	import featuredImageSrc from '../components/SEO/JSLogo.png';

	const { author, siteUrl } = website;
	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	let metadescription =
		'Software engineer currently working for a leading systems, engineering and technology company in the Cloud Technologies department. C# | .NET | React | Redux | TypeScript | and more...';
	const featuredImageAlt = 'a logo that reads James Shopland on a background of stars';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 512,
		height: 512,
		caption: 'Home page'
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt
	};
	const twitterImage = {
		url: twitterImageSrc,
		alt: featuredImageAlt
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2022-12-11T00:11:49+00:00',
		lastUpdated: '2022-12-11T00:11:49+00:00',
		breadcrumbs,
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
</script>

<SEO {...seoProps} />

<IntroSection />

<AboutSection />

<ProjectsSection />
