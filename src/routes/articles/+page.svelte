<script>
	import { fetchMarkdownPosts } from '$lib/index';
	const posts = fetchMarkdownPosts();
</script>

<h1 class="text-4xl font-bold">Articles</h1>
<ul class="mt-8 divide-y">
	{#await posts then posts}
		{#each posts as post}
			<li class="py-4">
				<a href={post.path}>
					<h2 class="text-2xl font-semibold">{post.meta.title}</h2>
					<p class="max-w-prose">{post.meta.description}</p>
					<p>{post.meta.date} by {post.meta.author}</p>
				</a>
			</li>
		{/each}
	{/await}
</ul>
