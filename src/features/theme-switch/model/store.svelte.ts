import cookies from 'js-cookie';
import type { TTheme } from '$shared/lib';

const createThemeStore = () => {
	let currentTheme = $state((cookies.get('theme') as TTheme) ?? 'system');

	const changeTheme = (theme: TTheme) => {
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

	return {
		get currentTheme() {
			return currentTheme;
		},
		changeTheme
	};
};

const themeStore = createThemeStore();

export default themeStore;
