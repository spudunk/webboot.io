<script lang="ts">
	import { enhance } from '$app/forms';
	import { Phone, Mail, User, Building, Link2 } from 'lucide-svelte';

	let { form } = $props();	
</script>

<div class="my-2 h-8">
	{#if form?.message}
		<div class:success={form.status == 200} class:error={form.status >= 400}>
			{form.message}
		</div>
	{/if}
	{#if form?.submitting}
		<div>Submitting...</div>
	{/if}
</div>

<form
	method="POST"
	action="/?/contact"
	id="contactForm"
	class="flex flex-col gap-2 w-full"
	use:enhance
>
	<!-- Name Input -->
	<div class="flex gap-4">
		<label for="name"
			><div class="h-8 w-8">
				<User class="h-8 w-8 text-lime-800" />
			</div>
		</label>
		<input
			type="text"
			name="name"
			id="name"
			autocomplete="name"
			placeholder="Name (required)"
			class="border rounded border-lime-800 w-full px-2"
			value={form?.name ?? ''}
			required
		/>
	</div>

	<!-- Email input -->
	<div class="flex gap-4">
		<label for="email">
			<div class="h-8 w-8">
				<Mail class="h-8 w-8 text-lime-800" />
			</div>
		</label>
		<input
			type="email"
			name="email"
			id="email"
			autocomplete="email"
			placeholder="Email (required)"
			class="border rounded border-lime-800 w-full px-2"
			value={form?.email ?? ''}
			required
		/>
	</div>

	<!-- Tel input -->
	<div class="flex gap-4">
		<label for="tel">
			<div class="h-8 w-8">
				<Phone class="h-8 w-8 text-lime-800" />
			</div>
		</label>
		<input
			type="tel"
			name="tel"
			id="tel"
			autocomplete="tel"
			placeholder="Phone"
			class="border rounded border-lime-800 w-full px-2"
			value={form?.tel ?? ''}
		/>
	</div>

	<!-- Business input -->
	<div class="flex gap-4">
		<label for="business">
			<div class="h-8 w-8">
				<Building class="h-8 w-8 text-lime-800" />
			</div>
		</label>
		<input
			type="text"
			name="business"
			id="business"
			class="border rounded border-lime-800 w-full px-2"
			placeholder="Business Name"
			value={form?.business ?? ''}
		/>
	</div>

	<!-- Website input -->
	<div class="flex gap-4">
		<label for="website">
			<div class="h-8 w-8">
				<Link2 class="h-8 w-8 text-lime-800" />
			</div>
		</label>
		<input
			type="text"
			name="website"
			id="website"
			autocomplete="url"
			placeholder="Website URL"
			class="border rounded border-lime-800 w-full px-2"
			value={form?.website ?? ''}
		/>
	</div>

	<!-- Error Messages -->
	{#if form?.errors}
		<div class="flex gap-4">
			<div class="h-8 w-8"></div>
			<div class="text-red-800">
				{#each Object.entries(form.errors) as [field, error]}
					{error}{@const isLast = field === Object.keys(form.errors).pop()}{!isLast
						? ', '
						: ''}
				{/each}
			</div>
		</div>
	{/if}

	<!-- Submit Button -->
	<div class="flex gap-4">
		<div class="h-8 w-8"></div>
		<button class="border border-lime-800 rounded px-4 font-semibold">Submit</button>
	</div>
</form>

<style lang="postcss">
	/* Form Messages CSS */
	.error {
		@apply text-red-800;
	}
	.success {
		@apply text-green-800;
	}

	/* Form Input CSS */
	input:focus {
		@apply outline outline-amber-800 border-amber-800;
	}
	button:focus {
		@apply outline outline-amber-800 border-amber-800;
	}
</style>
