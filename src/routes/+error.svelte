<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="container mt-24">
	<h1 class="text-2xl font-bold mb-4">{$page.status}: {$page.error?.message}</h1>
	<p class="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
</section>
