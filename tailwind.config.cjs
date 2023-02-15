/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
			  'black':'#292D3D',
			  'darkBlue':'#4B5E79',
			  'gra':'#8E8E93',
			  'lightGra2':{
				100:'#FAFAFA',
				200: '#D7DEED'
			  },
			  're':'#810606'
			  
			},
			keyframes:{
			  slideIn:{
				'0%':{transform : 'translateX(100)'},
				'100%':{transform : 'translateX(0)'}
			  },
			  slideInV2:{
				'0%':{transform : 'translateX(100)'},
				'100%':{transform : 'translateX(0)'}
			  },
			  navOneClose:{
				'0%':{transform : 'rotate(0) translateY(0px)'},
				'25%':{transform : 'rotate(0) translateY(0px)'},
				'50%':{transform : 'rotate(0) translateY(4px)'},
				'75%':{transform : 'rotate(0) translateY(4px)'},
				'100%':{transform : 'rotate(45deg) translateY(4px)'}
			  },
			  navTwoClose:{
				'0%':{transform : 'rotate(0) translateY(0px)'},
				'25%':{transform : 'rotate(0) translateY(0px)'},
				'50%':{transform : 'rotate(0) translateY(-4px)'},
				'75%':{transform : 'rotate(0) translateY(-4px)'},
				'100%':{transform : 'rotate(-45deg) translateY(-4px)'}
			  },
			  slideShowIn:{
				'0%':{transform: 'translateY(100px)', opacity: '0'},
				'100%':{transform: 'translateY(0px)', opacity: '1'},
			  },
			  fadeIn:{
				'0%':{opacity:'0'},
				'100%':{opacity:'1'}
			  }
			},
			animation:{
			  'sliding-in-1': 'slideIn 0.5s linear forwards',
			  'sliding-in-2': 'slideIn 0.2s 0.5s linear forwards',
			  'sliding-in-v2-1': 'slideInV2 0.5s linear forwards',
			  'sliding-in-v2-2': 'slideInV2 0.2s 0.5s linear forwards',
			  'nav-one-closing': 'navOneClose 1s linear forwards',
			  'nav-two-closing': 'navTwoClose 1s linear forwards',
			  'nav-item-one': 'slideShowIn 0.5s linear forwards',
			  'nav-item-two': 'slideShowIn 0.5s 0.5s linear forwards',
			  'nav-item-three': 'slideShowIn 1.1s 0.5s linear forwards',
			  'fadeIn': 'fadeIn 3s 1s ease-in forwards'
			}
		  },
	},
	plugins: [],
}
