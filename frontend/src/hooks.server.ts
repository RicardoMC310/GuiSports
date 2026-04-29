import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get("token");

	if (token) {
		// ler do cookie
		event.locals.user = JSON.parse(token);
	} else {
		// criar usuário fake
		const user = {
			id: "yxg-xs87s-cs",
			name: "Ricardo M. Costa"
		};

		event.locals.user = user;

		event.cookies.set("token", JSON.stringify(user), {
			path: "/"
		});
	}

	return resolve(event);
};