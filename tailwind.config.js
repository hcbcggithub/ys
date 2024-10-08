module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* client theme colors custom */
        backgrounder: '#181818',
        backgrounderBold: '#0C0A0B',
        highlighter: '#F4281F',
        texter: '#F9F9F9',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
