<script lang="ts">
	interface Props {
		heading: string;
		num: string;
		children?: import('svelte').Snippet;
	}

	let { heading, num, children }: Props = $props();
</script>

<div class="rounded-lg bg-cyan-100 p-0 min-h-fit card-grid">
	<div
		class="h-14 w-14 inline-flex aspect-square rounded-none rounded-br-lg justify-center items-center bg-cyan-600 text-4xl text-amber-100"
	>
		{num}
	</div>

		<h3 class="font-semibold mt-4 break-words text-xl md:text-2xl lg:text-3xl">
			{heading}
		</h3>

		<div class="col-span-full mx-4 mb-2 text-lg">
			{@render children?.()}
		</div>

</div>

<style>
	.card-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: 3rem 1fr;
		grid-template-rows: 3rem 1fr;
	}
	
</style>