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
      secondary: '#22a39f',
      navbar: '#131313',
      error: '#FF0909',
      'customgray-1': '#4c4c4c',
      'customgray-2': '#b8b8b8',
      'customwhite-1': '#ffffff',
      'customred-1': '#981824',
      'customblue-1': '#2B09FF',
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
