import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      white: '#FDFDFD',
      textDisabled: '#999999',
      black: '#222222',
      darkGrey: '#666666',
      midGrey: '#888888',
      lightGrey: '#DDDDDD',
      bgGrey: '#EEEEEE',
      primary: '#1EA49A',
      secondary: '#FF95B9',
    },
    fontSize: {
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2.0rem',
      22: '2.2rem',
      24: '2.4rem',
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
    },
  },
  plugins: [],
};
export default config;
