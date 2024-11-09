import type { Handle } from '@sveltejs/kit';
import themeHandler from './server-handlers/theme-handler';
import authHandler from './server-handlers/auth-handler';

export const handle: Handle = async ({ event, resolve }) => {
	const theme = themeHandler(event);
	const htmlClass = `class="${theme}"`;

	authHandler(event);

	const response = await resolve(event, {
		transformPageChunk: (input) => input.html.replace('%html-class%', htmlClass)
	});

	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
};
