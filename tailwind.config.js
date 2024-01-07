/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          white: '#d2cdd0',
        },
        icon: {
          label: '',
          active: '',
        },
        background: {
          main: '#4d1c3a',
          sub: '#7a556b',
        },
        border: {
          primary: '',
        },
        button: {
          primary: '',
          secondary: '',
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({
    prefix: 'ui'
  })],
}