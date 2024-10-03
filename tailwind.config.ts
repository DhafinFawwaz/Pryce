import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		screens: {
			xs: '620px',
		},
		height: {
			screenContent: 'calc(100vh - 4rem)',
		},
		minHeight: {
			screenTransaction: 'calc(100vh - 4rem)',
		},
		minWidth: {
			table: 'calc(100vw - 10rem)',
		},
		transitionTimingFunction: {
			'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
			'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			'out-back-expo': 'cubic-bezier(0.175, 1.885, 0.32, 1.275)',
			'out-back': 'cubic-bezier(0.175, 2.885, 0.32, 1.275)',
			'out-back-little': 'cubic-bezier(0.175, 2.885, 0.32, 1.275)',
		},
  		borderRadius: {
  			low: '8px',
  			medium: '16px',
  			high: '32px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			Rubik: ['Rubik', 'sans-serif'],
  			Inter: ['Inter', 'sans-serif'],
			RubikBold: ['Rubik-Bold', 'sans-serif'],
			RubikSemiBold: ['Rubik-SemiBold', 'sans-serif'],
			RubikRegular: ['Rubik-Regular', 'sans-serif']
  		},
  		fontSize: {
  			h1: ['30px', '120%'],
  			h2: ['20px', '120%'],
  			h3: ['20px', '120%'],
  			sh1: ['20px', '120%'],
  			sh2: ['20px', '120%'],
  			b1: ['20px', '120%'],
  			b2: ['13px', '120%'],
  			st: ['12px','120%']
  		},
  		colors: {
  			black: '#000000',
  			muted: {
  				'200': '#B3AFCA',
  				'400': '#828181',
  				'700': '#5A5959',
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			bone: '#e8edfd',
  			purple: {
  				'200': '#EAEAFB',
  				'600': '#988bee'
  			},
  			orange: {
  				'100': 'F8F1E4',
  				'400': '#FFB50A',
  				'800': '#FF5F00'
  			},
  			white: {
  				'100': '#FFFFFF',
  				'200': '#FEFEFE',
  				'300': '#EDEDEE'
  			},
  			green: {
  				'200': '#6EA47E',
  				'400': '#9AE66E',
  				'600': '#8DCE97'
  			},
  			pink: 'F10086',
  			sky: {
  				'400': '#3A86FF',
  				'600': '#34B3F1'
  			},
  			gray: {
  				'300': '#68717D',
  				'400': '#6B6B77',
  				'800': '#959292',
  				'900': '#4A5260'
  			},
  			navy: '#07071B',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
//   plugins: [require("tailwindcss-animate")],
};
export default config;
