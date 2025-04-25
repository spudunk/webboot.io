<script lang="ts">
	import Phone from 'lucide-svelte/icons/phone';
	import Mail from 'lucide-svelte/icons/mail';
	import MapPin from 'lucide-svelte/icons/map-pin';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Search from 'lucide-svelte/icons/search';
	import CircleDollarSign from 'lucide-svelte/icons/circle-dollar-sign';
	
	import { data } from '$lib';
	interface Props {
		[key: string]: any
	}

	let { ...props }: Props = $props();
</script>

<div class={`${props.class} container `}>
	<div class="flex justify-between">
		<ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2">
			<li class=""><Phone /> <a href="tel:3608272736" target="_blank">(360) 827-2736</a></li>
			<li class="">
				<MapPin />
				<a href={data.maps} target="_blank">Salkum WA, USA</a>
			</li>
			<li class="">
				<Mail /> <a href={data.email} target="_blank">info@webboot.io</a>
			</li>
			<li class="">
				<Facebook />
				<a href={data.facebook} target="_blank">facebook.com/webboot.io</a>
			</li>
			<li class="">
				<Search />
				<a href={data.google} target="_blank">webboot.io</a>
			</li>
			<li>
				<CircleDollarSign />
				<a href={data.stripe}> manage billing </a>
			</li>
		</ul>
	</div>
	<div class="mx-auto w-full text-center mt-4">©2023-2024 webboot.io</div>
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
