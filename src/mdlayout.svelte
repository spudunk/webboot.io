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
	<SEO title={`${title} - webboot.io`} {description} url={$page.url.href} type="article" {...att} />
</svelte:head>

<article class="max-w-prose">
	<h1 class="text-3xl font-bold">{title}</h1>
	<p class="mt-2">Date: <i>{date}</i></p>
	<p class="">By: {author}</p>

	<div class="mt-4 md:text-lg lg:text-xl ">
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
      @apply leading-7 mt-2;
    }
    h2 {
      @apply text-2xl font-bold inline-block mt-8;
    }
    code {
      @apply text-sm sm:text-base md:text-lg whitespace-break-spaces;
    }
  </style>
</article>

<a href="/articles" class="inline-block py-4 text-blue-500 "> &larr; Back to Articles</a>
