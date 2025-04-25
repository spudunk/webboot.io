<script>
	import { page } from '$app/state';
</script>

<div class={`mt-24 ${page.url.pathname == '/' ? 'container' : ''}`}>
	<h1 class="text-2xl">{page.status}: {page.error?.message}</h1>
</div>
