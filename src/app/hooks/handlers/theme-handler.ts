import { getCookie, type TTheme } from '$shared/lib';

export default function themeHandler(event: RegEvent) {
	return getCookie<TTheme>(event.cookies, 'theme') ?? 'system';
}
