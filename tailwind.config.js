/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- important for enabling dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myriad: ['Myriad Pro', 'sans-serif'],
        advanium: ['MBF Advanium', 'sans-serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
      },
      colors: {
        teal: "rgba(27, 221, 177, 1)",
        tealGreen: "rgba(36, 127, 107, 1)",
        cyandark: "rgba(7, 61, 68, 1)",
        
      },
      boxShadow: {
        'card': '0 4px 4px rgba(0, 0, 0, 0.5), inset 0 4px 4px rgba(0, 0, 0, 0.25)',
      },
       backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg,rgba(7, 61, 68, 1), rgba(7, 61, 68, 1), rgba(7, 61, 68, 1))',
        'nav-gradient': 'linear-gradient(135deg, #0f0f0f, #1a1a1a, #232323)',
      },

    },
  },
  plugins: [],
};
