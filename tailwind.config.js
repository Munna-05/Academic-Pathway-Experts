/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","!./src/excludedFolder/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
}
