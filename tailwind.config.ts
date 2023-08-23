import type { Config } from 'tailwindcss'

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
        'color-gradient': 'url("https://bitnine.net/wp-content/uploads/2023/08/img-header-banner.png")',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        custom: '1px 1px 3px 2px rgba(229, 229, 229, 1)',
      },
      fontFamily: {
        monda: ['Monda', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
