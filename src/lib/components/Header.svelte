<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import MenuButton from '$lib/components/MenuButton.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { page } from '$app/stores';
	import { menuToggled } from '$lib/stores';
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	let y = $state(0);
	let atTop = $derived(y < 25);
	let home = $derived($page.route.id == '/');
	let isExpanded = $derived(atTop && home && $page.status == 200);
	let headerHeight = $derived(isExpanded ? 'h-16 sm:h-24' : 'h-12');
	let headerBg = $derived($menuToggled ? 'bg-emerald-900' : 'bg-emerald-900/[.90]');

	let toggled = false;
	onMount(() => {
		menuToggled.subscribe((value) => {
			if (value) {
				document.body.classList.add('overflow-hidden');
			} else {
				document.body.classList.remove('overflow-hidden');
			}
		});
	});
</script>

<svelte:window bind:scrollY={y} />

<header class={`${className} ${headerHeight} py-1 transition-all duration-200 z-30 ${headerBg}`}>
	<div class="container h-full flex flex-wrap items-center justify-between">
		{#if home}
			<Logo class="text-emerald-300 h-2/3 sm:h-full" />
		{:else}
			<a href="/" class="h-full flex items-center" aria-label="home" data-sveltekit-reloadpermalink>
				<Logo class="text-emerald-300 h-2/3 sm:h-full" />
			</a>
		{/if}
		<!-- DEBUG -->
		<!-- <span>y: {Math.floor(y)}</span><span>home: {home}</span><span>status: {$page.status}</span> -->

		<div class="flex gap-4 items-center">
			<a href="/#contact" class="hidden min-[300px]:block btn">Get Started</a>
			<MenuButton class="h-full" {toggled} />
			<Menu padMenu={isExpanded} />
		</div>
	</div>
</header>
