<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import '@fontsource-variable/nunito';
</script>

<Header class="fixed z-10 top-0 left-0 w-full print:hidden" />
<div class="">
	<main class={`min-h-[50vh]`}>
		<slot />
	</main>
	<Footer class="mb-8 mt-12 print:hidden" />
</div>
