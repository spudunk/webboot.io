<script>
	import { SEO } from '$lib/components';
	import { articles } from '$lib';
	const posts = Object.values(articles);
</script>

<SEO title="Articles - webboot.io" description="Index of all the articles on webboot.io" url="https://webboot.io/articles"  />

<h1 class="text-4xl font-bold">Articles</h1>
<ul class="mt-8 divide-y">
	{#each posts as post}
		<li class="py-4">
			<a href={post.slug}>
				<h2 class="text-2xl font-semibold">{post.heading}</h2>
				<p class="max-w-prose">{post.description}</p>
				<p>{post.date} by {post.author}</p>
			</a>
		</li>
	{/each}
</ul>
