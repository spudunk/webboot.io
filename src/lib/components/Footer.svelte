<script lang="ts">
	import { Phone, Mail, MapPin, Facebook, Search } from 'lucide-svelte';
</script>

<div class={`${$$props.class} container `}>
	<div class="flex justify-between">
		<ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
			<li class=""><Phone /> <a href="tel:3608272736" target="_blank">(360) 827-2736</a></li>
			<li class="">
				<MapPin />
				<a href="https://www.google.com/maps/place/Salkum,+WA/" target="_blank">Salkum WA, USA</a>
			</li>
			<li class="">
				<Mail /> <a href="mailto:info@webboot.io" target="_blank">info@webboot.io</a>
			</li>
			<li class="">
				<Facebook />
				<a href="https://www.facebook.com/webboot.io" target="_blank">facebook.com/webboot.io</a>
			</li>
			<li class="">
				<Search />
				<a
					href="https://www.google.com/search?sca_esv=565257361&sxsrf=AM9HkKmCwBytVYQqgziRbOtpTSYA_EbDpQ%3A1694674309236&q=webboot.io&stick=H4sIAAAAAAAAAONgU1I1qDBLNjc3sTC2NDdPSTFMS0qyMqhItbBMSTRKNbI0MzIwSE40W8TKVZ6alJSfX6KXmQ8Afo7tmjYAAAA&mat=CcVMgRU0KkQf&ved=2ahUKEwiQ2djhwamBAxX1ODQIHQ-6D1IQrMcEegQIAxAD"
					target="_blank">webboot.io</a
				>
			</li>
		</ul>
	</div>
	<div class="mx-auto w-full text-center mt-4">©2023 webboot.io</div>
</div>

<style lang="postcss">
	li {
		@apply flex gap-2 items-center text-cyan-900 font-semibold text-lg;
	}
	a {
		@apply rounded px-2 py-1;
	}
	a:focus {
		@apply outline outline-amber-500;
	}
</style>
