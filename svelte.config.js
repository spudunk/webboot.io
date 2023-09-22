import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: "./src/mdlayout.svelte"
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	}
};

export default config;
