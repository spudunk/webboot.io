/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem'
			}
		},
		extend: {}
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true
	}
};
