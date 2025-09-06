import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B7F52',
          dark: '#095F3E',
          light: '#27A379'
        }
      }
    }
  },
  plugins: []
}
export default config
