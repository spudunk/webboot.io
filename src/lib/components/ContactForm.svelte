<script lang="ts">
	import { Phone, Mail, User, Building, Link2 } from 'lucide-svelte';
	import type { ActionData } from '../../routes/$types';
	import { enhance } from '$app/forms';
	// import { error } from '@sveltejs/kit';
	export let form: ActionData;
</script>

<form
	use:enhance
	method="POST"
	id="contactForm"
	on:submit={(e) => e.preventDefault}
	class="flex flex-col gap-2 w-full"
>
	{#if form?.emailMissing}<p class="text-red-600">The email field is required</p>{/if}
	{#if form?.nameMissing}<p class="text-red-600">The name field is required</p>{/if}
	{#if form?.error}<p class="text-red-600">{form.error}</p>{/if}
	{#if form?.success}
		<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->
		<p class="text-green-600">Successfully submitted!</p>
	{/if}
	<label for="email" class="flex gap-4">
		<div class="h-8 w-8">
			<Mail class="h-8 w-8 text-cyan-700" />
		</div>
		<input
			required
			aria-required="true"
			type="email"
			autocomplete="email"
			placeholder="Email (required)"
			aria-label="Email (required)"
			id="email"
			name="email"
			class="border rounded border-cyan-500 w-full px-2"
		/>
	</label>
	<label for="name" class="flex gap-4">
		<div class="h-8 w-8">
			<User class="h-8 w-8 text-cyan-700" />
		</div>
		<input
			required
			aria-required="true"
			type="text"
			autocomplete="name"
			placeholder="Name (required)"
			aria-label="Name (required)"
			id="name"
			name="name"
			class="border rounded border-cyan-500 w-full px-2"
		/>
	</label>
	<label for="tel" class="flex gap-4">
		<div class="h-8 w-8">
			<Phone class="h-8 w-8 text-cyan-700" />
		</div>
		<input
			type="phone"
			id="tel"
			name="tel"
			autocomplete="tel"
			placeholder="Phone"
			aria-label="Phone"
			class="border rounded border-cyan-500 w-full px-2"
		/>
	</label>
	<label for="business" class="flex gap-4">
		<div class="h-8 w-8">
			<Building class="h-8 w-8 text-cyan-700" />
		</div>
		<input
			type="text"
			id="business"
			name="business"
			placeholder="Business Name"
			aria-label="Business Name"
			class="border rounded border-cyan-500 w-full px-2"
		/>
	</label>
	<label for="website" class="flex gap-4">
		<div class="h-8 w-8">
			<Link2 class="h-8 w-8 text-cyan-700" />
		</div>
		<input
			type="text"
			id="website"
			name="website"
			placeholder="Website"
			aria-label="Website"
			class="border rounded border-cyan-500 w-full px-2"
		/>
	</label>
	<div class="flex gap-4">
		<div class="h-8 w-8 aspect-square" />
		<button type="submit" class="border border-cyan-500 rounded px-4 font-semibold">Submit</button>
	</div>
</form>

<style lang="postcss">
	input:focus {
		@apply outline outline-amber-500 border-amber-500;
	}
	button:focus {
		@apply outline outline-amber-500 border-amber-500;
	}
</style>
