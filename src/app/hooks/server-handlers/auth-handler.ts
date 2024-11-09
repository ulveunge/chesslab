import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$shared/lib/utils';

export default function authHandler(event: RegEvent) {
	event.locals.pb = new PocketBase(PUBLIC_POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.auth = {
			isAuth: true,
			user: serializeNonPOJOs(event.locals.pb.authStore.model as object)
		};
	} else {
		event.locals.auth = {
			isAuth: false,
			user: null
		};
	}
}
