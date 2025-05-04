<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { Phone, Mail, User, Building, Link2 } from 'lucide-svelte';

	let formData = {
		name: '',
		email: '',
		tel: '',
		business: '',
		website: ''
	};
</script>

<div class="my-2 h-8">
	{#if $page.form?.message}
		<div class:success={$page.status == 200} class:error={$page.status >= 400}>
			{$page.form.message}
		</div>
	{/if}
	{#if $page.form?.submitting}
		<div>Submitting...</div>
	{/if}
</div>

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
				<User class="h-8 w-8 text-emerald-700" />
			</div>
		</label>
		<input
			type="text"
			name="name"
			id="name"
			autocomplete="name"
			placeholder="Name (required)"
			class="border rounded border-emerald-500 w-full px-2"
			bind:value={formData.name}
			required
		/>
	</div>

	<!-- Email input -->
	<div class="flex gap-4">
		<label for="email">
			<div class="h-8 w-8">
				<Mail class="h-8 w-8 text-emerald-700" />
			</div>
		</label>
		<input
			type="email"
			name="email"
			id="email"
			autocomplete="email"
			placeholder="Email (required)"
			class="border rounded border-emerald-500 w-full px-2"
			bind:value={formData.email}
			required
		/>
	</div>

	<!-- Tel input -->
	<div class="flex gap-4">
		<label for="tel">
			<div class="h-8 w-8">
				<Phone class="h-8 w-8 text-emerald-700" />
			</div>
		</label>
		<input
			type="tel"
			name="tel"
			id="tel"
			autocomplete="tel"
			placeholder="Phone"
			class="border rounded border-emerald-500 w-full px-2"
			bind:value={formData.tel}
		/>
	</div>

	<!-- Business input -->
	<div class="flex gap-4">
		<label for="business">
			<div class="h-8 w-8">
				<Building class="h-8 w-8 text-emerald-700" />
			</div>
		</label>
		<input
			type="text"
			name="business"
			id="business"
			class="border rounded border-emerald-500 w-full px-2"
			placeholder="Business Name"
			bind:value={formData.business}
		/>
	</div>

	<!-- Website input -->
	<div class="flex gap-4">
		<label for="website">
			<div class="h-8 w-8">
				<Link2 class="h-8 w-8 text-emerald-700" />
			</div>
		</label>
		<input
			type="text"
			name="website"
			id="website"
			autocomplete="url"
			placeholder="Website URL"
			class="border rounded border-emerald-500 w-full px-2"
			bind:value={formData.website}
		/>
	</div>

	<!-- Error Messages -->
	{#if $page.form?.errors}
		<div class="flex gap-4">
			<div class="h-8 w-8"></div>
			<div class="text-red-500">
				{#each Object.entries($page.form.errors) as [field, error]}
					{error}{@const isLast = field === Object.keys($page.form.errors).pop()}{!isLast
						? ', '
						: ''}
				{/each}
			</div>
		</div>
	{/if}

	<!-- Submit Button -->
	<div class="flex gap-4">
		<div class="h-8 w-8"></div>
		<button class="border border-emerald-500 rounded px-4 font-semibold">Submit</button>
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
