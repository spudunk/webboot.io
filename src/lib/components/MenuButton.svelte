<script>
	import { menuToggled, toggleMenu } from '$lib/stores';
	const line = // horizontal line div of button
		'bg-cyan-50 w-7 sm:w-9 h-[.2rem]  sm:h-1 my-[.2rem] sm:my-1 rounded-full transition ease-in-out transform duration-300';

</script>

<button
	class={`flex flex-col h-12 w-12 rounded justify-center items-center group ${$$props.class} `}
	aria-label="navigation menu button"
	on:click={toggleMenu}
>
	<div
		class={`${line} ${
			$menuToggled
				? 'rotate-45 translate-y-[.6rem] sm:translate-y-3 opacity-80 group-hover:opacity-100'
				: 'opacity-80 group-hover:opacity-100'
		}`}
	/>
	<div class={`${line} ${$menuToggled ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'} translate-x-1` } />
	<div
		class={`${line} ${
			$menuToggled
				? '-rotate-45 -translate-y-[.6rem] sm:-translate-y-3 opacity-80 group-hover:opacity-100'
				: 'opacity-80 group-hover:opacity-100'
		}`}
	/>
</button>
