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
          main: '#bc5050',
          sub: '#cd7c7c',
        },
        border: {
          primary: '',
        },
        button: {
          primary: '',
          secondary: '#cd7c7c',
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({
    prefix: 'ui'
  })],
}