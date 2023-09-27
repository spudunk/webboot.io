<script>
	import { Logo, MenuButton, Menu } from '$lib/components';
	import { page } from '$app/stores';
	import { menuToggled } from '$lib/stores';
	import { onMount } from 'svelte';
	$: home = $page.url.pathname === '/';
	let y = 0;
	$: atTop = y < 25;
	let toggled = false;
	onMount(() => {
		menuToggled.subscribe((v) => {
			toggled = v;
			if (v) {
				document.body.classList.add('overflow-hidden');
			} else {
				document.body.classList.remove('overflow-hidden');
			}
		});
	});
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`${$$props.class} h-12 py-1 transition-all duration-200 z-30 \
	${atTop && home ? 'h-16 sm:h-24' : 'h-12'} \
	${toggled ? 'bg-cyan-900' : 'bg-cyan-900/[.90]'}	
	`}
>
	<div class="container h-full flex flex-wrap items-center justify-between">
		{#if home}
			<Logo class="text-cyan-300 h-2/3 sm:h-full" />
		{:else}
			<a href="/" class="h-full" data-sveltekit-reloadpermalink>
				<Logo class="text-cyan-300 h-2/3 sm:h-full" />
			</a>
		{/if}
		<!-- <span>{Math.floor(y)}</span> -->

		<div class="flex gap-4 items-center">
			<a
				href="https://buy.stripe.com/5kAeWc6TRfrh1CE289"
				class="hidden min-[300px]:block text-sm sm:text-lg px-2 sm:px-4 py-1 bg-amber-600 opacity-100 text-white font-semibold rounded"
				>Get Our Guide</a
			>
			<MenuButton class="h-full" {toggled} />
			<Menu {toggled} padMenu={atTop && home} />
		</div>
	</div>
</header>
