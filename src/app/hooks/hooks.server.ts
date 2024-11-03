import type { Handle } from '@sveltejs/kit';
import { getCookie } from '$shared/lib';
import type { TTheme } from '$shared/lib';

export const handle: Handle = async ({ event, resolve }) => {
	const theme = getCookie<TTheme>(event.cookies, 'theme') ?? 'system';

	const htmlClass = `class="${theme}"`;

	const response = await resolve(event, {
		transformPageChunk: (input) => input.html.replace('%html-class%', htmlClass)
	});

	return response;
};
