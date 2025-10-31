/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['"myFont"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
