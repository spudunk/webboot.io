<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import MenuButton from '$lib/components/MenuButton.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { page } from '$app/state';
	import { menuToggled } from '$lib/stores';
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	let y = $state(0);
	let atTop = $derived(y < 25);
	let home = $derived(page.route.id == '/');
	let isExpanded = $derived(atTop && home && page.status == 200);
	let headerHeight = $derived(isExpanded ? 'h-16 sm:h-24' : 'h-12');
	let headerBg = $derived($menuToggled ? 'bg-neutral-900' : 'bg-neutral-900/[.90]');

	onMount(() => {
		menuToggled.subscribe((value) => {
			if (value) {
				document.body.classList.add('h-100');
				document.body.classList.add('overflow-y-clip');
				// document.body.classList.add('w-100');
			} else {
				document.body.classList.remove('h-100');
				document.body.classList.remove('overflow-y-clip');
				// document.body.classList.add('static');
				// document.body.classList.add('overflow-y-auto');
			}
		});
	});
</script>

<svelte:window bind:scrollY={y} />

<header class={`${className} ${headerHeight} py-1 transition-all duration-200 z-30 ${headerBg}`}>
	<div class="container h-full flex flex-wrap items-center justify-between">
		{#if home}
			<Logo class="text-neutral-300 h-2/3 sm:h-full" />
		{:else}
			<a href="/" class="h-full flex items-center" aria-label="home" data-sveltekit-reloadpermalink>
				<Logo class="text-neutral-300 h-2/3 sm:h-full" />
			</a>
		{/if}
		<!-- DEBUG -->
		<!-- <span>y: {Math.floor(y)}</span><span>home: {home}</span><span>status: {$page.status}</span> -->

		<div class="flex gap-4 items-center">
			<a href="/#contact" class="hidden min-[300px]:block btn">Get Started</a>
			<MenuButton class="h-full" />
			<Menu {isExpanded} />
		</div>
	</div>
	<div class="bg-[#2c430c]/90 mt-1">
		<div class="h-10 flex flex-wrap items-center justify-between container">
			<p class="text-white flex items-center justify-center gap-2 w-full">
				webboot.io has rebranded to
				<a href="https://bionweb.dev" class="text-[#39f] underline font-bold flex items-center gap-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-[1.5em] w-[1.5em]">
						<path style="fill:#39f" d="m222.195 28.5 13.75 110h40.11l13.75-110zm89.069 5.459L295.945 156.5h-79.89L200.754 34.08c-17.39 9.193-29.547 22.691-43.754 39.895V224.5H97.623c-1.02 10.303-1.561 16.647-1.623 27 0 128.13 71.634 232 160 232 71.065-.062 133.586-68.083 153.496-167h-7.371l-32 16h-69.691L263 297.3v-62.8h136v16h16.965c-.335-96.78-42.068-183.093-104.701-216.541M135 100.135c-17.438 29.328-29.537 64.52-35.191 102.365H135Zm185 149.38-32 48 14.977 9.985 32-48zm48 0-32 48 14.977 9.985 32-48zm-181.012 11.418c19.306-1.836 31.532 3.135 42.85 19.305-11.033 10.73-22.5 21.238-38.474 21.533-15.382.781-32.84-12.004-43.108-21.64 10.102-15.79 19.426-17.363 38.732-19.198M409 268.5v30h30v-30zm-217 126c42.667 8.618 85.333 8.435 128 0v18c-43.447 10.044-85.971 9.833-128 0zm48 36h32v18h-32z"/>
					</svg>
					Bion Web Development
				</a>
			</p>
		</div>
	</div>
</header>
