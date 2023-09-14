<script lang="ts">
	export let heading: string;
	export let num: string;
</script>

<div class="rounded-lg bg-cyan-100 p-0 min-h-fit">
	<div
		class="h-[2em] w-[2em] float-left mr-2 inline-flex aspect-square rounded-none rounded-br-lg justify-center items-center bg-cyan-200 text-6xl"
	>
		<span>{num}</span>
	</div>
	<div class="px-2 pb-2 flex-wrap">
		<h3 class="font-semibold mt-4 break-words text-xl lg:text-2xl">
			{heading}
		</h3>
		<slot />
	</div>
</div>
