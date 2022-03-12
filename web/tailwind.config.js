module.exports = {
  mode:'jit',
  content: [
    './src/pages/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
