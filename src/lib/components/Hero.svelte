<script lang="ts">
	import { Hammer, TrendingUp, Users2 } from 'lucide-svelte';
</script>

<section class="relative bg-emerald-100 hero-height" id="hero">
	<div class="absolute top-0 left-0 h-[99%] w-full bg-emerald-300 bg5"></div>
	<div class="absolute top-0 left-0 h-[98%] w-full bg-emerald-600 bg4"></div>
	<div class="absolute top-0 left-0 h-[90%] w-full bg-emerald-700 bg3"></div>
	<div class="absolute top-0 left-0 h-[60%] w-full bg-emerald-800 bg2"></div>
	<div class="absolute top-0 left-0 h-[30%] w-full bg-emerald-900 bg1"></div>

	<div
		class="absolute flex justify-center flex-col gap-3 text-white items-center top-0 left-1/2 -translate-x-1/2 pt-12 h-full container"
	>
		<h1
			class="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-semibold text-wrap-balance"
		>
			Solve <span class="text-amber-200"> growth constraints </span> with
			<br class="hidden sm:inline" />
			<i class="text-amber-200">intentional</i> online presence
		</h1>
		<p class="md:text-lg lg:text-2xl lg:mt-4 text-center">
			<span class="hero-span"> We develop digital assets for business. </span>
			<span class="hero-span"> We offer fast custom web apps, funnels, and SEO. </span>
			<span class="hero-span"> Start growing your brand online today. </span>
		</p>
		<ul
			class="flex flex-col lg:flex-row gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl lg:mt-4 font-bold sm:font-semibold"
		>
			<li class="hero-li">
				<div>
					<Hammer size="2em" strokeWidth="2" class="text-white" />
				</div>
				Automate Sales
			</li>
			<li class="hero-li">
				<div>
					<TrendingUp size="2em" strokeWidth="2" class="text-white" />
				</div>
				Maximize Ad Potential
			</li>
			<li class="hero-li">
				<div>
					<Users2 size="2em" strokeWidth="2" class="text-white" />
				</div>
				Build a User Base
			</li>
		</ul>
	</div>
</section>

<style lang="postcss">
	.bg1 {
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 70%,
			85% 72%,
			70% 70%,
			55% 73%,
			40% 77%,
			25% 72%,
			10% 70%,
			0% 100%
		);
		transform: translateZ(0);
		will-change: transform;
	}
	.bg2 {
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 80%,
			85% 82%,
			70% 78%,
			55% 82%,
			40% 78%,
			25% 82%,
			10% 78%,
			0% 100%
		);
		transform: translateZ(0);
		will-change: transform;
	}
	.bg3 {
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 90%,
			85% 92%,
			70% 88%,
			55% 93%,
			40% 88%,
			25% 92%,
			10% 88%,
			0% 100%
		);
		transform: translateZ(0);
		will-change: transform;
	}
	.bg4 {
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 98%,
			85% 95%,
			70% 98%,
			55% 94%,
			40% 98%,
			25% 94%,
			10% 98%,
			0% 100%
		);
		transform: translateZ(0);
		will-change: transform;
	}
	.bg5 {
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 100%,
			85% 97%,
			70% 100%,
			55% 96%,
			40% 100%,
			25% 96%,
			10% 100%,
			0% 100%
		);
		transform: translateZ(0);
		will-change: transform;
	}
	.hero-li {
		@apply px-2 py-1 flex gap-2 justify-center items-center bg-emerald-900 bg-opacity-50 rounded drop-shadow-lg text-left;
		transform: translateZ(0);
		will-change: transform;
	}
	.hero-span {
		@apply break-inside-avoid inline-block;
		transform: translateZ(0);
		will-change: transform;
	}
	.hero-height {
		height: max(37rem, 90vh);
	}
</style>
