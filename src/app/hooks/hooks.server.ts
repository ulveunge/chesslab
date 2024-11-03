import type { Handle } from '@sveltejs/kit';
import themeHandler from './handlers/theme-handler';

export const handle: Handle = async ({ event, resolve }) => {
	const theme = themeHandler(event);

	const htmlClass = `class="${theme}"`;

	const response = await resolve(event, {
		transformPageChunk: (input) => input.html.replace('%html-class%', htmlClass)
	});

	return response;
};
