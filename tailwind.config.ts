import type { Config } from "tailwindcss";

export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			chatBackground: "url('https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30361-6/411325207_374077381833436_2678629266017094026_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=debe23&_nc_eui2=AeGq4iL9CfwuGdjRbbu8KaR8714qhf6M8hHvXiqF_ozyEYOHJ7fv5SuOBC8BbfhjZ7T11FTOc7Z5NpKyFhapmfRl&_nc_ohc=rZKH9AjW3-YQ7kNvgFaRKQf&_nc_oc=Adj9-ZHwF7jeW5vrxthis54ziEsLH5HCwLvEZNrbC4Jf1jhEvNXj3Vn0f4Zhf-knd86omva_s9ieHynBJJ1_pISh&_nc_zt=33&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=AsIeDHFp-GQ4k2iGd6j3RoZ&oh=00_AYAu8Ux2smigitBcQqZddX734SKamvGWhAsC4LZmC1XGIg&oe=678B183D&quot')"
		},
  		colors: {
			roomSelected: "rgb(58,59,60)",
			searchText: "#e4e6ea",
			icon: "#8c8e90",
			placeHolder: "#a1a3a7",
			message: "#828282",
			youMess: "rgb(53,40,48)",
			myMess: "rgb(119,92,212)",
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
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  		},
  		fontFamily: {
  			comfortaa: [
  				'Comfortaa',
  				'sans-serif'
  			],
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
} satisfies Config;
