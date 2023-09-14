<script>
	import { Logo } from '$lib/components';
	let y = 26;
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`${$$props.class} h-12 py-1 transition-all duration-200 \
	${y > 25 ? 'h-12' : 'h-16 sm:h-24'}`}
>
	<div class="container h-full flex flex-wrap items-center justify-between">
		<Logo class="text-cyan-300 h-full" />
		<!-- <span>{Math.floor(y)}</span> -->
		<button class="bg-amber-600 opacity-100 text-white text-lg font-semibold px-4 py-1 rounded"
			>Get Our Guide</button
		>
	</div>
</header>
