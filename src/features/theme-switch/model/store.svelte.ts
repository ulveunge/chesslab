import cookies from 'js-cookie';
import type { TTheme } from '$shared/lib';

let currentTheme = $state((cookies.get('theme') as TTheme) ?? 'system');

export const changeTheme = (theme: 'light' | 'system' | 'dark') => {
	document.documentElement.classList.remove(currentTheme);
	if (theme !== 'system') document.documentElement.classList.add(theme);
	cookies.set('theme', theme, {
		path: '/',
		secure: true,
		sameSite: 'strict',
		expires: 3650
	});
	currentTheme = theme;
};

export default {
	get currentTheme() {
		return currentTheme;
	},
	changeTheme
};
