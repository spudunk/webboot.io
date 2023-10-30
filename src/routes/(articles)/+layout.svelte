<script>
	import { SEO } from '$lib/components';
	import { page } from '$app/stores';
	import { Facebook, ArrowLeft } from 'lucide-svelte';

	const route = $page.route.id?.split('/');
	// @ts-ignore
	const slug = route[route.length - 1];

	// console.log(slug);
	import { articles } from '$lib';

	// @ts-ignore
	const art = articles[slug];
	// console.log(art)

	const canonical = $page.url.href;
	const img = art.img || '';
	/** @type {string} */
	const title = art.title;
	/** @type {string} */
	const heading = art.heading;
	/** @type {string}*/
	const description = art.description;
	/** @type {string} */
	const date = art.date;
	/** @type {string} */
	const author = art.author;

	const att = { img: img, canonical: canonical };
	if (canonical) att.canonical = canonical;
	if (img) att.img = img;
</script>

<SEO title={`${title} - webboot.io`} {description} url={$page.url.href} type="article" {...att} />

<article class="max-w-prose mb-6">
	<h1 class="text-3xl font-bold">{heading}</h1>
	<p class="mt-2">Date: <i>{date}</i></p>
	<p class="">By: {author}</p>

	<div class="mt-4 md:text-lg lg:text-xl">
		<slot />
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
		href="https://www.facebook.com/sharer/sharer.php?u={$page.url.href}"
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
