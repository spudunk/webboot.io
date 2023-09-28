<script>
	import { toggleMenu } from '$lib/stores';
	const line =
		'bg-cyan-50 w-7 sm:w-9 h-[.2rem]  sm:h-1 my-[.2rem] sm:my-1 rounded-full transition ease transform duration-300';
	export let toggled = false;

</script>

<button
	class={`flex flex-col h-12 w-12 rounded justify-center items-center group ${$$props.class} `}
	aria-label="navigation menu button"
	on:click={toggleMenu}
>
	<div
		class={`${line} ${
			toggled
				? 'rotate-45 translate-y-[.6rem] sm:translate-y-3 opacity-80 group-hover:opacity-100'
				: 'opacity-80 group-hover:opacity-100'
		}`}
	/>
	<div class={`${line} ${toggled ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'}`} />
	<div
		class={`${line} ${
			toggled
				? '-rotate-45 -translate-y-[.6rem] sm:-translate-y-3 opacity-80 group-hover:opacity-100'
				: 'opacity-80 group-hover:opacity-100'
		}`}
	/>
</button>
