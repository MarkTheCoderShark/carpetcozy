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
        primary: '#b7e3f5',      // Soft light blue (CTA bg, Footer bg)
        'text-primary': '#3e342e', // Warm dark brown (Body text, CTA text, FAQ text)
        accent: '#cceeff',        // Sparkle blue (light icy blue)
        background: '#ffffff',    // White background
        'background-alt': '#f9fafb', // Soft gray/blue for section alternation
        'faq-bg': '#e2f3fc',      // Light brand blue for FAQ section
        'cta-hover': '#a5dced',   // CTA hover background
      },
      borderRadius: {
        'xl': '0.75rem', // Consistent rounded corners
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', // Subtle shadow
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
    },
  },
  plugins: [],
};