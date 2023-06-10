/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        320: "80vh",
      },
      minHeight: {
        160: "40rem",
        80: "20rem"
      },
      maxHeight: {
        160: "40rem",
      },
    },
  },
  plugins: [],
};
