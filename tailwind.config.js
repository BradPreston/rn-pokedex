/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('nativewind/preset')],
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			'pokemon-white': '#ffffff',
			'pokemon-black': '#333333',
			'pokemon-slate': 'rgb(51 65 85)',
			'pokemon-grey': 'rgb(156 163 175)',
			'pokemon-lightgrey': 'rgb(209 213 219)',
			'pokemon-red': '#cc0000',
			'pokemon-blue': '#3b4cca',
			'pokemon-yellow': '#ffde00',
			'pokemon-gold': '#b3a125'
		}
	},
	plugins: []
};
