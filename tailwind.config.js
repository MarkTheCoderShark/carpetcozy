/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b7e3f5', // Soft light blue from rug icon
        'text-primary': '#3e342e', // Warm dark brown/charcoal from text
        accent: '#cceeff', // Sparkle blue (light icy blue)
        background: '#ffffff', // White background
        'background-alt': '#f8f9fa', // Soft off-white
      },
      borderRadius: {
        'xl': '0.75rem', // Consistent rounded corners
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', // Subtle shadow
      }
      // Add font family configuration later if needed via CSS variables or directly here
    },
  },
  plugins: [],
};