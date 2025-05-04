import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	optimizeDeps: {
		include: ['svelte/internal/flags/legacy'],
		exclude: ['@sveltejs/kit']
	},
	ssr: {
		noExternal: ['@analytics/simple-analytics']
	}
});
