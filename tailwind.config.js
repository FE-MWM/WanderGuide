/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "cool-gray": "#b1b1b1",
        "cool-gray-dart": "#a1a1a1",
        "cool-gray-light": "#cacaca"
      },
      boxShadow: {
        custom: "0px 6px 23px 0px rgba(0, 0, 0, 0.3)"
      }
    }
  },
  plugins: []
};
