<script lang="ts">
	import { Hammer, TrendingUp, Users2 } from 'lucide-svelte';
</script>

<section class="relative hero-height" id="hero">
	<div class="absolute top-0 left-0 h-[99%] w-full bg-neutral bg5"></div>
	<div class="absolute top-0 left-0 h-[98%] w-full bg-neutral-600 bg4"></div>
	<div class="absolute top-0 left-0 h-[90%] w-full bg-neutral-700 bg3"></div>
	<div class="absolute top-0 left-0 h-[60%] w-full bg-neutral-800 bg2"></div>
	<div class="absolute top-0 left-0 h-[30%] w-full bg-neutral-900 bg1"></div>

	<div
		class="absolute flex justify-center flex-col gap-3 text-white items-center top-0 left-1/2 -translate-x-1/2 pt-12 h-full container"
	>
		<h1
			class="flex flex-col gap-4 md:gap-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-semibold text-wrap-balance"
		>
			<span>
				we build <span class="text-lime-200"> custom digital assets </span>
			</span>
			<span>
				to <span class="font-bold italic">SUPERCHARGE </span>
			</span>
			<!-- 
			<span>conversion, </span>
			<span>retention &amp; </span>
			<span>staffing</span> -->

			<!-- <p class="md:text-lg lg:text-2xl lg:mt-4 flex flex-col">
			<span class="hero-span"> automation, rewards, </span>
			<span class="hero-span"> text and email campaigns, </span>
			<span class="hero-span">
				one time cost,
				<span class="text-lime-200"> no subscription </span>
			</span>
		</p> -->
			<div class="flex justify-center">
				<ul
					class="flex flex-col items-baseline md:flex-row gap-4 md:gap-8 font-bold sm:font-semibold"
				>
					<li class="hero-span">
						<div class=" border-white rounded border md:border-2 lg:border-4 p-1">
							<TrendingUp size="1em" strokeWidth="2" class="text-lime-50" />
						</div>
						conversion
					</li>
					<li class="hero-span">
						<div class=" border-white rounded border md:border-2 lg:border-4 p-1">
							<Users2 size="1em" strokeWidth="2" class="text-lime-50" />
						</div>
						retention
					</li>
					<li class="hero-span">
						<div class=" border-white rounded border md:border-2 lg:border-4 p-1">
							<Hammer size="1em" strokeWidth="2" class="text-lime-50" />
						</div>
						staffing
					</li>
				</ul>
			</div>
		</h1>
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

	.hero-span {
		@apply px-2 py-1 flex gap-2 justify-center items-center break-inside-avoid;
		transform: translateZ(0);
		will-change: transform;
	}
	.hero-height {
		height: max(37rem, 90vh);
	}
</style>
