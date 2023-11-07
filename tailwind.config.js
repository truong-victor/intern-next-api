/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false
	},
	content: ['./@App/**/*.{js,ts,jsx,tsx}', './@App/**/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: []
}
