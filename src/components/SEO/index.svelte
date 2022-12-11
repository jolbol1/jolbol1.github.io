<script>
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-nocheck

	import ogSquareImageSrc from './JSLogo.png';
	import ogImageSrc from './JSLogo.png';
	import twitterImageSrc from './JSLogo.png';
	import featuredImageSrc from './JSLogo.png';
	import website from './website.js';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';

	const {
		author,
		entity,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		linkedinProfile,
		twitterUsername
	} = website;

	export let article = false;
	export let breadcrumbs = [];
	export let entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	export let lastUpdated;
	export let datePublished;
	export let metadescription;
	export let slug;
	export let timeToRead = 0;
	export let title;

	const defaultAlt = 'a logo that reads James Shopland on a background of stars';

	export let featuredImage = {
		url: featuredImageSrc,
		alt: defaultAlt,
		width: 512,
		height: 512,
		caption: 'Home page'
	};
	export let ogImage = {
		url: ogImageSrc,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: ogSquareImageSrc,
		alt: defaultAlt
	};
	export let twitterImage = {
		url: twitterImageSrc,
		alt: defaultAlt
	};
	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${siteTitle} ${'\u007c'} ${title}`;
	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated } : {})
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		githubPage,
		linkedinProfile,
		twitterUsername
	};
	const twitterProps = {
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang={siteLanguage} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
