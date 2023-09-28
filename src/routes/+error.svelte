<script>
	import { page } from '$app/stores';
</script>


<div class="mt-32">
  <h1 class="text-xl">{$page.status} {$page.error?.message}</h1>
</div>
