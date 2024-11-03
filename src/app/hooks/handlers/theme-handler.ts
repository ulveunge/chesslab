import { getCookie, type TTheme } from '$shared/lib';

export default function themeHandler(event: RegEvent) {
	const cookie = getCookie<TTheme>(event.cookies, 'theme') ?? 'system';
	return cookie === 'system' ? '' : cookie;
}
