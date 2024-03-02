import * as db from '$lib/server/database.js';
// export const prerender = false;
// export const ssr = true;

export async function load() {
	return {
		post: await db.getPosts()
	};
}