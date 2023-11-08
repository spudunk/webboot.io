<script lang="ts">
	import { Hero, ServiceCard, SEO, ContactForm } from '$lib/components';
	import { Wrench, Gauge, Brush } from 'lucide-svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<SEO img="https://webboot.io/og/hero.png" />

<Hero />

<section class="container mt-12" id="about">
	<h2 class="">About Us</h2>
	<p class="max-w-prose text-lg md:text-2xl mt-8">
		Welcome to webboot! We are on a mission to level the playing field for businesses we care about.
		In this digital age small businesses often struggle to compete against corporate giants. We use
		modern tools and strategies to create and promote great web apps that drive results. We are here
		to champion the businesses we care about, to help them take their place in the online landscape.
	</p>
</section>

<section class="container mt-20" id="services">
	<h2 class="">Our Process</h2>
	<p class="text-xl mt-4">
		The way we work has been refined to make building your online presence as smooth as possible
		without comprimising on the effectiveness of your marketing as a whole.
	</p>
	<p class="text-xl mt-4">
		For questions about our process check out <a href="/process" class="link"
			>How Our Process Works</a
		>
		or feel free to <a href="#contact" class="link">reach out</a>.
	</p>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
		<ServiceCard heading="Research and Planning" num="1">
			<p>
				Before design we first plan your entire site, write the copy, and gather the media that will
				be required.
			</p>
			<p>
				We'll deliver a complete plan as a PDF that contains everything needed to start design of
				the app including copy, keywords, ad and SEO data.
			</p>
			<!-- 				
			Everything you need to build your website or web app the most painless and effective way
			possible. It’s the first step to making your business look great online while avoiding
			common pitfalls. We’ll help you complete this before taking on your web design and custom
			app development project. -->
		</ServiceCard>
		<ServiceCard heading="Web App Development" num="2">
			<p>
				We design and build <i>fast</i> custom web apps for businesses to achieve their specific goals.
				It starts with a website home page then grows to your needs.
			</p>
			<p>We provide the source code for your web app so you maintain complete control.</p>
		</ServiceCard>
		<ServiceCard heading="Management " num="3">
			<p>Optionally, we can host, manage, and update web apps we build for a very fair price.</p>
			<p>
				We’ll provide hosting, analytics, form delivery, and any other services your app requires in
				a single subscription.
			</p>
		</ServiceCard>
		<ServiceCard heading="Promotion " num="4">
			<p>Expand your reach online and grow your user base with our premium promotion services.</p>
			<p>We offer:</p>
			<ul class="list-inside list-disc ml-2">
				<li>SEO</li>
				<li>copywriting</li>
				<li>Social Media content creation</li>
				<li>advertising on Meta and Google</li>
			</ul>
		</ServiceCard>
		<div class="sm:col-span-2 bg-amber-100 pb-2 rounded">
			<h3
				class="bg-amber-700 sm:bg-amber-600 px-4 py-2 text-white rounded-t"
				style="margin-top: 0;"
			>
				Website and Marketing Blueprint
			</h3>
			<p class="text-lg px-4" style="max-width: 80ch;">
				Want to save money on your development? Want to use our process and work with someone else?
			</p>
			<p class="text-lg px-4 mt-2" style="max-width: 80ch;">
				Our full web development blueprint will guide you through our entire process, from research
				and planning, to creating a design and development breifs, and the basics of DIY
				maintenance.
			</p>
			<p class="text-lg px-4 mt-2 font-bold" style="max-width: 80ch;">100% Money Back Guarantee</p>
			<a class="m-4 btn" href="guide">More About our Blueprint</a>
		</div>
	</div>
</section>

<section class="container mt-16 text-lg" id="why">
	<h2 class="">Why Custom Web-Apps</h2>
	<div class="grid gap-8 mt-8">
		<div class="grid md:grid-cols-5 items-center gap-8">
			<div class="col-span-4">
				<h3 class="flex gap-4 items-center">
					<Gauge class="hidden md:inline-block h-14 w-14 text-cyan-600 justify-self-center " />
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
					<Brush class="hidden md:inline-block h-14 w-14 text-cyan-600 justify-self-center " />
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
					We start each design focusing on the user’s conversion journey.<br />
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
					<Wrench class="hidden md:inline-block h-14 w-14 text-cyan-600 justify-self-center " />
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

<section class="container mt-16 scroll-m-14" id="contact">
	<h2>Contact</h2>
	<p class="mt-8 text-xl">
		If you’d like to work with us or need more information, feel free to reach out by email or
		phone. Or, leave your info below and we’ll reach out within a few business days. We won’t share
		your information or send spam.
	</p>

	<div class="my-2 md:ml-6 md:w-2/3 lg:w-1/2 text-lg">
		<ContactForm data={data.contactForm} />
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
