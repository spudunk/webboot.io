<script >
	import { SEO } from '$lib/components';
	import { page } from '$app/stores';

	export let canonical = $page.url.href;
	export let img = '';
  /** @type {string} */
	export let title;
  /** @type {string}*/
	export let description;
  /** @type {string} */
	export let date;
  /** @type {string} */
	export let author;

	let att = { img: img, canonical: canonical };
	if (canonical) att.canonical = canonical;
	if (img) att.img = img;
</script>

<svelte:head>
	<SEO title={`webboot.io - ${title}`} {description} url={$page.url.href} type="article" {...att} />
</svelte:head>

<article class="max-w-prose">
	<h1 class="text-3xl font-bold">{title}</h1>
	<p class="mt-2">Date: <i>{date}</i></p>
	<p class="">By: {author}</p>

	<div class="mt-4 md:text-lg lg:text-xl space-y-3">
		<slot />
	</div>

  <style lang="postcss">
    ol {
      @apply list-inside list-decimal;
    }
    ol > li > ol {
      @apply ml-4;
      list-style-type: lower-alpha;
    }
    li {
      @apply mt-1 leading-7;
    }

    p {
      @apply leading-7;
    }
  </style>
</article>

<a href="/articles" class="inline-block py-4 text-blue-500 "> &larr; Back to Articles</a>
