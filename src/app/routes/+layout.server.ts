export const load: LayoutServerLoad = ({ locals }) => {
	return { auth: locals.auth as Auth };
};
