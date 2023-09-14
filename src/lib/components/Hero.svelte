<script lang="ts">
	import { Hammer, Skull, TrendingUp, Users2 } from 'lucide-svelte';
</script>

<section class="relative bg-cyan-100 h-[90vh]" id="hero">
	<div class="absolute top-0 left-0 h-[99%] w-full bg-cyan-300 bg5" />
	<div class="absolute top-0 left-0 h-[98%] w-full bg-cyan-600 bg4" />
	<div class="absolute top-0 left-0 h-[90%] w-full bg-cyan-700 bg3" />
	<div class="absolute top-0 left-0 h-[60%] w-full bg-cyan-800 bg2" />
	<div class="absolute top-0 left-0 h-[30%] w-full bg-cyan-900 bg1" />

	<div
		class="absolute flex justify-center flex-col gap-3 text-white items-center top-0 left-1/2 -translate-x-1/2 pt-12 h-full container"
	>
		<h1 class="text-xl sm:text-2xl md:text-4xl text-center font-semibold">
			<span>Solve your growth constraints with an</span>
			<br class="hidden sm:inline" />
			<span><i>intentional</i> online presence</span>
		</h1>
		<p class="text-xs sm:text-sm md:text-lg text-center">
			We work with growing businesses to level-up their marketing.<br />With several years of
			combined experience, we build custom web-apps to:
		</p>
		<ul class="flex flex-col lg:flex-row gap-3 lg:gap-5 text-sm md:text-lg">
			<li
				class="px-2 py-3 flex gap-2 justify-center items-center bg-cyan-600 rounded-lg border-2 border-cyan-800 font-semibold text-center"
			>
				<div>
					<Hammer size="2em" strokeWidth="2" class="text-white" />
				</div>
				Solve specific growth constraints
			</li>
			<li
				class="px-2 py-3 flex gap-2 justify-center items-center bg-cyan-600 rounded-lg border-2 border-cyan-800 font-semibold text-center"
			>
				<div>
					<TrendingUp size="2em" strokeWidth="2" class="text-white" />
				</div>
				Maximize online marketing
			</li>
			<li
				class="px-2 py-3 flex gap-2 justify-center items-center bg-cyan-600 rounded-lg border-2 border-cyan-800 font-semibold text-center"
			>
				<div>
					<Users2 size="2em" strokeWidth="2" class="text-white" />
				</div>
				Attract and keep users
			</li>
		</ul>
	</div>
</section>

<style>
	.bg1 {
		clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 40% 80%, 0% 100%);
	}
	.bg2 {
		clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 70% 80%, 0% 100%);
	}
	.bg3 {
		clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 90% 90%, 50% 80%, 0% 100%);
	}
	.bg4 {
		clip-path: polygon(0% 0%, 100% 0%, 100% 98%, 45% 95%, 0% 100%);
	}
	.bg5 {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 30% 97%, 0% 100%);
	}
</style>
