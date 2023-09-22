<script>
	import { Footer, Header } from '$lib/components';
	import { page } from '$app/stores';  
	import '../app.css';
	import '@fontsource-variable/nunito';
	$: home = $page.url.pathname  === '/';
</script>

<Header class="bg-cyan-900/[.90] fixed z-10 top-0 left-0 w-full" />
<div class="">
	<main class={`${home ? "" : "container mt-16"} min-h-[65vh]`}>
		<slot />
	</main>
	<Footer class="mb-8 mt-12" />
</div>
