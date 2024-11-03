import type { Cookies } from '@sveltejs/kit';

function getCookie<T>(cookies: Cookies, name: string) {
	return cookies.get(name) as T | undefined;
}

export default getCookie;
