/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    typography: (theme) => ({
      main: {
        css: {
          color: '#fcf8f5',
          h1: {
            color: '#FA7216',
          },
          h2: {
            color: '#FB8537',
          },
          h3: {
            color: '#FB924B',
          },
          strong: {
            color: '#37cdbe',
          },
          'li::marker': {
            color: '#37cdbe',
          },
          blockquote: {
            color: '#37cdbe',
            borderLeftColor: '#37cdbe',
          },
          a: {
            color: theme('#37cdbe'),
            '&:hover': {
              color: theme('colors.green.600')
            },
          },
        },
      },
    })
  },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#fa7216',
          secondary: '#37cdbe',
          accent: '#fcf8f5',
          neutral: '#060702',
          'base-100': '#1b1e26',

          '--rounded-box': '0rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '0rem', // border radius rounded-badge utility class, used in badges and similar
					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons
					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem', // border radius of tabs
					'--padding-card': '1.2rem' // padding of card
        },
      },
    ],
  },
}

