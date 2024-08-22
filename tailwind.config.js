/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Extend theme with custom scroll-snap settings
      scrollSnapType: {
        none: 'none',
        x: 'x mandatory',
        y: 'y mandatory',
        both: 'both mandatory',
      },
      scrollSnapAlign: {
        start: 'start',
        center: 'center',
        end: 'end',
        'align-none': 'none',
      },
      scrollSnapStop: {
        normal: 'normal',
        always: 'always',
      },
      colors: {
        // Example of extending the color palette
        primary: '#0075FF', // Add a primary color for easier use
      },
    },
  },
  plugins: [
    // Add any plugins if needed, for example typography or forms plugins
  ],
};
