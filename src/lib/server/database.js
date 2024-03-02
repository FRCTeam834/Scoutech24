import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export async function getPosts() {
	const posts = await sql`SELECT * FROM allentown_24`.values();
	return posts;
}


/**
 * @param {Object<string, string|number>} entry
 */
export async function sendData(entry) {
	const posts = await sql `INSERT INTO allentown_24 ${sql(entry, Object.keys(entry))}`;
	return posts;

}

