import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export async function getPosts() {
	const posts = await sql`SELECT * FROM warren_24`.values();
	return posts;
}


/**
 * @param {Object<string, string|number>} entry
 */
export async function sendData(entry) {
	const posts = await sql `INSERT INTO warren_24 ${sql(entry, Object.keys(entry))}`;
	return posts;

}

/**
 * @param {Object<string, string|number>} entry
 */
export async function sendPitData(entry) {
	const posts = await sql `INSERT INTO lehigh_pit_24 ${sql(entry, Object.keys(entry))}`;
	return posts;

}
