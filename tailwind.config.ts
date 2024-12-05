import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography'
const delayValues = {
  '100': '100ms',
  '200': '200ms',
  '300': '300ms',
  // Agrega más valores según necesites
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#95b8ff"
      },
      animationDelay: {
        '0': '0s',
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '1000': '1s',
      },
    },
  },
  plugins: [
    typography,
    plugin(function ({ addUtilities }) {
      Object.values(delayValues).map(value => ({
        [`animation-delay-${value}`]: {
          animationDelay: value,
        },
      }))
    }),
  ],
} satisfies Config;
