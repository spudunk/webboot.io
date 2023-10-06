<script lang="ts">
	import { page } from '$app/stores';

	import { Hero, ServiceCard, SEO } from '$lib/components';

	import { Gauge, Brush, Phone, Mail, User, Building, Link2 } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	// export let form: ActionData;
	export let data: PageData;

	// Client API:
	const { form, message, errors, constraints, enhance } = superForm(data.form, {});
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
	<h2 class="">How We Work</h2>
	<p class="text-xl mt-4">
		Our process makes building your online presence as smooth as possible. For questions about our
		process feel free to reach out.
	</p>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
		<ServiceCard heading="Web Success Guide" num="1">
			<p>
				Everything you need to build your website or web app the most painless and effective way
				possible. It’s the first step to making your business look great online while avoiding
				common pitfalls. We’ll help you complete this before taking on your web design and custom
				app development project.
			</p>
		</ServiceCard>
		<ServiceCard heading="Web App Development" num="2">
			<p>
				We design and build <i>fast</i> custom web apps for businesses to achieve their specific goals.
				It starts with a website home page then grows to your needs. We provide the source code for your
				web app so you maintain complete control.
			</p>
		</ServiceCard>
		<ServiceCard heading="Management Services" num="3">
			<p>
				Optionally, we can host, manage, and update web apps we build for a very fair price. We’ll
				provide hosting, analytics, form delivery, and any other services your app requires in a
				single subscription.
			</p>
		</ServiceCard>
		<ServiceCard heading="Promotion Services" num="4">
			<p>Expand your reach online and grow your user base with our premium promotion services.</p>
			<p>We offer:</p>
			<ul class="list-inside list-disc ml-2">
				<li>SEO</li>
				<li>copywriting</li>
				<li>Social Media content creation</li>
				<li>advertising on Meta and Google</li>
			</ul>
		</ServiceCard>
	</div>
</section>

<section class="container mt-16 text-lg" id="why">
	<h2 class="">Why Custom Web-Apps</h2>
	<div class="grid gap-8 mt-8">
		<div class="grid md:grid-cols-5 items-center gap-8">
			<Gauge class="hidden md:block h-24 w-24 text-cyan-600 justify-self-center" />
			<div class="col-span-4">
				<h3 class="">Performance</h3>
				<p>
					A study by Deloitte and 55 called <a
						href="https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf"
						target="_blank">Milliseconds make millions</a
					>
					found that a <strong>0.1s</strong> speed improvement on sites increased:
				</p>
				<ul>
					<li>Contact Us page visits over 20%</li>
					<li>booking rates by 10%</li>
					<li>We build Web Apps that are highly performant and even offline capable.</li>
				</ul>
			</div>
		</div>
		<div class="grid md:grid-cols-5 items-center gap-8">
			<Brush class="hidden md:block h-24 w-24 text-cyan-600 justify-self-center" />

			<div class="col-span-4">
				<h3 class="">Design</h3>
				<p>
					A good design should present well on any device. According to Google, <a
						href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-web-traffic-statistics/"
						target="_blank">over 50% of web traffic comes from mobile</a
					>
					and
					<a
						href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/what-users-want-most-from-mobile-sites-today/"
						target="_blank"
					>
						having a good mobile site increases user conversion and retention</a
					>.
				</p>

				<p>
					We start each design focusing on the user’s conversion journey.<br />
					Our design decisions are based on data, like
					<a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank"
						>research from Stanford</a
					>
					and
					<a
						href="https://landing.adobe.com/en/na/products/creative-cloud/264699-state-of-content/index.html#Sugar-Rush"
						target="_blank">suggestions from Adobe</a
					>.
				</p>
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
		<!-- <SuperDebug data={$form} /> -->
		<div class="my-2 h-8 ">
			{#if $message}
				<div class:success={$page.status == 200} class:error={$page.status >= 400}>{$message}</div>
			{/if}
		</div>

		<form method="POST" use:enhance id="contactForm" class="flex flex-col gap-2 w-full">
			<!-- Name Input -->
			<div class="flex gap-4">
				<label for="name"
					><div class="h-8 w-8">
						<User class="h-8 w-8 text-cyan-700" />
					</div>
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Name (required)"
					class="border rounded border-cyan-500 w-full px-2"
					bind:value={$form.name}
					{...$constraints.name}
				/>
			</div>
			{#if $errors.name}<span class="text-red-500">{$errors.name}</span>{/if}

			<!-- Email input -->
			<div class="flex gap-4">
				<label for="email">
					<div class="h-8 w-8">
						<Mail class="h-8 w-8 text-cyan-700" />
					</div>
				</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email (required)"
					class="border rounded border-cyan-500 w-full px-2"
					bind:value={$form.email}
					{...$constraints.email}
				/>
			</div>
			{#if $errors.email}<span class="text-red-500">{$errors.email}</span>{/if}

			<!-- Tel input -->
			<div class="flex gap-4">
				<label for="tel">
					<div class="h-8 w-8">
						<Phone class="h-8 w-8 text-cyan-700" />
					</div>
				</label>
				<input
					type="tel"
					name="tel"
					id="tel"
					placeholder="Phone"
					class="border rounded border-cyan-500 w-full px-2"
					bind:value={$form.tel}
					{...$constraints.tel}
				/>
			</div>
			{#if $errors.tel}<span class="text-red-500">{$errors.tel}</span>{/if}

			<!-- Business input -->
			<div class="flex gap-4">
				<label for="business">
					<div class="h-8 w-8">
						<Building class="h-8 w-8 text-cyan-700" />
					</div>
				</label>
				<input
					type="text"
					name="business"
					id="business"
					class="border rounded border-cyan-500 w-full px-2"
					placeholder="Business Name"
					bind:value={$form.business}
					{...$constraints.business}
				/>
			</div>
			{#if $errors.business}<span class="text-red-500">{$errors.business}</span>{/if}

			<!-- Website input -->
			<div class="flex gap-4">
				<label for="website">
					<div class="h-8 w-8">
						<Link2 class="h-8 w-8 text-cyan-700" />
					</div>
				</label>
				<input
					type="text"
					name="website"
					id="website"
					placeholder="Website URL"
					class="border rounded border-cyan-500 w-full px-2"
					bind:value={$form.website}
					{...$constraints.website}
				/>
			</div>
			{#if $errors.website}<span class="text-red-500">{$errors.website}</span>{/if}

			<!-- Submit Button -->
			<div class="flex gap-4">
				<div class="h-8 w-8" />
				<button class="border border-cyan-500 rounded px-4 font-semibold">Submit</button>
			</div>
		</form>
	</div>
</section>

<style lang="postcss">
	.error {
		@apply text-red-700;
	}
	.success {
		@apply text-green-700;
	}
	input:focus {
		@apply outline outline-amber-500 border-amber-500;
	}
	button:focus {
		@apply outline outline-amber-500 border-amber-500;
	}
	p {
		@apply max-w-prose;
	}
	h2 {
		@apply text-3xl md:text-4xl lg:text-5xl font-bold;
	}
	h3 {
		@apply text-xl md:text-2xl lg:text-3xl mt-4 mb-2 font-bold;
	}
	a {
		@apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
	}
</style>
