import type { Cookies } from '@sveltejs/kit';

export default function getCookie<T>(cookies: Cookies, name: string) {
	return cookies.get(name) as T | undefined;
}
