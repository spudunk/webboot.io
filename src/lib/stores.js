import { writable } from "svelte/store";

export const menuToggled = writable(false);
/**
 * 
 * @param {any} state 
 */
export const toggleMenu = (state=undefined) => {
  if(typeof(state) == "boolean") {
    menuToggled.update(()=> state)
  } else {
    menuToggled.update(toggled => !toggled)
  }
}