<script>
  import { menuToggled, toggleMenu } from "$lib/stores";
  import { navigating } from "$app/stores";
	let toggled = false;
  menuToggled.subscribe((v) => {
    toggled = v;
  });
  const line = 'bg-cyan-50 w-7 sm:w-9 h-[.2rem]  sm:h-1 my-[.2rem] sm:my-1 rounded-full transition ease transform duration-300'
  $: if($navigating) {
    toggleMenu(false)
  }
</script>


<button class={`flex flex-col h-12 w-12 rounded justify-center items-center group ${$$props.class} `} on:click={toggleMenu} >
  <div class={`${line} ${toggled ? 'rotate-45 translate-y-[.6rem] sm:translate-y-3 opacity-80 group-hover:opacity-100' : 'opacity-80 group-hover:opacity-100'}`} />
  <div class={`${line} ${toggled ? 'opacity-0' : 'opacity-80 group-hover:opacity-100' }`} />
  <div class={`${line} ${toggled ? '-rotate-45 -translate-y-[.6rem] sm:-translate-y-3 opacity-80 group-hover:opacity-100' : 'opacity-80 group-hover:opacity-100' }`} />
</button>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="overlay" class={`${toggled?'fixed':'hidden'} -z-50 w-screen h-screen bg-cyan-900 opacity-60 top-0 left-0 ease-in-out transition-opacity duration-300`} on:click={toggleMenu} on:keyup={toggleMenu}/>

<nav id="sidebar" class={`${toggled?'translate-x-0':'translate-x-full'} bg-cyan-900 opacity-90 transform top-0 right-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 -z-30`}>
  <ul class="flex flex-col gap-2 mt-20 mx-4 text-xl md:text-2xl text-cyan-50 font-bold">
    <li><a href="/" >Home</a></li>
    <li><a href="/articles" >Articles</a></li>
  </ul>

</nav>

