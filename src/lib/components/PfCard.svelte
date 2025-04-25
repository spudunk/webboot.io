<script lang="ts">
	interface Props {
		link: string;
		title: string;
		children?: import('svelte').Snippet;
	}

	let { link, title, children }: Props = $props();
</script>

<a href={link} target="_blank" class="block rounded border-2 border-neutral-100">
	<h3 class="text-xl md:text-2xl lg:text-3xl mt-4 mb-2 font-bold">{title}</h3>
	{@render children?.()}
</a>
