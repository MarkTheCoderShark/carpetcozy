import type { Config } from 'tailwindcss';

const config: Config = {
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
        'background-alt': '#f8fafc', // Lighter gray/blue for section alternation
        'faq-bg': '#e2f3fc',      // Light brand blue for FAQ section
        'cta-hover': '#a5dced',   // CTA hover background
        'footer-bg': '#2d3748',   // Dark slate for footer
        'footer-text': '#f7fafc', // Light gray for footer text
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'], // Body font
        heading: ['var(--font-poppins)', 'sans-serif'], // Heading font
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 0 15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 