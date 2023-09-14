<script>
	import { Logo } from '$lib/components';
	import { onMount } from 'svelte';
	let y = 26;
	$: atTop = y > 25;
	onMount(() => {});
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`${$$props.class} h-12 ${
		atTop ? 'h-12' : 'h-12 sm:h-24'
	} py-1 transition-all duration-200`}
>
	<div class="container h-full flex flex-wrap items-center justify-between">
		<Logo class="text-cyan-300 h-full" />
		<!-- <span>{Math.floor(y)}</span> -->
		<button class="bg-amber-600 opacity-100 text-white text-lg font-semibold px-4 py-1 rounded"
			>Get Our Guide</button
		>
	</div>
</header>
