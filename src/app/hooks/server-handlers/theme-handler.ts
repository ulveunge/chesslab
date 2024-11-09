import { getCookie } from '$shared/lib/utils';
import type { TTheme } from '$shared/lib/types';

export default function themeHandler(event: RegEvent) {
	const cookie = getCookie<TTheme>(event.cookies, 'theme') ?? 'system';
	return cookie === 'system' ? '' : cookie;
}
