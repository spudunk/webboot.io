<script>
	import { Footer, Header } from '$lib/components';
	import { page } from '$app/stores';
	import '../app.css';
	import '@fontsource-variable/nunito';
	import { pwaInfo } from 'virtual:pwa-info';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r) {
					// uncomment following code if you want check for updates
					r &&
						setInterval(() => {
							//    console.log('Checking for sw update')
							r.update();
						}, 5 * 60 * 1000 /* m * s * ms */);
					// console.log(`SW Registered: ${r}`);
				},
				onRegisterError(error) {
					console.error('SW registration error', error);
				}
			});
		}
	});

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	$: home = $page.url.pathname === '/';
</script>

<svelte:head>
	{@html webManifestLink}
</svelte:head>

<Header class="fixed z-10 top-0 left-0 w-full" />
<div class="">
	<main class={`${home ? '' : 'container mt-16'} min-h-[50vh]`}>
		<slot />
	</main>
	<Footer class="mb-8 mt-12" />
</div>

{#await import('$lib/ReloadPrompt.svelte') then { default: ReloadPrompt }}
	<ReloadPrompt />
{/await}
