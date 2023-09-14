<script>
	import { Header, Footer, Contact, Hero } from '$lib/components';
	import GridCard from '$lib/components/GridCard.svelte';
	import { Skull } from 'lucide-svelte';
	import { onMount } from 'svelte';

	onMount(() => {});
</script>

<Header class="bg-cyan-900/[.90] fixed z-10 top-0 left-0 w-full" />

<main>
	<Hero />

	<section class="container mt-12" id="about">
		<h2 class="text-3xl md:text-5xl font-bold">About Us</h2>
		<p class="max-w-prose text-lg md:text-2xl mt-8">
			Welcome to webboot! We are on a mission to level the playing field for businesses we care
			about. In this digital age small businesses often struggle to compete against corporate
			giants. We use modern tools and strategies to create and promote great web apps that drive
			results. We are here to champion the businesses we care about, to help them take their place
			in the online landscape.
		</p>
	</section>

	<section class="container mt-20" id="services">
		<h2 class="text-4xl font-bold">How We Work</h2>
		<div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
			<GridCard heading="Web Success Guide" num="1">
				<p>
					Everything you need to build your website or web app the most painless and effective way
					possible. It’s the first step to making your business look great online while avoiding
					common pitfalls. We’ll help you complete this before taking on your web design and custom
					app development project.
				</p>
			</GridCard>
			<GridCard heading="Web App Development" num="2">
				<p>
					We design and build custom web apps for businesses to achieve their specific goals. This
					starts with a website home page then grows to your needs. We provide the source code for
					your web app so you maintain complete control.
				</p>
			</GridCard>
			<GridCard heading="Management Services" num="3">
				<p>
					We can host, manage, and update web apps we build for a very fair price. We’ll provide
					hosting, analytics, form delivery, and any other services your app requires in a single
					subscription.
				</p>
			</GridCard>
			<GridCard heading="Promotion Services" num="4">
				<p>Expand your reach online and grow your user base with our premium promotion services.</p>
				<p>We offer:</p>
				<ul class="list-inside list-disc">
					<li>SEO</li>
					<li>copywriting</li>
					<li>Social Media content creation</li>
					<li>advertising on Meta and Google</li>
				</ul>
			</GridCard>
		</div>
	</section>

	<section class="container mt-8" id="why">
		<h2 class="text-3xl">Why Custom Web-Apps</h2>
		<h3 class="text-xl mt-4">Performance</h3>
		<p>
			A study by Deloitte and 55 called <a
				href="https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf"
				>Milliseconds make millions</a
			>
			found that a <strong>0.1s</strong> speed improvement on sites increased:
		</p>
		<ul>
			<li>Contact Us page visits over 20%</li>
			<li>booking rates by 10%</li>
			<li>We build Web Apps that are highly performant and even offline capable.</li>
		</ul>
		<h3 class="text-xl mt-4">Design</h3>
		<p>
			A good design should present well on any device. According to Google, <a
				href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-web-traffic-statistics/"
				>over 50% of web traffic comes from mobile</a
			>
			and
			<a
				href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/what-users-want-most-from-mobile-sites-today/"
			>
				having a good mobile site increases user conversion and retention</a
			>.
		</p>

		<p>
			We start each design focusing on the user’s conversion journey.<br />
			Our design decisions are based on data, like
			<a href="https://credibility.stanford.edu/guidelines/index.html">research from Stanford</a>
			and
			<a
				href="https://landing.adobe.com/en/na/products/creative-cloud/264699-state-of-content/index.html#Sugar-Rush"
				>suggestions from Adobe</a
			>.
		</p>
	</section>
	<Skull size="2em" strokeWidth="2" class="text-red-400" />

	<Contact class="container mt-8" />
</main>

<Footer />

<style lang="postcss">
	p {
		@apply max-w-prose;
	}
	/* h2 {
		font-family: 'Alkatra Variable', sans-serif;
	} */
</style>
