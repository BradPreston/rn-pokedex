/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('nativewind/preset')],
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			'pokemon-grey': 'rgb(156 163 175)',
			'pokemon-red': '#cc0000',
			'pokemon-blue': '#3b4cca',
			'pokemon-yellow': '#ffde00',
			'pokemon-gold': '#b3a125'
		}
	},
	plugins: []
};
