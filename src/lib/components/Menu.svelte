<script lang="ts">
	import { menuToggled, toggleMenu } from '$lib/stores';
	import { navigating } from '$app/state';
	import { onMount } from 'svelte';

	let { isExpanded = false } = $props();

	let menuElement: HTMLElement;
	let firstFocusableElement: HTMLElement;
	let lastFocusableElement: HTMLElement;
	let previousActiveElement: HTMLElement | null = null;

	function handleKeydown(e: KeyboardEvent) {
		if (!$menuToggled) return;

		if (e.key === 'Escape') {
			toggleMenu();
			return;
		}

		if (e.key === 'Tab') {
			if (!e.shiftKey && document.activeElement === lastFocusableElement) {
				e.preventDefault();
				firstFocusableElement.focus();
			} else if (e.shiftKey && document.activeElement === firstFocusableElement) {
				e.preventDefault();
				lastFocusableElement.focus();
			}
		}
	}

	onMount(() => {
		// Store all focusable elements
		const focusableElements = menuElement.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		);
		firstFocusableElement = focusableElements[0] as HTMLElement;
		lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;
	});

	$effect(() => {
		if (navigating) {
			menuToggled.set(false);
		}
	});

	$effect(() => {
		if ($menuToggled) {
			previousActiveElement = document.activeElement as HTMLElement;
			requestAnimationFrame(() => firstFocusableElement?.focus());
		} else if (previousActiveElement) {
			requestAnimationFrame(() => {
				if (previousActiveElement) {
					previousActiveElement.focus();
				}
			});
		}
	});
</script>

<div
	role="dialog"
	aria-modal="true"
	aria-label="Main menu"
	class="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50"
	bind:this={menuElement}
	onkeydown={handleKeydown}
	tabindex="-1"
>
	<!-- Overlay -->
	<button
		id="overlay"
		class={`${
			$menuToggled ? 'h-screen opacity-60 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
		}  ${
			isExpanded ? 'mt-16 sm:mt-24' : 'mt-12'
		} fixed w-full bg-lime-900 inset-0 transition-opacity ease-in duration-300 overscroll-contain`}
		onclick={toggleMenu}
		aria-label="Close menu"
		tabindex={$menuToggled ? 0 : -1}
	></button>


	<!-- Navigation -->
	<nav
		id="sidebar"
		aria-label="Main menu"
		class={`${
			$menuToggled ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
		} ${
			isExpanded ? 'mt-16 sm:mt-24' : 'mt-12'
		} bg-lime-900 opacity-90 transform top-0 right-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300`}
	>
		<ul
			class={` flex flex-col mx-4 text-xl md:text-2xl text-lime-50 font-bold ease-in-out transition-all duration-300 list-none`}
			role="menu"
		>
			<li role="none">
				<a
					class="inline-block py-1 w-full opacity-80 hover:opacity-100 focus:opacity-100 transition ease-in duration-100"
					href="/"
					role="menuitem"
					tabindex={$menuToggled ? 0 : -1}
				>
					Home
				</a>
			</li>
			<li role="none">
				<a
					class="inline-block py-1 w-full opacity-80 hover:opacity-100 focus:opacity-100 transition ease-in duration-100"
					href="/articles"
					role="menuitem"
					tabindex={$menuToggled ? 0 : -1}
				>
					Articles
				</a>
			</li>
			<li role="none">
				<a
					class="inline-block py-1 w-full opacity-80 hover:opacity-100 focus:opacity-100 transition ease-in duration-100"
					href="/#contact"
					onclick={toggleMenu}
					role="menuitem"
					tabindex={$menuToggled ? 0 : -1}
				>
					Contact
				</a>
			</li>
		</ul>
	</nav>
</div>
