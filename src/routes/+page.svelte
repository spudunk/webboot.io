<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import PfCard from '$lib/components/PfCard.svelte';
	import { Wrench, Gauge, Brush } from 'lucide-svelte';

	let { form } = $props();
</script>

<SEO
	img="https://webboot.io/og/hero.png"
	title="Custom Web Apps and Digital Marketing - webboot.io"
/>

<Hero />

<!-- ABOUT -->
<section class="container mt-12" id="about">
	<h2 class="">About Us</h2>
	<p class="max-w-prose text-lg md:text-2xl mt-8">
		I have been building business web applications for 10 years. The last 3 years I've been building
		marketing/recruiting websites, email, and text marketing platforms.
	</p>
	<p class="max-w-prose text-lg md:text-2xl mt-8">
		I have a small remote team that works together to deliver incredible marketing tools. We enhance
		parts our workflow with AI tools, but everything we build is designed and written by humans.
	</p>
	<p></p>
</section>

<!-- PROCESS -->
<section class="container mt-20" id="services">
	<h2 class="">Process</h2>
	<p class="text-xl mt-4">
		Our goal is to convert your advertising traffic from all channels into the most profitable
		transactions for you. We start with an objective oriented design, attach it to a custom
		marketing platform, then optimize the conversion process with data analytics and split testing.
	</p>
	<p class="text-xl mt-4">
		For questions feel free to <a href="#contact" class="link">reach out</a>.
	</p>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
		<ServiceCard heading="Research and Planning" num="1">
			<p>
				We first plan your entire site and gather the media that will be required. This is the most
				involved part for our clients.
			</p>
			<p>We'll deliver a complete package that contains everything needed to design the app.</p>
		</ServiceCard>
		<ServiceCard heading="Web App Development" num="2">
			<p>
				We design and build a custom web app to achieve your specific goals. It's built in stages as
				your grow and your needs change.
			</p>
			<p>You get the source code and lifetime license so you have complete control.</p>
		</ServiceCard>
		<ServiceCard heading="Promotion " num="3">
			<p>
				Build your own user-base and marketing channels. Get real user feedback to drive product
				decisions.
			</p>
		</ServiceCard>
		<ServiceCard heading="Refinement " num="4">
			<p>
				We'll host your application, provide analytics, email and text messaging services, and
				handle split testing to maximize targeted conversions.
			</p>
		</ServiceCard>
		<div class="sm:col-span-2 bg-neutral-100 pb-2 rounded">
			<h3 class="bg-lime-700 sm:bg-lime-600 px-4 py-2 text-white rounded-t" style="margin-top: 0;">
				Call-In Restaurant Owners!
			</h3>
			<p class="text-lg px-4" style="max-width: 80ch;">
				I have a pre-built menu website with all the features you need that can quickly be
				customized.
			</p>
			<p class="text-lg font-semibold px-4">
				I can have a demo up and ready for you in a few days.
			</p>
			<p class="text-lg font-bold px-4">The value is unbeatable.</p>
			<a class="m-4 btn" href="/#contact">Send a Message</a>
		</div>
	</div>
</section>

<!-- PORTFOLIO -->
<section class="bg-neutral-200 pt-8 pb-16 mt-16 text-lg" id="portfolio">
	<div class="container">
		<h2>Our Work</h2>
		<div class="grid gap-8 mt-8 md:grid-cols-2">
			<PfCard link="https://marksmanexteriors.com?ref=webboot.io" title="Marksman Exteriors">
				<enhanced:img
					src="$lib/portfolio/marksmanexteriors.com_.png"
					alt="screenshot of Marksman Exteriors website"
				/>
			</PfCard>
			<PfCard link="https://actc.pro?ref=webboot.io" title="A Custom Touch Construction">
				<enhanced:img
					src="$lib/portfolio/actc.pro_.png"
					alt="screenshot of A Custom Touch Construction website"
				/>
			</PfCard>
			<PfCard title="Full Draw Electric" link="https://fulldraw-electric.com?ref=webboot.io">
				<enhanced:img
					src="$lib/portfolio/fulldraw2.web.app_.png"
					alt="screenshot of Full Draw Electric website"
				/>
			</PfCard>
			<PfCard title="Walking CJ Ranch" link="https://walkingcj.com?ref=webboot.io">
				<enhanced:img
					src="$lib/portfolio/walkingcj.com_.png"
					alt="screenshot of Walking CJ Ranch website"
				/>
			</PfCard>
			<PfCard title="Eagans Diners" link="https://eaganscafe.pages.dev">
				<enhanced:img
					src="$lib/portfolio/eagansdiner.com_.png"
					alt="screenshot of Eagans Diner website"
				/>
			</PfCard>
			<PfCard title="Gods Closet Too" link="https://godsclosettoo.org/?ref=webboot.io">
				<enhanced:img
					src="$lib/portfolio/godsclosettoo.org_.png"
					alt="screenshot of God\'s Closet Too website"
				/>
			</PfCard>
		</div>
	</div>
</section>

{#if false}
	<!-- CREDIBILITY -->
	<section class="container mt-16 text-lg" id="why">
		<h2 class="">Why Custom Web-Apps</h2>
		<div class="grid gap-8 mt-8">
			<div class="grid md:grid-cols-5 items-center gap-8">
				<div class="col-span-4">
					<h3 class="flex gap-4 items-center">
						<Gauge class="hidden md:inline-block h-14 w-14 text-emerald-600 justify-self-center " />
						Performance
					</h3>
					<p>
						A study by <i>Deloitte and 55</i> called
						<a
							class="link"
							href="https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf"
							target="_blank">Milliseconds Make Millions</a
						>
						found that a <strong>0.1s</strong> speed improvement on sites increased:
					</p>
					<ul class="list-inside list-disc ml-2">
						<li>Contact Us page visits over 20%</li>
						<li>booking rates by 10%</li>
					</ul>
					<p class="mt-4">We build web apps that are highly performant and even offline capable.</p>
				</div>
			</div>
			<!-- Design -->
			<div class="grid md:grid-cols-5 items-center gap-8">
				<div class="col-span-4">
					<h3 class="flex gap-4 items-center">
						<Brush class="hidden md:inline-block h-14 w-14 text-emerald-600 justify-self-center " />
						Design
					</h3>
					<p>
						Good designs present well on any device. According to Google, <a
							href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-web-traffic-statistics/"
							target="_blank">over 50% of web traffic comes from mobile</a
						>
						and
						<a
							href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/what-users-want-most-from-mobile-sites-today/"
							target="_blank"
							class="link"
						>
							having a good mobile site increases user conversion and retention</a
						>.
					</p>

					<p>
						We start each design focusing on the user's conversion journey.<br />
						Our design decisions are based on data, like
						<a
							href="https://credibility.stanford.edu/guidelines/index.html"
							target="_blank"
							class="link">research from Stanford</a
						>
						and
						<a
							href="https://landing.adobe.com/en/na/products/creative-cloud/264699-state-of-content/index.html#Sugar-Rush"
							target="_blank"
							class="link">suggestions from Adobe</a
						>.
					</p>
				</div>
			</div>
			<!-- Control -->
			<div class="grid md:grid-cols-5 items-center gap-8">
				<div class="col-span-4">
					<h3 class="flex gap-4 items-center">
						<Wrench
							class="hidden md:inline-block h-14 w-14 text-emerald-600 justify-self-center "
						/>
						Control
					</h3>
					<p>Controlling your own app code allows you to</p>
					<ul class="list-inside list-disc">
						<li>make any changes you want in a simple way</li>
						<li>take your app to any platform</li>
						<li>let multiple agencies collaborate on development</li>
						<li>integrate and automate business processes</li>
					</ul>
					<!-- TODO: Implement control panel -->
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- CONTACT -->
<section class="container mt-16 scroll-m-14" id="contact">
	<h2>Contact</h2>
	<p class="mt-8 text-xl">
		If you'd like to work with us or need more information, feel free to reach out by email or
		phone. Or, leave your info below and we'll reach out within a few business days. We won't share
		your information or send spam.
	</p>

	<div class="my-2 md:ml-6 md:w-2/3 lg:w-1/2 text-lg">
		<ContactForm {form} />
	</div>
</section>

<style lang="postcss">
	/* Page Text CSS */
	p {
		@apply max-w-prose;
	}
	h2 {
		@apply text-3xl md:text-4xl lg:text-5xl font-bold;
	}
	h3 {
		@apply text-xl md:text-2xl lg:text-3xl mt-4 mb-2 font-bold;
	}
</style>
