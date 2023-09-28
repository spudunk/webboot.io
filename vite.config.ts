import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
// import { purgeCss } from 'vite-plugin-tailwind-purgecss';


export default defineConfig({
	plugins: [
		sveltekit(), 
		SvelteKitPWA({ 
			registerType: 'autoUpdate' ,
			includeAssets: [
				'favicon.ico', 
				'icons/apple-touch-icon.png', 
				'favicon-32x32.png',
				'favicon-16x16.png',
				// 'mask-icon.svg'
			],
			manifest: {
				"name": "webboot",
				"short_name": "webboot",
				"start_url": "/",
				"id": "/",
				"theme_color": "#0891B2",
				"background_color": "#164E63",
				"display": "standalone",
				"icons": [
					{
						"src": "/icons/192.png",
						"type": "image/png",
						"sizes": "192x192"
					},
					{
						"src": "/icons/384.png",
						"type": "image/png",
						"sizes": "384x384"
					},
					{
						"src": "/icons/512.png",
						"type": "image/png",
						"sizes": "512x512"
					},
					{
						"src": "/icons/1024.png",
						"type": "image/png",
						"sizes": "1024x1024"
					},
					{
						"src": "/icons/512-maskable.png",
						"type": "image/png",
						"sizes": "512x512",
						"purpose": "maskable"
					},
					{
						"src": "/icons/144-square.png",
						"type": "image/png",
						"sizes": "144x144",
						"purpose": "any"
					}
				],
			}
			

		}),
]
});
