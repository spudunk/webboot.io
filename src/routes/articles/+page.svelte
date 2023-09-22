<script>
	import { SEO } from '$lib/components';
	import { fetchMarkdownPosts } from '$lib/index';
	const posts = fetchMarkdownPosts();
</script>

<SEO title="Articles - webboot.io" description="Index of all the articles on webboot.io" url="https://webboot.io/articles"  />

<h1 class="text-4xl font-bold">Articles</h1>
<ul class="mt-8 divide-y">
	{#each posts as post}
		<li class="py-4">
			<a href={post.path}>
				<h2 class="text-2xl font-semibold">{post.meta.title}</h2>
				<p class="max-w-prose">{post.meta.description}</p>
				<p>{post.meta.date} by {post.meta.author}</p>
			</a>
		</li>
	{/each}
</ul>
