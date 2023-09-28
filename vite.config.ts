import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
// import { purgeCss } from 'vite-plugin-tailwind-purgecss';


export default defineConfig({
	plugins: [
		sveltekit(), 
		SvelteKitPWA(),
]
});
