import type { Config } from 'tailwindcss';
import tailwindcssRtl from 'tailwindcss-rtl';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b45309',
          foreground: '#fffaf5',
        },
        secondary: {
          DEFAULT: '#0d9488',
          foreground: '#f0fdfa',
        },
        surface: '#111827',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(12, 10, 9, 0.12)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
        },
      },
    },
  },
  plugins: [tailwindcssRtl],
};

export default config;
