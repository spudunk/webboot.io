<script lang="ts">
	import { run } from 'svelte/legacy';

	import { menuToggled, toggleMenu } from '$lib/stores';
	import { navigating } from '$app/stores';

	interface Props {
		padMenu?: boolean;
	}

	let { padMenu = false }: Props = $props();
	run(() => {
		if ($navigating) {
			menuToggled.set(false);
		}
	});
</script>

<button
	id="overlay"
	class={`${
		$menuToggled ? 'h-screen opacity-60' : 'h-0 opacity-0'
	} fixed -z-50 w-screen bg-cyan-900 top-0 left-0 transition-opacity ease-in duration-300`}
	onclick={toggleMenu}
></button>

<nav
	id="sidebar"
	class={`${
		$menuToggled ? 'translate-x-0' : 'translate-x-full'
	} bg-cyan-900 opacity-90 transform top-0 right-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 -z-30`}
>
	<ul
		class={`${
			padMenu ? 'mt-20' : 'mt-16'
		} flex flex-col mx-4 text-xl md:text-2xl text-cyan-50 font-bold ease-in-out transition-all duration-300 list-none`}
	>
		<li>
			<a
				class="inline-block py-1 w-full opacity-80 hover:opacity-100 transition ease-in duration-100"
				href="/"
			>
				Home
			</a>
		</li>
		<li>
			<a
				class="inline-block py-1 w-full opacity-80 hover:opacity-100 transition ease-in duration-100"
				href="/articles"
			>
				Articles
			</a>
		</li>
		<li>
			<a
				class="inline-block py-1 w-full opacity-80 hover:opacity-100 transition ease-in duration-100"
				href="/#contact"
				onclick={toggleMenu}
			>
				Contact
			</a>
		</li>
	</ul>
</nav>
