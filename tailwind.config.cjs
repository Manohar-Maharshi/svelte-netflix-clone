const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    fontFamily: {
    	'sans' : "Roboto,san-serif",
    }
  },

  plugins: [
  	require('tailwind-scrollbar'),
  	require('@tailwindcss/line-clamp'),
  ],
      variants: {
        scrollbar: ['rounded']
    }
};

module.exports = config;
