import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: { 
        'black-custom': '#1E1E1E',
        'green-custom': '#27AE6F',
        'green-custom-strong': '#20975F',
        'gray-custom': '#F3F4F6',
        'default': '#F3F4F6'
      },
      textColor: {
        'black-custom': '#1B2E3A'
      },
      screens: {
        'small-notbook': '992px'
      },
      borderColor: {
        'black-custom': '#1E1E1E',
      }
    },
  },
  plugins: [],
}
export default config
