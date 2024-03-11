<script>
	import { Footer, Header } from '$lib/components';
	import { page } from '$app/stores';
	import '../app.css';
	import '@fontsource-variable/nunito';
	$: home = $page.url.pathname === '/';
</script>

<Header class="fixed z-10 top-0 left-0 w-full print:hidden" />
<div class="">
	<main class={`${home ? '' : 'container mt-16'} min-h-[50vh]`}>
		<slot />
	</main>
	<Footer class="mb-8 mt-12 print:hidden" />
</div>
