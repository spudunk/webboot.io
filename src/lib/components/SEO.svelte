<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		title: string;
		description?: string;
		img?: string;
		domain?: string;
		type?: string;
		canonical?: string;
		url?: string;
		keywords?: string[];
		author?: string;
		locale?: string;
		noIndex?: boolean;
		noFollow?: boolean;
	}

	let {
		url = $page.url.toString(),
		title = 'webboot.io',
		description = "We're a digital marketing agency for the businesses we care about. We specialize in custom web app design, development, and promotion.",
		img = '',
		domain = 'webboot.io',
		type = 'website',
		canonical = url,
		keywords = ['web development', 'digital marketing', 'web design', 'custom web apps'],
		author = 'webboot.io',
		locale = 'en_US',
		noIndex = false,
		noFollow = false
	}: Props = $props();

	const robotsContent = `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`;
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(', ')} />
	<meta name="author" content={author} />
	<meta name="robots" content={robotsContent} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Open Graph / Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={domain} />
	<meta property="og:locale" content={locale} />
	{#if img}
		<meta property="og:image" content={img} />
		<meta property="og:image:alt" content={title} />
	{/if}

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if img}
		<meta name="twitter:image" content={img} />
		<meta name="twitter:image:alt" content={title} />
	{/if}

	<!-- Canonical URL -->
	<link rel="canonical" href={canonical} />

	<!-- Additional Meta Tags -->
	<meta name="theme-color" content="#10b981" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</svelte:head>
