<script>
	import Logo from '$lib/components/Logo.svelte';
	import MenuButton from '$lib/components/MenuButton.svelte';
	import Menu from '$lib/components/Menu.svelte';
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
	${atTop && home && $page.status == 200 ? 'h-16 sm:h-24' : 'h-12'} \
	${toggled ? 'bg-cyan-900' : 'bg-cyan-900/[.90]'} \
	`}
>
	<div class="container h-full flex flex-wrap items-center justify-between">
		{#if home}
			<Logo class="text-cyan-300 h-2/3 sm:h-full" />
		{:else}
			<a href="/" class="h-full" aria-label="home" data-sveltekit-reloadpermalink>
				<Logo class="text-cyan-300 h-2/3 sm:h-full" />
			</a>
		{/if}
		<!-- DEBUG -->
		<!-- <span>y: {Math.floor(y)}</span><span>home: {home}</span><span>status: {$page.status}</span> -->

		<div class="flex gap-4 items-center">
			<a href="/#contact" class="hidden min-[300px]:block btn">Get Started</a>
			<MenuButton class="h-full" {toggled} />
			<Menu {toggled} padMenu={atTop && home} />
		</div>
	</div>
</header>
