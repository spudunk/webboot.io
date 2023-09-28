<script>
	import { Footer, Header } from '$lib/components';
	import { page } from '$app/stores';  
	import '../app.css';
	import '@fontsource-variable/nunito';

	// @ts-ignore
	import { pwaInfo } from 'virtual:pwa-info'; 
  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '' 

	$: home = $page.url.pathname  === '/';
</script>

<svelte:head>
	{@html webManifestLink} 
</svelte:head>

<Header class="fixed z-10 top-0 left-0 w-full" />
<div class="">
	<main class={`${home ? "" : "container mt-16"} min-h-[65vh]`}>
		<slot />
	</main>
	<Footer class="mb-8 mt-12" />
</div>
