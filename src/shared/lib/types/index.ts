export interface INavigationLinks {
	label: string;
	links: {
		id: number;
		text: string;
		iconId: string;
		href: string;
	}[];
}

export type TTheme = 'light' | 'system' | 'dark';
