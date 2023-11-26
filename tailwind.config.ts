import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#1a1a1a',
      navbar: '#131313',
      'customgray-1': '#4c4c4c',
      'customgray-2': '#b8b8b8',
    },
    extend: {
      spacing: {
        '200': '50rem',
      },
    },
  },
  plugins: [],
};
export default config;
