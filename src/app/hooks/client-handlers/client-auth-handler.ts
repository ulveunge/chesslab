import { pb } from '$shared/lib/api/pocketbase';

export default function clientAuthHandler() {
	pb.authStore.loadFromCookie(document.cookie);
	pb.authStore.onChange(() => {
		document.cookie = pb.authStore.exportToCookie({
			httpOnly: false
		});
	}, true);
}
