import * as db from '$lib/server/database.js';

export async function load() {
	return {
		post: await db.getPosts()
	};
}