<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import { Phone, Mail, User, Building, Link2 } from 'lucide-svelte';
	// import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	import type { SuperValidated } from 'sveltekit-superforms';
	import type { ContactSchema } from '$lib/schemas';

	export let data: SuperValidated<ContactSchema>;
	const { form, message, errors, submitting, delayed, timeout, constraints, enhance } = superForm(
		data,
		{
			delayMs: 500,
			timeoutMs: 5000
		}
	);
</script>

<!-- <SuperDebug data={$form} /> -->

<div class="my-2 h-8">
	{#if $message}
		<div class:success={$page.status == 200} class:error={$page.status >= 400}>{$message}</div>
	{/if}
	{#if $delayed} <div>a few more seconds...</div> {/if}
	{#if $submitting} <div>Submitting...</div> {/if}
</div>

<!-- CONTACT FORM  -->
<form
	method="POST"
	action="/?/contact"
	use:enhance
	id="contactForm"
	class="flex flex-col gap-2 w-full"
>
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
			aria-invalid={$errors.name ? 'true' : undefined}
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
			aria-invalid={$errors.email ? 'true' : undefined}
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
			aria-invalid={$errors.tel ? 'true' : undefined}
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
			aria-invalid={$errors.business ? 'true' : undefined}
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
			aria-invalid={$errors.website ? 'true' : undefined}
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

<style lang="postcss">
	/* Form Messages CSS */
	.error {
		@apply text-red-700;
	}
	.success {
		@apply text-green-700;
	}

	/* Form Input CSS */
	input:focus {
		@apply outline outline-amber-500 border-amber-500;
	}
	button:focus {
		@apply outline outline-amber-500 border-amber-500;
	}

</style>
