<script>
	import { Logo } from '$lib/components';
	import { page } from '$app/stores';
	$: home = $page.url.pathname === '/';
	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`${$$props.class} h-12 py-1 transition-all duration-200 \
	${y < 25 && home ? 'h-16 sm:h-24' : 'h-12'}`}
>
	<div class="container h-full flex flex-wrap items-center justify-between">
		{#if home}
			<Logo class="text-cyan-300 h-full" />
		{:else}
			<a href="/" class="h-full" data-sveltekit-reloadpermalink>
				<Logo class="text-cyan-300 h-full" />
			</a>
		{/if}
		<!-- <span>{Math.floor(y)}</span> -->
		<a
			href="https://buy.stripe.com/5kAeWc6TRfrh1CE289"
			class="bg-amber-600 opacity-100 text-white text-lg font-semibold px-4 py-1 rounded"
			>Get Our Guide</a
		>
	</div>
</header>
