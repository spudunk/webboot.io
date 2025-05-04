<script lang="ts">
	import { menuToggled } from '$lib/stores';

	interface Props {
		class?: string;
		toggled: boolean;
	}

	let { class: className, toggled }: Props = $props();
	const line = // horizontal line div of button
		'bg-cyan-50 w-7 sm:w-9 h-[.2rem]  sm:h-1 my-[.2rem] sm:my-1 rounded-full transition ease-in-out transform duration-300';
</script>

<button
	class={`${className} flex flex-col h-12 w-12 rounded justify-center items-center group`}
	aria-label="navigation menu button"
	onclick={() => ($menuToggled = !$menuToggled)}
>
	<div
		class={`${line} ${
			toggled
				? 'rotate-45 translate-y-[.6rem] sm:translate-y-3 opacity-80 group-hover:opacity-100'
				: 'opacity-80 group-hover:opacity-100'
		}`}
	></div>
	<div
		class={`${line} ${toggled ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'} translate-x-1`}
	></div>
	<div
		class={`${line} ${
			toggled
				? '-rotate-45 -translate-y-[.6rem] sm:-translate-y-3 opacity-80 group-hover:opacity-100'
				: 'opacity-80 group-hover:opacity-100'
		}`}
	></div>
</button>
