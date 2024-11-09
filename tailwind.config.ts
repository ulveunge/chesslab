import aspectRatio from '@tailwindcss/aspect-ratio';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				surface: 'var(--bg-surface)',
				base: 'var(--bg-base)',
				outline: 'var(--outline)',
				accent: 'var(--accent)',
				'accent-dark': 'var(--accent-dark)',
				depth: 'var(--depth)',
				overlay: 'var(--overlay)',
				gray: 'var(--neutral-gray)'
			},
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans-serif'],
				'roboto-condensed': ['Roboto Condensed', 'sans-serif']
			}
		}
	},

	plugins: [aspectRatio]
} satisfies Config;
