<script>
	import { menuToggled, toggleMenu } from '$lib/stores';
	import { navigating } from '$app/stores';
	export let toggled = false;
  export let padMenu = false;
	const line =
		'bg-cyan-50 w-7 sm:w-9 h-[.2rem]  sm:h-1 my-[.2rem] sm:my-1 rounded-full transition ease transform duration-300';
	$: if ($navigating) {
		menuToggled.set(false);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	id="overlay"
	class={`${
		toggled ? 'fixed' : 'hidden'
	} -z-50 w-screen h-screen bg-cyan-900 opacity-60 top-0 left-0`}
	on:click={toggleMenu}
	on:keyup={toggleMenu}
/>

<nav
	id="sidebar"
	class={`${
		toggled ? 'translate-x-0' : 'translate-x-full'
	} bg-cyan-900 opacity-90 transform top-0 right-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 -z-30`}
>
	<ul class={`${padMenu ? "mt-20" : "mt-16" } mx-4 text-xl md:text-2xl text-cyan-50 font-bold ease-in-out transition-all duration-300`}>
		<li><a class="inline-block py-1" href="/">Home</a></li>
		<li><a class="inline-block py-1" href="/articles">Articles</a></li>
		<li><a class="inline-block py-1" href="/#contact" on:click={()=> menuToggled.set(false)}>Contact</a></li>
	</ul>
</nav>
