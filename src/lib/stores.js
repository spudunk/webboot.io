import { writable } from 'svelte/store';

export const menuToggled = writable(false);
export const toggleMenu = () => {
	menuToggled.update((toggled) => !toggled);
};
