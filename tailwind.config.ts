import type { Config } from 'tailwindcss';

const createPxEntries = (size: number) => ({
  0: '0',
  ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => ({
    ...accumulator,
    [`${i * 4}`]: `${(i * 4) / 10}rem`,
  })),
});

const PX_ENTRIES = createPxEntries(100);

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
      keyframes: {
        'bottom-sheet-up': {
          '0%': { transform: 'translateY(420px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'bottom-sheet-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(420px)' },
        },
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
      primaryDark: '#1B8981',
      primaryLight: '#DEEBEA',
      primaryMedium: '#B4DCD9',
      secondary: '#FF95B9',
      modalBackground: 'rgba(34, 34, 34, 0.20)',
      notiBackground: 'rgba(30, 164, 154, 0.20)',
    },
    spacing: PX_ENTRIES,
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
    boxShadow: {
      custom: '0px 6px 6px 0px rgba(34, 34, 34, 0.10)',
      dropShadow: '0 2px 2px 0 rgba(34, 34, 34, 0.10)',
      borderShadow: '0 4px 24px 0 rgba(34, 34, 34, 0.08)',
    },
  },
  plugins: [],
};
export default config;
