<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import '@fontsource-variable/nunito';


	let { children } = $props();
</script>

<Header class="fixed z-10 top-0 left-0 w-full print:hidden" />
<div class="bg-neutral-50">
	<main class={`min-h-[50vh]`}>
		{@render children?.()}
	</main>
	<Footer className="mb-8 mt-12 print:hidden" />
</div>
