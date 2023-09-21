/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "label-blue": "#5CE1E6",
        "nav-yellow": "#F8A120",
        "button-green": "#C1FF72",
        "button-green-dark": "#7ED957",
        "card-grey": "#D9D9D9",
        "card-yellow": "#FFDE59",
        "cross-red": "#FF3131",
        "like-blue": "#5CE1E6",
        "card-grad-l": "#FFF7AD",
        "card-grad-r": "#FFA9F9"
      }
    },
  },
  plugins: [],
}