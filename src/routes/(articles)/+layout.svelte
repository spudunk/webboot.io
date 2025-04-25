<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { page } from '$app/state';
	import Facebook from 'lucide-svelte/icons/facebook';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import { articles } from '$lib';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const route = page.route.id?.split('/');
	// @ts-ignore
	const slug = route[route.length - 1];
	
	// @ts-ignore
	const art = articles[slug];
	const canonical = page.url.href;
	const img = art.img || '';
	const title = art.title;
	const heading = art.heading;
	const description = art.description;
	const date = art.date;
	const author = art.author;

	const att = $state({ img: img, canonical: canonical });
	if (canonical) att.canonical = canonical;
	if (img) att.img = img;
</script>

<SEO title={`${title} - webboot.io`} {description} url={page.url.href} type="article" {...att} />

<div class="container mt-16">
	<article class="max-w-prose mb-6">
		<h1 class="text-3xl font-bold">{heading}</h1>
		<p class="leading-5">{description}</p>
		<p class="mt-2 font-semibold">Date: <i>{date}</i></p>
		<p class="-mt-1 font-semibold">By: {author}</p>
		<hr class="mt-4" />
		<div class="mt-6 md:text-lg lg:text-xl">
			{@render children?.()}
		</div>
	
		<style lang="postcss">
			ul {
				@apply list-inside list-disc mb-4;
			}
			ol {
				@apply list-inside list-decimal mb-4;
			}
			ol > li > ol {
				@apply ml-4;
				list-style-type: lower-alpha;
			}
			li {
				@apply mt-1 leading-7;
			}
	
			p {
				@apply leading-7 mt-2;
			}
			h2 {
				@apply text-2xl font-bold inline-block mt-8;
			}
			h3 {
				@apply text-xl font-bold inline-block mt-6;
			}
			code {
				@apply text-sm sm:text-base md:text-lg whitespace-break-spaces;
			}
		</style>
	</article>
	
	<hr />
	<nav class="flex flex-col mt-4">
		<a
			class="flex gap-2 py-3 text-blue-700 underline hover:no-underline"
			href="https://www.facebook.com/sharer/sharer.php?u={page.url.href}"
			target="_blank"
			rel="nofollow noopener"
		>
			<Facebook class="text-sm" />
			Share on FaceBook
		</a>
	
		<a href="/articles" class="flex gap-2 py-3 text-blue-700 underline hover:no-underline">
			<ArrowLeft class="text-sm" />
			Back to Articles</a
		>
	</nav>
</div>
