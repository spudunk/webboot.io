import { writable } from 'svelte/store';

// menu opened boolean to disable scrolling
export const menuToggled = writable(false);
export const toggleMenu = () => {
	menuToggled.update((toggled) => !toggled);
};
