import type { Config } from "tailwindcss"

const config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",

  theme: {
  	fontSize: {
  		xs: ['10px', '12px'],
  		sm: ['12px', '16px'],
  		base: ['14px', '18px'],
  		lg: ['16px', '20px'],
  		xl: ['18px', '22px'],
  		'2xl': ['20px', '24px'],
  		'3xl': ['24px', '28px'],
  		'4xl': ['32px', '36px'],
  		'5xl': ['36px',{lineHeight: '40px',letterSpacing: '-.5px'}],
  		'6xl': ['40px',{lineHeight: '44px',letterSpacing: '-.5px'}],
  		'7xl': ['44px',{lineHeight: '48px',letterSpacing: '-.5px'}],
  		'8xl': ['48px',{lineHeight: '52px',letterSpacing: '-.5px'}],
  		'9xl': ['56px',{lineHeight: '58px',letterSpacing: '-.5px'}],
  	},
  	letterSpacing: {
  		tightest: '-3px',
  		tighter: '-2px',
  		tight: '-1px',
  		normal: '0px',
  		wide: '1px',
  		wider: '2px',
  		widest: '3px'
  	},
  	extend: {
  		fontFamily: {
  			sans: ['Roobert', 'system-ui', 'sans-serif'],
  			display: ['Roobert', 'system-ui', 'sans-serif'],
  			other: ['Barlow', 'system-ui', 'sans-serif']
  		},
  		maxWidth: {
  			'2xl': '640px'
  		},
  		fontWeight: {
  			normal: '400',
  			medium: '500',
  			semibold: '600',
  			bold: '700'
  		},
  		colors: {
  			transparent: 'transparent',
  			primary: '#0094D6',
  			secondary: '#B4DFF6',
  			black: '#171717',
  			grey: '#666666',
  			white: '#ffffff',
  			background: '#F1F5F9',
  			lightgrey: '#f2f2f2',
  			success: '#4caf50',
  			error: '#f44336',
  			warning: '#ffc107',
  			info: '#2196f3',
  			ultrabright: '#3B82F6',
  			smartbright: '#e91e63',
  			switch: '#D97706',
  			pro: '#171717',
  			border: '#CCCCCC',
  			divider: 'rgb(0,0,0,.1)',
  			hint: '#888888',
  			disable: '#eeeeee',
  		},
  		screens: {
  			sm: '480px',
  			md: '768px',
  			lg: '960px',
  			xl: '1280px'
  		},
  	}
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config