<script lang="ts">
	export let link: string;
	export let title: string;
</script>

<a href={link} target="_blank" class="block rounded border-2 border-neutral-100">
	<h3 class="text-xl md:text-2xl lg:text-3xl mt-4 mb-2 font-bold">{title}</h3>
	<slot />
</a>
